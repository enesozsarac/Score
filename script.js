const t1Score = document.getElementById("t1Score");
const t2Score = document.getElementById("t2Score");
const team1 = document.getElementById("team1");
const team2 = document.getElementById("team2");
const t1Name = document.getElementById("t1Name");
const t2Name = document.getElementById("t2Name");
const innerContent1 = document.getElementById("innerContent1");
const innerContent2 = document.getElementById("innerContent2");

//Team 1 score + & -

let score = 0;
function t1Increase() {
  score++;
  t1Score.innerHTML = score;
}

function t1Decrease() {
  if (score <= 0) {
    score = 0;
  } else {
    score--;
  }
  t1Score.innerHTML = score;
}

//Team 2 score + & -

let score2 = 0;
function t2Increase() {
  score2++;
  t2Score.innerHTML = score2;
}

function t2Decrease() {
  if (score2 <= 0) {
    score2 = 0;
  } else {
    score2--;
  }
  t2Score.innerHTML = score2;
}

//Team 1 score edit

function t1EditScore() {
  let editInput = document.createElement("input");
  let t1EditBtn = document.getElementById("t1EditBtn");
  let okBtn = document.createElement("button");
  okBtn.innerHTML = "OK";
  editInput.setAttribute("type", "number");
  editInput.setAttribute("min", "0");
  editInput.value = score;
  innerContent1.replaceChild(editInput, t1EditBtn);
  innerContent1.appendChild(okBtn);
  okBtn.addEventListener("click", function () {
    if (editInput.value == "") {
      alert("Score yazmalısın");
    } else {
      t1Score.innerHTML = editInput.value;
      score = editInput.value;
      innerContent1.removeChild(okBtn);
      innerContent1.removeChild(editInput);
      innerContent1.appendChild(t1EditBtn);
    }
  });
}

//Team2 score edit

function t2EditScore() {
  let editInput = document.createElement("input");
  let t2EditBtn = document.getElementById("t2EditBtn");
  let okBtn = document.createElement("button");
  okBtn.innerHTML = "OK";
  editInput.setAttribute("type", "number");
  editInput.setAttribute("min", "0");
  editInput.value = score2;
  innerContent2.replaceChild(editInput, t2EditBtn);
  innerContent2.appendChild(okBtn);

  okBtn.addEventListener("click", function () {
    if (editInput.value == "") {
      alert("Score yazmalısın");
    } else {
      t2Score.innerHTML = editInput.value;
      score2 = editInput.value;
      innerContent2.removeChild(okBtn);
      innerContent2.removeChild(editInput);
      innerContent2.appendChild(t2EditBtn);
    }
  });
}

//Team1 isim degistirme

function t1NameChange() {
  let editNameInput = document.createElement("input");
  let t1NameEditApply = document.createElement("button");
  let t1NameEdit = document.getElementById("t1NameEdit");
  t1NameEditApply.innerHTML = "Isim Degistir";
  team1.appendChild(editNameInput);
  team1.replaceChild(t1NameEditApply, t1NameEdit);

  t1NameEditApply.addEventListener("click", function () {
    if (editNameInput.value == "") {
      alert("Takim adı yazmalısın");
    } else {
      t1Name.innerHTML = editNameInput.value;
      team1.removeChild(editNameInput);
      team1.replaceChild(t1NameEdit, t1NameEditApply);
    }
  });
}

// Team2 isim degistirme

function t2NameChange() {
  let editNameInput = document.createElement("input");
  let t2NameEditApply = document.createElement("button");
  let t2NameEdit = document.getElementById("t2NameEdit");
  t2NameEditApply.innerHTML = "Isim Degistir";
  team2.appendChild(editNameInput);
  team2.replaceChild(t2NameEditApply, t2NameEdit);

  t2NameEditApply.addEventListener("click", function () {
    if (editNameInput.value == "") {
      alert("Takim adı yazmalısın");
    } else {
      t2Name.innerHTML = editNameInput.value;
      team2.removeChild(editNameInput);
      team2.replaceChild(t2NameEdit, t2NameEditApply);
    }
  });
}

//Team 1 Reset Score

function t1ResetScore() {
  t1Score.innerText = 0;
  score = 0;
}

// Team 2 Reset Score
function t2ResetScore() {
  t2Score.innerText = 0;
  score2 = 0;
}
