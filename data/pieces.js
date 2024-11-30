//black pieces
function blackPawn(curt_pos){
  return{
    curt_pos,
    img:"assets/pieces/black/pawn.png",
    piece_N : "blackPawn"
    
  };

};



function blackRook(curt_pos){
  return{
    curt_pos,
    img:"assets/pieces/black/rook.png",
    piece_N : "blackRook"
  };

};


function blackBishop(curt_pos){
  return{
    curt_pos,
    img:"assets/pieces/black/bishop.png",
    piece_N : "blackBishop"
    
  };

};


function blackKnight(curt_pos){
  return{
    curt_pos,
    img:"assets/pieces/black/knight.png",
    piece_N : "blackKnight" 
    
  };

};


function blackQueen(curt_pos){
  return{
    curt_pos,
    img:"assets/pieces/black/queen.png",
    piece_N : "blackQueen" 
    
  };

};


function blackKing(curt_pos){
  return{
    curt_pos,
    img:"assets/pieces/black/king.png",
    piece_N : "blackKing" 
    
  };

};


//white pieces



function whitePawn(curt_pos){

  return{
    curt_pos,
    img:"assets/pieces/white/pawn.png" ,
    piece_N : "whitePawn"
  };
}



function whiteRook(curt_pos){

  return{
    curt_pos,
    img:"assets/pieces/white/rook.png",
    piece_N : "whiteRook"
     
  };
}


function whiteBishop(curt_pos){

  return{
    curt_pos,
    img:"assets/pieces/white/bishop.png",
    piece_N : "whiteBishop" 
  };
}


function whiteKnight(curt_pos){

  return{
    curt_pos,
    img:"assets/pieces/white/knight.png",
    piece_N : "whiteKnight" 
  };
}


function whiteQueen(curt_pos){

  return{
    curt_pos,
    img:"assets/pieces/white/queen.png",
    piece_N : "whiteQueen" 
  };
}


function whiteKing(curt_pos){

  return{
    curt_pos,
    img:"assets/pieces/white/king.png",
    piece_N : "whiteKing" 
  };
}
export {
        whitePawn,
        whiteQueen,
        whiteKnight,
        whiteBishop,
        whiteRook,
        whiteKing,
        blackPawn,
        blackQueen,
        blackRook,
        blackBishop,
        blackKing,
        blackKnight

      };