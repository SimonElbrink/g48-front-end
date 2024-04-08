import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import NameList from "./ex4_props/NameList";
import App from "./ex2_functions/App.js";
import Counter from "./ex5_state/Counter.js";


const root = ReactDOM.createRoot(document.getElementById("root"));

//const names = ["Simon Elbrink", "Mehrdad Javan", "Marcus Gudmundsen"];

/* <NameList names={names} />*/

root.render(
    <Counter/>
)