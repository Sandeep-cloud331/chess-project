import * as pieces from "../data/pieces.js";
import { highlight_state, Root_Div } from "../helper/constants.js";
import { globalState } from "../index.js";



//pawn move function
function moveElement(piece,id){
  const flatData = globalState.flat();
  flatData.forEach((el)=>{
    if(el.id == piece.curt_pos){
      delete el.piece;
    }
    if(el.id == id){
      el.piece = piece;
    }
  })
  //clearing piece highlights
  clearHighlight();
  removeSelfHighlight(piece);

  //adding piece to current sqr
  const prvPiece = document.getElementById(piece.curt_pos);
  const curtPiece = document.getElementById(id);
  piece.curt_pos = id;

  //removing piece from preivious sqr
  curtPiece.innerHTML = prvPiece.innerHTML;
  prvPiece.innerHTML ="";
  
}


function selfHighlight(piece){

  document.getElementById(piece.curt_pos).classList.add("backgroundColor");


}
function removeSelfHighlight(piece){
  if(piece){
    document.getElementById(piece.curt_pos).classList.remove("backgroundColor");
    
  }
  

}
function renderHighlight(squareId){
  const hSpan = document.createElement("span");
  hSpan.classList.add("highlight");
  document.getElementById(squareId).appendChild(hSpan); 
   
}

function clearHighlight(){
  const flatData = globalState.flat();
  // highlight_state = false;

  
  flatData.forEach((el)=>{
    if(el.captureHighlight){
      document.getElementById(el.id).classList.remove("captureColor")
      el.captureHighlight = false;
      
      
    }
    if(el.highlight){
      document.getElementById(el.id).innerHTML= '';
      el.highlight = false;
      
      
      
       
    }
    
  }) 
}




function pieceRender(data){
  data.forEach((row) => {
    row.forEach((square) => {
      if(square.piece){
        const squareEl = document.getElementById(square.id);

        // create piece
        const piece = document.createElement("img");
        piece.src = square.piece.img;
        piece.classList.add("piece")
        
        // insert piece into square element

        squareEl.appendChild(piece);
        
      }
      
      
      
    });
    
  });
  

}


//use only when game start 
function intitGameRender(data){
  data.forEach(Element => {
    const rwoEl = document.createElement("div")
    Element.forEach((square) => {
      const squareDiv = document.createElement("div");

      //pawn
      if(square.id[1] ==2){
        square.piece = pieces.blackPawn(square.id);
        
      }
      if(square.id[1] ==7){
        square.piece = pieces.whitePawn(square.id)

        
      }

      //Rook
      if(square.id == "h1" ||square.id == "a1" ){
        square.piece = pieces.blackRook(square.id)
      }
      if(square.id == "h8" ||square.id == "a8" ){
        square.piece = pieces.whiteRook(square.id)
      }

      //knight
      if (square.id == "b1" || square.id == "g1") {
        square.piece = pieces.blackKnight(square.id);
      }
      if (square.id == "b8" || square.id == "g8") {
        square.piece = pieces.whiteKnight(square.id);
      }

      //bishop
      if (square.id == "c1" || square.id == "f1") {
        square.piece = pieces.blackBishop(square.id);
      }

      if (square.id == "c8" || square.id == "f8") {
        square.piece = pieces.whiteBishop(square.id);

      }

      //queen
      if (square.id == "d1") {
        square.piece = pieces.blackQueen(square.id);
      }
      if (square.id == "d8") {
        square.piece = pieces.whiteQueen(square.id);
      }

      squareDiv.id = square.id;
      squareDiv.classList.add(square.color,"square")
      rwoEl.appendChild(squareDiv)
      

      //king
      if (square.id == "e1") {
        square.piece = pieces.blackKing(square.id);
      }
      if (square.id == "e8") {
        square.piece = pieces.whiteKing(square.id);
      }


    });
    rwoEl.classList.add("squareRow");
    Root_Div.appendChild(rwoEl);
  });
  pieceRender(data)
  
}




export {intitGameRender,renderHighlight,clearHighlight,selfHighlight,removeSelfHighlight,moveElement};