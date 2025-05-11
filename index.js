document.getElementById("mybtn").addEventListener("click", function () {
  
  //Create a Random Dice Image to PLayer 1
  var RandomImageNumber1 = Math.floor(Math.random() * 6) + 1;

  var SourceImage1 = "dice" + RandomImageNumber1 + ".png";

  var GenerateImage1 = "image/" + SourceImage1;

  // Start Changing the Image of Player 1
  var image1 = document.querySelectorAll("img")[0];
  image1.setAttribute("src", GenerateImage1);
  console.log(RandomImageNumber1);

  //Create a Random Dice Image to Player 2
  var RandomImageNumber2 = Math.floor(Math.random() * 6) + 1;

  var SourceImage2 = "dice" + RandomImageNumber2 + ".png";

  var GenerateImage2 = "image/" + SourceImage2;

  //Start Changing the Image of Player 2

  var image2 = document.querySelectorAll("img")[1];
  image2.setAttribute("src", GenerateImage2 );
  console.log(RandomImageNumber2);

  if( RandomImageNumber1 > RandomImageNumber2){
    document.querySelector("h3").textContent = ("🚩 Player 1 Win!");
  }
  else if(RandomImageNumber2 > RandomImageNumber1){
    document.querySelector("h3").textContent = (" Player 2 Win! 🚩");
  }else{
    document.querySelector("h3").textContent = (" DRAW");
  }



});
