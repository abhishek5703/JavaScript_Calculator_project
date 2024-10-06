let input = document.getElementById('input_box');  // getting input box by id 
let buttons = document.querySelectorAll('button');  // getting all buttons 

let string = "";   // it will store the result and display it
let arr = Array.from(buttons) ;  // it is an array who stores all the buttons form buttons variable, we make it to apply loop
arr.forEach(button =>{   // for each button
    button.addEventListener('click',(e)=>{  // e is basically the instance of the current clicked button
        if(e.target.innerHTML == '='){   // if the clicked button is '='
            string = eval(string);   // eval(evaluate) is an inbuilt function who evaluates all things in our string
            input.value = string ;    // the evaluated value will be shown on the input box 
        }

        else if(e.target.innerHTML == 'AC'){  // if we click on AC button then ans string will get empty
            string = "";
            input.value = string ;    // empty screen will be shown on input display 
        }
        else if(e.target.innerHTML == 'DEL'){   // if we click on DEL button 
            string = string.substring(0,string.length-1);  // it will store a substring form the current string 
            input.value = string ;   // it exclude the (length-1)th index 
        }
        else{
            string = string + e.target.innerHTML ;
            input.value = string ;
        }

    })
})
