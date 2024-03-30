
import './App.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from './pages/HomePage';
import HeroDetailPage from './pages/HeroDetailPage';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element:
        <HomePage />,
    },
    {
      path: "/detail/:id",
      element: <HeroDetailPage />,
    },
  ]);



  return (
    <div className='test' >
      <RouterProvider router={router} />
    </div >
  );
}

export default App;
