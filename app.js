  
alert('Nice to meet you I am going to ask you a couple of questions');

var user = prompt('What is your name?');
console.log('name',user);

var place = prompt('Where are you from?' );
console.log('place',place);   

var answer = prompt("Alright " +user  + " the next question is a yes/no question. Please answer with Yes or No. Are you readey?" );
console.log('Readey', answer)

    if (answer === "Y" || answer==="y" ||answer=== "Yes" ||answer=== "yes" ){
        alert ("Alright lets go " + user +".")
    } else{ 
        alert("I think you can do it "+ user + " ." )}
 
var toDoCodeing = prompt(" Another yes/no question: Are you excited to do coding?")
        console.log('excited to do code', toDoCodeing)

    if (answer === "Y" || answer==="y" ||answer=== "Yes" ||answer=== "yes" ){
        alert('I am too')
    } else{ 
        alert("I think you are excited "+ user + " ." )}

var dog = prompt("Another yes/no questions: Do you have a dog?")
    console.log('Dog', dog)
        if (answer === "Y" || answer==="y" ||answer=== "Yes" ||answer=== "yes" ){
            alert('I have a dog too')
    } else{ 
    alert('Dogs make great snuggle buddies' )}

var numDog = prompt ('how many dogs do you have?')
    console.log('number of dogs', numDog)
        if (answer === '2' || answer === 'two'|| answer=== "Two"){alert('I have two dogs too.')}
        else {alert:'that too sad'}

var wantDragon = prompt('Would you like a pet dragon?')
    console.log('dragon',wantDragon)

var car= prompt('Do you drive?')
        console.log('drive', car)
    if (answer === "Y" || answer==="y" ||answer=== "Yes" ||answer=== "yes" ){
        alert("I do to "+ user + " ." )}
    else 
        {alert:'that too sad'}

var typeCar= prompt('What type of car?')
        console.log('Make of car', typeCar)
