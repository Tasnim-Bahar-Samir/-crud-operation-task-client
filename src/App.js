
import { Toaster } from 'react-hot-toast';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import EditData from './Components/EditData/EditData';
import Home from './Components/Home/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/data/edit/:id',
      element: <EditData/>,
      loader: ({params})=> fetch(`http://localhost:5000/data/${params.id}`)
    }
  ])
  return (
    <div className="App">
      <Toaster/>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
