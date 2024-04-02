let playerChoice;
let computerChoice;
let winCount = 0;

const getPlayerInput = () => {
  while (true) {
    playerChoice = prompt("가위, 바위, 보 중에 어떤 걸 내시겠습니까?");
    if (
      playerChoice === "가위" ||
      playerChoice === "바위" ||
      playerChoice === "보"
    ) {
      break;
    }
  }
  logGameResult();
};

const getComputerInput = () => {
  const arr = ["가위", "바위", "보"];

  computerChoice = Math.floor(Math.random() * 3);
  computerChoice = arr[computerChoice];
};

const logComputerResult = () => {
  console.log(`상대는 ${computerChoice}를 냈습니다.`);
};

const logGameResult = () => {
  if (winCount === 3) {
    console.log("축하합니다. 3번 승리하셨습니다.");
    return;
  } else {
    getComputerInput();
    if (playerChoice === computerChoice) {
      logComputerResult();
      console.log("비겼습니다");
    } else if (
      (playerChoice === "가위" && computerChoice === "보") ||
      (playerChoice === "바위" && computerChoice === "가위") ||
      (playerChoice === "보" && computerChoice === "바위")
    ) {
      logComputerResult();
      console.log("승리하셨습니다");
      winCount++;
    } else {
      logComputerResult();
      console.log("패배하셨습니다.");
    }
  }
};
