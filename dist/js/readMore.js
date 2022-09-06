
const readMoreIntroBtn = document.getElementById("readMoreIntro");
const readMoreWelcomeBtn = document.getElementById("readMoreWelcome");
const expandDocBtn = document.getElementById("expandDoc");


let readMoreInfoOn = false;
let readMoreWelcomeOn = false;
let expandDocOn = false;

function enableReadMore(e) {
  e.target.previousElementSibling.previousElementSibling.style.display = 'block';
  //console.log(e.target.previousElementSibling.previousElementSibling);
}
function disableReadMore(e) {
  e.target.previousElementSibling.previousElementSibling.style.display = 'none';
  //console.log(e.target.previousElementSibling.previousElementSibling);
}

readMoreIntroBtn.addEventListener('click', (e) => {
  if (!readMoreInfoOn) {
    enableReadMore(e);
    readMoreInfoOn = true;
  } else {
    disableReadMore(e);
    readMoreInfoOn = false;
  }
})

/*
readMoreWelcomeBtn.addEventListener('click', (e) => {
  if (!readMoreWelcomeOn) {
    enableReadMore(e);
    readMoreWelcomeOn = true;
  } else {
    disableReadMore(e);
    readMoreWelcomeOn = false;
  }
});
*/

expandDocBtn.addEventListener('click', (e) => {
  if (!expandDocOn) {
    enableReadMore(e);
    expandDocOn = true;
  } else {
    disableReadMore(e);
    expandDocOn = false;
  }
});