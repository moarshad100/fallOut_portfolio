import ReactDOM from 'react-dom/client'
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';


// Define the accessible routes, and which components respond to which URL
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     errorElement: <Error />,
//     children: [
//       {
//         index: true,
//         element: <Home />,
//       },
//       {
//         path: '/About',
//         element: <About />,
//       },
//       {
//         path: '/Blog',
//         element: <Blog />,
//       },
//       {
//         path: '/Contact',
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <RouterProvider router={router} />
// );

ReactDOM.createRoot(document.getElementById('root')).render(<App />);