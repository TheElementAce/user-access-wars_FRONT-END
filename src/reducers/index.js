import { combineReducers } from "redux";

// Reducer
const menuReducer = (globalMenuState = {}, action) => {
  if (
    action.type === "TOGGLE_LEFT_MENU" &&
    globalMenuState.leftMenuOpen !== true
  ) {
    return {
      ...globalMenuState,
      leftMenuOpen: true
    };
  } else if (
    action.type === "TOGGLE_RIGHT_MENU" &&
    globalMenuState.rightMenuOpen !== true
  ) {
    return {
      ...globalMenuState,
      rightMenuOpen: true
    };
  }

  return {
    leftMenuOpen: false,
    rightMenuOpen: false
  };
};

export default combineReducers({
  menuReducer: menuReducer
});
