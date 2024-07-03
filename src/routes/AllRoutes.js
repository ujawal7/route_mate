import { Routes, Route, Navigate } from "react-router-dom";

import {
  Home,
  Admin,
  ProductList,
  ProductDetail,
  Contact,
  ContactIn,
  ContactEu,
  ContactUs,
  PageNotFound,
} from "../pages/index";

export const AllRoutes = () => {
  const user = false;

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="products" element={<ProductList />}></Route>

        {/* this is how we can access indivisual products dynamic routing, single id will also work*/}
        {/* <Route path="products/:name/:id" element={<ProductDetail />}></Route> */}
        <Route path="products/:id" element={<ProductDetail />}></Route>

        {/* This is how nest the route, Contact will be common to access this
          in, eu and us we have to use "Outlet" in Contact component*/}
        <Route path="contact" element={<Contact />}>
          <Route path="in" element={<ContactIn />} />
          <Route path="eu" element={<ContactEu />} />
          <Route path="us" element={<ContactUs />} />
          {/* if they select any other country than we have this path we can give any components */}
          <Route path="*" element={<ContactUs />} />
        </Route>

        {/* Navigate is used to move in components like here if we go to /admin it will redirect to /products */}
        <Route
          path="/admin"
          element={user ? <Admin /> : <Navigate to="/products" />}
        />

        {/* we can use props also like this and access in different component {} */}
        <Route path="*" element={<PageNotFound title="404" />}></Route>
      </Routes>
    </>
  );
};
