import React from "react";
import { useContextGlobal } from "./utils/global.context";
import { Link } from "react-router-dom";


const MyLink = ({to, name}) => {

    const {theme} = useContextGlobal();

  return (
    <Link to={to} style={{ color: theme.font }}>
      <h3>{name}</h3>
    </Link>
  );
};

export default MyLink;
