export default function reducer(state, action) {
  let newState = {...state};
  switch(action.type) {
    case 'add_photo':
      newState.photo = action.payload;
      return newState;
    case 'set_photo':
      newState.photo = action.payload.photoId;
      newState.photoLink = action.payload.photoLink;
      return newState;
    case 'added_name':
      newState[action.payload.field] = action.payload.value;
      return newState;
    case 'added_lastName':
      newState[action.payload.field] = action.payload.value;
      return newState;
    case 'added_female':
      newState[action.payload.field] = action.payload.value;
      return newState;

    default:
      return state;
  }
}

const clone = (o) => {
  return JSON.parse(JSON.stringify(o));
}