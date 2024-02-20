const input = document.getElementById("text-input");
const buttonText = document.getElementById("check-btn");
const result = document.getElementById("result");



buttonText.addEventListener("click",() =>{

    const text = input.value;
    const textSplit = text.split("");
    const textReverse=[...text].reverse();
    let counter = 0;

    if(text.length !== 0){

        for(let i = 0 ; i < text.length;i++){

            if(textSplit[i]===textReverse[i] ){
                counter++;
            }
            if(counter === text.length ){
                //logica verdadera
                result.classList.remove("hidden");
                result.textContent=`${text} is a palindrome`
            }
            else if(counter !== text.length && i + 1  === text.length ){
                //logica falsa
               result.classList.remove("hidden");
               result.textContent=`${text} not a palindrome`
            }    
       }
    }
    else{
        alert('Please input a value');
    }

   

})









