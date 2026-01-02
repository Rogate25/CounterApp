let prev = document.getElementById("entries-p")
let number = document.getElementById("num");
let count= 0;

function increment(){
    count += 1;
    number.textContent = count
}

function save(){
    let countstr = count + " - " 
    prev.textContent += countstr

    number.textContent = 0;
    count = 0;
}