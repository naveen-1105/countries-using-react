import {createRoot} from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Contact from './componenets/contact';
import Home from './componenets/Home';
import CoutryDetails from './componenets/CoutryDetails';

let router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
        {
        path: '/',
        element: <Home />, 
        },
        {
        path: '/contact',
        element: <Contact />, 
        },
        {
        path: '/:country',
        element: <CoutryDetails />, 
        }
    ]
  },
]);

const root = createRoot(document.querySelector('#root'))

root.render(<RouterProvider router={router} />)