'use strict';

class TableView {
  size = {
    cols: 6,
    rows: 6,
  };
  refs = {
    table: document.querySelector('.table'),
    colorPicker: document.querySelector('.color-picker'),
  };

  variantNumber = 55 % (this.size.rows * this.size.cols);
  preventClick = false;
  timer = null;
  clickEventDelay = 100;

  constructor() {
    this.init();
  }

  generateCells() {
    let counter = 1;

    for (let i = 0; i < this.size.rows; i++) {
      const row = document.createElement('tr');

      for (let j = 0; j < this.size.cols; j++) {
        const col = document.createElement('td');
        col.dataset['id'] = counter;
        col.textContent = counter;
        row.appendChild(col);
        counter++;
      }
      this.refs.table.appendChild(row);
    }
  }

  getRandomColor() {
    const red = this.getRandomNumber(256);
    const green = this.getRandomNumber(256);
    const blue = this.getRandomNumber(256);

    return `rgb(${red},${green},${blue})`;
  }

  getRandomNumber(max) {
    return Math.floor(Math.random() * max);
  }

  handleCellMouseOver(e) {
    e.target.style.backgroundColor = this.getRandomColor();
  }

  handleCellClick(e) {
    e.target.style.backgroundColor = this.refs.colorPicker.value;
  }

  handleDbClick() {
    const cells = this.refs.table.querySelectorAll('td');
    const color = this.getRandomColor();

    cells.forEach((cell) => {
      const cellNumber = Number(cell.dataset['id']);

      if (cellNumber !== this.variantNumber) {
        cell.style.backgroundColor = color;
      }
    });
  }

  init() {
    this.generateCells();

    const myCell = this.refs.table.querySelector(
      `td[data-id="${this.variantNumber}"]`
    );

    myCell.addEventListener('dblclick', () => {
      clearTimeout(this.timer);
      this.preventClick = true;
      this.handleDbClick();
    });

    myCell.addEventListener('click', (e) => {
      this.timer = setTimeout(() => {
        if (!this.preventClick) {
          this.handleCellClick.call(this, e);
        }

        this.preventClick = false;
      }, this.clickEventDelay);
    });

    myCell.addEventListener('mouseover', this.handleCellMouseOver.bind(this));
  }
}

const tableView = new TableView();
