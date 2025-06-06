

  let score =  JSON.parse(localStorage.getItem('score')) || {
  wins : 0,
  losses : 0,
  ties : 0
  };

   updateScoreElem();


  let isAutoPlaying = false;
  let intervalId;

  function autoPlay() {
    if (!isAutoPlaying) {
      intervalId= 
      setInterval( ()=> {
        const playerMove = pickCompMove();
        playGame(playerMove);
      },1000); 
      isAutoPlaying = true;
    } else{
      clearInterval(intervalId);
      isAutoPlaying= false;
    }

  }


  document.querySelector('.js-rock-button')
     .addEventListener('click', () => {
      playGame('ROCK');
    });


  document.querySelector('.js-paper-button')
     .addEventListener('click', () => {
     playGame('PAPER');
    }); 

  document.querySelector('.js-scissors-button')
     .addEventListener('click', () => {
      playGame('SCISSORS');
   });  



   document.body.addEventListener('keydown',(event) => {

    if(event.key === 'r') {
      playGame('ROCK');
    } else if (event.key === 'p') {
      playGame('PAPER');
    } else if (event.key === 's') {
      playGame('SCISSORS');
    } else if (event.key === 'a') {
      autoPlay();
    }
   });



    function playGame(playerMove){
      const compMove = pickCompMove();

      let result = '' ;

  if (playerMove === 'SCISSORS') {

    if (compMove === 'ROCK') {
    result = 'YOU LOSE';
    } else if (compMove === 'PAPER') {
    result = 'YOU WIN';
    } else if (compMove === 'SCISSORS') {
    result = 'ITS A DRAW';
    }

  } else if (playerMove === 'PAPER') {

    if (compMove === 'ROCK') {
    result = 'YOU WIN';
    } else if (compMove === 'PAPER') {
    result = 'ITS A DRAW';
    } else if (compMove === 'SCISSORS') {
    result = 'YOU LOSE';
    }

  } else if (playerMove === 'ROCK') {
    if (compMove === 'ROCK') {
    result = 'ITS A DRAW';
    } else if (compMove === 'PAPER') {
    result = 'YOU LOSE';
    } else if (compMove === 'SCISSORS') {
    result = 'YOU WIN';
    }
  }

  if (result === 'YOU WIN' ) {
  score.wins++;
  } else if (result === 'YOU LOSE') {
  score.losses++;
  } else if (result === 'ITS A DRAW') {
  score.ties++;
  }


  localStorage.setItem('score', JSON.stringify(score));


  updateScoreElem();

  document.querySelector('.js-result')
  .innerHTML = result;

  document.querySelector('.js-moves')
  .innerHTML = `YOU <img  src="icons/${playerMove}-2.png" class ="move-icon"> vs <img src="icons/${compMove}-2.png" class ="move-icon"> COMPUTER`;


  }

  function updateScoreElem() {
    document.querySelector('.js-score')
    .innerHTML =
    `Wins: ${score.wins},
    Losses: ${score.losses},
    Ties: ${score.ties}`;
    }

  function pickCompMove (){
    let compMove ='';

    const randomNum =  Math.random();

    if (randomNum >= 0 && randomNum < 1/3 ) {
      compMove = 'ROCK';
      }  else if (randomNum >= 1 / 3 && randomNum < 2/3 ) {
      compMove = 'PAPER';
      } else if (randomNum >= 2 / 3  && randomNum < 1 ) {
      compMove = 'SCISSORS';
      }

    return compMove;

  }
      
          