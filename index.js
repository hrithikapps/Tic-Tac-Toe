const audio = new Audio("Ting.mp3");
let turn = "X";
// Function to check whose Turn is it
const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};
let gameOver = false;

const checkWin = () => {
  let boxtexts = document.getElementsByClassName("boxtext");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  wins.forEach((e) => {
    if (
      boxtexts[e[0]].innerText === boxtexts[e[1]].innerText &&
      boxtexts[e[1]].innerText === boxtexts[e[2]].innerText &&
      boxtexts[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxtexts[e[0]].innerText + " WON ";
      gameOver = true;
      document
        .querySelector(".imgBox")
        .getElementsByTagName("img")[0].style.width = "300px";
    }
  });
};

const boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  const boxText = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxText.innerText === "") {
      boxText.innerText = turn;
      turn = changeTurn();
      audio.play();
      checkWin();
      if (!gameOver) {
        document.getElementsByClassName("info")[0].innerText =
          "Turn for " + turn;
      }
    }
  });
});

// Add onclick listner to reset

const reset = document.getElementById("reset");
reset.addEventListener("click", () => {
  let boxtexts = document.getElementsByClassName("boxtext");
  Array.from(boxtexts).forEach((e) => {
    e.innerText = "";
    gameOver = false;
    turn = "X";
    document.getElementsByClassName(
      "info"
    )[0].innerHTML = `<h4>Let's Begin</h4> <br /> Turn for ${turn}`;
    document
      .querySelector(".imgBox")
      .getElementsByTagName("img")[0].style.width = "0px";
  });
});
