import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import styling dari tailwind
import "../src/assets/css/tailwind.css";

//import komponen

import Home from "./pages/Home/Home";
import Pesanan from "./pages/Pesanan/Pesanan";
import Paket from "./pages/Paket/Paket";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Icons from "./assets/css/icons";
import AdminLogin from "./pages/Admin/Login";
import Root from "./routes/Root";
import { NotFound } from "./pages/NotFound/NotFound";
import Login from "./pages/Admin/Login";
import { Dashboard } from "./pages/Admin/Dasboard";
import AdminRoot from "./routes/AdminRoot";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "pesanan",
        element: <Pesanan />,
      },
      {
        path: "paket",
        element: <Paket />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminRoot />,
    children: [
      {
        path: "/admin",
        element: <AdminLogin />,
      },
      {
        path: "pesanan",
        element: <Dashboard />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

// export default function App() {
//   return (
//     <BrowserRouter>
//       {/* Komponen navbar */}
//       <Navbar />
//       <Icons />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/pesanan" element={<Pesanan />} />
//         <Route path="/paket" element={<Paket />} />
//         <Route path="/admin" element={<AdminLogin />} />
//       </Routes>
//       {/* Komponen Footer */}
//       <Footer />
//     </BrowserRouter>
//   );
// }
