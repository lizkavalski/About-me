'use strict';
 
 var score = 0;

alert('Nice to meet you I am going to ask you a couple of questions');
//question 1
function questionOne(){
    var user = prompt('What is my name?').toUpperCase();
    console.log('name', user);
    if (user === 'LIZ'|| user ==='ELIZABETH'){
        alert ('You are correct');
        score++
    }else{ 
        alert('No it Liz or Elizabeth');
    }
}
questionOne();



//question 2 (loop)
function questionTwo(){
for(var i=0; i< 3; i++){
    var place = prompt('Where do you think I am from?' ).toUpperCase();
        if (place === 'WASHINGTON'){
            alert( 'You are Correct');
            score++;
            break;
        } else { 
        alert ('Try again')}  
     } 
console.log('place',place); 
}
questionTwo();


// question 3 (frist yes or no question)
function questionThree(){
var ready = prompt("Alright  the next question is a yes/no question. Please answer with Yes or No. Are you ready?" ).toUpperCase();
console.log('Ready', ready);

    if (ready === 'YES' || ready ==='Y' ){
        alert ('Alright lets go .');
        score++;
    } else{ 
        alert('I think you can do it .' );
    }
}
questionThree();


//question 3 (second y/n)
function questionFour(){
var toDoCodeing = prompt(' Another yes/no question: I am excited to do coding?').toUpperCase();
        console.log('excited to do code', toDoCodeing)

    if (toDoCodeing === "Y" ||toDoCodeing=== "Yes"){
        alert('I am excited');
        score++;
    } else{ 
        alert("I am excited ." );
    }
}
questionFour();

//question 4 (thrid y/n)
function questionFive(){
var dog = prompt("Another yes/no questions: Do I have a dog?").toUpperCase();
    console.log('Dog', dog)
        if (dog === "Y" ||dog === "Yes"){
            alert('I have a dog ');
            score++;
         } else{ 
            alert(' I do have a dogs and they make great snuggle buddies' );
        }
    }
    questionFive();


//question 5(make into number loop)
function questionSix(){
for(var i = 0; i<3; i++){
        var numDog = parseInt(prompt ('how many dogs do I have?'));
            if (numDog === 2){
                alert('You are correct');
                score++;
                break;
            } else if (numDog < 2) {
                 alert('too low');
            } else if (numDog > 2) { 
                alert('too high');
            } else {
                alert('a number plase');
            }
        }
    console.log('number of dogs', numDog);
    }
questionSix();
      
//question 6 (fifth y/n)
function questionSeven(){
var wantDragon = prompt('Would I like a pet dragon?').toUpperCase();
        if (wantDragon === 'YES' || 'Y' ){
            alert('Yes I would like a dragon');
            score++;
        } else {
            alert ('of course I would want a dragon');
        }
    console.log('dragon',wantDragon);
    }
questionSeven();

// question 7 (sixth y/n)
function questionEight(){
var car= prompt('Do I drive?').toUpperCase();
    console.log('drive', car);
    if (car === "Y" ||car=== "YES" ){
        alert("Yes I do ." );
        score++;
    } else {
        alert('I do drive');
    }
}
questionEight();

//question 8 (make into a loop)
function questionNine(){
for(var i = 0;i < 3; i++){  
    var typeCar= prompt('What type of car do I drive?').toUpperCase();
        if(typeCar === 'YELLOW CAR'){
            alert('You are correct')
            score++;
            break;
        }else{
            alert('nope');
        }
    }
    console.log('Make of car', typeCar);
}
questionNine();

//question 9 (arrary w/loop)
function questionTen(){
var backGround = ['childcare', 'food', 'werehouse'];

for(var i= 0; i < backGround.length; i++){
    var vocation= prompt ('What was my previous job background?' )
       if(backGround.includes(vocation)){
           alert('You are correct');
           score++;
           break;
       } else {
            alert('Nope');
        }
   console.log(backGround[i]);
    }
}
questionTen();

alert('congreat you got '+ score + ' out of 9');
