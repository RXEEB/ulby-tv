import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import { privateRoutes, publicRoutes } from '../router';
import { AuthContext } from '../context';


export const AppRouter = () => {

    const { isAuth } = React.useContext(AuthContext)


    return (
        <Routes>
            {isAuth
                ? privateRoutes.map((route) => (
                    <Route
                        key={route.path}
                        element={route.element}
                        path={route.path}
                        exact={route.exact}
                    />
                ))
                : publicRoutes.map((route) => (
                    <Route
                        key={route.path}
                        element={route.element}
                        path={route.path}
                        exact={route.exact}
                    />
                ))}
            {/* <Route path="*" element={<Navigate to="/posts" />} /> */}
        </Routes>
    )
}

