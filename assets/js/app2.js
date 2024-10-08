
const cardImage = document.querySelectorAll('img');
const showResult = document.querySelector('#score');
const timeLeft = document.querySelector("#time-left");
const gameOver = document.querySelector('#gameOver');
const sliderFill = document.querySelector(".fill");
const soundGame = document.querySelector('.track');
const resetButton = document.getElementById('reset-button');
const startButton = document.getElementById('start-button');
const startCount = 61
let timeRemain = startCount
let choosenCard = []
let cardsIdsChoosen = []
const scoreArray =[]


//  resets the page to its initial state.
function resetGame() {
   location.reload();
}

resetButton.addEventListener("click", resetGame);

// time is up
function playSound() {
   const audio = new Audio('assets/images/player-2042.mp3');
   audio.play();
   
}

// winning sound
function playWin() {
   const audioWin = new Audio('assets//goodresult-82807.mp3');
   audioWin.play()
}



//game theme sound
function themeSong(src) {
   this.sound = document.createElement("audio");
   this.sound.src = 'assets/images/game.mp3';
   document.body.appendChild(this.sound);
   this.sound.play();
   }
 




const timerId = setInterval(() => {
   timeRemain--
   timeLeft.textContent = timeRemain
   sliderFill.style.width = (timeRemain / startCount) * 100 + '%'
   if (timeRemain <= 0 || scoreArray.length == (arrayCards.length / 2)) {
     clearInterval(timerId)
     timeLeft.textContent = '0'
   //   gameOver.textContent = 'GAME OVER'
   if (timeRemain <= 0) {
       gameOver.textContent = `Game  Over`  
     playSound()
   }
}

 }, 1000)



function matchCards() {
  const cardsImages = document.querySelectorAll('img');
   //if the user clicks on the same image
  if (cardsIdsChoosen[0] == cardsIdsChoosen[1]) {
      
   cardsImages[cardsIdsChoosen[0]].setAttribute('src', 'assets/images/dc-comics.png')
   cardsImages[cardsIdsChoosen[1]].setAttribute('src', 'assets/images/dc-comics.png')
   alert('You have clicked the same image!')
   //if the user founds a match
   } else if (choosenCard[0] === choosenCard[1]) {
   alert('you found a match')
   cardsImages[cardsIdsChoosen[0]].setAttribute('src', 'assets/images/background.png')
   cardsImages[cardsIdsChoosen[0]].removeEventListener('click', flipImage)
   cardsImages[cardsIdsChoosen[1]].setAttribute('src', 'assets/images/background.png')
   cardsImages[cardsIdsChoosen[1]].removeEventListener('click', flipImage)
   scoreArray.push(choosenCard)
   } else {
   //flip them back if they don't match
   cardsImages[cardsIdsChoosen[0]].setAttribute('src', 'assets/images/dc-comics.png')
   cardsImages[cardsIdsChoosen[1]].setAttribute('src', 'assets/images/dc-comics.png')
   }

  choosenCard = []
  cardsIdsChoosen = []
 
  showResult.innerHTML = scoreArray.length
  //if we get all the right cards
  //12 cards divided by 2 , 6 matches
  if(scoreArray.length == (arrayCards.length / 2)) {
     showResult.innerHTML = ''
     gameOver.textContent = `You Win !!!`
     playWin()
  }
}


function flipImage() {
   // this keword will show whatever card number we click on
   const cardOfId = this.getAttribute('data-id');
   // we accessing the names from the array
   choosenCard.push(arrayCards[cardOfId].name)
   cardsIdsChoosen.push(cardOfId)
   console.log(choosenCard)
   console.log(cardsIdsChoosen)
   //we adding the new images to the element
   this.setAttribute('src', arrayCards[cardOfId].img)
   if (choosenCard.length == 2) {
      setTimeout( matchCards, 400)
   }

}

cardImage.forEach((image) => image.addEventListener('click', flipImage));

// images for the cards
const arrayCards = [
   {
      name: 'batman',
      img: 'assets/images/batman.png',
   }, 
   {
      name: 'batwoman',
      img: 'assets/images/batwoman.png',
   }, 
   {
      name: 'harley',
      img: 'assets/images/Harley.png',
   }, 
   {
      name: 'joker',
      img: 'assets/images/joker.png',
   }, 
   {
      name: 'superman',
      img: 'assets/images/superman.png',
   }, 
   {
      name: 'wonderwoman',
      img: 'assets/images/wonderwoman.png',
   }, 
   {
      name: 'batman',
      img: 'assets/images/batman.png',
   }, 
   {
      name: 'batwoman',
      img: 'assets/images/batwoman.png',
   }, 
   {
      name: 'harley',
      img: 'assets/images/Harley.png',
   }, 
   {
      name: 'joker',
      img: 'assets/images/joker.png',
   }, 
   {
      name: 'superman',
      img: 'assets/images/superman.png',
   }, 
   {
      name: 'wonderwoman',
      img: 'assets/images/wonderwoman.png',
   },
   {
    name: 'adam',
    img: 'assets/images/adam.png',
  },
  {
    name: 'flash',
    img: 'assets/images/flash.png',
  },
  {
    name: 'adam',
    img: 'assets/images/adam.png',
  },
  {
    name: 'aquaman',
    img: 'assets/images/aquaman.png',
  },
  {
    name: 'parrow',
    img: 'assets/images/parrow.png',
  },
  {
    name: 'flash',
    img: 'assets/images/flash.png',
  },
  {
    name: 'aquaman',
    img: 'assets/images/aquaman.png',
  },
  {
    name: 'parrow',
    img: 'assets/images/parrow.png',
  },
]



//  Math.random returns a nr.between 0 to less than -1
//we're checking that it's smaller than 0.5 or larger than
arrayCards.sort(() =>  0.5 - Math.random())



