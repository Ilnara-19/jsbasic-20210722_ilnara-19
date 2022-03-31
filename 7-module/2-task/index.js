import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.render();
    this.elem.querySelector('.modal__close').addEventListener('click', this.closeButton);
    document.addEventListener('keydown', this.closeKey);
  }

  render() {
    this.elem = createElement(` 
    <div class="modal">
    <div class="modal__overlay"></div>

    <div class="modal__inner">
      <div class="modal__header">
        <!--Кнопка закрытия модального окна-->
        <button type="button" class="modal__close">
          <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
        </button>

        <h3 class="modal__title">
        Вот сюда нужно добавлять заголовок
        </h3>
      </div>
      <div class="modal__body">
        A сюда нужно добавлять содержимое тела модального окна
      </div>
    </div>
  </div>`);
  }

  setTitle(title) {
    this.title = title;
    this.elem.querySelector('.modal__title').innerHTML = this.title;
  }

  setBody(node) {
    this.node = node;
    this.elem.querySelector('.modal__body').innerHTML = '';
    this.elem.querySelector('.modal__body').append(this.node);
  }

  open() {
    document.body.classList.add('is-modal-open');
    document.body.append(this.elem);
  }

  close() {
    document.body.classList.remove('is-modal-open');
    document.body.querySelector('.modal').remove();
  }

  closeButton(event) {
    if (event.target.closest('.modal__close')) {
      document.body.classList.remove('is-modal-open');
      document.body.querySelector('.modal').remove();
    }
  }

  closeKey(event) {
    if (event.code === 'Escape') {
      document.body.classList.remove('is-modal-open');
      document.body.querySelector('.modal').remove();
    }
    document.removeEventListener('keydown', this.closeKey);
  }
}
