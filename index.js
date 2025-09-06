
var nev = document.getElementById("new");
var roll = document.getElementById("roll");
var hold = document.getElementById("hold");
var player1 = document.getElementById("player1");
var scoreTotal1 = document.getElementById("scoreTotal-1");
var scoreCurrent1 = document.getElementById("scoreCurrent-1");
var player2 = document.getElementById("player2");
var scoreTotal2 = document.getElementById("scoreTotal-2");
var scoreCurrent2 = document.getElementById("scoreCurrent-2");
var im = document.getElementById("im");
// variabila pentru scorul curent din joc
var currentScore = 0;

// variabila pentru jucatorul curent
var currentPlayer = 1;


// variabila pentru scorurile totale
var totalScore = [0,0];

// variabila pentru a urmari daca jucam
var track = true;

// functie care schimba jucatorii
function playerChange(){
    currentScore = 0;
if(currentPlayer ===1){
  currentPlayer = 2 ; 
}else{
    currentPlayer = 1;
}
player1.classList.toggle("active");
player2.classList.toggle("active");

scoreCurrent1.innerHTML = "CURRENT 0" ;
scoreCurrent2.innerHTML = "CURRENT 0";

}


// functie care  schimba zarurile
roll.addEventListener("click",function(){
  if(track){
    var img = Math.trunc(Math.random()*6+1);
    im.classList.remove("imag");
    im.src = `./imagini/${img}.svg`;
     if( img === 1){
      playerChange()
     }else{
      currentScore = currentScore + img;
      document.getElementById( `scoreCurrent-${currentPlayer}`).innerHTML = `CURRENT ${currentScore}`;
     }
  }

})





// functie pentru a mentine scorul curent
hold.addEventListener("click",function(){
  if(track){
    if(currentPlayer == 1){
      totalScore[0] +=currentScore;
      scoreTotal1.innerHTML =totalScore[0];
      if(totalScore[0]>=100){
        track = false;
        player1.classList.add("winPlayer");
      }else{
        playerChange();
      }
      
        
    } else{
      totalScore[1] +=currentScore;
      scoreTotal2.innerHTML = totalScore[1];
      if(totalScore[1]>=100){
        track = false;
        player2.classList.add("winPlayer");
      }else{
        playerChange();
      }
    }
  }
})

// functie pentru restarta jocul

nev.addEventListener("click",function(){
  player1.classList.remove("winPlayer");
   player2.classList.remove("winPlayer");
   player1.classList.add("active");
   scoreTotal1.innerHTML = 0;
   scoreCurrent1.innerHTML ="CURRENT 0";
   scoreTotal2.innerHTML = 0;
   scoreCurrent2.innerHTML = "CURRENT 0";
   currentScore = 0;
   track = true;
   currentPlayer = 1;
   totalScore  = [0,0];

})









