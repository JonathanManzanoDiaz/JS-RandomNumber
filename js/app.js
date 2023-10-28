const generate = document.getElementById("generate");

generate.onclick = function () {
  document.getElementById("number").innerHTML = `${generateRandom()}`;
};

function generateRandom() {
  return Math.floor(Math.random() * (100 + 0) + 1);
}
