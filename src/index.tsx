import {createRoot}from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import "./styles/common.scss";
import Pages from "./pages/Pages";
import React from "react";
const root = createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
        <BrowserRouter>
            <Pages />
        </BrowserRouter>
);

