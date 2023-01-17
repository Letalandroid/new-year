import { countdown } from "./timeRestant.js";
import { year } from "./year.js";

countdown(`Jan 01 ${ year } 00:00:00`, "time", "Feliz Año Nuevo!!");

document.querySelector('#year').innerHTML = year;