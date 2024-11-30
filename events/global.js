import { highlight_state, Root_Div } from "../helper/constants.js";
import { globalState } from "../index.js";
import { renderHighlight } from "../render/main.js";

import { clearHighlight } from "../render/main.js";
import { selfHighlight } from "../render/main.js";
import { removeSelfHighlight } from "../render/main.js";
import { moveElement } from "../render/main.js";
import { checkForOpponent } from "../helper/commonHelper.js";
import { captureOpponent } from "../helper/commonHelper.js";

let selfHighlightState  = null; 

let moveState = null;
//pawn logic 
function whitePawn({piece}){
  //remove highlight if clicked on same element twice
  if(piece == selfHighlightState){
    removeSelfHighlight(piece);
    clearHighlight();
    selfHighlightState=null;
    return;
  }

  //remove prev highlights and adding to curt piece
  removeSelfHighlight(selfHighlightState);
  selfHighlight(piece);
  clearHighlight();
  selfHighlightState = piece;
  moveState=piece;
  const current_pos = piece.curt_pos;
  const flatArr = globalState.flat();
  // highlight_state = true;


  //initial position of pawn 
  if(current_pos[1] == "7"){                            
    const hightLightSquareIds =[
      `${current_pos[0]}${Number(current_pos[1])-1}`,
      `${current_pos[0]}${Number(current_pos[1])-2}`,
    ];
    // clearHighlight();
    blackPieceCaptureIds();
    hightLightSquareIds.forEach((highlight) => {
      globalState.forEach((row) => {
        row.forEach(element => {
          if(element.id == highlight){
            element.highlight = true;
          }
        });
      });
      renderHighlight(highlight);
    });
    

  }


  //non-initial position of pawn
  else{
    const hightLightSquareIds =[
      `${current_pos[0]}${Number(current_pos[1])-1}`,
    ];
    // clearHighlight();
    hightLightSquareIds.forEach((highlight) => {
      globalState.forEach((row) => {
        row.forEach(element => {
          if(element.id == highlight){
            element.highlight = true;
          }
        });
      });
      renderHighlight(highlight);
      blackPieceCaptureIds();
    }); 
  }
  //capturing ids for white pawn
  function blackPieceCaptureIds(){
    const captureIds =[
      `${String.fromCharCode(current_pos[0].charCodeAt(0)+1)}${Number(current_pos[1])-1}`,
      `${String.fromCharCode(current_pos[0].charCodeAt(0)-1)}${Number(current_pos[1])-1}`,
    ];
    captureIds.forEach(element => {
      checkForOpponent(element,"white");
    });  
  }
}
function blackPawn({piece}){
  //remove highlight if clicked on same element twice
  if(piece == selfHighlightState){
    removeSelfHighlight(piece);
    clearHighlight();
    selfHighlightState=null;
    return;
  }

  removeSelfHighlight(selfHighlightState);
  selfHighlight(piece);
  clearHighlight();
  selfHighlightState = piece;
  const current_pos = piece.curt_pos;
  const flatArr = globalState.flat();
  moveState=piece;

  if(current_pos[1] == "2"){ 
    const hightLightSquareIds =[
      `${current_pos[0]}${Number(current_pos[1])+1}`,
      `${current_pos[0]}${Number(current_pos[1])+2}`,
    ];
    // clearHighlight();
   
    hightLightSquareIds.forEach((highlight) => {
      globalState.forEach((row) => {
        row.forEach(element => {
          if(element.id == highlight){
            element.highlight = true;
          }
        });
      });
      renderHighlight(highlight);
      whitePieceCaptureIds();
    }); 
  }
  else{
    const hightLightSquareIds =[
      `${current_pos[0]}${Number(current_pos[1])+1}`,
    ];
    // clearHighlight();
    hightLightSquareIds.forEach((highlight) => {
      globalState.forEach((row) => {
        row.forEach(element => {
          if(element.id == highlight){
            element.highlight = true;
          }
        });
      });
      renderHighlight(highlight);
      whitePieceCaptureIds();
      console.log(flatArr);
      
    }); 
  }
  function whitePieceCaptureIds(){
    const captureIds =[
      `${String.fromCharCode(current_pos[0].charCodeAt(0)+1)}${Number(current_pos[1])+1}`,
      `${String.fromCharCode(current_pos[0].charCodeAt(0)-1)}${Number(current_pos[1])+1}`,
    ];
    captureIds.forEach(element => {
      checkForOpponent(element,"black");
    });  
  }
}
function GlobalEvent(){
  Root_Div.addEventListener("click",function(event){
    if(event.target.localName == "img"){
      const clickId = event.target.parentNode.id;
      const flatArr = globalState.flat();
      const square = flatArr.find((el) => el.id == clickId);
      if(square.piece.piece_N == "whitePawn"){
        if(square.captureHighlight && moveState !=null){
          captureOpponent(moveState,square);
        }
        whitePawn(square);
        // console.log(globalState);
        
      }
      if(square.piece.piece_N == "blackPawn"){
        if(square.captureHighlight && moveState !=null){
          captureOpponent(moveState,square);
        }
        
        blackPawn(square);
        

      }
      
    }
    else{
      if(event.target.nodeName =="SPAN"){
        moveElement(moveState, event.target.parentNode.id);
        moveState = null;
        selfHighlightState=null; 
      }
      else if(event.target.firstChild){
        moveElement(moveState, event.target.id);
        moveState = null;
        selfHighlightState=null;
        
      }
      else{

        removeSelfHighlight(selfHighlightState);
        clearHighlight();
        selfHighlightState =null;
        
        
      }
      
      
      
    }
  
  })
  
}
export {GlobalEvent};