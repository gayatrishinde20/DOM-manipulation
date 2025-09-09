const nameInput=document.getElementsById('nameInput');
const greetButton=document.getElementsById('greetButton');
const greetingDisplay=document.getElementsById('greetingDisplay');

function generateGreeting(){
    const name = nameInput.value;


if(name){
    const greetingMessage = 'Hello, ${name}! Welcome to our page.';
    greetingDisplay.textContent=greetingMessage;
}
else{
    greetingDisplay.textContent='Please enter your name.';
}
}
greetButton.addEventListener('click',generateGreeting);
