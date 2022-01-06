import "./styles/style.css";
import { buildForecast } from "./buildForecast";

const el = document.querySelector("#inner");
buildForecast(el);
