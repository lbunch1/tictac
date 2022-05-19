

const gameboard = (()=> {
    const board = ['','','','','','','','','']
    const square = document.querySelectorAll(".square")
    const playerButton = document.querySelectorAll(".playSelect")
    const playerChoice = document.querySelector(".choose-player")
    const winGame = document.querySelector(".win-game")
    const winText = document.querySelector(".winner")
    let playSelect = ''
  
    playerButton.forEach(element => {
      element.addEventListener("click", () => {
        playSelect = element.innerText;
        playerChoice.style.display = "none";
      })
    })
    
    const checkWin = function() {
      if (
        board[0] == playSelect && board[1] == playSelect && board[2] == playSelect ||
        board[3] == playSelect && board[4] == playSelect && board[5] == playSelect ||
        board[6] == playSelect && board[7] == playSelect && board[8] == playSelect ||
        board[0] == playSelect && board[3] == playSelect && board[6] == playSelect ||
        board[1] == playSelect && board[4] == playSelect && board[7] == playSelect ||
        board[2] == playSelect && board[5] == playSelect && board[8] == playSelect ||
        board[0] == playSelect && board[4] == playSelect && board[8] == playSelect ||
        board[2] == playSelect && board[4] == playSelect && board[6] == playSelect 
      ) {
          winText.innerText = `${playSelect} Wins!!!`;
          winGame.style.display = "flex"
      }
    };
    
    square.forEach(element => {
      element.addEventListener("click", () => {
        let arrayId = element.dataset.indexNumber
        if (board[arrayId] != 'X' && board[arrayId] != 'O') {
            element.style.color = `var(--${playSelect}color)`
            element.textContent = playSelect;
            board[arrayId] = playSelect;
            checkWin()
            playSelect = (playSelect === 'X') ? 'O' : 'X';
            function aiTurn() {
              let randomNum = Math.floor(Math.random()*9);
              console.log(randomNum)
              if (board[randomNum] == '') {
                board[randomNum] = playSelect;
                const squareOp = document.querySelector(`.s${randomNum}`)
                squareOp.style.color = `var(--${playSelect}color)`
                squareOp.textContent = playSelect;
                checkWin()
                playSelect = (playSelect === 'X') ? 'O' : 'X';
              } else if(!board.includes('')) return
              else aiTurn()
            }
            aiTurn()
            console.log(board);
        }
    })
    })
    return {
      checkWin
    }
  })();
  