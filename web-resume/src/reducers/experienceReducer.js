
export default function experienceReducer(state = {}, action) {
  let newState = {...state};
  switch (action.type) {
    case 'company':
      newState.company = action.payload;
      return newState;
    case 'jobTitle':
      newState.jobTitle = action.payload;
      return newState;
    case 'period-start-month':
      newState.periodStartMonth = action.payload.number;
      newState.periodStartMonthName = action.payload.name;
      return newState;
    case 'period-start-year':
      newState.periodStartYear = action.payload;
      return newState;
    case 'period-end-month':
      newState.periodEndMonth = action.payload.number;
      newState.periodEndMonthName = action.payload.name;
      return newState;
    case 'period-end-year':
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
    case 'editItem':
      newState = {...action.payload};
      return newState;
    case 'reset':
      newState = action.payload;
      return newState;
    case 'clearForm':
      newState = action.payload;
      return newState;
    default:
      return state;
  }
}