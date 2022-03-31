import createElement from '../../assets/lib/create-element.js';

export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.render();
    this.elem.addEventListener('click', this.clickSlider); 
  }

  render() {
    this.elem = createElement(`
    <div class="slider">
      <div class="slider__thumb" style="left: 50%;">
        <span class="slider__value">2</span>
      </div>
    <div class="slider__progress" style="width: 50%;"></div>
    <div class="slider__steps">
    </div>
  </div>`);
    this.sliderSteps = this.elem.querySelector('.slider__steps');
    for (let i = 0; i < this.steps; i++) {
      this.sliderSteps.insertAdjacentHTML('afterbegin', `<span></span>`);
    }
  }

  clickSlider(event) {
    //this.target = event.offsetX;
    const SLIDER_OFFSET_WIDTH = document.querySelector('.slider').offsetWidth;
    let countSteps = this.steps - 1; 
    //let pieceSlider = SLIDER_OFFSET_WIDTH / countSteps;

    //let moveSteps = this.target - SLIDER_OFFSET_WIDTH;
    let stepRemain = event.offsetX % 82;
    let ceilSlider = Math.ceil(event.offsetX / 82);
    let floorSlider = Math.floor(event.offsetX / 82);
    if (event.target.classList.contains('slider__thumb') == false) {
      if (stepRemain >= 41) {
        document.querySelector('.slider__value').innerHTML = ceilSlider;
        document.querySelector('.slider__thumb').style.left = `${Math.ceil(((ceilSlider) * 100) / 4)}%`;
        document.querySelector('.slider__progress').style.width = `${Math.ceil(((ceilSlider) * 100) / 4)}%`;
      } else {
        if (stepRemain < 41) {
          document.querySelector('.slider__value').innerHTML = floorSlider;
          document.querySelector('.slider__thumb').style.left = `${Math.floor(((floorSlider) * 100) / 4)}%`;
          document.querySelector('.slider__progress').style.width = `${Math.floor(((floorSlider) * 100) / 4)}%`;
        }
      }
    }
    
    let stepValue = this.querySelector('.slider__value').innerHTML;
    //this.dfg = stepValue - stepRemain;
    let sliderChange = new CustomEvent('slider-change', {detail: stepValue, bubbles: true});
    this.dispatchEvent(sliderChange);

    //console.log(typeof this.dfg);
  }
}
