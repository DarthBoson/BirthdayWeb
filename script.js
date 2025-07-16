const card = document.getElementById("birthdayCard");
let state = 0;

card.addEventListener("click", () => {
if (state === 0) {
  card.classList.add("opened");
  card.classList.remove("second", "reset");
  
  // 🎉 Add confetti
  if (typeof confetti === "function") {
	confetti({
	  particleCount: 500,
	  scalar: 1.2,
	  spread: 150,
	  origin: { y: 0.7 }
	});
  }

  // 🔊 Play music
  const audio = new Audio("hbd_house.mp3");
  audio.play();
  
  state = 1;
} else if (state === 1) {
  card.classList.add("second");
  document.querySelector('.outside').style.zIndex = "1";
  document.querySelector('.outside1').style.zIndex = "3";
  state = 2;
} else {
  card.classList.remove("second");
  document.querySelector('.outside').style.zIndex = "3";
  document.querySelector('.outside1').style.zIndex = "1";
  card.classList.add("reset");
  state = 0;
}
});
