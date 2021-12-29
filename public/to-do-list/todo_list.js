const toggleBtn=document.querySelector('.navbar__toogleBtn') ;
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons');

toggleBtn.addEventListener('click', () =>{
//클릭이될때마다 우리가 지정하고있는 이 함수를 호출해줘!
menu.classList.toggle('active');
icons.classList.toggle('active');

});



// Showing Date
const dateElement=document.getElementById("date");
const options={weekday : "long", month:"short", day:"numeric"};
const today=new Date();
const item = document.querySelector(".item");


dateElement.innerHTML = today.toLocaleDateString("en-US",options);


//clock
const clockSpan = document.querySelectorAll(".js-clock");

function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const time = `${hours < 10 ? `0${hours}`: hours} : ${
                    minutes < 10 ? `0${minutes}` : minutes}`;
    for (var i = 0; i < clockSpan.length; i++) {
        clockSpan[i].innerText = `${time}`;
    }
}

function init() {
    getTime();
    setInterval(getTime, 1000);

}


init()


'use strict';

let itemList = [];
let inputButton = document.querySelector(".input__button");
inputButton.addEventListener("click", addItem);



function addItem() {
    let item = document.querySelector(".item").value;
    if (item != "" && item != " ") {
        itemList.push(item);
        document.querySelector(".item").value = "";
        document.querySelector(".item").focus();
    }
    showList();
    return false;
}


//add an item to the list user hits enter

item.addEventListener("keypress",function(event){
   
    if(event.keyCode == 13 ){
        addItem();
    }

})


function showList() {
    let list = "<ul class=ul2>"
    for (let i = 0; i <itemList.length; i++) {
        list += "<li class=li2>" + itemList[i] + "<span class='close' id=" + i + ">&nbsp"  +"\u00D7" + "</span></li>"; //\u00d7은 곱셈기호를 말한다.
    }
    list += "</ul>";
    document.querySelector(".item__list").innerHTML = list;


    let deleteButtons = document.querySelectorAll(".close");
    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener("click", deleteItem);
    }
}

function deleteItem() {
    let id = this.getAttribute("id");
    itemList.splice(id, 1);
    showList();
}


let checkList = document.querySelector('.item__list');
checkList.addEventListener('click', event => {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
  }
});



