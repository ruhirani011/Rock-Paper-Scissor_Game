
function rpsGame(yourChoice) {

    console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numToChoice(randomToRpsInt());
    console.log('computer Choice: ', botChoice);
    // alert(botChoice);
    results = decideWinner(humanChoice, botChoice)  //[0,1] human lost | bot won
    console.log(results);
    message = finalMessage(results) ;   // {'message': 'You Won !' , 'color' : 'green' }
console.log(message);

    rpsFrontEnd(yourChoice.id, botChoice, message);

}

function randomToRpsInt() {
    return Math.floor(Math.random() * 3);



}
function numToChoice(num) {
    return ['rock', 'paper', 'scissors'][num];
}

function decideWinner(yourChoice, computerChoice) {
    var rpsDatabase = {
        'rock': { 'scissors': 1, 'rock': 0.5, 'paper': 0 },
        'paper': { 'rock': 1, 'paper': 0.5, 'scissors': 0 },
        'scissors': { 'paper': 1, 'scissors': 0.5, 'rock': 0 }
    }

    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];

}

function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return { 'message': 'You Lost!😮', 'color': 'red' };

    }
    else if (yourScore === 0.5) {
        return { 'message': 'You Tied!🤗', 'color': 'yellow' };

    }
    else {
        return { 'message': 'You Won!🥳', 'color': 'green' };

    }

}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var imagesDatabase = {
      'rock': document.getElementById('rock').src,
      'paper': document.getElementById('paper').src,
      'scissors': document.getElementById('scissors').src

}

    //let's remove all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

   var humanDiv = document.createElement('div');
   var botDiv = document.createElement('div');
   var messageDiv = document.createElement('div');
//    var btnDiv = document.createElement('button');

   humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "'height=150 width=150 style='box-shadow: 0px 10px 50px rgb(31, 155, 177);'>";
   messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"   //<h1 style='color: green; font-size: 60px; padding: 30px;'> You won! </h1>
   botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "'height=150 width=150 style='box-shadow: 0px 10px 50px rgb(31, 155, 177);'>";
//    btnDiv.innerHTML = "RESTART";
   


   document.getElementById('rps').appendChild(humanDiv);
   document.getElementById('rps').appendChild(messageDiv);

   document.getElementById('rps').appendChild(botDiv);
//    document.getElementById('rps').appendChild(btnDiv);

    // let btnDiv = document.getElementById("btn").style.display = 'block';
    // btnDiv.addEventListener('click', 
    // function rpsGame(yourChoice) {
    
    //     console.log(yourChoice);
    //     var humanChoice, botChoice;
    //     humanChoice = yourChoice.id;
    //     botChoice = numToChoice(randomToRpsInt());
    //     console.log('computer Choice: ', botChoice);
    //     // alert(botChoice);
    //     results = decideWinner(humanChoice, botChoice)  //[0,1] human lost | bot won
    //     console.log(results);
    //     message = finalMessage(results) ;   // {'message': 'You Won !' , 'color' : 'green' }
    // console.log(message);
    
    //     rpsFrontEnd(yourChoice.id, botChoice, message);
    
    // })





//    btnDiv.onclick = document.getElementById("rps");


}



















