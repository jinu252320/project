let i = 0;
var counter1 = document.getElementById("c1")
const interval = setInterval(() => {
    i+=1;
    counter1.textContent = `${i}+`
    if(i==1000){
        clearInterval(interval)
    }
    
},10)

let j = 0;
var counter2 = document.getElementById("c2")
const interval2 = setInterval(() => {
    j+=1;
    counter2.textContent = `${j}+`
    if(j==1150){
        clearInterval(interval2)
    }
    
},10)


let k = 0;
var counter3 = document.getElementById("c3")
const interval3 = setInterval(() => {
    k+=1;
    counter3.textContent = `${k}+`
    if(k==1050){
        clearInterval(interval3)
    }
    
},10)
