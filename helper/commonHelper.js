import { globalState } from "../index.js";
import { highlight_state } from "./constants.js";
import { removeSelfHighlight } from "../render/main.js";

//checking for opponent based on color and piece
function checkForOpponent(id,color){
  const flatArr = globalState.flat();
  const opponentColor = color === "white" ? "black" : "white";
  for (let index = 0; index < flatArr.length; index++) {
    const el = flatArr[index];
    if(el.id == id){
      if(el.piece && el.piece.piece_N.includes(opponentColor) ){
        
        const element = document.getElementById(id);
        element.classList.add("captureColor");
        
        el.captureHighlight = "true";
        el.highlight_state = "true"; 
      }
      break;
    }
    
  }
  
}

//capturing the clicked redSqr(kill zone)
function captureOpponent(PieceYellow,redSqr){
  const prvSqr = document.getElementById(PieceYellow.curt_pos);
  const curtSqr = document.getElementById(redSqr. piece.curt_pos);
  curtSqr.innerHTML = prvSqr.innerHTML;
  prvSqr.innerHTML ="";
  removeSelfHighlight(PieceYellow);
  redSqr.piece = PieceYellow;
  const flatArr = globalState.flat();
  flatArr.forEach(element => {
    if(element.id == PieceYellow.curt_pos){
      element.piece =null;  
    }
  
  });
  PieceYellow.curt_pos = redSqr.id;

}
export {checkForOpponent,captureOpponent};

