//This information should be stored in 4 different objects. All of this objects should be stored in localstorage in advance. Their localstorage key should be their respective names.  For e.g Scope data will be stored in LocalStorage with key as "scope". ( Note: no capital letter in key )

//Information should be retrieved from localstorage only, avoid hard coding data.
//This information should be stored in 4 different objects. All of this objects should be stored in localstorage in advance. Their localstorage key should be their respective names.  For e.g Scope data will be stored in LocalStorage with key as "scope". ( Note: no capital letter in key )

//Information should be retrieved from localstorage only, avoid hard coding data.
let scopeData = {
  topic: [
    "Global scope: The default scope for all code running in script mode.",
    "Module scope: The scope for code running in module mode.",
    "Function scope: The scope created with a function.",
    "In addition, variables declared with let or const can belong to an additional scope.",
    "Block scope: The scope created with a pair of curly braces (a block).",
  ],
  video: "https://www.youtube.com/embed/bD-62OMzni0",
};
localStorage.setItem("scope", JSON.stringify(scopeData));

let hoistingData = {
  topic: [
    "Hoisting allows functions to be safely used in code before they are declared.",
    "that doing so can lead to unexpected errors, and is not generally recommended.",
    "One of the advantages of hoisting is that it lets we use a function before you declare it in your code.",
    "Hoisting works with variables too, so you can use a variable in code before it is declared and/or initialized.",
    "Until that point in the execution is reached the variable has its default initialization (undefined for a variable declared using var, otherwise uninitialized).",
  ],
  video: "https://www.youtube.com/embed/Fnlnw8uY6jo",
};
localStorage.setItem("hoisting", JSON.stringify(hoistingData));

let constructorFunctionsData = {
  topic: [
    "A constructor is a special function that creates and initializes an object instance of a class.",
    "In JavaScript, a constructor gets called when an object is created using the new keyword.",
    "The purpose of a constructor is to create a new object and set values for any existing object properties.",
    "In a constructor function this does not have a value. It is a substitute for the new object.",
    "The value of this will become the new object when a new object is created.",
  ],
  video: "https://www.youtube.com/embed/tV7ZqcB9J3Y",
};
localStorage.setItem(
  "constructorFunctions",
  JSON.stringify(constructorFunctionsData)
);

let prototypeData = {
  topic: [
    "Every object in JavaScript has a built-in property, which is called its prototype",
    "The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain",
    "The chain ends when we reach a prototype that has null for its own prototype.",
    " where it can add new variables and methods to the existing object",
    "prototype is a property of a Function object. It is the prototype of objects constructed by that function. __proto__ is an internal property of an object, pointing to its prototype.",
  ],
  video: "https://www.youtube.com/embed/nBs7t0j3x3c",
};
localStorage.setItem("prototype", JSON.stringify(prototypeData));

function showDataOnWindow(data) {
  document.getElementById("section2").innerHTML = "";
  let value = JSON.parse(localStorage.getItem(data));
  value.topic.map(function (topic) {
    let li = document.createElement("li");
    li.innerText = topic;

    document.getElementById("section2").appendChild(li);
  });
  let videoShow = `<iframe width="800" height="500"
  src="${value.video} ">
  </iframe>`;
  let videoBox = document.createElement("div");
  videoBox.innerHTML = videoShow;
  document.getElementById("section2").appendChild(videoBox);
}
