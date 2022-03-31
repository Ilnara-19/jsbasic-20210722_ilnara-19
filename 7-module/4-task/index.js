import createElement from '../../assets/lib/create-element.js';

export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.render();
    document.addEventListener('dragstart', () => {return false;}); 
    this.elem.querySelector('.slider__thumb').addEventListener('pointerdown', () =>this.pointerDown()); 
    this.elem.addEventListener('pointerup', this.newEvent); 
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

  pointerDown() {
    const OFFSET_WIDTH = document.querySelector('.slider__thumb').offsetWidth;
    const SLIDER_OFFSET_WIDTH = document.querySelector('.slider').offsetWidth;
    let countSteps = this.steps - 1; 
    let pieceSlider = SLIDER_OFFSET_WIDTH / countSteps;
    

    function moveSlider(event) {
      let moveSteps = event.pageX - SLIDER_OFFSET_WIDTH;
      document.querySelector('.slider').classList.add('slider_dragging');
      if ((moveSteps) - (OFFSET_WIDTH / 2) >= 0 && moveSteps - (OFFSET_WIDTH / 2) <= SLIDER_OFFSET_WIDTH) {
        document.querySelector('.slider__thumb').style.left = `${moveSteps - (OFFSET_WIDTH / 2)}px`;
        document.querySelector('.slider__progress').style.width = `${moveSteps}px`;
      }
    }

    document.addEventListener('pointermove', moveSlider);

    function upSlider(event) {
      let moveSteps = event.pageX - SLIDER_OFFSET_WIDTH;
      let stepRemain = moveSteps % pieceSlider;
      let ceilSlider = Math.ceil(moveSteps / pieceSlider);
      let floorSlider = Math.floor(moveSteps / pieceSlider);
      if (moveSteps - (OFFSET_WIDTH / 2) >= 0 && moveSteps - (OFFSET_WIDTH / 2) <= SLIDER_OFFSET_WIDTH) {
        if (stepRemain >= 41) {
          document.querySelector('.slider__value').innerHTML = ceilSlider;
          document.querySelector('.slider__thumb').style.left = `${Math.ceil(((ceilSlider) * 100) / countSteps)}%`;
          document.querySelector('.slider__progress').style.width = `${Math.ceil(((ceilSlider) * 100) / countSteps)}%`;
        } else {
          if (stepRemain < 41) {
            document.querySelector('.slider__value').innerHTML = floorSlider;
            document.querySelector('.slider__thumb').style.left = `${Math.floor(((floorSlider) * 100) / countSteps)}%`;
            document.querySelector('.slider__progress').style.width = `${Math.floor(((floorSlider) * 100) / countSteps)}%`;
          }
        }
      }
      document.querySelector('.slider').classList.remove('slider_dragging');
      document.removeEventListener('pointermove', moveSlider);
      document.querySelector('.slider__thumb').removeEventListener('pointerup', moveSlider);
    }

    document.querySelector('.slider__thumb').addEventListener('pointerup', upSlider);
  }

  newEvent() {
    let stepValue = this.querySelector('.slider__value').innerHTML;
    let sliderChange = new CustomEvent('slider-change', {detail: stepValue, bubbles: true});
    this.dispatchEvent(sliderChange);
  }
}

