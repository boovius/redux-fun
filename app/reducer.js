export default function reducer(state='hello ', action) {
  switch (action.type) {
    case 'WORLD':
      return state + action.text;
    case 'JOSH':
      return state + 'josh';
    default:
      return state;
  }
}
