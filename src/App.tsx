import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/home';
import Details from './Pages/details';

function App() {
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

export default App;
