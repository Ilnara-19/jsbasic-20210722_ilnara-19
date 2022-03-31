/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.elem = document.createElement('table');
    this.rowsName = rows;
    this.render();
    this.elem.addEventListener('click', this.closeButton);
  }

  render() {
    for (let i = 0; i < this.rowsName.length; i++) {
      this.elem.insertAdjacentHTML('beforeend', `
        <tr>
          <td>${this.rowsName[i].name}</td>
          <td>${this.rowsName[i].age}</td>
          <td>${this.rowsName[i].salary}</td>
          <td>${this.rowsName[i].city}</td>
          <td><button data-name = 'remove-button'>X</button></td>
        </tr>`);
    }
  }

  closeButton(event) {
    let target = event.target;
    if (target.dataset.name === 'remove-button') {
      let tr = target.closest('tr'); 
      tr.remove();
    }
  }
}
