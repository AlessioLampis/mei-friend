/**
 * Language file for Catalan / Katalanisch
 */
import * as att from '../lib/attribute-classes.js';
import { heart } from '../css/icons.js';

export const lang = {
  // Main menu bar
  githubLoginLink: { text: 'Iniciar sessió' },

  // FILE MENU ITEM / ELEMENT DEL MENU DE FITXER
  fileMenuTitle: { text: 'Fitxer' },
  openMeiText: { text: 'Obre fitxer' },
  openUrlText: { text: 'Obre URL' },
  openExample: {
    text: 'Repartori públic',
    description: 'Obre una llista de repertori de domini públic',
  },
  importMusicXml: { text: 'Importa MusicXML' },
  importHumdrum: { text: 'Importa Humdrum' },
  importPae: { text: 'Importa PAE, ABC' },
  saveMeiText: { text: 'Desa MEI' },
  saveSvg: { text: 'Desa SVG' },
  saveMidi: { text: 'Desa MIDI' },
  printPreviewText: { text: 'Visualitza PDF' },
  generateUrlText: { text: 'Genera URL de mei-friend' },

  // EDIT/CODE MENU ITEM / ELEMENT DEL MENU D'EDICIÓ/CODI
  editMenuTitle: { text: 'Codi' },
  undoMenuText: { text: 'Desfés' },
  redoMenuText: { text: 'Refés' },
  startSearchText: { text: 'Cerca' },
  findNextText: { text: 'Cerca següent' },
  findPreviousText: { text: 'Cerca anterior' },
  replaceMenuText: { text: 'Reemplaça' },
  replaceAllMenuText: { text: 'Reemplaça-ho tot' },
  indentSelectionText: { text: 'Indentar selecció' },
  jumpToLineText: { text: 'Salta a línia' },
  manualValidateText: { text: 'Valida' },

  // VIEW MENU ITEM / ELEMENT DEL MENU DE VISUALITZACIÓ
  viewMenuTitle: { text: 'Visualització' },
  notationTop: { text: 'Notació a dalt' },
  notationBottom: { text: 'Notació a baix' },
  notationLeft: { text: "Notació a l'esquerra" },
  notationRight: { text: 'Notació a la dreta' },
  showSettingsMenuText: { text: 'Panell de configuració' },
  showAnnotationMenuText: { text: "Panell d'anotacions" },
  showFacsimileMenuText: { text: 'Panell de facsímil' },
  showPlaybackControlsText: { text: 'Controls de reproducció' },
  facsimileTop: { text: 'Facsímil a dalt' },
  facsimileBottom: { text: 'Facsímil a baix' },
  facsimileLeft: { text: "Facsímil a l'esquerra" },
  facsimileRight: { text: 'Facsímil a la dreta' },

  // MANIPULATE MENU ITEM / MANIPULACIÓ DELS ELEMENTS DEL MENÚ
  manipulateMenuTitle: { text: 'Manipula' },
  invertPlacementText: { text: 'Inverteix posició' },
  betweenPlacementText: { text: 'Posició entre' },
  addVerticalGroupText: { text: 'Afegeix grup vertical' },
  deleteText: { text: 'Esborra element' },
  pitchUpText: { text: 'Augmenta 1 to' },
  pitchDownText: { text: 'Disminueix 1 to' },
  pitchOctaveUpText: { text: 'Augmenta 1 octava' },
  pitchOctaveDownText: { text: 'Disminueix 1 octava' },
  staffUpText: { text: 'Element 1 pauta amunt' },
  staffDownText: { text: 'Element 1 pauta avall' },
  increaseDurText: { text: 'Augmenta duració' },
  decreaseDurText: { text: 'Disminueix duració' },
  cleanAccidText: { text: 'Neteja @accid.ges' },
  renumberMeasuresTestText: { text: 'Reenumera mesures (prova)' },
  renumberMeasuresExecText: { text: 'Reenumera mesures (execució)' },
  addIdsText: { text: 'Afegeix IDs a MEI' },
  removeIdsText: { text: 'Elimina IDs de MEI' },
  reRenderMeiVerovio: { text: 'Torna a renderitzar via Verovio' },
  addFacsimile: { text: 'Afegeix element facsímil' },
  ingestFacsimileText: { text: 'Incorpora facsímil' },

  // INSERT MENU ITEM / INSERCIÓ DELS ELEMENTS DEL MENÚ
  insertMenuTitle: { text: 'Insereix' },
  addTempoText: { text: 'Tempo' },
  addDirectiveText: { text: 'Directiva' },
  addDynamicsText: { text: 'Dinàmica' },
  addSlurText: { text: 'Lligadura' },
  addTieText: { text: 'Lligall' },
  addCrescendoHairpinText: { text: 'Crescendo' },
  addDiminuendoHairpinText: { text: 'Diminuendo' },
  addBeamText: { text: 'Lligat' },
  addBeamSpanText: { text: 'Amplada del lligat' },
  addSuppliedText: { text: 'Afegit' },
  addSuppliedArticText: { text: 'Afegit (articulació)' },
  addSuppliedAccidText: { text: 'Afegit (accidentals)' },
  addArpeggioText: { text: 'Arpegi' },
  addFermataText: { text: 'Fermata' },
  addGlissandoText: { text: 'Glissando' },
  addPedalDownText: { text: 'Pedal (abaix)' },
  addPedalUpText: { text: 'Pedal (amunt)' },
  addTrillText: { text: 'Trinat' },
  addTurnText: { text: 'Tornada' },
  addTurnLowerText: { text: 'Baixa la volta' },
  addMordentText: { text: 'Mordent' },
  addMordentUpperText: { text: 'Mordent superior' },
  addOctave8AboveText: { text: 'Octava (8va per sobre)' },
  addOctave15AboveText: { text: 'Octava (15va per sobre)' },
  addOctave8BelowText: { text: 'Octava (8va per sota)' },
  addOctave15BelowText: { text: 'Octava (15va per sota)' },
  addGClefChangeBeforeText: { text: 'Clau de sol abans' },
  addGClefChangeAfterText: { text: 'Clau de sol després' },
  addFClefChangeBeforeText: { text: 'Clau de fa abans' },
  addFClefChangeAfterText: { text: 'Clau de fa després' },
  addCClefChangeBeforeText: { text: 'Clau de do abans' },
  addCClefChangeAfterText: { text: 'Clau de do després' },
  toggleStaccText: { text: 'Staccato' },
  toggleAccentText: { text: 'Accent' },
  toggleTenutoText: { text: 'Tenuto' },
  toggleMarcatoText: { text: 'Marcato' },
  toggleStaccissText: { text: 'Staccatissimo' },
  toggleSpiccText: { text: 'Spiccato' },

  // HELP MENU ITEM / ELEMENTS DEL MENÚ D'AJUDA
  helpMenuTitle: { text: 'Ajuda' },
  goToHelpPage: { text: "Pàgines d'ajuda de mei-friend" },
  showChangelog: { text: 'Mostra el registre de canvis de mei-friend' },
  goToGuidelines: { text: 'Mostra les directrius MEI' },
  consultGuidelinesForElementText: { text: "Consulta les directrius per a l'element actual" },
  provideFeedback: { text: 'Proporciona feedback' },
  resetDefault: { text: 'Restableix per defecte' },

  // panel icons / icones del panell
  showMidiPlaybackControlBarButton: { description: 'Activa/desactiva la barra de control de reproducció MIDI' },
  showFacsimileButton: { description: 'Activa/desactiva el panell del facsímil' },
  showAnnotationsButton: { description: "Activa/desactiva el panell d'anotacions" },
  showSettingsButton: { description: 'Mostra el panell de configuració' },

  // Footer texts // Textos del peu de pàgina
  leftFooter: {
    html:
      'Allotjat per <a href="https://iwk.mdw.ac.at">IWK</a> ' +
      'a <a href="https://mdw.ac.at">mdw</a>, amb ' +
      heart +
      ' des de Viena. ' +
      '<a href="https://iwk.mdw.ac.at/impressum">Avís legal</a>.',
  },
  loadingVerovio: { text: "S'està carregant Verovio" },
  verovioLoaded: { text: 'carregat' },
  convertedToPdf: { text: 'convertit a PDF' },
  statusBarCompute: { text: 'Calcular' },
  middleFooterPage: { text: 'pàgina' },
  middleFooterOf: { text: 'de' },
  middleFooterLoaded: { text: 'carregat' },

  // control menu / menú de control
  verovioIcon: {
    description: `activitat del worker mei-friend: 
    la rotació en sentit horari indica activitat de Verovio, 
    la velocitat de la rotació en sentit antihorari indica activitat del worker`,
  },
  decreaseScaleButton: { description: 'Disminueix la notació' },
  verovioZoom: { description: 'Escala la grandària de la notació' },
  increaseScaleButton: { description: 'Aumenta la notació' },
  pagination1: { html: 'Pàgina ' },
  pagination3: { html: ' de' },
  sectionSelect: { description: "Navega per l'estructura d'encodings de secció/ending" },
  firstPageButton: { description: 'Ves a la primera pàgina' },
  previousPageButton: { description: 'Ves a la pàgina anterior' },
  paginationLabel: {
    description: 'Navegació per pàgines: fes clic per introduir manualment el número de pàgina que es mostrarà',
  },
  nextPageButton: { description: 'Ves a la següent pàgina' },
  lastPageButton: { description: "Ves a l'última pàgina" },
  flipCheckbox: { description: "Gira automàticament la pàgina fins a la posició del cursor d'encoding" },
  flipButton: { description: "Gira manualment la pàgina fins a la posició del cursor d'encoding" },
  breaksSelect: { description: 'Defineix el comportament de les ruptures de sistema/pàgina de la notació' },
  breaksSelectNone: { text: 'Cap' },
  breaksSelectAuto: { text: 'Automàtic' },
  breaksSelectMeasure: { text: 'Mesura' },
  breaksSelectLine: { text: 'Sistema' },
  breaksSelectEncoded: { text: 'Sistema i pàgina' },
  breaksSelectSmart: { text: 'Intel·ligent' },
  updateControlsLabel: {
    text: 'Actualitzar',
    description: "Comportament d'actualització dels controls de la notació després de canvis en l'encoding",
  },
  liveUpdateCheckbox: { description: 'Actualitza automàticament la notació després de canvis en la codificació' },
  codeManualUpdateButton: { description: 'Actualitza la notació manualment' },
  engravingFontSelect: { description: 'Selecciona la font de gravat' },
  backwardsButton: { description: "Navega a l'esquerra en la notació" },
  forwardsButton: { description: 'Navega a la dreta en la notació' },
  upwardsButton: { description: 'Navega cap amunt en la notació' },
  downwardsButton: { description: 'Navega cap avall en la notació' },
  speedLabel: {
    text: 'Mode de velocitat',
    description:
      'En el mode de velocitat, només esenvia la pàgina actual a Verovio per reduir el temps de renderització amb fitxers grans',
  },

  // PDF/print preview panel / panell de vista prèvia PDF/impressió
  pdfSaveButton: { text: 'Desa PDF', description: 'Desa com a PDF' },
  pdfCloseButton: { description: "Tanca la vista d'impressió" },
  pagesLegendLabel: { text: 'Rang de pàgines', singlePage: 'pàgina', multiplePages: 'pàgines' },
  selectAllPagesLabel: { text: 'Totes' },
  selectCurrentPageLabel: { text: 'Pàgina actual' },
  selectFromLabel: { text: 'de:' },
  selectToLabel: { text: 'a:' },
  selectPageRangeLabel: { text: 'Rang de pàgines:' },
  pdfPreviewSpeedModeWarning: {
    text:
      'Només es renderitza la pàgina actual a PDF, perquè està activat el mode de velocitat. ' +
      'Desmarqueu el mode de velocitat per seleccionar de totes les pàgines.',
  },
  pdfPreviewNormalModeTitle: { text: 'Seleccioneu el rang de pàgines que es vol desar en PDF.' },

  // facsimile panel / panell de facsímil
  facsimileIcon: { description: 'Panell de facsímil' },
  facsimileDecreaseZoomButton: { description: 'Disminueix la imatge de notació' },
  facsimileZoom: { description: 'Ajusta la mida de la imatge de notació' },
  facsimileIncreaseZoomButton: { description: 'Augmenta la imatge de notació' },
  facsimileFullPageLabel: {
    text: 'Pàgina completa',
    description: 'Mostra la pàgina completa de la imatge de facsímil',
  },
  facsimileFullPageCheckbox: { description: 'Mostra la pàgina completa de la imatge de facsímil' },
  facsimileShowZonesLabel: { text: 'Mostra les caixes de zona', description: 'Mostra les caixes de zona del facsímil' },
  facsimileShowZonesCheckbox: { description: 'Mostra les caixes de zona del facsímil' },
  facsimileEditZonesCheckbox: { description: 'Edita les zones del facsímil' },
  facsimileEditZonesLabel: { text: 'Edita les zones', description: 'Edita les zones del facsímil' },
  facsimileCloseButton: { description: 'Tanca el panell del facsímil' },
  facsimileDefaultWarning: { text: 'No hi ha contingut del facsímil per mostrar.' },
  facsimileNoSurfaceWarning: {
    text: "No s'ha trobat cap element de superfície per aquesta pàgina. (Pot faltar un element pb inicial.)",
  },
  facsimileNoZonesFullPageWarning: { text: 'Facsímil sense zones només visible en mode de pàgina completa.' },
  facsimileImgeNotLoadedWarning: { text: "No s'ha pogut carregar la imatge" },

  // drag'n'drop / arrossega i deixa anar
  dragOverlayText: { text: "Arrossega el teu fitxer d'entrada aquí." },

  // public repertoire / repertori públic
  openUrlHeading: { text: 'Obre la codificació allotjada a la web per URL' },
  openUrlInstructions: {
    text: "Si us plau, tria del repertori públic o introdueix l'URL d'una codificació de música allotjada a la web, a continuació. Nota: El servidor hosteig ha de suportar el compartiment de recursos en origen creuat (CORS).",
  },
  publicRepertoireSummary: { text: 'Repertori públic' },
  sampleEncodingsComposerLabel: { text: 'Compositor:' },
  sampleEncodingsEncodingLabel: { text: 'Codificació:' },
  sampleEncodingsOptionLabel: { text: 'Tria una codificació...' },
  openUrlButton: { text: 'Obre la URL' },
  openUrlCancel: { text: 'Cancel·la' },
  proposePublicRepertoire: {
    html:
      'Acollim propostes per a <a href="https://github.com/mei-friend/mei-friend/issues/new?template=public_repertoire.md" target="_blank" >' +
      'afegir al repertori públic' +
      '</a>.',
  },
  openUrlChooseEncodingText: { text: 'Tria una codificació...' },
  openUrlChooseComposerText: { text: 'Tria un compositor...' },
  openUrlOpenEncodingByUrlText: { text: 'Obre la codificació allotjada a la web per URL' },

  // fork modals // forquilles modals
  forkRepoGithubText: { text: 'Fer una forquilla del repositori de Github' },
  forkRepoGithubExplanation: {
    text: "L'enllaç que has seguit crearà una forquilla de Github del següent repositori per a la seva edició en mei-friend:",
  },
  forkRepoGithubConfirm: { text: 'Està bé això?' },
  forkRepositoryInstructions: {
    text:
      "Si us plau, trieu del repertori públic o introduïu el nom de l'usuari o organització de Github " +
      'i el nom del repositori allotjat a Github, a continuació. ' +
      'La vostra forquilla del repositori estarà disponible des del menú Github.',
  },
  forkRepositoryGithubText: { text: 'Fer una forquilla del repositori de Github' },
  forkRepertoireSummary: { text: 'Repertori públic' },
  forkRepertoireComposerLabel: { text: 'Compositor:' },
  forkRepertoireOrganizationLabel: { text: 'Organització:' },
  forkRepertoireOrganizationOption: { text: 'Tria una Organització de GitHub...' },
  forkRepertoireRepositoryLabel: { text: 'Repositori:' },
  forkRepertoireRepositoryOption: { text: 'Tria una codificació...' },
  forkRepositoryInputName: { placeholder: 'Usuari o organització de Github' },
  forkRepositoryInputRepoOption: { text: 'Tria un repositori' },
  forkRepositoryToSelectorText: { text: 'Fer una forquilla a: ' },
  forkRepositoryButton: { text: 'Fer una forquilla del repositori' },
  forkRepositoryCancel: { text: 'Cancel·la' },
  forkProposePublicRepertoire: {
    html:
      'Donem la benvinguda a les propostes per a ' +
      '<a target="_blank" href="https://github.com/mei-friend/mei-friend/issues/new?template=public_repertoire.md">' +
      'afegir al repertori públic' +
      '</a>.',
  },

  // annotation panel  / panell d'annotacions
  annotationCloseButtonText: { text: "Tanca el panell d'annotacions" },
  hideAnnotationPanelButton: { description: "Tanca el panell d'annotacions" },
  closeAnnotationPanelButton: { description: "Tanca el panell d'annotacions" },
  annotationToolsButton: { text: 'Eines', description: "Eines d'annotació" },
  annotationListButton: { text: 'Llista', description: "Llista d'anotacions" },
  writeAnnotStandoffText: { text: 'Anotació web' },
  annotationToolsHighlightTitle: { text: 'Resalta' },
  annotationToolsHighlightSpan: { text: 'Resalta' },
  annotationToolsDescribeTitle: { text: 'Descriu' },
  annotationToolsDescribeSpan: { text: 'Descriu' },
  annotationToolsLinkTitle: { text: 'Enllaç' },
  annotationToolsLinkSpan: { text: 'Enllaç' },
  listAnnotations: { text: 'No hi ha cap anotació present.' },
  addWebAnnotation: { text: 'Carrega anotació(s) web' },
  loadWebAnnotationMessage: { text: "Introdueix l'URL de l'anotació web o del contenidor d'anotacions web" },
  loadWebAnnotationMessage1: { text: "No s'ha pogut carregar l'URL proporcionada" },
  loadWebAnnotationMessage2: { text: 'Si us plau, intenta-ho de nou' },
  noAnnotationsToDisplay: { text: 'No hi ha cap anotació per mostrar' },
  flipPageToAnnotationText: { description: 'Gira la pàgina fins a aquesta anotació' },
  deleteAnnotation: { description: 'Elimina aquesta anotació' },
  deleteAnnotationConfirmation: { text: 'Esteu segur que voleu eliminar aquesta anotació?' },
  makeStandOffAnnotation: {
    description: 'Estat de separació (anotació web)',
    descriptionSolid: 'Escriu a Solid com a anotació web',
    descriptionToLocal: "Copia l'URI de l'anotació web al porta-retalls",
  },
  makeInlineAnnotation: {
    description: 'Feu clic per a una anotació en línia',
    descriptionCopy: "Copia la id de l'etiqueta <annot> al porta-retalls",
  },
  pageAbbreviation: { text: 'p.' },
  elementsPlural: { text: 'elements' },
  askForLinkUrl: { text: 'Si us plau, introdueix una URL per enllaçar' },
  drawLinkUrl: { text: 'Obre en una nova pestanya' },
  askForDescription: { text: 'Si us plau, introdueix una descripció textual per aplicar' },
  maxNumberOfAnnotationAlert: {
    text1: `El nombre d'elements d'anotació supera la "quantitat màxima d'anotacions" configurable`,
    text2: 'Les noves anotacions encara es poden generar i es mostraran si es configura "Mostra anotacions".',
  },
  annotationsOutsideScoreWarning: {
    text: 'Ho sentim, actualment no es poden escriure anotacions situades fora de <score>',
  },
  annotationWithoutIdWarning: {
    text1: "No es pot escriure l'annotació perquè el punt d'ancoratge MEI no té xml:id.",
    text2:
      'Assigneu identificadors seleccionant "Manipula" -> "Torna a renderitzar MEI (amb ids)" i torneu-ho a intentar.',
  },

  // MIDI
  midiSpeedmodeIndicator: {
    text: 'Mode de velocitat',
    description:
      'El mode de velocitat està actiu; només es reprodueix el MIDI per a la pàgina actual. Per reproduir tota la codificació, desactiveu el mode de velocitat.',
  },
  closeMidiPlaybackControlBarButton: { description: 'Amaga la barra de control de reproducció MIDI' },

  // mei-friend SETTINGS MENU / MEI-FRIEND MENU DE CONFIGURACIÓ
  meiFriendSettingsHeader: {
    text: 'Configuració de mei-friend',
  },
  mfReset: {
    text: 'Per defecte',
    description: 'Restableix els valors per defecte de mei-friend',
  },
  filterSettings: {
    placeholder: 'Filtra les opcions',
    description: 'Escriviu aquí per filtrar les opcions',
  },
  closeSettingsButton: {
    description: 'Tanca el panell de configuració',
  },
  hideSettingsButton: {
    description: 'Amaga el panell de configuració',
  },
  titleGeneral: {
    text: 'General',
    description: 'Configuració general de mei-friend',
  },
  selectToolkitVersion: {
    text: 'Versió de Verovio',
    description:
      "Seleccioneu la versió de l'eina Verovio " +
      '(* Canviar a versions anteriors a la 3.11.0 ' +
      'podria requerir un refrescament per qüestions de memòria.)',
  },
  toggleSpeedMode: {
    text: 'Mode de velocitat',
    description:
      'Activa o desactiva el mode de velocitat de Verovio. ' +
      'En el mode de velocitat, només es processa la pàgina actual ' +
      'per reduir el temps de renderització amb fitxers grans',
  },
  selectIdStyle: {
    text: 'Estil dels xml:ids generats',
    description:
      'Estil dels xml:ids generats (els xml:ids existents no es canviaran)' +
      'p. ex., original de Verovio: "note-0000001318117900", ' +
      'base 36 de Verovio: "nophl5o", ' +
      'estil de mei-friend: "note-ophl5o"',
  },
  addApplicationNote: {
    text: "Inserir declaració d'aplicació",
    description:
      "Inseriu una declaració d'aplicació a la descripció " +
      "de la codificació al capçalera MEI, identificant el nom de l'aplicació, " +
      'la versió, la data de la primera i última edició',
  },
  selectLanguage: {
    text: 'Idioma',
    description: "Seleccioneu l'idioma de la interfície de mei-friend.",
  },

  // Drag select
  dragSelection: {
    text: 'Drag select',
    description: 'Select elements in notation with mouse drag',
  },
  dragSelectNotes: {
    text: 'Select notes',
    description: 'Select notes',
  },
  dragSelectRests: {
    text: 'Select rests',
    description: 'Select rests and repeats (rest, mRest, beatRpt, halfmRpt, mRpt)',
  },
  dragSelectControlElements: {
    text: 'Select placement elements ',
    description: 'Select placement elements (i.e., with a @placement attribute: ' + att.attPlacement.join(', ') + ')',
  },
  dragSelectSlurs: {
    text: 'Select slurs ',
    description: 'Select slurs (i.e., elements with @curvature attribute: ' + att.attCurvature.join(', ') + ')',
  },
  dragSelectMeasures: {
    text: 'Select measures ',
    description: 'Select measures',
  }, 
  
  // Control menu
  controlMenuSettings: {
    text: 'Notation control bar',
    description: 'Define items to be shown in control menu above the notation',
  },
  controlMenuFlipToPageControls: {
    text: 'Show flip to page controls',
    description: 'Show flip to page controls in notation control menu',
  },
  controlMenuUpdateNotation: {
    text: 'Show notation update controls',
    description: 'Show notation update behavior controls in notation control menu',
  },
  controlMenuFontSelector: {
    text: 'Show notation font selector',
    description: 'Show notation font (SMuFL) selector in notation control menu',
  },
  controlMenuNavigateArrows: {
    text: 'Show navigation arrows',
    description: 'Show notation navigation arrows in notation control menu',
  },
  controlMenuSpeedmodeCheckbox: {
    text: 'Show speed mode checkbox',
    description: 'Show speed mode checkbox in notation control menu',
  },
  // MIDI Playback
  titleMidiPlayback: {
    text: 'MIDI playback',
    description: 'MIDI playback settings',
  },
  showMidiPlaybackContextualBubble: {
    text: 'Show playback shortcut',
    description:
      'Causes a shortcut (bubble in bottom left corner; ' +
      'click to immediately start playback) to appear ' +
      'when the MIDI playback control bar is closed',
  },
  showMidiPlaybackControlBar: {
    text: 'Show MIDI playback control bar',
    description: 'Show MIDI playback control bar',
  },
  scrollFollowMidiPlayback: {
    text: 'Scroll-follow MIDI playback',
    description: 'Scroll notation panel to follow MIDI playback on current page',
  },
  pageFollowMidiPlayback: {
    text: 'Page-follow MIDI playback',
    description: 'Automatically flip pages to follow MIDI playback',
  },
  highlightCurrentlySoundingNotes: {
    text: 'Highlight currently-sounding notes',
    description: 'Visually highlight currently-sounding notes in the notation panel during MIDI playback ',
  },

  // Transposition
  titleTransposition: {
    text: 'Transpose',
    description: 'Transpose score information',
  },
  enableTransposition: {
    text: 'Enable transposition',
    description:
      'Enable transposition settings, to be applied through the transpose button below. The transposition will be applied to the notation only, the encoding remains unchanged, unless you click the item "Rerender via Verovio" in the "Manipulate" dropdown menu.',
  },
  transposeInterval: {
    text: 'Transpose by interval',
    description:
      'Transpose encoding by chromatic interval by the most common intervals (Verovio supports the base-40 system)',
    labels: [
      'Perfect Unison',
      'Augmented Unison',
      'Diminished Second',
      'Minor Second',
      'Major Second',
      'Augmented Second',
      'Diminished Third',
      'Minor Third',
      'Major Third',
      'Augmented Third',
      'Diminished Fourth',
      'Perfect Fourth',
      'Augmented Fourth',
      'Diminished Fifth',
      'Perfect Fifth',
      'Augmented Fifth',
      'Diminished Sixth',
      'Minor Sixth',
      'Major Sixth',
      'Augmented Sixth',
      'Diminished Seventh',
      'Minor Seventh',
      'Major Seventh',
      'Augmented Seventh',
      'Diminished Octave',
      'Perfect Octave',
    ],
  },
  transposeKey: {
    text: 'Transpose to key',
    description: 'Transpose to key',
    labels: [
      'C# major / A# minor',
      'F# major / D# minor',
      'B major / G# minor',
      'E major / C# minor',
      'A major / F# minor',
      'D major / B minor',
      'G major / E minor',
      'C major / A minor',
      'F major / D minor',
      'Bb major / G minor',
      'Eb major / C minor',
      'Ab major / F minor',
      'Db major / Bb minor',
      'Gb major / Eb minor',
      'Cb major / Ab minor',
    ],
  },
  transposeDirection: {
    text: 'Pitch direction',
    description: 'Pitch direction of transposition (up/down)',
    labels: ['Up', 'Down', 'Closest'],
  },
  transposeButton: {
    text: 'Transpose',
    description:
      'Apply transposition with above settings to the notation, while the MEI encoding remains unchanged. To also transpose the MEI encoding with the current settings, use "Rerender via Verovio" in the "Manipulate" dropdown menu.',
  },

  // Renumber measures
  renumberMeasuresHeading: {
    text: 'Renumber measures',
    description: 'Settings for renumbering measures',
  },
  renumberMeasureContinueAcrossIncompleteMeasures: {
    text: 'Continue across incomplete measures',
    description: 'Continue measure numbers across incomplete measures (@metcon="false")',
  },
  renumberMeasuresUseSuffixAtMeasures: {
    text: 'Suffix at incomplete measures',
    description: 'Use number suffix at incomplete measures (e.g., 23-cont)',
    labels: ['none', '-cont'],
  },
  renumberMeasuresContinueAcrossEndings: {
    text: 'Continue across endings',
    description: 'Continue measure numbers across endings',
  },
  renumberMeasuresUseSuffixAtEndings: {
    text: 'Suffix at endings',
    description: 'Use number suffix at endings (e.g., 23-a)',
  },

  // Annotations
  titleAnnotations: {
    text: 'Annotations',
    description: 'Annotation settings',
  },
  showAnnotations: {
    text: 'Show annotations',
    description: 'Show annotations in notation',
  },
  showAnnotationPanel: {
    text: 'Show annotation panel',
    description: 'Show annotation panel',
  },
  annotationDisplayLimit: {
    text: 'Maximum number of annotations',
    description: 'Maximum number of annotations to display (large numbers may slow mei-friend)',
  },

  // Facsimile
  titleFacsimilePanel: {
    text: 'Facsimile panel',
    description: 'Show the facsimile images of the source edition, if available',
  },
  showFacsimilePanel: {
    text: 'Show facsimile panel',
    description: 'Show the score images of the source edition provided in the facsimile element',
  },
  selectFacsimilePanelOrientation: {
    text: 'Facsimile panel position',
    description: 'Select facsimile panel position relative to notation',
    labels: ['left', 'right', 'top', 'bottom'],
  },
  facsimileZoomInput: {
    text: 'Facsimile image zoom (%)',
    description: 'Zoom level of facsimile image (in percent)',
  },
  showFacsimileFullPage: {
    text: 'Show full page',
    description: 'Show facsimile image on full page',
  },
  showFacsimileZones: {
    text: 'Show facsimile zone boxes',
    description: 'Show facsimile zone bounding boxes',
  },
  editFacsimileZones: {
    text: 'Edit facsimile zones',
    description: 'Edit facsimile zones (will link bounding boxes to facsimile zones)',
  },

  // Supplied element
  titleSupplied: {
    text: 'Handle editorial content',
    description: 'Control handling of <supplied> elements',
  },
  showSupplied: {
    text: 'Show <supplied> elements',
    description: 'Highlight all elements contained by a <supplied> element',
  },
  suppliedColor: {
    text: 'Select <supplied> highlight color',
    description: 'Select <supplied> highlight color',
  },
  respSelect: {
    text: 'Select <supplied> responsibility',
    description: 'Select responsibility id',
  },

  //  EDITOR SETTINGS / CODEMIRROR SETTINGS
  editorSettingsHeader: {
    text: 'Editor Settings',
  },
  cmReset: {
    text: 'Default',
    description: 'Reset to mei-friend defaults',
  },
  titleAppearance: {
    title: 'Editor appearance',
    description: 'Controls the appearance of the editor',
  },
  zoomFont: {
    title: 'Font size (%)',
    description: 'Change font size of editor (in percent)',
  },
  theme: {
    title: 'Theme',
    description: 'Select the theme of the editor',
  },
  matchTheme: {
    title: 'Notation matches theme',
    description: 'Match notation to editor color theme',
  },
  tabSize: {
    title: 'Indentation size',
    description: 'Number of space characters for each indentation level',
  },
  lineWrapping: {
    title: 'Line wrapping',
    description: 'Whether or not lines are wrapped at end of panel',
  },
  lineNumbers: {
    title: 'Line numbers',
    description: 'Show line numbers',
  },
  firstLineNumber: {
    title: 'First line number',
    description: 'Set first line number',
  },
  foldGutter: {
    title: 'Code folding',
    description: 'Enable code folding through fold gutters',
  },
  titleEditorOptions: {
    title: 'Editor behavior',
    description: 'Controls the behavior of the editor',
  },
  autoValidate: {
    title: 'Auto validation',
    description: 'Validate encoding against schema automatically after each edit',
  },
  autoCloseBrackets: {
    title: 'Auto close brackets',
    description: 'Automatically close brackets at input',
  },
  autoCloseTags: {
    title: 'Auto close tags',
    description: 'Automatically close tags at input',
    type: 'bool',
  },
  matchTags: {
    title: 'Match tags',
    description: 'Highlights matched tags around editor cursor',
  },
  showTrailingSpace: {
    title: 'Highlight trailing spaces',
    description: 'Highlights unnecessary trailing spaces at end of lines',
  },
  keyMap: {
    title: 'Key map',
    description: 'Select key map',
  },

  // Verovio settings
  verovioSettingsHeader: {
    text: 'Verovio Settings',
  },
  vrvReset: {
    text: 'Default',
    description: 'Reset Verovio to mei-friend defaults',
  },

  // main.js alert messages
  isSafariWarning: {
    text:
      'It seems that you are using Safari as your browser, on which ' +
      'mei-friend unfortunately does not currently support schema validation. ' +
      'Please use another browser for full validation support.',
  },
  githubLoggedOutWarning: {
    text: `You have logged out of mei-friend's GitHub integration, but your browser is still logged in to GitHub!
      <a href="https://github.com/logout" target="_blank">Click here to logout from GitHub</a>.`,
  },
  generateUrlError: {
    text: 'Cannot generate URL for local file ',
  },
  generateUrlSuccess: {
    text: 'URL successfully copied to clipboard',
  },
  generateUrlNotCopied: {
    text: 'URL not copied to clipboard, please try again!',
  },
  errorCode: { text: 'Error Code' },
  submitBugReport: { text: 'Submit bug report' },
  loadingSchema: { text: 'Loading Schema' },
  schemaLoaded: { text: 'Schema loaded' },
  noSchemaFound: { text: 'No schema information found in MEI.' },
  schemaNotFound: { text: 'Schema not found' },
  errorLoadingSchema: { text: 'Error at loading schema' },
  notValidated: { text: 'Not validated. Press here to validate.' },
  validatingAgainst: { text: 'Validating against' },
  validatedAgainst: { text: 'Validated against' },
  validationMessages: { text: 'validation messages' },
  validationComplete: { text: 'Validation complete' },
  validationFailed: { text: 'Validation failed' },
  noErrors: { text: 'no errors' },
  errorsFound: { text: 'errors found' }, // 5 errors found

  // github-menu.js
  repository: { text: 'Repository' },
  branch: { text: 'Branch' },
  path: { text: 'Path' },
  commit: { text: 'Commit' },
  commitLog: { text: 'Commit log' },
  commitAsNewFile: { text: 'Commit as new file' },
  date: { text: 'Date' },
  author: { text: 'Author' },
  message: { text: 'Message' },
  none: { text: 'None' },
  fileName: { description: 'File name' },
  forkRepository: { text: 'Fork repository' },
  forkError: { text: 'Sorry, could not fork repository' },
  loadingFile: { text: 'Loading file' },
  loadingFromGithub: { text: 'Loading from Github' },
  logOut: { text: 'Log out' },
  githubLogout: { text: 'Log out' },
  selectRepository: { text: 'Select repository' },
  selectBranch: { text: 'Select branch' },
  commitPlaceholder: { text: 'Updated using mei-friend online' },
  reportIssueWithEncoding: { text: 'Report issue with encoding' },
  clickToOpenInMeiFriend: { text: 'Click to open in mei-friend' },
  repoAccessError: { text: 'Sorry, cannot access repositories for supplied user or organisation' },
  allComposers: { text: 'All composers' }, // fork-repository.js

  // utils renumber measures
  renumberMeasuresModalText: { text: 'Renumber measures' },
  renumberMeasuresModalTest: { text: 'Test' },
  renumberMeasuresWillBe: { text: '' },
  renumberMeasuresWouldBe: { text: 'would be' },
  renumberMeasuresChangedTo: { text: 'changed to' },
  renumberMeasureMeasuresRenumbered: { text: 'measures renumbered' },
};
