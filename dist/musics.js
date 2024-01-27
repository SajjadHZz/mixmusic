// ========MUSICS========
const musicCardsCont = document.querySelector("#musicCardsCont");
const progressBar = document.querySelector("#pbar");

const closeModalHandler = (modalID) => {
  document.querySelector(`#cardMusicModal${modalID}`).checked = false;
};

window.addEventListener("load", async () => {
  await fetch("https://roundsmoke.backendless.app/api/data/Musics")
    .then((res) => {
      const reader = res.body.getReader();
      const stream = new ReadableStream({
        start(controller) {
          // تعریف تابع برای خواندن داده‌ها از response و به‌روزرسانی پروگرس بار
          function pump() {
            reader.read().then(({ done, value }) => {
              if (done) {
                controller.close();
                return;
              }
              // بروزرسانی پروگرس بار بر اساس طول داده دریافت شده
              progressBar.value += value.length;
              // ارسال داده‌ها به controller برای نمایش آنها
              controller.enqueue(value);
              // با فراخوانی مجدد pump، تا زمانی که همه داده‌ها خوانده نشده‌اند، ادامه پیدا می‌کند
              pump();
            });
          }

          pump();
        },
      });
      console.log(stream);
      // تبدیل stream به Response object برای استفاده‌های بعدی
      return new Response(stream);
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      data.forEach((item) => {
        musicCardsCont.insertAdjacentHTML(
          "beforeend",
          `<div class="main__cards_cont">
    <div class="main__cards_card">
      <img
        src=${item.cover}
        class="cards__card_img_background"
      />
      <img
        src=${item.cover}
        class="cards__card_img"
      />
      <div class="cards__card_content">
        <h4 class="cards__card_name">${item.name}</h4>
        <p class="cards__card_creator">${item.creator}</p>
        <hr />
        <div class="cards__card_icons">
          <label for="cardMusicModal${item.id}">
            <svg
              class="cards__card_icon cards__card_icon_play"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 122.88 122.88"
              style="enable-background: new 0 0 122.88 122.88"
              xml:space="preserve"
            >
              <style type="text/css">
                .st0 {
                  fill-rule: evenodd;
                  clip-rule: evenodd;
                }
              </style>
              <g>
                <path
                  class="st0"
                  d="M61.44,0c33.93,0,61.44,27.51,61.44,61.44s-27.51,61.44-61.44,61.44S0,95.37,0,61.44S27.51,0,61.44,0L61.44,0z M83.31,65.24c3.13-2.02,3.12-4.27,0-6.06L50.98,40.6c-2.55-1.6-5.21-0.66-5.14,2.67l0.1,37.55c0.22,3.61,2.28,4.6,5.32,2.93 L83.31,65.24L83.31,65.24z M61.44,12.48c27.04,0,48.96,21.92,48.96,48.96c0,27.04-21.92,48.96-48.96,48.96S12.48,88.48,12.48,61.44 C12.48,34.4,34.4,12.48,61.44,12.48L61.44,12.48z"
                ></path>
              </g>
            </svg>
          </label>
          <div class="cards__card_icons">
            <div class="cards__card_icon_cont">
              <svg
                class="cards__card_icon"
                enable-background="new 0 0 32 32"
                viewBox="0 0 32 32"
                xml:space="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <g id="Download">
                  <path
                    d="M31,22c-0.552,0-1,0.448-1,1v7H2v-7c0-0.552-0.448-1-1-1s-1,0.448-1,1v8c0,0.552,0.448,1,1,1h30   c0.552,0,1-0.448,1-1v-8C32,22.448,31.552,22,31,22z"
                  ></path>
                  <path
                    d="M15.27,23.707c0.389,0.385,1.04,0.389,1.429,0l6.999-6.9c0.395-0.391,0.394-1.024,0-1.414   c-0.394-0.391-1.034-0.391-1.428,0l-5.275,5.2V1c0-0.552-0.452-1-1.01-1c-0.558,0-1.01,0.448-1.01,1v19.593l-5.275-5.2   c-0.395-0.391-1.034-0.391-1.428,0c-0.395,0.391-0.395,1.024,0,1.414L15.27,23.707z"
                  ></path>
                </g>
              </svg>
              <span class="cards__card_icon_number">${item.downloaded}</span>
            </div>
            <div class="cards__card_icon_cont">
              <svg
                class="cards__card_icon"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 50 50"
                style="enable-background: new 0 0 50 50"
                xml:space="preserve"
              >
                <g id="Layer_1">
                  <path
                    d="M45.281,25.915c4.949-5.004,4.949-13.146,0-18.15C42.881,5.337,39.688,4,36.292,4c-0.001,0-0.001,0-0.001,0
                c-3.396,0-6.59,1.337-8.991,3.765L25,10.09l-2.3-2.325C20.299,5.337,17.106,4,13.709,4c-3.396,0-6.589,1.337-8.99,3.765
                c-4.949,5.004-4.949,13.146,0,18.15L25,46.422L45.281,25.915z M6.141,9.171C8.163,7.126,10.852,6,13.709,6
                c2.858,0,5.547,1.126,7.569,3.171L25,12.935l3.722-3.764C30.744,7.126,33.433,6,36.291,6c2.858,0,5.546,1.126,7.568,3.171
                c4.183,4.229,4.183,11.109,0,15.338L25,43.578L6.141,24.509C1.958,20.28,1.958,13.399,6.141,9.171z"
                  ></path>
                </g>
                <g></g>
              </svg>
              <span class="cards__card_icon_number">${item.popularity}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <input class="cards__card_icon_modal" type="radio" name="cardMusicModal" id="cardMusicModal${item.id}" />
    <div class="modal">
        <img
        src="public/icons/close.svg"
        alt="CLOSE"
        class="modal__close_btn"
        onClick="closeModalHandler(${item.id})"
         />

      <img
        src=${item.cover}
        class="modal__img_background"
      />

      <ol class="modal__items">
         ${item.srcMusics
           .map((music) => {
             return `<li id="modalMusicItem" data-uniqID="${music.uniqueID}" >
             <input
            class="modal__items_icon_radio"
            type="radio"
            name="modalListItems"
            id="modalListItems${music.uniqueID}"
          />
          <label
            for="modalListItems${music.uniqueID}"
          >
        <div class="modal__items_icon"></div>
             ${music.name}
          </label>
           </li>`;
           })
           .join("")}
         </ol>
    </div>
  </div>`
        );
      });

      const modalMusicItem = document.querySelectorAll("li#modalMusicItem");
      modalMusicItem.forEach((item) => {
        item.addEventListener("click", () => {
          playMusic(item.dataset.uniqid, data);
        });
      });
    });
});

// ========PLAYER========
const playerMusic = document.querySelector("#playerMusic");
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
const playerSoundProgressVolumRangeValue = document.querySelector("#playerSoundProgressVolumRangeValue");
const playerIconsFeacherRepeat = document.querySelector("#playerIconsFeacherRepeat");
const playerIconsFeacherDownload = document.querySelector("#playerIconsFeacherDownload");
const playerInfosCover = document.querySelector("#playerInfosCover");
const playerInfosName = document.querySelector("#playerInfosName");
const playerInfosCreator = document.querySelector("#playerInfosCreator");
const playerAudio = document.querySelector("#playerAudio");

let playerListSelected = [];
let playerListSelectedCurrent = 0;

const playMusic = (uniqID, musics) => {
  const allMusics = musics.map((item) => item.srcMusics);
  const musicListSelectedIndex = allMusics.findIndex((item) => item.some((src) => src.uniqueID === uniqID));
  playerListSelected = allMusics[musicListSelectedIndex];
  playerListSelectedCurrent = playerListSelected.findIndex((item) => item.uniqueID === uniqID);
  const musicSelected = playerListSelected[playerListSelectedCurrent];

  playerMusic.classList.add("active");
  playerInfosName.innerHTML = musicSelected.name;
  playerInfosCreator.innerHTML = musics[musicListSelectedIndex].creator;
  playerAudio.setAttribute("src", musicSelected.src);
  playerInfosCover.setAttribute("src", musics[musicListSelectedIndex].cover);
  audioPlayHandler();
  playerControlIconPlay.checked = true;
  playerIconsFeacherDownload.addEventListener("click", () => {
    playerIconsFeacherDownload.setAttribute("href", playerAudio.src);
  });
};

playerControlIcon.forEach((item) => {
  item.addEventListener("click", () => {
    if (playerListSelected.length === 0) {
      playerControlIconPlay.checked = true;
      return;
    }
    switch (item.dataset.musicControl) {
      case "play":
        if (playerControlIconPlay.checked) {
          playerAudio.pause();
          playerControlIconPlay.checked = true;
          // modalListItems.forEach((item) => {
          //   item.checked = false;
          // });
        } else {
          audioPlayHandler();
          playerControlIconPlay.checked = false;
        }
        break;

      case "next":
        if (playerListSelectedCurrent < playerListSelected.length - 1) {
          playerListSelectedCurrent += 1;
        }

        playerInfosName.innerHTML = playerListSelected[playerListSelectedCurrent].name;
        playerAudio.setAttribute("src", playerListSelected[playerListSelectedCurrent].src);
        audioPlayHandler();
        playerControlIconPlay.checked = true;
        break;

      case "back":
        if (playerListSelectedCurrent > 0) {
          playerListSelectedCurrent -= 1;
        }

        playerInfosName.innerHTML = playerListSelected[playerListSelectedCurrent].name;
        playerAudio.setAttribute("src", playerListSelected[playerListSelectedCurrent].src);
        audioPlayHandler();
        playerControlIconPlay.checked = true;
        break;

      case "forward":
        playerAudio.currentTime += 10;
        break;

      case "backward":
        playerAudio.currentTime -= 10;
        break;
    }
  });
});

const formatSecondsToMinutes = (seconds) => {
  if (!isNaN(seconds)) {
    return new Date(seconds * 1000).toISOString().slice(14, 19);
  }
};
playerAudio.addEventListener("timeupdate", () => {
  if (playerListSelected.length !== 0) {
    playerDurationElapsed.innerHTML = formatSecondsToMinutes(playerAudio.currentTime);
    playerDurationTotal.innerHTML = formatSecondsToMinutes(playerAudio.duration) || "00:00";
    playerDurationProgress.setAttribute("max", playerAudio.duration);
    playerDurationProgress.value = playerAudio.currentTime;
  }
});

playerDurationProgress.addEventListener("click", (e) => {
  if (playerListSelected.length !== 0) {
    playerAudio.currentTime =
      ((playerDurationProgress.clientWidth - e.offsetX) * playerAudio.duration) /
      playerDurationProgress.clientWidth;
  }
});

playerSoundMuted.addEventListener("change", () => {
  playerAudio.muted ? (playerAudio.muted = false) : (playerAudio.muted = true);
});

playerSoundProgressVolumRange.addEventListener("input", () => {
  const tempSliderValue = playerSoundProgressVolumRange.value;
  playerSoundProgressVolumRangeValue.textContent = tempSliderValue;
  playerSoundProgressVolumRange.style.background = `linear-gradient(to left, var(--mainColor) ${tempSliderValue}%, var(--bgColor) ${tempSliderValue}%)`;
  playerAudio.volume = tempSliderValue / 100;
  +tempSliderValue === 0 ? (playerSoundMuted.checked = true) : (playerSoundMuted.checked = false);
});

playerIconsFeacherRepeat.addEventListener("change", (e) => {
  if (e.target.checked) {
    playerAudio.loop = true;
  } else {
    playerAudio.loop = false;
  }
});

playerMusicClose.addEventListener("click", () => {
  playerMusic.classList.remove("active");
  playerAudio.pause();
  playerControlIconPlay.checked = true;
});

const audioPlayHandler = () => {
  playerControlIconPlayLoader.classList.add("loader");
  playerAudio
    .play()
    .then((res) => {
      playerControlIconPlayLoader.classList.remove("loader");
      return;
    })
    .catch((err) => {
      // console.log(err);
      return;
    });
};
