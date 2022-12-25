
import { Toaster } from 'react-hot-toast';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
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
