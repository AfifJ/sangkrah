import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const isAuthenticated = () => {
  return sessionStorage.getItem("userId") !== null
}

const ProtectedRoute = () => {
  const isAuth = isAuthenticated()
  return isAuth ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoute
