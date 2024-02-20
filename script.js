const input = document.getElementById("text-input");
const buttonText = document.getElementById("check-btn");
const result = document.getElementById("result");



buttonText.addEventListener("click",() =>{

    const text = input.value;
    const textUpper = text.toUpperCase();
   
   
    let counter = 0;

    if(text.length !== 0){

        let regex = /[A-Za-z0-9]/ig;
        const matches = textUpper.match(regex);
        const textReverse=matches.slice().reverse();
        console.log(matches);
        console.log(textReverse);
   

        for(let i = 0 ; i < matches.length;i++){

            if(matches[i]==textReverse[i]){
                counter++;
                console.log(counter);
                
            }
            else{
                result.classList.remove("hidden");
                result.textContent=`${textUpper} is not a palindrome`
               
            }
            if(counter === matches.length ){
                //logica verdadera
                result.classList.remove("hidden");
                result.textContent=`${textUpper} is a palindrome`
               
            } 
       }
    }
    else{
        alert('Please input a value');
    }


})









