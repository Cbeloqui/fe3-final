import React from "react";
import { routes } from "./utils/routes";
import { useContextGlobal } from "./utils/global.context";
import MyLink from "./MyLink";

const Navbar = () => {
const { state, theme, setTheme } = useContextGlobal();
const handleChangeTheme = () => {
  if (theme === state.themes.dark) setTheme(state.themes.light);
  if (theme === state.themes.light) setTheme(state.themes.dark);
};

return (
  <nav>
    <img src="./public/DH.ico" alt="" className="logo"/>
    <div className="link-nav">
      <MyLink to={routes.home} name={"Home"}/>
      <MyLink to={routes.contact} name={"Contact"}/>
      <MyLink to={routes.favs} name={"Favs"}/>
    </div>
    <button
      style={{ background: theme.background, color: theme.font }}
      onClick={handleChangeTheme}> Change Theme ⇆🌗
    </button>
  </nav>
  );
};

export default Navbar;
