import { renderHighlight } from "../render/main.js";
function sqrbox(color, id, piece) {

  const highlightsqr = function(squareId){
    renderHighlight(this.id);
    this.highlighted = true;

  };
  return { color, id, piece,highlightsqr };

}


function sqrRow(rowId) {
  const squareRow = [];
  const abcd = ['a','b','c','d','e','f','g','h']


  if (rowId % 2 == 0) {
    abcd.forEach((element,index) => {
      if (index % 2 == 0){
      squareRow.push(sqrbox("white", element + rowId, null))
      }
      else{
        squareRow.push(sqrbox("black", element + rowId, null))
      }
    });
  }
  else {
    abcd.forEach((element,index) => {
      if (index % 2 == 0){
      squareRow.push(sqrbox("black", element + rowId, null))
      }
      else{
        squareRow.push(sqrbox("white", element + rowId, null))
      }
    });
  }
  return squareRow;


}
function initGame() {
  const rowID = ['1','2','3','4','5','6','7','8']

   return rowID.map(element => sqrRow(element));

  


}
export { initGame };