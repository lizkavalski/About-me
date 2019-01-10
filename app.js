 'use strict';
 
 var score = 0

alert('Nice to meet you I am going to ask you a couple of questions');
//question 1
var user = prompt('What is my name?');
  if (user === 'Liz'|| user ==='Elizabeth'){
      alert ('You are correct')
      score++
    }else{ 
        alert('No it Liz or Elizabeth')}

console.log('name', user);
//question 2 (loop)
for(i=0; i< 3; i++){
    var place = prompt('Where do you think I am from?' );
        if (place === 'Washington'){
            alert( 'You are Correct')
            score++
            break
        } else { 
        alert ('Try again')}  
     } 
console.log('place',place); 
// question 3 (frist yes or no question)
var ready = prompt("Alright  the next question is a yes/no question. Please answer with Yes or No. Are you ready?" );
console.log('Ready', ready)

    if (ready === 'Yes' || ready ==='Y' ){
        alert ('Alright lets go .')
        score++
    } else{ 
        alert('I think you can do it .' )}
//question 3 (second y/n)
var toDoCodeing = prompt(' Another yes/no question: I am excited to do coding?')
        console.log('excited to do code', toDoCodeing)

    if (toDoCodeing === "Y" || toDoCodeing==="y" ||toDoCodeing=== "Yes" ||toDoCodeing=== "yes" ){
        alert('I am excited')
        score++
    } else{ 
        alert("I am excited "+ user + " ." )}
//question 4 (thrid y/n)
var dog = prompt("Another yes/no questions: Do I have a dog?")
    console.log('Dog', dog)
        if (dog === "Y" || dog==="y" ||dog === "Yes" ||dog=== "yes" ){
            alert('I have a dog ')
            score++
         } else{ 
            alert(' I do have a dogs and they make great snuggle buddies' )
        }
//question 5(make into number loop)
for(var i = 0; i<3; i++){
        var numDog = parseInt(prompt ('how many dogs do I have?'))
            if (numDog === 2){
                alert('You are correct')
                score++
                break
            }
            if(numDog < 2){
                 alert('too low')
            }
            if (numDog > 2)
                { alert('too high')
            }
          //  if (numDog !== ) {alert('a number plase')}
        }
    console.log('number of dogs', numDog)
      
//question 6 (fifth y/n)
var wantDragon = prompt('Would I like a pet dragon?')
        if (wantDragon === 'Yes' || 'Y' ){
            alert('Yes I would like a dragon')
            score++
        }
        else {
            alert ('of course I would want a dragon')
        }
    console.log('dragon',wantDragon)
// question 7 (sixth y/n)
var car= prompt('Do I drive?')
        console.log('drive', car)
    if (car === "Y" || car==="y" ||car=== "Yes" ||car=== "yes" ){
        alert("Yes I do ." )
        score++
    }
    else {
        alert('I do drive')}
//question 8 (make into a loop)
var typeCar= prompt('What type of car do I drive?');
    for(var i = 0;i < 3; i++){  
        if(typeCar === 'Yellow Car'){
            alert('You are correct')
            score++
            break
        }
        else{
            alart('nope')}
        }
        console.log('Make of car', typeCar)
// question 9 (arrary w/loop)
//var backGround = [childcare, food, werehouse]

//var vocation= prompt ('What was my previous job background?' )
//      for(var i= 0; i < backGround.length; i++){
//        if(vocation === backGrund[i]){
//            alert('You are correct')
//            score++
//            break
//        }
//        else {
            //alert('Nope')}
//    console.log(backGrund[i])
//}
var endOfQuiz = prompt('congreat you got '+ score + ' out of 9')
