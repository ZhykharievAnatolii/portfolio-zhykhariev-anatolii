import React from 'react';
import {createRoot} from "react-dom/client";
import {Application} from "./Application";

import 'bootstrap';
import './index.css'
const root=createRoot(document.querySelector('#root'));

root.render(
    <React.StrictMode>

        <Application />

    </React.StrictMode>
)
