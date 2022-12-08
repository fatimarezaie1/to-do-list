let AddtoButton= document.getElementById('addtodo');
let TodoContainer = document.getElementById('todocontainer');
let InputFeild = document.getElementById('inputfeild');
AddtoButton.addEventListener('click',function(){
var paragraph = document.createElement('p');
paragraph.classList.add('paragraph-styling');
paragraph.innerText = InputFeild.value;
    TodoContainer.appendChild(paragraph);
    InputFeild.value=" ";
    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration='line-through'
    })
    paragraph.addEventListener('dblclick',function(){
        TodoContainer.removeChild(paragraph);
        
    })
})
