import {
  playerMusicBox,
  playerControlIconPlay,
  playerControlIconPlayLoader,
  playerDurationProgress,
  playerDurationElapsed,
  playerDurationTotal,
  playerIconsFeacherDownload,
  playerInfosCover,
  playerInfosName,
  playerInfosCreator,
  playerAudio,
} from "./document.js";

let isPlay = false;
let playerListSelected = [];
let playerListSelectedCurrent = 0;

function playMusic(uniqID, musics) {
  playerListSelected = musics.find((item) => {
    return item.MUSICS.find((elem, index) => {
      if (elem.objectId === uniqID) {
        playerListSelectedCurrent = index;
        return true;
      }
    });
  });

  playerMusicBox.classList.add("active");
  playerInfosName.innerHTML = playerListSelected.MUSICS[playerListSelectedCurrent].name;
  playerInfosCreator.innerHTML = playerListSelected.ARTISTS[0].name;
  playerAudio.setAttribute("src", playerListSelected.MUSICS[playerListSelectedCurrent].src);
  playerInfosCover.setAttribute("src", playerListSelected.cover);
  audioPlayHandler(true);
  playerControlIconPlay.checked = true;
  playerIconsFeacherDownload.addEventListener("click", () => {
    playerIconsFeacherDownload.setAttribute("href", playerAudio.src);
  });
}

function audioPlayHandler(bool) {
  switch (bool) {
    case true:
      playerControlIconPlayLoader.classList.add("loader");
      playerControlIconPlay.checked = false;
      isPlay = false;
      playerAudio
        .play()
        .then((res) => {
          isPlay = true;
          playerControlIconPlayLoader.classList.remove("loader");
          return;
        })
        .catch((err) => {
          isPlay = false;
          return;
        });
      break;
    case false:
      playerAudio.pause();
      playerControlIconPlay.checked = true;
      isPlay = false;
      playerControlIconPlayLoader.classList.remove("loader");
      break;
  }
}

function audioIconsHandler(item) {
  if (playerListSelected.MUSICS.length === 0) {
    playerControlIconPlay.checked = true;
    return;
  }
  switch (item.dataset.musicControl) {
    case "play":
      playerControlIconPlay.checked ? audioPlayHandler(false) : audioPlayHandler(true);
      break;

    case "next":
      if (playerListSelectedCurrent < playerListSelected.MUSICS.length - 1) {
        playerListSelectedCurrent += 1;
      }

      playerInfosName.innerHTML = playerListSelected.MUSICS[playerListSelectedCurrent].name;
      playerAudio.setAttribute("src", playerListSelected.MUSICS[playerListSelectedCurrent].src);
      audioPlayHandler(true);
      playerControlIconPlay.checked = true;
      break;

    case "back":
      if (playerListSelectedCurrent > 0) {
        playerListSelectedCurrent -= 1;
      }

      playerInfosName.innerHTML = playerListSelected.MUSICS[playerListSelectedCurrent].name;
      playerAudio.setAttribute("src", playerListSelected.MUSICS[playerListSelectedCurrent].src);
      audioPlayHandler(true);
      playerControlIconPlay.checked = true;
      break;

    case "forward":
      playerAudio.currentTime += 10;
      break;

    case "backward":
      playerAudio.currentTime -= 10;
      break;
  }
}

function formatSecondsToMinutes(seconds) {
  if (!isNaN(seconds)) {
    return new Date(seconds * 1000).toISOString().slice(14, 19);
  }
}

function audioDurationProgress(player) {
  if (playerListSelected.length !== 0) {
    playerDurationElapsed.innerHTML = formatSecondsToMinutes(player.currentTime);
    playerDurationTotal.innerHTML = formatSecondsToMinutes(player.duration) || "00:00";
    playerDurationProgress.setAttribute("max", player.duration);
    playerDurationProgress.value = player.currentTime;
  }
}

function audioUpdateDuration(player, progress, e) {
  if (playerListSelected.length !== 0 && isPlay) {
    player.currentTime = ((progress.clientWidth - e.offsetX) * player.duration) / progress.clientWidth;
  }
}

function audioMutedHandler(player) {
  player.muted ? (player.muted = false) : (player.muted = true);
}

function audioVolumeHandler(player, volume, icon) {
  const tempSliderValue = volume.value;
  volume.style.background = `linear-gradient(to right, var(--mainColor) ${tempSliderValue}%, var(--bgColor) ${tempSliderValue}%)`;
  player.volume = tempSliderValue / 100;
  +tempSliderValue === 0 ? (icon.checked = true) : (icon.checked = false);
}

function audioRepeatHandler(player, button) {
  button.checked ? (player.loop = true) : (player.loop = false);
}

export {
  playMusic,
  audioPlayHandler,
  audioIconsHandler,
  audioDurationProgress,
  audioUpdateDuration,
  audioMutedHandler,
  audioVolumeHandler,
  audioRepeatHandler,
};
