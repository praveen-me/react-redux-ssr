import actions from "../actions/actions";

const initState = {
  user: {} 
}

function rootReducer(state = initState, action) {
  switch(action.type) {
    case "USER" : return {user : action.user}
    
    default: return state;
  }
}

export default rootReducer;