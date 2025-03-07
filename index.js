// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name){
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield")
}

function destructivelyPrependCat(name){
    cats.unshift("Milo", "Otis", "Garfield")
}

function destructivelyRemoveLastCat(name){
    cats.pop("Milo", "Otis", "Garfield")
}
function destructivelyRemoveFirstCat(name) {
    cats.shift("Milo", "Otis", "Garfield")
}

function appendCat(name){
    return[...cats, name]
   }

function prependCat(name){
    return[name, ...cats]
}

function  removeLastCat(name){
    return cats.slice(0, -1)
}
function removeFirstCat(name){
    return cats.slice(1)
  }