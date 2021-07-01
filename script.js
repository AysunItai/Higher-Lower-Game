const button=document.getElementById("button");
const game=document.getElementById("game");
const input=document.getElementById('input');
guess_array=[];
all_guess_array=[];


count=0;
button.addEventListener("click", function(){
    num = prompt("Please enter a valid number", "a positive integer:3,100, 654...etc");
    while(num<=0 || isNaN(num)){
        checkPromptInput()
    }
    guess=Math.floor(Math.random()*num)+1;
    
    count=0;
   game.innerHTML=`Now enter a number between 1 and ${num} to the box below`;
   input.addEventListener("keypress",function(event){
      if(event.keyCode===13){
    user_guess=Math.floor(input.value);
    if(guess_array.includes(user_guess)){
        game.innerText='you already enter this number please try a new one';
        input.value='';
    }else{
    all_guess_array.push(user_guess)
       if(input.value.trim()=='' || input.value<=0 ){
           game.innerText="please enter a valid value"
       }else if(isNaN(user_guess)){
           game.innerText='This is not a number.Please enter a valid value';
       }else if(user_guess>num){game.innerText="That number is not in the range try again"}else{
       user_guess=Math.floor(input.value);
       guess_array.push(user_guess);
       
       
       
    if (user_guess==guess){
        game.innerHTML=`congrats you win!!!it took you ${count+1} attempts! and your guesses were ${guess_array.join()}`;
    }else if(user_guess<guess){
      game.innerText="enter a bigger value";
    }else {
        game.innerText="enter a smaller value"
    }
    input.value='';
    count=count+1;
    
       
   }
}
}  
   })}
)

function checkPromptInput(){
    num = prompt("Please enter a valid number");
    }
 