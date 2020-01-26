// Action Creator

/**
 * MENUS
 */
export const getDefaultMenuState = () => {
  return {
    type: "GET_DEFAULT_MENU_STATE"
  };
};

export const toggleLeftMenu = () => {
  // Return an Action
  return {
    type: "TOGGLE_LEFT_MENU"
  };
};

export const toggleRightMenu = () => {
  // Return an Action
  return {
    type: "TOGGLE_RIGHT_MENU"
  };
};
