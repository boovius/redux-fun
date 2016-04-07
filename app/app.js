import { createStore } from 'redux';
import reducer from './reducer';
import List from './components/list';

const store = createStore(reducer);

const render = () => {
  console.log(store.getState());
  document.getElementById('state').innerHTML = store.getState();
}

store.subscribe(render);
render();

const data = ['apple', 'banana'];
const container = document.getElementById('container');
new List(data, container);


document.getElementById('button').addEventListener('click', () => {
  store.dispatch({type: 'WORLD', text: 'button'});
});


