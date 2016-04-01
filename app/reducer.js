export default function reducer(state='hello ', action) {
  switch (action.type) {
    case 'WORLD':
      return state + 'world';
    case 'JOSH':
      return state + 'josh';
    default:
      return state;
  }
}
