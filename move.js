function moveBox(boxNum) {
  const box = document.querySelector(`#box${boxNum}`); // Konstans értékként eltárolja a kiválaszott box ID-val rendelkező elemet.
  const boxBounds = box.getBoundingClientRect(); // Konstans érékként eltárolja a weboldal jelenlegi méretét.
  let boxCenterX = boxBounds.left + boxBounds.width / 2; // Eltárolja egy változóban az oldal középpontját X tengelyen.
  let boxCenterY = boxBounds.top + boxBounds.height / 2; // Eltárolja egy változóban az oldal középpontját Y tengelyen.

  // Feltételhez köti az ikonok milyen távolságba álljanak meg egymástól X és Y koordinátán.
  if (window.innerWidth <= 480 && window.innerHeight <= 760) {
    if (boxNum <= 3) {
      boxCenterY -= 110;
      boxCenterX += 35;
    } else {
      boxCenterY -= 110;
      boxCenterX -= 35;
    }
  }
  else if(window.innerWidth <= 750){
    if (boxNum <= 3) {
      boxCenterX += 40;
    } else {
      boxCenterX -= 40;
    }
  }
  else{
    if (boxNum <= 3) {
      boxCenterX += 65;
    } else {
      boxCenterX -= 65;
    }
  }

  // Eltolás, illetve forgatás ha a boxNum nagyobb, mint 3, (tehát a gép oldali ikonok).
  if(boxNum > 3){
    box.style.transition = "transform 1s, left 1s, top 1s";
    box.style.transform = `translate(${window.innerWidth / 2 - boxCenterX}px, ${window.innerHeight / 2 - boxCenterY}px) rotate(-20deg)`;
    
    setTimeout(() => {
      box.style.transition = "transform 1s, left 1s, top 1s";
      box.style.transform = "translate(0, 0) rotate(0deg)";
    }, 1000);
  }
  else{
    box.style.transition = "transform 1s, left 1s, top 1s";
    box.style.transform = `translate(${window.innerWidth / 2 - boxCenterX}px, ${window.innerHeight / 2 - boxCenterY}px)`;
    
    setTimeout(() => {
      box.style.transition = "transform 1s, left 1s, top 1s";
      box.style.transform = "translate(0, 0)";
    }, 1000);
  }
}