let input = document.getElementById("input");
let delete1 = document.getElementById("exit");
let button = document.getElementById("button");
let ul = document.getElementById("ul");
let counter = document.getElementById("counter");
let p = document.getElementById("p");
let span1 = document.getElementById("span1");
let span2 = document.getElementById("span2");


// let count = 0 ;
// let count1 = 0 ;

 





button.addEventListener("click", ()=>{
    
    // count += 1
    
    if(input.value == ""){
        alert("Please fill out the form!!!");
    }
    else{
        let button1 = document.createElement("button");
        button1.innerHTML = " ✘"
        ul.appendChild(button1);


        let list = document.createElement("li");
        list.innerHTML=input.value
        ul.appendChild(list);
        list.style.fontSize = "2rem"
        
        let button2 = document.createElement("button");
        button2.innerHTML = "✓ "
        ul.appendChild(button2);
        let empty = document.createElement("br");
        ul.appendChild(empty)
    
    
    button2.addEventListener("click", ()=>{
    
        // count1 += 1
        list.style.textDecoration = "line-through"
        list.style.color = "red"
        
        
    });
    button1.addEventListener("click", ()=>{
        // count -= 1
        // count1 -= 1
        
        ul.removeChild(list);
        ul.removeChild(button1);
        ul.removeChild(button2);

    });
    button2.addEventListener("dblclick", ()=>{
        

        list.style.textDecoration = "none"
        list.style.color = "white"
        
        
    });




    

    // p.innerHTML = `${count1} OUT  OF ${count} TASKS COMPLETED`
    // console.log(count);
    // console.log(count1);

    
    
    
    }
    input.value = " "
    
});


delete1.addEventListener("click", ()=>{
    window.location.reload(false)

});

