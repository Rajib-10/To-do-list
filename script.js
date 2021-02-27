let addtodobutton=document.getElementById("addtodo");
let todocontainer=document.getElementById("todos");
let inputfield=document.getElementById("textfield");

addtodobutton.addEventListener("click",function(){
var paragraph=document.createElement('p');
paragraph.classList.add('parastyle');
paragraph.innerText=inputfield.value;
todocontainer.appendChild(paragraph);
inputfield.value="";
paragraph.addEventListener("click",function(){
    paragraph.style.textDecoration = "line-through";
})
paragraph.addEventListener("dblclick",function(){
    todocontainer.removeChild(paragraph);
})
});