let noofwords = document.getElementById("noofwords");
let containermain = document.querySelector(".container");

const generateWords = (n) => {
  let text = "";
  const letters = "abcdefghijklmnopqrstuvwxyzQWERTYUIOPLKJHGFDSAZXCVBNM";
  for (let i = 0; i < n; i++) {
    text += letters[(Math.random() * (letters.length - 1)).toFixed(0)];
  }
  return text;
};

let num;

const genearate = () => {
  let container = document.createElement("p");
  let num = Number(noofwords.value);

  let data = "";
  for (let i = 0; i < num; i++) {
    let random = (Math.random() * 14).toFixed(0);
    data += generateWords(random);
    data += " ";
  }
  container.innerText = data;
  container.className = "para";
  containermain.append(container);
};
