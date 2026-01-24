
export default function experienceReducer(state = {}, action) {
  let newState = {...state};
  switch (action.type) {
    case 'company':
      newState.company = action.payload;
      return newState;
    case 'jobTitle':
      newState.jobTitle = action.payload;
      return newState;
    case 'periodStartMonth':
      newState.periodStartMonth = action.payload;
      return newState;
    case 'periodStartYear':
      newState.periodStartYear = action.payload;
      return newState;
    case 'periodEndMonth':
      newState.periodEndMonth = action.payload;
      return newState;
    case 'periodEndYear':
      newState.periodEndYear = action.payload;
      return newState;
    case 'jobResponsibilities':
      newState.jobResponsibilities = action.payload;
      return newState;
    case 'jobAchievements':
      newState.jobAchievements = action.payload;
      return newState;
    case 'workNow':
      newState.workNow = action.payload;
      return newState;
    default:
      return state;
  }
}