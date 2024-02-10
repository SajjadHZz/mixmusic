// IMPORTS
import fetchDatas, { artists, instrument, moods, musicList, musics, styles } from "./fetch.js";
import { moveToLeft, moveToRight, moveEvents } from "./slider.js";
import {
  // SLIDER
  sliderBtnRight,
  sliderBtnLeft,
  moodsWrapper,
  styleWrapper,
  instrumentWrapper,
  // PLAYLISTS
  dedicatedPlaylist,
  albumesPlaylist,
  singlesPlaylist,
  musicCardsCont,
  // PLAYER
  playerMusicBox,
  playerControlIcon,
  playerAudio,
  playerDurationProgress,
  playerSoundMuted,
  playerSoundProgressVolumRange,
  playerIconsFeacherRepeat,
  playerMusicClose,
  // FILTERS
  sidebarMoodsAccordion,
  sidebarArtistsAccordion,
  sidebarStylesAccordion,
  sidebarInstrumentAccordion,
  statusSelect,
  sortSelect,
  searchBox,
  searchBoxBtn,
} from "./document.js";
import { moodCard, musicCard, styleCard, filterSidebar } from "./elements.js";
import {
  playMusic,
  audioPlayHandler,
  audioIconsHandler,
  audioDurationProgress,
  audioUpdateDuration,
  audioMutedHandler,
  audioVolumeHandler,
  audioRepeatHandler,
} from "./player.js";

function setHtmlDatas(data, container, element) {
  data.forEach((item) => {
    container.insertAdjacentHTML("beforeend", element({ ...item }));
  });
}

//  SLIDERS
function moodSliderCards(data) {
  setHtmlDatas(data, moodsWrapper, moodCard);
}
function styleSliderCards(data) {
  setHtmlDatas(data, styleWrapper, styleCard);
}
function instrumentSliderCards(data) {
  setHtmlDatas(data, instrumentWrapper, styleCard);
}

//  PLAYLISTS
function dedicatedPlaylistCards(data) {
  setHtmlDatas(data, dedicatedPlaylist, musicCard);
}
function albumePlaylistCards(data) {
  setHtmlDatas(data, albumesPlaylist, musicCard);
}
function singlePlaylistCards(data) {
  setHtmlDatas(data, singlesPlaylist, musicCard);
}

function modalMusicHandler(data) {
  const closeModalMusicBtn = document.querySelectorAll("#closeModalMusicBtn");
  closeModalMusicBtn.forEach((item) => {
    item.addEventListener("click", () => {
      document.querySelector(`#${item.dataset.checkboxMusicModal}`).checked = false;
    });
  });

  const modalMusicItem = document.querySelectorAll("#modalMusicItem");
  modalMusicItem.forEach((item) => {
    item.addEventListener("click", () => {
      playMusic(item.dataset.uniqid, data);
    });
  });
}

// FILTER
let filtersChecked = [];

function moodsFilterSidebar(data) {
  setHtmlDatas(data, sidebarMoodsAccordion, filterSidebar);
}
function artistsFilterSidebar(data) {
  setHtmlDatas(data, sidebarArtistsAccordion, filterSidebar);
}
function stylesFilterSidebar(data) {
  setHtmlDatas(data, sidebarStylesAccordion, filterSidebar);
}
function instrumentFilterSidebar(data) {
  setHtmlDatas(data, sidebarInstrumentAccordion, filterSidebar);
}
function filterMusicCards(data) {
  setHtmlDatas(data, musicCardsCont, musicCard);
}

// GET DATAS
fetchDatas(moods, moodSliderCards);
fetchDatas(styles, styleSliderCards);
fetchDatas(instrument, instrumentSliderCards);

fetchDatas(
  musicList,
  dedicatedPlaylistCards,
  [artists, musics],
  "ARTISTS.name%20%3D%20'MixMusic%20Playlist'",
  "%60updated%60%20desc"
);
fetchDatas(
  musicList,
  albumePlaylistCards,
  [artists, musics],
  "status%20%3D%20'Album'",
  "%60updated%60%20desc"
);
fetchDatas(
  musicList,
  singlePlaylistCards,
  [artists, musics],
  "status%20%3D%20'Single'",
  "%60updated%60%20desc"
);

fetchDatas(moods, moodsFilterSidebar);
fetchDatas(artists, artistsFilterSidebar);
fetchDatas(styles, stylesFilterSidebar);
fetchDatas(instrument, instrumentFilterSidebar);

function filtersSectionMusics() {
  if (filtersChecked.length === 0) {
    fetchDatas(
      musicList,
      filterMusicCards,
      [artists, musics],
      `status%20%3D%20'${statusSelect.value}'`,
      "%60updated%60%20desc"
    );
  } else {
    const whereUrl = [];
    filtersChecked.forEach((item) => {
      whereUrl.push(
        `${item.dataset.category}.${item.dataset.category === artists ? "name" : "value"}%20%3D%20'${
          item.id
        }'`
      );
    });
    fetchDatas(
      musicList,
      filterMusicCards,
      [artists, musics],
      whereUrl.join("%20OR%20"),
      `%60${sortSelect.value}%60%20desc`
    );
  }
}
setTimeout(() => {
  fetchDatas(musicList, modalMusicHandler, [musics, artists]);
}, 5000);

////////////////////////////////// EVENTS ////////////////////////////////////

// SLIDER BUTTONS

sliderBtnRight.addEventListener("click", moveToRight);
sliderBtnLeft.addEventListener("click", moveToLeft);
[styleWrapper, instrumentWrapper].forEach((slider) => moveEvents(slider));

// PLAYER
playerControlIcon.forEach((item) => {
  item.addEventListener("click", () => {
    audioIconsHandler(item);
  });
});
playerAudio.addEventListener("timeupdate", () => {
  audioDurationProgress(playerAudio);
});
playerDurationProgress.addEventListener("click", (e) => {
  audioUpdateDuration(playerAudio, playerDurationProgress, e);
});
playerSoundMuted.addEventListener("change", () => {
  audioMutedHandler(playerAudio);
});
playerSoundProgressVolumRange.addEventListener("input", () => {
  audioVolumeHandler(playerAudio, playerSoundProgressVolumRange, playerSoundMuted);
});
playerIconsFeacherRepeat.addEventListener("change", () => {
  audioRepeatHandler(playerAudio, playerIconsFeacherRepeat);
});
playerMusicClose.addEventListener("click", () => {
  audioPlayHandler(false);
  playerMusicBox.classList.remove("active");
});

// FILTERS
window.addEventListener("load", () => {
  filtersSectionMusics();
});
statusSelect.addEventListener("change", () => {
  musicCardsCont.innerHTML = "";
  fetchDatas(
    musicList,
    filterMusicCards,
    [artists, musics],
    `status%20%3D%20'${statusSelect.value}'`,
    `%60${sortSelect.value}%60%20desc`
  );
});
sortSelect.addEventListener("change", () => {
  musicCardsCont.innerHTML = "";
  fetchDatas(
    musicList,
    filterMusicCards,
    [artists, musics],
    `status%20%3D%20'${statusSelect.value}'`,
    `%60${sortSelect.value}%60%20desc`
  );
});
searchBoxBtn.addEventListener("click", () => {
  musicCardsCont.innerHTML = "";
  fetchDatas(
    musicList,
    filterMusicCards,
    [artists, musics],
    `name%20LIKE%20'%25${searchBox.value.replace(" ", "%20")}%25'%20AND%20status%20%3D%20'${
      statusSelect.value
    }'`,
    `%60${sortSelect.value}%60%20desc`
  );
});
setTimeout(() => {
  const inputFilters = document.querySelectorAll("input[name=filter]");
  inputFilters.forEach((item) => {
    item.addEventListener("click", () => {
      filtersChecked = [...inputFilters].filter((input) => {
        return input.checked;
      });
      musicCardsCont.innerHTML = "";
      // filtersSectionMusics();
    });
  });
}, 5000);
