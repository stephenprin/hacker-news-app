import {
    SET_LOADING,
    SET_STORIES,
    REMOVE_STORY,
    HANDLE_PAGE,
    HANDLE_SEARCH,
  } from './actions'
  

type stateType = {
    isLoading: boolean
}
type actionType = {
    type: string
}

const reducer = (state:stateType, action:actionType) => {
      if(action.type === SET_LOADING) {
          return {...state, isLoading: true}
    } 
    return state;
  }
  export default reducer