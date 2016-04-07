export default class ListItem {
  constructor(data, parent) {
    this.data = data;
    this.parent = parent;
    this.element;
    this.render();
  }

  render() {
    this.element = document.createElement('li');
    this.element.appendChild(document.createTextNode(`${this.data}`));
    this.element.addEventListener('click', () => {
      store.dispatch({type: 'WORLD'});
    });
    this.parent.appendChild(this.element);
  }
}
