import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "../Components/Header";
import Dashboard from "./app-views/Dashboard";
import SideBar from "../Components/SideBar";
import { appPrefix } from "constants";
import Customers from "./app-views/Customers";
import CustomerDetails from "./app-views/Customers/customerDetails";
const Views = () => {
  return (
    <>
      <SideBar />
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={`/dashboard`} element={<Dashboard />} />
          <Route path={`/customers`} element={<Customers />} />
          <Route path={`/customer-details`} element={<CustomerDetails />} />
          <Route
            path={`/brands`}
            element={() => {
              <></>;
            }}
          />
          <Route
            path={`/users`}
            element={() => {
              <></>;
            }}
          />
          <Route
            path={`/support`}
            element={() => {
              <></>;
            }}
          />
          <Route
            path={`/`}
            element={<Navigate to={`${appPrefix}/dashboard`} replace />}
          />
        </Routes>
      </Suspense>
    </>
  );
};

export default Views;
