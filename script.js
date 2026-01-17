let count = localStorage.getItem("count")
  ? parseInt(localStorage.getItem("count"))
  : 1;
let cycle = localStorage.getItem("cycle")
  ? parseInt(localStorage.getItem("cycle"))
  : 0;

function increaseCount() {
  const max = parseInt(document.getElementById("maxCount").value);
  const goal = parseInt(document.getElementById("goal").value);

  count++;

  if (count >= max) {
    count = 0;
    cycle++;
    showMessage("✔ One Full Cycle Completed");

    if (cycle === goal) {
      showMessage("🎉 Spiritual Goal Achieved!");
    }
  }

  saveData();
  updateUI();
}

function resetAll() {
  if (confirm("Reset all progress?")) {
    count = 1;
    cycle = 0;
    localStorage.clear();
    showMessage("Progress Reset");
    updateUI();
  }
}

function updateUI() {
  const max = parseInt(document.getElementById("maxCount").value);
  document.getElementById("count").innerText = count;
  document.getElementById("cycle").innerText = cycle;
  document.getElementById("progress").style.width = (count / max) * 100 + "%";
}

function showMessage(text) {
  const msg = document.getElementById("message");
  msg.innerText = text;
  setTimeout(() => (msg.innerText = ""), 2000);
}

function saveData() {
  localStorage.setItem("count", count);
  localStorage.setItem("cycle", cycle);
}

updateUI();
