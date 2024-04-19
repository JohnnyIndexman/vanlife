import './App.css';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  redirect,
  Outlet,
}
  from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Vans, { loader as vansPageLoader } from './Pages/Vans';
import Vandetails, { loader as detailsLoader } from './Pages/Vandetails';
import Layout from './Components/Layout';
import Dashboard from './Pages/Host/Dashboard'
import Reviews from './Pages/Host/Reviews'
import Income from './Pages/Host/Income'
import Hostlayout, {loader as hostLayerLoader} from './Pages/Host/Hostlayout';
import HostVans, { loader as hostVansLoader } from './Pages/Host/HostVans';
import HostVanDetail from './Pages/Host/HostVanDetail';
import Details from './Pages/Host/HostVans/Details';
import Pricing from './Pages/Host/HostVans/Pricing';
import Error from './Pages/Error';
import Mistake from './Components/Mistake';
import Login from './Pages/Login';
import Protect, { loader } from './Components/Protect';
import { authentication } from './Components/authentication';




function App() {
  
  const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<Layout />}
      errorElement={<Mistake />}
    >
      <Route path="*" element={<Error />} />
      <Route path='/' element={<Home />} />
      <Route path='login'
        element={<Login />} 
      />
      
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        {/*<Route path='vans' loader={async () => {
      try {
        await authentication();
        return <Outlet />;
      } catch (error) {
        console.log(error, 'errors');
        throw redirect('/login');
        return null;
      }
    }} element={<Protect />} >*/}
    <Route element={<Protect />}>
        <Route path='vans' element={<Vans />}
          loader={vansPageLoader} />
        <Route path='vans/:id'
          loader={detailsLoader}
          element={<Vandetails />} />
        <Route path='host'
         element={<Hostlayout />}
         loader={async () => {
          try {
            await authentication();
            return <Outlet />;
          } catch (error) {
            console.log(error, 'errors');
            throw redirect('/login');
            return null;
          }
        }}
         >
          <Route index 
          element={<Dashboard />}
           />
          <Route path='income'
           element={<Income />} />
          <Route path='reviews' 
          element={<Reviews />} 
          />
          <Route path='hostvan'
           element={<HostVans />}
            loader={hostVansLoader}
             />
          <Route path='hostvan/:id'
            element={<HostVanDetail />}
          >
            {/*<Route path='hostvan/:id' element={<HostVanLayout />} >*/}
            <Route index
             element={<Details />}
              />
            <Route path='pricing' 
            element={<Pricing />} 
            />
          </Route>

        </Route>
      </Route>
    </Route>
  ))
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
