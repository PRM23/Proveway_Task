const radioBtn = document.getElementsByName("radio");
const section1 = document.getElementById("first");
const section2 = document.getElementById("second");
const section3 = document.getElementById("third");
const input = document.getElementById("show");
const input1 = document.getElementById("show2");
const input2 = document.getElementById("show3");

radioBtn.forEach(function (i) {
  i.addEventListener("change", function (el) {
    var clicked = el.currentTarget;
    console.log(clicked.value);
    if (clicked.value == "1 Pair") {
      input.style.display = "block";
      section1.style.backgroundColor = "#F4FBF9";
      section2.style.backgroundColor = "white";
      section3.style.backgroundColor = "white";

      section1.style.border = "1px solid #007f61";
      section2.style.border = "1px solid #c8c8c8";
      section3.style.border = "1px solid #c8c8c8";

      input1.style.display = "none";
      input2.style.display = "none";
    } else if (clicked.value == "2 Pair") {
      input1.style.display = "block";
      section1.style.backgroundColor = "white";
      section2.style.backgroundColor = "#F4FBF9";
      section3.style.backgroundColor = "white";

      section2.style.border = "1px solid #007f61";
      section1.style.border = "1px solid #c8c8c8";
      section3.style.border = "1px solid #c8c8c8";

      input.style.display = "none";
      input2.style.display = "none";
    } else if (clicked.value == "3 Pair") {
      input2.style.display = "block";
      section1.style.backgroundColor = "white";
      section2.style.backgroundColor = "white";
      section3.style.backgroundColor = "#F4FBF9";

      section3.style.border = "1px solid #007f61";
      section1.style.border = "1px solid #c8c8c8";
      section2.style.border = "1px solid #c8c8c8";

      input1.style.display = "none";
      input.style.display = "none";
    } else {
      input.style.display = "none";
    }
  });
});
