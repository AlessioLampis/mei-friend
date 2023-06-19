import {
  log,
  storage
} from './main.js';

export const solid = solidClientAuthentication.default;

// namespace definitions
export const FOAF = "http://xmlns.com/foaf/0.1/";
export const LDP = "http://www.w3.org/ns/ldp#";
export const OA = "http://www.w3.org/ns/oa#";
export const PIM = "http://www.w3.org/ns/pim/space#";
export const RDF = "http://www.w3.org/1999/02/22-rdf-syntax-ns#";
export const MAO = "https://domestic-beethoven.eu/ontology/1.0/music-annotation-ontology.ttl#";


// mei-friend resource containers (internal path within Solid storage)
export const friendContainer = "at.ac.mdw.mei-friend/";
export const annotationContainer = friendContainer + "oa/";
export const musicalObjectContainer = friendContainer + "mao/";
export const selectionContainer = musicalObjectContainer + "selection/";
export const extractContainer = musicalObjectContainer + "extract/";
export const musicalMaterialContainer = musicalObjectContainer + "musicalMaterial/";

// resource templates
export const resources = {
  ldpContainer:  { 
    "@type": [LDP+"Container", LDP+"BasicContainer"]
  },
  maoExtract:{ 
    "@type": [MAO + "Extract"]
  },
  maoSelection:{ 
    "@type": [MAO + "Selection"]
  },
  maoMusicalMaterial: { 
    "@type": [MAO + "MusicalMaterial"]
  }

}

export async function postResource(containerUri, resource) { 
  establishContainerResource(containerUri).then((containerUriResource) => {
    solid.fetch({
      method: 'POST',
      headers: { 
        Accept: 'application/ld+json'
      },
      body: JSON.stringify(resource)
    }).then(async postResp => {
      console.log("GOT POST RESPONSE:", postResp);
      return postResp;
    }).catch(e => { 
      console.error("Couldn't post resource to container: ", containerUriResource, resource)
    })
  }).catch(e => {
    console.error("Couldn't establish container: ", containerUri)
  })
}

export async function establishResource(uri, resource) { 
  resource["@id"] = uri;
  // check whether a resource exists at uri
  // if not, create one initialised to the supplied resource
  const solidButton = document.getElementById('solidButton');
  solidButton.classList.add('clockwise');
  let resp = await solid.fetch(uri, { 
    method: 'HEAD',
    headers: { 
      Accept: 'application/ld+json'
    }
   }).then(async headResp=> { 
    console.log("GOT HEAD RESPONSE:", headResp)
    if(headResp.ok) { 
      return headResp;
    } else if(headResp.status === 404) {
      // resource doesn't yet exist - let's try to create it
      let putResp = await solid.fetch(uri, { 
        method: 'PUT',   
        headers: {
        'Content-Type': 'application/ld+json',
        },
        body: JSON.stringify(resource)
      }).catch(e => { 
        log("Sorry, network error while trying to initialize resource at ", uri, e);
      });
      return putResp;
    } else if(headResp.status === 403) { 
      // user needs to authorize mei-friend application to access their Pod
      log("Unauthorized - please provide mei-friend application access to your Solid Pod: " + headResp.status + " " + headResp.statusText);
      return headResp;
    } else { 
      // another problem...
      log("Sorry, unable to establish resource in your Solid Pod: " + headResp.status + " " + headResp.statusText)
    }
  }).finally(() => solidButton.classList.remove("clockwise"));
  return resp;
}

export async function establishContainerResource(container){ 
  return getProfile().then(async (profile) => {
    if (PIM + 'storage' in profile) {
      let storage = Array.isArray(profile[PIM + 'storage'])
        ? profile[PIM + 'storage'][0] // TODO what if more than one storage?
        : profile[PIM + 'storage'];
      if (typeof storage === 'object') {
        if ('@id' in storage) {
          storage = storage['@id'];
        } else {
          console.warn('Unexpected pim:storage object in your Solid Pod profile: ', profile);
        }
      }
      // establish container resource
      let resource = structuredClone(resources.ldpContainer);
      return establishResource(storage + container, resource).then((resp) => {
        if(resp) {
          if(resp.ok) {
            console.log("Response OK:", resp, storage, container);
            return storage + container;
          } else { 
            console.warn("Response not OK:", resp, storage, container);
            return null;
          }  
        }
      })
      .catch(() => console.error("Couldn't establish resource:", storage + container, resource));
    } else {
      log("Sorry, couldn't establish storage location from your Solid Pod's profile ", profile);
    }
  });
}



export async function createMAOMusicalObject(selectedElements) {
  // Function to build a Musical Object according to the Music Annotation Ontology:
  // https://dl.acm.org/doi/10.1145/3543882.3543891
  // For the purposes of mei-friend, we want to build a composite structure encompassing MusicalMaterial, 
  // Extract, and Selection (see paper)
  return establishContainerResource(friendContainer).then(() => { 
    return establishContainerResource(musicalObjectContainer).then(() => { 
      return createMAOSelection(selectedElement).then(selectionResource => { 
        return createMAOExtract(selectionResource).then(extractResource => { 
          return createMAOMusicalMaterial(extractResource);
        })
      })
    })
  })
  .catch(e => { console.error("Failed to create MAO Musical Object:", e) })
}

async function createMAOSelection(selection) {
  // private function -- called *after* friendContainer and musicalObjectContainer already established
  return postResource()
  // TODO build selection obj
  return postResource(selectionContainer, selectionObj);
}

async function createMAOExtract(selection) {
}

async function createMAOMusicalMaterial(selection) {
}

export async function populateSolidTab() { 
  const solidTab = document.getElementById("solidTab");
  if(solid.getDefaultSession().info.isLoggedIn) {
    solidTab.innerHTML = await populateLoggedInSolidTab();
    document.getElementById('solidLogout').addEventListener('click', solidLogout)
  } else {
    solidTab.innerHTML = await populateLoggedOutSolidTab();
    document.getElementById('solidLogin').addEventListener('click', loginAndFetch)
  }
}

export async function getProfile() { 
  const webId = solid.getDefaultSession().info.webId;
  const solidButton = document.getElementById('solidButton');
  solidButton.classList.add('clockwise');
  const profile = await solid.fetch(webId, { 
    headers: { 
      Accept: "application/ld+json"
    }
  })
  .then(resp => resp.json())
  .then(json => jsonld.expand(json))
  .then((profile) => {
    let me = Array.from(profile).filter(e => "@id" in e && e["@id"] === webId);
    if(me.length) {
      if(me.length > 1) { 
        console.warn("User profile contains multiple entries for webId: ", me);
      } 
      return me[0];
    } else { 
      // TODO proper error handling
      console.warn("User profile contains no entry matching their webId: ", profile, webId);
    }
  }).finally(() => solidButton.classList.remove("clockwise"));
  return profile;
}

async function populateLoggedInSolidTab() { 
  const webId = solid.getDefaultSession().info.webId;
  const solidButton = document.getElementById('solidButton');
  solidButton.classList.add('clockwise');
  const profile = await solid.fetch(webId, { 
    headers: { 
      Accept: "application/ld+json"
    }
  }).then(resp => resp.json())
    .then(json => jsonld.expand(json))
    .finally(() => solidButton.classList.remove("clockwise"));
  let name = webId;
  // try to find entry for 'me' (i.e. the user's webId) in profile:
  let me = Array.from(profile).filter(e => "@id" in e && e["@id"] === webId);
  if(me.length) { 
    if(me.length > 1) { 
      console.warn("User's solid profile has multiple entries for their webId!");
    }
    if(`${FOAF}name` in me[0]) {
      let foafName = me[0][`${FOAF}name`][0]; // TODO decide what to do in case of multiple foaf:names
      if(typeof foafName === "string") { 
        name = foafName;
      } else if(typeof foafName === "object" && "@value" in foafName) { 
        name = foafName["@value"];
      }
    }     
  }
  
  return `
  <div>Welcome, <span id='welcomeName' title='${webId}'>${name}</span>!</div>
  <div><a id="solidLogout">Log out</a></div>`;
}

function populateLoggedOutSolidTab() {
  return 'Please <a id="solidLogin">Click here to log in!</a>';
}

export async function loginAndFetch() {
  // 1. Call `handleIncomingRedirect()` to complete the authentication process.
  //    If called after the user has logged in with the Solid Identity Provider, 
  //      the user's credentials are stored in-memory, and
  //      the login process is complete. 
  //   Otherwise, no-op.  
  await solid.handleIncomingRedirect({ restorePreviousSession: true });

  // 2. Start the Login Process if not already logged in.
  if (!solid.getDefaultSession().info.isLoggedIn) {
    storage.restoreSolidSession = true;
    await solid.login({
      // Specify the URL of the user's Solid Identity Provider;
      // e.g., "https://login.inrupt.com".
      oidcIssuer: "https://solidcommunity.net",
      // Specify the URL the Solid Identity Provider should redirect the user once logged in,
      // e.g., the current page for a single-page app.
      redirectUrl: window.location.href,
      // Provide a name for the application when sending to the Solid Identity Provider
      clientName: "mei-friend"
    });
    
  } else { 
    populateSolidTab();
    /*
    solid.fetch("https://musicog.solidcommunity.net/private/")
        .then(resp => resp.text())
        .then(data => console.log("GOT DATA: ", data))
        */
  }
}
export function solidLogout() { 
  solid.logout().then(() => {
    storage.removeItem("restoreSolidSession")
    populateSolidTab();
  });
}
