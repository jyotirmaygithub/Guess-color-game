//------ lets try again with new zeal to solve this problem of code of this marvellous project-----//

var square = document.querySelectorAll(".square");
let colornumber = document.getElementById("number");
let correctortryagain = document.getElementById("its_yours");
let firstcontainer = document.querySelector(".first");
let removebelow = document.getElementsByClassName("adding");
let guessnumber = document.getElementById("adding_number")
let playagain = document.getElementById("play-again")
let guess = 0;
guessnumber.innerText = guess

//-----this array is like root from where every color and values are going into the existing elements of the html-------//
let colors = [];
// --------------------//

inserting_colors();
let selectedcolor = showingcolornumber();
colorsofsquare();
checkingmatchedcolors();

///----------this function is for new color button ----------//
function tryingwith() {
  window.location = location.href;
}
///----------------//

function inserting_colors() {
  console.log();
  for (let i = 0; i < square.length; i++) {
    colors.push(randomcolors());
  }
}

function showingcolornumber() {
  colornumber.textContent = colors[Math.floor(Math.random() * square.length)];
  return colornumber.textContent;
}

function colorsofsquare() {
  for (let j = 0; j < square.length; j++) {
    square[j].style.backgroundColor = colors[j];
    square[j].setAttribute("data-color", colors[j]);
  }
}

function randomcolors() {
  var r = randomcolorvalues();
  var g = randomcolorvalues();
  var b = randomcolorvalues();
  return "rgb(" + r + "," + g + "," + b + ")";
}

function randomcolorvalues() {
  return Math.floor(Math.random() * 256);
}

//---this function is one of the main function which is playing a role mathing of the color 
function checkingmatchedcolors() {
  for (let k = 0; k < square.length; k++) {
    square[k].onclick = function () {
      let getcolorfromelement = this.getAttribute("data-color");
      // by using  this keyword i am trying to get attribite inside from the element
      if (selectedcolor == getcolorfromelement) {
        correctortryagain.innerText = "Correct";
        playagain.innerText = "Play Again";
        playagain.addEventListener("mouseover",function(){
          playagain.style.backgroundColor = selectedcolor
        })
        firstcontainer.style.backgroundColor = selectedcolor;
        for (let z = 0; z < square.length; z++) {
          square[z].classList.remove("squarecolorsafterclick");
          square[z].style.backgroundColor = selectedcolor;
        }
      } else {
        correctortryagain.textContent = "Try again";
        this.classList.add("squarecolorsafterclick");
        guess++;
        guessnumber.innerText = guess;
      }
    };
  }
}
//-----------------------------//


//---------try this game with zeal and new colors--------//