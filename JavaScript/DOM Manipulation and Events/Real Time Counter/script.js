const textInput = document.getElementById("text-input");

const charCount = document.getElementById("char-count");

document.getElementById("text-input").addEventListener("input", function(){
  let text = textInput.value;
  let characters = text.length;

  if (characters >= 50){
    textInput.value = text.slice(0, 50)
    characters = 50;
    charCount.style.color = "red"
  } else {
    charCount.style.color = "black"
  }

  charCount.textContent = "Character Count: " + characters + "/50";
});
