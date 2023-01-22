import React from 'react';
import {createRoot} from "react-dom/client";
import {Application} from "./Application";
import {Header} from "./Header";
import './index.css'
const root=createRoot(document.querySelector('#root'));

root.render(
    <Application/>
)
