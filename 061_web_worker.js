
const start= document.querySelector(".start");
const stop= document.querySelector(".stop");
const counter= document.querySelector(".counter");

let worka= "";

let startWorker= ()=>{
  if(!(typeof(worka)== undefined)){
    worka= new Worker("061_worker.js");
    console.log("Worker process started"); 

    worka.onmessage= function(event){     //The event can go here or there
      counter.textContent= event.data;
    }
    //The event can go here or there
  }

}

let stopWorker= ()=>{
  worka.terminate();
  worka= undefined;
  console.log("Worker process terminated");  
}

start.addEventListener("click",()=>{
  startWorker();
  start.disabled= true; //Disable button or you can click and cause conflits
});
stop.addEventListener("click", ()=>{
  start.disabled= false;
  stopWorker();
});