const res = document.querySelector("#blocks");

const getNumBlocks = function () {
  const numBlockInput = document.querySelector("input").value;
  res.innerHTML = "";
  generateBlocks(numBlockInput);
};

const generateBlocks = function (num) {
  if (num <= 10) {
    for (let i = 0; i < num; i++) {
      for (let h = num; h > i; h--) {
        res.innerHTML += "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp";
      }
      for (let j = -1; j < i; j++) {
        res.innerHTML +=
          '<img src="https://art.pixilart.com/ab7d2ba0561251e.png" width="30px" height="30px">';
      }
      res.innerHTML += "<br>";
    }
  } else {
    alert("Só é possível gerar no máximo 10 blocos de altura.");
  }
};
