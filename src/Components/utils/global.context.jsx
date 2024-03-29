import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { reducer } from "../../reducers/Reducer";
import axios from 'axios'

export const initialState = {themes:{
  light: {
      font: 'black',
      background: '#e4f4fd'
  },
  dark: {
      font: 'white',
      background: '#464646',
  }
}, data: [], 
favs: JSON.parse(localStorage.getItem('favs')) || [], 
doctorSelected: {},
}

export const ContextGlobal = createContext();

const ContextProvider = ({ children }) => {
const [state, dispatch] = useReducer(reducer, initialState); 
const [theme, setTheme] = useState(initialState.themes.light);
const url = `https://jsonplaceholder.typicode.com/users` 

useEffect(() => {
localStorage.setItem('favs', JSON.stringify(state.favs))
}, [state.favs])

useEffect(() => {
axios(url)
.then(res => dispatch({type: 'GET_LIST', payload: res.data}))
}, [])

return (
  <ContextGlobal.Provider value={{state, dispatch, theme, setTheme}}>
    {children}
  </ContextGlobal.Provider>
  );
};

export default ContextProvider; 
export const useContextGlobal = () => useContext(ContextGlobal)