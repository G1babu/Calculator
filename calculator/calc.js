// const add=(a,b)=> alert(a+b);
// // const add=(a,b)=> a-b;
// // const add=(a,b)=> a*b;
// // const add=(a,b)=> a/b;


function getVal(val){
     document.getElementById("result").value+=val

}

function clr(){
     document.getElementById("result").value="";

}

function slove(){
    let x=document.getElementById("result").value;
    return document.getElementById("result").value=eval(x);
}


document.addEventListener("keydown",(e)=>e.key==="Enter" && slove())
document.addEventListener("keydown",(e)=>e.key === "Delete" && clr())
