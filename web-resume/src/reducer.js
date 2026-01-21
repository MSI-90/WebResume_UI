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
    case 'change-city':
      newState[action.payload.field] = action.payload.value;
      return newState;
    case 'change-dayOfBirth':
      newState[action.payload.field] = action.payload.value;
      return newState;
    case 'change-monthOfBirth':
      newState[action.payload.field] = action.payload.value;
      return newState;
    case 'change-yearOfBirth':
      newState[action.payload.field] = action.payload.value;
      return newState;
    case 'change-moving':
      newState[action.payload.field] = action.payload.value;
      return newState;
    case "change-sex":
      newState[action.payload.field] = action.payload.value;
      return newState;
    case 'citizenship':
      newState[action.payload.field] = action.payload.value;
      return newState;
    case 'change-maritalStatus':
      newState[action.payload.field] = action.payload.value;
      return newState;
    case 'change-children':
      newState[action.payload.field] = action.payload.value;
      console.log(newState);
      return newState;
    default:
      return state;
  }
}

const clone = (o) => {
  return JSON.parse(JSON.stringify(o));
}