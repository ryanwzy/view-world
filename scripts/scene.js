function toggleHelp(){
  if (click == false) {
      document.getElementById('prompts').style.display = "block";
      tipButton = document.getElementById('help');
      tipButton.innerText = "CLOSE";
      click = true;
  } else {
      document.getElementById('prompts').style.display = "none";
      tipButton = document.getElementById('help');
      tipButton.innerText = "INSTRUCTION";
      // tipButton.style.position = "absolute";
      // tipButton.style.left = "10px";
      // tipButton.setAttribute("background-color","white");
      click = false;
  }
}