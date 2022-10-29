
let counter= 1;

let numCounter= ()=>{
  postMessage(counter);
  counter++;
  setTimeout(numCounter, 500);
}

numCounter();