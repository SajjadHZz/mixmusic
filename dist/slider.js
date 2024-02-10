import { moodsWrapper, moodsSlider, styleWrapper, instrumentWrapper } from "./document.js";

let showCards;
if (moodsSlider.clientWidth < 400) {
  showCards = 1;
} else if (moodsSlider.clientWidth < 600) {
  showCards = 2;
} else if (moodsSlider.clientWidth < 800) {
  showCards = 3;
} else if (moodsSlider.clientWidth < 1000) {
  showCards = 4;
} else if (moodsSlider.clientWidth < 1200) {
  showCards = 5;
} else {
  showCards = 6;
}
let widthWrapper = Math.floor(moodsSlider.clientWidth / showCards) * 7;
moodsWrapper.style.width = `${widthWrapper}px`;

let transformWrapper = 0;
let endWrapperCount = 7 - showCards;

function moveToRight() {
  if (endWrapperCount !== 0) {
    endWrapperCount--;
    transformWrapper += moodsWrapper.children[0].clientWidth + 20;
  }
  moodsWrapper.style.transform = `translateX(${transformWrapper}px)`;
}

function moveToLeft() {
  if (endWrapperCount !== 7 - showCards) {
    endWrapperCount++;
    transformWrapper -= moodsWrapper.children[0].clientWidth + 20;
  }
  moodsWrapper.style.transform = `translateX(${transformWrapper}px)`;
}

function moveEvents(slider) {
  let isDragging = false,
    startPos = 0,
    currentTranslate = 0,
    prevTranslate = 0,
    endSlider = 0;

  function touchStart(slider) {
    return (e) => {
      endSlider = slider.clientWidth - slider.parentElement.clientWidth + 30;
      startPos = getPositionX(e);
      isDragging = true;
    };
  }
  function touchEnd() {
    isDragging = false;
    prevTranslate = currentTranslate;
  }
  function touchMove(slider) {
    return (e) => {
      if (isDragging) {
        const currentPosition = getPositionX(e);
        currentTranslate = prevTranslate + currentPosition - startPos;
        if (currentTranslate >= 0 && currentTranslate <= endSlider) {
          setSliderPosition(slider);
        } else if (currentTranslate < 0) {
          currentTranslate = 0;
        } else if (currentTranslate > endSlider) {
          currentTranslate = endSlider;
        }
      }
    };
  }
  function getPositionX(e) {
    return e.type.includes("mouse") ? e.pageX : e.touches[0].clientX;
  }
  function setSliderPosition(slider) {
    slider.style.transform = `translateX(${currentTranslate}px)`;
  }

  // Touch events
  slider.addEventListener("touchstart", touchStart(slider));
  slider.addEventListener("touchend", touchEnd);
  slider.addEventListener("touchmove", touchMove(slider));
  // Mouse events
  slider.addEventListener("mousedown", touchStart(slider));
  slider.addEventListener("mouseup", touchEnd);
  slider.addEventListener("mouseleave", touchEnd);
  slider.addEventListener("mousemove", touchMove(slider));
}

export { moveToLeft, moveToRight, moveEvents };
