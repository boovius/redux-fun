import ListItem from './list_item';

export default class List {
  constructor (data, parent) {
    this.data = data;
    this.parent = parent;
    this.element;
    this.render();
  }

  render() {
    this.element = document.createElement('ul');
    this.element.id= 'list';

    this.data.forEach((item) => {
      new ListItem(item, this.element);
    });

    this.parent.appendChild(this.element);
  }
}
