var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1*6) + 1;
var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2*6) + 1;

if(randomNumber1 === 1)
{
  document.querySelector(".d1").classList.add("di1");
  document.querySelector(".d2").classList.add("invisible");
  document.querySelector(".d3").classList.add("invisible");
  document.querySelector(".d4").classList.add("invisible");
  document.querySelector(".d5").classList.add("invisible");
  document.querySelector(".d6").classList.add("invisible");

}

else if(randomNumber1 === 2)
{
  document.querySelector(".d2").classList.add("di2");
  document.querySelector(".d1").classList.add("invisible");
  document.querySelector(".d3").classList.add("invisible");
  document.querySelector(".d4").classList.add("invisible");
  document.querySelector(".d5").classList.add("invisible");
  document.querySelector(".d6").classList.add("invisible");

}

else if(randomNumber1 === 3)
{
  document.querySelector(".d3").classList.add("di3");
  document.querySelector(".d1").classList.add("invisible");
  document.querySelector(".d2").classList.add("invisible");
  document.querySelector(".d4").classList.add("invisible");
  document.querySelector(".d5").classList.add("invisible");
  document.querySelector(".d6").classList.add("invisible");

}

else if(randomNumber1 === 4)
{
  document.querySelector(".d4").classList.add("di4");
  document.querySelector(".d1").classList.add("invisible");
  document.querySelector(".d3").classList.add("invisible");
  document.querySelector(".d2").classList.add("invisible");
  document.querySelector(".d5").classList.add("invisible");
  document.querySelector(".d6").classList.add("invisible");

}

else if(randomNumber1 === 5)
{
  document.querySelector(".d5").classList.add("di5");
  document.querySelector(".d1").classList.add("invisible");
  document.querySelector(".d3").classList.add("invisible");
  document.querySelector(".d4").classList.add("invisible");
  document.querySelector(".d2").classList.add("invisible");
  document.querySelector(".d6").classList.add("invisible");

}

else if(randomNumber1 === 6)
{
  document.querySelector(".d6").classList.add("di6");
  document.querySelector(".d1").classList.add("invisible");
  document.querySelector(".d3").classList.add("invisible");
  document.querySelector(".d4").classList.add("invisible");
  document.querySelector(".d5").classList.add("invisible");
  document.querySelector(".d2").classList.add("invisible");

}

// second image part

if(randomNumber2 === 1)
{
  document.querySelector(".d21").classList.add("d2i1");
  document.querySelector(".d22").classList.add("invisible");
  document.querySelector(".d23").classList.add("invisible");
  document.querySelector(".d24").classList.add("invisible");
  document.querySelector(".d25").classList.add("invisible");
  document.querySelector(".d26").classList.add("invisible");
}

if(randomNumber2 === 2)
{
  document.querySelector(".d22").classList.add("d2i2");
  document.querySelector(".d21").classList.add("invisible");
  document.querySelector(".d23").classList.add("invisible");
  document.querySelector(".d24").classList.add("invisible");
  document.querySelector(".d25").classList.add("invisible");
  document.querySelector(".d26").classList.add("invisible");
}

if(randomNumber2 === 3)
{
  document.querySelector(".d23").classList.add("d2i3");
  document.querySelector(".d22").classList.add("invisible");
  document.querySelector(".d21").classList.add("invisible");
  document.querySelector(".d24").classList.add("invisible");
  document.querySelector(".d25").classList.add("invisible");
  document.querySelector(".d26").classList.add("invisible");
}

if(randomNumber2 === 4)
{
  document.querySelector(".d24").classList.add("d2i4");
  document.querySelector(".d22").classList.add("invisible");
  document.querySelector(".d21").classList.add("invisible");
  document.querySelector(".d23").classList.add("invisible");
  document.querySelector(".d25").classList.add("invisible");
  document.querySelector(".d26").classList.add("invisible");
}

if(randomNumber2 === 5)
{
  document.querySelector(".d25").classList.add("d2i5");
  document.querySelector(".d22").classList.add("invisible");
  document.querySelector(".d21").classList.add("invisible");
  document.querySelector(".d23").classList.add("invisible");
  document.querySelector(".d24").classList.add("invisible");
  document.querySelector(".d26").classList.add("invisible");
}

if(randomNumber2 === 6)
{
  document.querySelector(".d26").classList.add("d2i6");
  document.querySelector(".d22").classList.add("invisible");
  document.querySelector(".d21").classList.add("invisible");
  document.querySelector(".d23").classList.add("invisible");
  document.querySelector(".d25").classList.add("invisible");
  document.querySelector(".d24").classList.add("invisible");
}


if(randomNumber1 > randomNumber2)
{
   document.querySelector("h1").innerHTML = "Player 1 wins";
}
else if(randomNumber2 > randomNumber1)
{
   document.querySelector("h1").innerHTML = "Player 2 wins";
}
else{
  document.querySelector("h1").innerHTML = "Draw";
}




// Try another method

// var randomNumber3 = Math.floor(Math.random() * 6) +1;
//
// var randomDiceImage = "dice" + randomNumber3 + ".png";
//
// var randomImageSource = "images/" + randomDiceImage;
//
// var image1 = document.querySelectorAll("img")[0];
//
// image.setAttribute("src", randomImageSource);
