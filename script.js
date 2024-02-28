let t1Score = document.getElementById("t1Score");
let t2Score = document.getElementById("t2Score");
let team1 = document.getElementById("team1");
let team2 = document.getElementById("team2");
let t1Name = document.getElementById("t1Name");
let t2Name = document.getElementById("t2Name");

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
  team1.replaceChild(editInput, t1EditBtn);
  team1.appendChild(okBtn);
  okBtn.addEventListener("click", function () {
    if (editInput.value == 0) {
      alert("Score yazmalısın");
    } else {
      t1Score.innerHTML = editInput.value;
      score = editInput.value;
      team1.removeChild(okBtn);
      team1.removeChild(editInput);
      team1.appendChild(t1EditBtn);
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
  team2.replaceChild(editInput, t2EditBtn);
  team2.appendChild(okBtn);

  okBtn.addEventListener("click", function () {
    if (editInput.value == 0) {
      alert("Score yazmalısın");
    } else {
      t2Score.innerHTML = editInput.value;
      score2 = editInput.value;
      team2.removeChild(okBtn);
      team2.removeChild(editInput);
      team2.appendChild(t2EditBtn);
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
