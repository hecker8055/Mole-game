let currMoleTile;
let currPlantTile;
let score = 0;
let gameOver = false;


window.onload=function(){
   setGame();
}

function setGame()
{
    //setting up the grid for the game board
    for(let i=0 ; i<9 ; i++)
    {
         //<div id = "0 to 8"></div>
         let tile = document.createElement("div");
         tile.id = i.toString();
         tile.addEventListener("click",selectTile);
         document.getElementById("inner-board").appendChild(tile);
    }
    setInterval(setMole,1800);
    setInterval(setPlant,2500);
}

function getRandomTile(){
    let num = Math.floor(Math.random()*9);
    return num.toString();
}

function setMole()
{
    if(gameOver){
        return;
    }
    if(currMoleTile)
    {
        currMoleTile.innerHTML= "";
    }
    let mole = document.createElement("img");
    mole.src = "./assets/Monty-mole.png";

    let num = getRandomTile();
    
    if(currPlantTile && currPlantTile.id == num)
    {
        return;
    }

    currMoleTile = document.getElementById(num); 
    currMoleTile.appendChild(mole);

}



function setPlant()
{
    if(gameOver){
        return;
    }
    if(currPlantTile)
    {
        currPlantTile.innerHTML = "";
    }
    let plant = document.createElement("img");
    plant.src="./assets/pirhana.png";

    let num = getRandomTile();
    if(currMoleTile && currMoleTile.id == num)
    {
        return;
    }
    currPlantTile = document.getElementById(num);
    currPlantTile.appendChild(plant);
}

function selectTile(){
    if(gameOver){
        return;
    }
  if(this == currMoleTile){
    score = score +10;
    document.getElementById("Current-Score").innerText = score.toString();
  }

  else if(this == currPlantTile){
    document.getElementById("Current-Score").innerText = "Game Over " + score.toString();
    gameOver=true;
  }
    
}