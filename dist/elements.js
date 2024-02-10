function moodCard({ image, title }) {
  return `<div id="moodCard" class="slider__slide mood">
    <img src="${image}" alt="MOOD-IMAGE" class="mood__img" />
    <p class="mood__title">${title}</p>
</div>`;
}

function musicCard({ cover, name, ARTISTS, downloaded, popularity, MUSICS }) {
  const randomId = crypto.randomUUID();
  if (MUSICS.length === 1) {
    return `
    <div class="main__cards_cont">
    <div class="main__cards_card">
          <img src="${cover}" class="cards__card_img_background" />
          <img src="${cover}" class="cards__card_img" />
          <div class="cards__card_content">
            <h4 class="cards__card_name">${name}</h4>
            <p class="cards__card_creator">${ARTISTS[0].name}</p>
            <hr />
            <div class="cards__card_icons">
              <svg
                class="cards__card_icon cards__card_icon_play"
                id="modalMusicItem"
                data-uniqID="${MUSICS[0].objectId}"
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
                  <span class="cards__card_icon_number">${downloaded}</span>
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
                  <span class="cards__card_icon_number">${popularity}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    `;
  } else {
    return `<div class="main__cards_cont">
  <div class="main__cards_card">
  <img
    src=${cover}
    class="cards__card_img_background"
  />
  <img
    src=${cover}
    class="cards__card_img"
  />
  <div class="cards__card_content">
    <h4 class="cards__card_name">${name}</h4>
    <p class="cards__card_creator">${ARTISTS[0].name}</p>
    <hr />
    <div class="cards__card_icons">
      <label for="cardMusicModal${randomId}">
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
          <span class="cards__card_icon_number">${downloaded}</span>
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
          <span class="cards__card_icon_number">${popularity}</span>
        </div>
      </div>
    </div>
  </div>
  </div>
  
  <input class="cards__card_icon_modal" type="radio" name="cardMusicModal" id="cardMusicModal${randomId}" />
  <div class="modal">
    <img
    id="closeModalMusicBtn"
    data-checkbox-music-modal="cardMusicModal${randomId}"
    src="public/icons/close.svg"
    alt="CLOSE"
    class="modal__close_btn"
     />
  
  <img
    src=${cover}
    class="modal__img_background"
  />
  
  <ol class="modal__items">
     ${MUSICS.map((music) => {
       return `<li id="modalMusicItem" data-uniqID="${music.objectId}" >
         <input
        class="modal__items_icon_radio"
        type="radio"
        name="modalListItems"
        id="modalListItems${randomId}${music.objectId}"
      />
      <label
        for="modalListItems${randomId}${music.objectId}"
      >
    <span class="modal__items_icon"></span>
         <span class="modal__items_name">${music.name}</span>
      </label>
       </li>`;
     }).join("")}
     </ol>
  </div>
  </div>`;
  }
}

function styleCard({ image, value, songs }) {
  return `<div class="styles__card">
  <img class="styles__card_img" src="${image}" />
  <div>
    <h4 class="styles__card_title">${value}</h4>
    <p class="styles__card_songs">${songs} Songs</p>
  </div>
</div>`;
}

function filterSidebar({ title, value, name, ___class }) {
  return `<div class="sidebar__accordion_mood">
  <input class="sidebar__accordion_input" type="checkbox" name="filter" data-category="${___class}" id="${
    value || name
  }" />
  <label class="sidebar__accordion_text" for="${value || name}">${title || name}</label>
</div>`;
}

export { moodCard, musicCard, styleCard, filterSidebar };
