// Ini Javascript

function validateForm() {
  let inputUsername = document.getElementById('input-username').value;
  if (inputUsername == '') {
    document.getElementById('input-username').style.border = "1px solid red";
  } else {
    document.getElementById('result').innerHTML = inputUsername;
    document.getElementById('input-username').style.border = "1px solid";
    console.log(inputUsername);
  }

}

let indexSlide = 0;
nextSlide(1);

function nextSlide(n) {
  showSlide(indexSlide += n);
}

function showSlide(n) {
  let listImage = document.getElementsByClassName('photo-banner');

  if (n > listImage.length - 1) {
    indexSlide = 0;
  }

  if (n < 0) {
    indexSlide = listImage.length - 1;
  }

  let index = 0;
  while(index < listImage.length) {
    listImage[index].style.display = 'none';
    index++;
  }

  listImage[indexSlide].style.display = 'block';
  console.log(listImage);
  console.log(n);
}

// setInterval(() => nextSlide(1), 2000);