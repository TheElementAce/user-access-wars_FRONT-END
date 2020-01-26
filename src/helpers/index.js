import { toggleLeftMenu, toggleRightMenu } from "../actions";

const toggleDrawer = (event, func) => {
  if (
    event &&
    event.type === "keydown" &&
    (event.key === "Tab" || event.key === "Shift")
  ) {
    func();
  }

  func();
};
