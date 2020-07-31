let form = document.forms["to-do-feild"];
let ul = document.querySelector(".items");


form.addEventListener("submit", e =>{
    e.preventDefault()

     // creating element//
  
    let deleteBtn = document.createElement("button")
    let p = document.createElement("p");
    let list = document.createElement("li");
    let field = form.querySelector(".new-item").value;
  

    // add content//
    deleteBtn.textContent = "x";
    p.textContent = field;


    // add classes//
    deleteBtn.classList.add("right")


    // append to document//
    list.appendChild(p)
    list.appendChild(deleteBtn)
    ul.appendChild(list);
    
    list.addEventListener("click", e =>{
        e.target.style.backgroundColor = "#51DF70";
     })

    if(field == ""){
        list.style.display = "none";
    }
    


    // delete the lists//
    e.target.nextElementSibling.lastElementChild.lastElementChild.lastElementChild.addEventListener("click", e   =>{
        list.classList.add("delete")
     })

    
 


    //reset form//
    form.reset()
})






