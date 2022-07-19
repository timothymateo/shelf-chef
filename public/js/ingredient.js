// global array to hold ingredients 
let ingrArray = [];

// global variables ======================================




//========================================================

//=============Add Ingredient Button===============
// event listener to push the ingredient into the empty array 
const addToList = async () => {

  let ingredient = document.getElementById('ingredientName').value.trim();
  // if they enter a blank text field, it will do nothing
  if (ingredient === "") {
    return;
  } else {
    ingrArray.push(ingredient);
    console.log(ingrArray);
    ingredientName.value = "";
  }

  ingrBoard.innerHTML = "";
  
  // this for loop will dynamically create li's 
  for (let i = 0; i < ingrArray.length; i++) {
    let list = ingrArray[i];

    // creates a li 
    let li = document.createElement("li");
    
    // creates attributes to append to the li 
    li.setAttribute("data-index", i);
    li.textContent = list;

    // creates buttons 
    let button = document.createElement("button");

    // set the text of the button to be equal to the setItem 
    button.textContent = 'Delete';
  

    // appends the following elements to each other 
    li.appendChild(button);
    ingrBoard.appendChild(li);
    }
}

// addToList.addEventListener("click", () => {

  
//   let ingredient = document.getElementById('addIngr').value.trim();
// // if they enter a blank text field, it will do nothing
// if (ingredient === "") {
//   return;
// } else {
//   ingrArray.push(ingredient);
//   // console.log(ingrArray);
//   addIngr.value = "";
// }

// createLi();
// })
//=======================================

//=============Create Ingredient==============
function createLi(){

  //   ingrBoard.innerHTML = "";
  
  // // this for loop will dynamically create li's 
  // for (let i = 0; i < ingrArray.length; i++) {
  //   let list = ingrArray[i];

  //   // creates a li 
  //   let li = document.createElement("li");
    
  //   // creates attributes to append to the li 
  //   li.setAttribute("data-index", i);
  //   li.textContent = list;

  //   // creates buttons 
  //   let button = document.createElement("button");

  //   // set the text of the button to be equal to the setItem 
  //   button.textContent = 'Delete';
  

  //   // appends the following elements to each other 
  //   li.appendChild(button);
  //   ingrBoard.appendChild(li);
  //   }
}
//=======================================

//============Search Recipe Button================
// search button feature to invoke api function
const searchBtn = async () => {
     // variable to hold concatenated search list 
let ingrList = "";

// iterate through array 
for (let i = 0; i < ingrArray.length; i++){
   ingrList += ingrArray[i] + ",+";
}

// invokes function with user input in proper syntax for api 
getRecipes(ingrList);

//    clears the input text field 
    addIngr.value = "";
}
// searchBtn.addEventListener("click", function() {

//     // variable to hold concatenated search list 
// let ingrList = "";

// // iterate through array 
// for (let i = 0; i < ingrArray.length; i++){
//    ingrList += ingrArray[i] + ",+";
// }

// // invokes function with user input in proper syntax for api 
// getRecipes(ingrList);

// //    clears the input text field 
//     addIngr.value = "";
// });
//=======================================

//=========Delete Ingredient Button==============
// delete button feature
const deleteIngr = async (event) => {
  let element = event.target;
    
    if (element.matches("button") === true) {
      let index = element.parentElement.getAttribute("data-index");
      ingrArray.splice(index, 1);
  
    //   reinvoke function to create list again 
      createLi();
    }
}
// ingrBoard.addEventListener("click", (event) => {
//     let element = event.target;
    
//     if (element.matches("button") === true) {
//       let index = element.parentElement.getAttribute("data-index");
//       ingrArray.splice(index, 1);
  
//     //   reinvoke function to create list again 
//       createLi();
//     }
//   });
//=======================================


//===========Clear Button===============
  // no html assigned to this yet 
// clears array and list 
const clearBtn = async () => {
  ingrArray = [];
  ingrBoard.innerHTML = "";
}
// clearBtn.addEventListener("click", () => {
//   ingrArray = [];
//   ingrBoard.innerHTML = "";

//   })

// button add ingredient
document
.getElementById('add-button')
.addEventListener("click", addToList);

//button to get recipes
document
.getElementById('start-button')
.addEventListener("click", searchBtn);

//button to delete ingredients
document
.getElementById('ingrBoard')
.addEventListener("click", deleteIngr);

document
.getElementById('clear-button')
.addEventListener("click", clearBtn);