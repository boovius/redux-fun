import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer);
console.log(store.getState());

store.dispatch({type: 'WORLD'});
console.log(store.getState());

store.dispatch({type: 'JOSH'});
console.log(store.getState());
