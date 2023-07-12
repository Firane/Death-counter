let totalDeaths = 0;

const confirmReset = () => {
  const response = confirm(
    "Beware, if you press that button the death counter will go back to 0"
  );

  if (response) {
    totalDeaths = 0;
    storeCount();
    deathDisplay.textContent = `Deaths count : ${totalDeaths}`;
    return;
  }
};

function storeCount() {
  window.localStorage.totalDeaths = JSON.stringify(totalDeaths);
}

function getCount() {
  totalDeaths = JSON.parse(window.localStorage.totalDeaths);
}

window.addEventListener("load", () => {
  getCount();
  storeCount();
  deathDisplay.textContent = `Deaths count : ${totalDeaths}`;
});

addDeath.addEventListener("click", (e) => {
  totalDeaths++;
  storeCount();
  deathDisplay.textContent = `Deaths count : ${totalDeaths}`;
});

window.addEventListener("keyup", (e) => {
  e.preventDefault();
  if (e.code === "Space") {
    totalDeaths++;
    storeCount();
    deathDisplay.textContent = `Deaths count : ${totalDeaths}`;
  }
});

reset.addEventListener("click", () => {
  confirmReset();
});
