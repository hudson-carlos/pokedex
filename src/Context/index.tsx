// import React, { createContext, useState } from "react";

// interface myState {
//   listPokemon: any[];
//   page: number;
//   loading: boolean;
// }

// type PropsUserContext = {
//   state: myState;
//   setState: React.Dispatch<React.SetStateAction<myState>>
// }

// const defaultValue = {
//   state: {
//     listPokemons: [],
//     page: 0,
//     loading: false,
//   },
//   setState: () => {},        
// }

// export const context = createContext(defaultValue);

// export const contextProvider: React.FC = ({ childrem }) => {
//   const [listPokemons, setListPokemons] = useState<any[]>(defaultValue.state.listPokemons);
//   const [page, setPage] = useState<number>(defaultValue.state.page);  
//   const [loading, setLoading] = useState<boolean>(defaultValue.state.loading);

//   return (
//     <context.Provider
//           value={{
//             listPokemons,
//             page,
//             loading,
//             setListPokemons,
//             setPage,
//             setLoading,
//             }}
//         >
//           {childrem}
//         </context.Provider>
//   );  
// }


export default function() { return ( <h2>teste</h2>)}