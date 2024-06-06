import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/home';
import Details from './Pages/details';
import './App.css';
import { useContext, useEffect } from 'react';
import { MyContext } from './Context/contextProvider';
import { getPokeAPI } from './api';

export default () => {
  const {
    setListPokemons,
    setAllPokemons,
    loading,
    setLoading
  } = useContext(MyContext)

  useEffect (() => {
    getPokeAPI().then((results) => {
      console.log("foi");
      
      setAllPokemons(results);
      setListPokemons(results);
      if (loading) setLoading(false);
    })
  }, []);


  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/details/:namePokemon",
      element: <Details />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

