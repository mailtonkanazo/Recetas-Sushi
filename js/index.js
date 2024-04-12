let darkOff =false;
const btnDark =document.querySelector("#dark");
const cardItem =document.querySelectorAll(".card");
btnDark.addEventListener("click", (event)=>{
    event.preventDefault();
    if(darkOff){
        document.body.style.backgroundColor="#f3e5d8";
        document.body.style.color="black";
        cardItem.forEach(item=>item.style.backgroundColor="#fff");
        cardItem.forEach(item=>item.style.color="black");
        darkOff=false;
    }else{
        document.body.style.backgroundColor="black";
        document.body.style.color="white";
        cardItem.forEach(item=>item.style.backgroundColor="#2f2f2f");
        cardItem.forEach(item=>item.style.color="white");
        darkOff=true;
    }
})