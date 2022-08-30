const photos = document.querySelector(".showpages"); 
const next = document.querySelector(".next");
const last = document.querySelector(".last"); 

const test = document.querySelector(".jsTest")

test.innerHTML="yo broski"




// photos.appendChild("p").classList.add("page page1");
// photos.appendChild("p").classList.add("page page2");
// photos.appendChild("p").classList.add("page page3");

const photosArr = document.getElementsByClassName("page"); 

// photosArr[0].innerHTML="hello world"; 
// photosArr[1].innerText="goodby world";
// photosArr[2].innerText="that was it?";

// photos.appendChild(photosArr[0]);



// photos.appendChild(photosArr[0])
let i=0;
let arr = ["a", "b", "c"];


next.addEventListener("click", () => {
    i++;
    test.innerHTML=arr[i];
    if(i === 3){
        i = 0;
        test.innerHTML=arr[i];
    }
})

last.addEventListener("click", () => {
    i--;
    test.innerHTML=arr[i];
    if(i === -1){
        i = 2;
        test.innerHTML=arr[i];
    }
})

photos.appendChild(test);
