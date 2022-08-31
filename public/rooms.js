const photos = document.querySelector(".showpages"); 
const next = document.querySelector(".next");
const last = document.querySelector(".last"); 

const test = document.querySelector(".jsTest")

const bath = document.querySelector(".bath")
const balcony = document.querySelector(".balcony")
const kitchen = document.querySelector(".kitchen")

const photosArr = document.getElementsByClassName("page"); 

let i=0;
let arr = [balcony, kitchen, bath];

next.addEventListener("click", () => {
    console.log(i)
    arr[i].classList.remove("center");
    arr[i].classList.add("right");
    i++;
    if(i === arr.length){
        i = 0;
        arr[arr.length-1].classList.remove("center");
        arr[arr.length-1].classList.add("left");
        arr[i].classList.add("center")
    } else {
        arr[i].classList.add("center");
        arr[i+1].classList.add("right");
    }
})

last.addEventListener("click", () => {
    console.log(i);
    arr[i].classList.remove("center");
    arr[i].classList.add("left");
    i--;
    if(i === -1){
        i = arr.length-1;
        arr[0].classList.remove("center");
        arr[0].classList.add("left");
        arr[i].classList.add("center")
    } else {
        arr[i].classList.add("center");
        arr[arr.length-1].classList.add("left")
    }
})
