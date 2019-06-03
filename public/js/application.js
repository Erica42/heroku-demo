function myFunction() {
  var x = document.getElementById("helloWordsAndPic");
  var y = document.getElementById("goodbyeWordsAndPic");
  var z = document.getElementById("showButton");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
    z.innerText = "Goodbye";
  } else {
    x.style.display = "none";
    y.style.display = "block";
    z.innerText = "Hello";
  }
}