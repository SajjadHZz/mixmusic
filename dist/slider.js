const sliderBtnRight = document.querySelector("#sliderBtnRight");
const sliderBtnLeft = document.querySelector("#sliderBtnLeft");
const sliderCategoryCont = document.querySelector("#sliderCategoryCont");
let sliderCounter = 0;
let endWraperCards = 1400 - sliderCategoryCont.clientWidth;

sliderBtnRight.addEventListener("click", () => {
  if (endWraperCards !== 0) {
    if (endWraperCards > 200) {
      sliderCounter += 200;
      endWraperCards -= 200;
    } else {
      sliderCounter += endWraperCards;
      endWraperCards = 0;
    }
  }
  sliderCategoryCont.style.transform = `translateX(${sliderCounter}px)`;
});
sliderBtnLeft.addEventListener("click", () => {
  if (sliderCounter > 200) {
    sliderCounter -= 200;
    endWraperCards += 200;
  } else {
    endWraperCards += sliderCounter;
    sliderCounter = 0;
  }
  sliderCategoryCont.style.transform = `translateX(${sliderCounter}px)`;
});
