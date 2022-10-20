const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-ul')
    const navItems = document.querySelectorAll ('.nav-ul li')
  
   
   
    burger.addEventListener('click', () => {
        nav.classList.toggle ('nav-active');

        navItems.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navitemFade 0.5s ease forwards ${index / 4}s`
            }
        });

        burger.classList.toggle('toggle');
    });

}

navSlide();

let inputBlock = document.querySelector ('.input-form');
let addButton = document.querySelector ('.button-add');
let ulItems = document.querySelector ('.ul-items');
let ClearAll =  document.querySelector ('.clearall')

addButton.addEventListener ('click', function (){

    // Creating Li

    let value = inputBlock.value;
    let li = document.createElement ('li');
    li.classList.add("list");
    li.textContent = value;
   

    // create trash icon

    let deleteicon = document.createElement('i');
    deleteicon.classList.add("fa-solid", "fa-trash");
    li.appendChild(deleteicon);

    // Delete Function

    deleteicon.addEventListener("click", function(){
        li.remove();
    });


    // Insert li to Ul

    ulItems.appendChild(li);

    // Clear input

    inputBlock.value = " ";
    inputBlock.focus ();

    ClearAll.addEventListener("click", function(){
        ulItems.innerHTML = " ";
    })

})