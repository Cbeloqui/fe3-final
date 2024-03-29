import React from "react";
import { useContextGlobal } from "./utils/global.context";
import MyLink from "./MyLink";

const Card = ({ item }) => {
const { state, dispatch, favs } = useContextGlobal();
console.log(favs);

const addFav = () => {
    const esFav = state.favs.some((dentist) => dentist.id === item.id);

    if (esFav) {
      alert("Ya has agregado a la lista de favoritos a este doctor.");
    } else {
      dispatch({ type: "ADD_FAV", payload: item });
      alert("El doctor se agregó exitosamente a tu lista.");
    }
  };

return (
  <div className="card">
    <img src="./public/images/doctor1.png" alt="" />
    <MyLink to={"/detalle/" + item.id} name={item.name} />
    <h5>{item.username}</h5>
    <button onClick={addFav} className="favButton">
    𝖆𝖉𝖉 𝖋𝖆𝖛𝖔𝖗𝖎𝖙𝖊𝖘 ✔
    </button>
  </div>
  );
};

export default Card;