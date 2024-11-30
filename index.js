import { initGame } from "./data/data.js";
import { intitGameRender } from "./render/main.js";
import { GlobalEvent } from "./events/global.js";

const globalState = initGame();

intitGameRender(globalState);  
GlobalEvent();

export {globalState};