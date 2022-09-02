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
    arr[i].classList.add("left");
    i++;
    if(i === arr.length){
        i = 0;
        arr[i].classList.remove("right");
        arr[i].classList.add("center");
        arr[i+1].classList.remove("left");
        arr[i+1].classList.add("right");
    } else {
        arr[i].classList.remove("right");
        arr[i].classList.add("center");
        if (i === arr.length-1){
            arr[0].classList.remove("left");
            arr[0].classList.add("right");
        } else {
            arr[i+1].classList.remove("left");
            arr[i+1].classList.add("right");
        }
    }
})

last.addEventListener("click", () => {
    console.log(i);
    arr[i].classList.remove("center");
    arr[i].classList.add("toRightFromCenter");
    i--;
    if(i === -1){
        i = arr.length-1;
        arr[i].classList.remove("left");
        arr[i].classList.add("toCenter");
        arr[i-1].classList.remove("right");
        arr[i-1].classList.add("fromOffToLeft");
    } else {
        arr[i].classList.remove("left");
        arr[i].classList.add("center");
        if(i === 0){
            arr[arr.length-1].classList.remove("right");
            arr[arr.length-1].classList.add("left");
        } else {
            arr[i-1].classList.remove("right");
            arr[i-1].classList.add("left");
        }
    }
})
