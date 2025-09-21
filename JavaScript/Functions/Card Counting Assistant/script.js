let count = 0;

function cc(card){

  if (card === 2 || card === 3 || card === 4 || card === 5 || card === 6){
    count ++
  } else if (card === 7 || card === 8 || card === 9){
  } else if ( card === 10 || card == "J" || card == "Q" || card == "K" || card == "A"){
    count --
  }


  if (count > 0){
    return count + " Bet";
  } else if (count <= 0){
    return count + " Hold";
  }
}

console.log(cc(5)); // 1 Bet
console.log(cc(9)); // 1 Bet
console.log(cc(10)); // 0 Hold
console.log(cc("Q")); // -1 Hold
