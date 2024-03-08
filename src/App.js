import './App.css';
import { BrowserRouter, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Login from './components/Login';
import PrivateRoute from './utils/PrivateRoute';

const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  { path: "/", element: <PrivateRoute component={Home} /> },
  { path: "/about", element: <PrivateRoute component={About} /> },
  { path: "/dashboard", element: <PrivateRoute component={Dashboard} /> },
  { path: "*", element: <PrivateRoute component={NoMatch} /> },
]);

function App() {

  return (
    <RouterProvider router={router} />
  );

  // return (
  //   <BrowserRouter>
  //     <Routes>
  //         <PrivateRoute index element={<Home />} />
  //       {/* <Route path="/" element={<Layout />}> */}
  //         {/* <Route index element={<Home />} /> */}
  //         {/* <Route path="about" element={<About />} /> */}
  //         {/* <Route path="dashboard" element={<Dashboard />} /> */}
  //         {/* <Route path="login" element={<Login />} /> */}


  //         {/* Using path="*"" means "match anything", so this route
  //               acts like a catch-all for URLs that we don't have explicit
  //               routes for. */}
  //         {/* <Route path="*" element={<NoMatch />} /> */}
  //       {/* </Route> */}
  //     </Routes>
  //   </BrowserRouter>
  // );
}


function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}


export default App;
