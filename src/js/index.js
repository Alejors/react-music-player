import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import "../styles/index.css";

import Audioplayer from "./component/audioplayer.jsx";

ReactDOM.render(<Audioplayer />, document.querySelector("#app"));