import React from "react";
import { BrowserRouter, Route, Routes, Navigate, Link } from "react-router-dom";
import Characters from "src/Components/Characters/Characters";
import CharactersProvider from "src/Common/contexts/CharactersProvider";
import Favorites from "src/Components/Favorites";
import NavBar from "src/Common/components/NavBar";
import routes from './routes';
import Home from "../Components/Home";

const Router = () => (
    <CharactersProvider>
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path={`${routes.CHARACTERS}/:id`} element={<Characters />} />
                <Route path={routes.FAVORITES} element={<Favorites />} />
                <Route path={routes.HOME} element={<Home />} />
                <Route path="*" element={<Navigate to={routes.HOME} />} />
            </Routes>
        </BrowserRouter>
    </CharactersProvider>
)

export default Router;