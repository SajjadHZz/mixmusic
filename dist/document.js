//////////////////////////////////// PLAYLISTS //////////////////////////////////////////
const dedicatedPlaylist = document.querySelector("#dedicatedPlaylist");
const albumesPlaylist = document.querySelector("#albumesPlaylist");
const singlesPlaylist = document.querySelector("#singlesPlaylist");
const musicCardsCont = document.querySelector("#musicCardsCont");
//////////////////////////////////// SLIDERS //////////////////////////////////////////
const sliderBtnRight = document.querySelector("#sliderBtnRight");
const sliderBtnLeft = document.querySelector("#sliderBtnLeft");
const moodsWrapper = document.querySelector("#moodsWrapper");
const moodsSlider = document.querySelector("#moodsSlider");
const styleWrapper = document.querySelector("#styleWrapper");
const instrumentWrapper = document.querySelector("#instrumentWrapper");
//////////////////////////////////// PLAYER //////////////////////////////////////////
const playerMusicBox = document.querySelector("#playerMusicBox");
const playerAudio = document.querySelector("#playerAudio");
const playerMusicClose = document.querySelector("#playerMusicClose");
const modalMusicItem = document.querySelectorAll("#modalMusicItem");
const playerControlIcon = document.querySelectorAll("#playerControlIcon");
const playerControlIconPlay = document.querySelector("#playerControlIconPlay");
const playerControlIconPlayLoader = document.querySelector("#playerControlIconPlayLoader");
const playerDurationProgress = document.querySelector("#playerDurationProgress");
const playerDurationElapsed = document.querySelector("#playerDurationElapsed");
const playerDurationTotal = document.querySelector("#playerDurationTotal");
const playerSoundMuted = document.querySelector("#playerSoundMuted");
const playerSoundProgressVolumRange = document.querySelector("#playerSoundProgressVolumRange");
const playerIconsFeacherRepeat = document.querySelector("#playerIconsFeacherRepeat");
const playerIconsFeacherDownload = document.querySelector("#playerIconsFeacherDownload");
const playerInfosCover = document.querySelector("#playerInfosCover");
const playerInfosName = document.querySelector("#playerInfosName");
const playerInfosCreator = document.querySelector("#playerInfosCreator");

//////////////////////////////////// FILTERS //////////////////////////////////////////
const sidebarMoodsAccordion = document.querySelector("#sidebarMoodsAccordion");
const sidebarArtistsAccordion = document.querySelector("#sidebarArtistsAccordion");
const sidebarStylesAccordion = document.querySelector("#sidebarStylesAccordion");
const sidebarInstrumentAccordion = document.querySelector("#sidebarInstrumentAccordion");
const statusSelect = document.querySelector("#statusSelect");
const sortSelect = document.querySelector("#sortSelect");
const searchBox = document.querySelector("#searchBox");
const searchBoxBtn = document.querySelector("#searchBoxBtn");

export {
  // SLIDER
  moodsWrapper,
  moodsSlider,
  styleWrapper,
  instrumentWrapper,
  sliderBtnRight,
  sliderBtnLeft,
  //  PLAYLISTS
  dedicatedPlaylist,
  albumesPlaylist,
  singlesPlaylist,
  musicCardsCont,
  //  PLAYER
  playerMusicBox,
  playerAudio,
  playerMusicClose,
  modalMusicItem,
  playerControlIcon,
  playerControlIconPlay,
  playerControlIconPlayLoader,
  playerDurationProgress,
  playerDurationElapsed,
  playerDurationTotal,
  playerSoundMuted,
  playerSoundProgressVolumRange,
  playerIconsFeacherRepeat,
  playerIconsFeacherDownload,
  playerInfosCover,
  playerInfosName,
  playerInfosCreator,
  //  FILTERS
  sidebarMoodsAccordion,
  sidebarArtistsAccordion,
  sidebarStylesAccordion,
  sidebarInstrumentAccordion,
  statusSelect,
  sortSelect,
  searchBox,
  searchBoxBtn,
};
