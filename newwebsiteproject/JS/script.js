$(document).ready(function () {
  // Initialize Slick carousel
  $(".slider").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  $(document).ready(function () {
    // Define saveItem function
    function saveItem(itemName) {
      console.log("Item saved:", itemName);
      let savedItems = JSON.parse(localStorage.getItem("savedItems")) || [];
      savedItems.push(itemName);
      localStorage.setItem("savedItems", JSON.stringify(savedItems));
      alert(
        'Item saved! Total items in "Save for Later" folder: ' +
          savedItems.length
      );
    }

    // Attach event listener to a button with id "saveButton"
    $("#saveButton").click(function () {
      // Get the item name from somewhere, for example, an input field
      const itemName = $("#itemNameInput").val();

      // Call the saveItem function with the item name
      saveItem(itemName);
    });
  });
});

// Remove redundant saveItem function definition
/*
function saveItem(item) {
  // You can implement your save logic here
  console.log('Item saved:', item);
  // Alternatively, you can perform any other action you want when the button is clicked
}
*/

// Remove unused animateSlideshow function
/*
$(document).ready(function() {
  function animateSlideshow() {
      var $slider = $('.slider');
      $slider.animate({
          left: '-=100px'
      }, 1000, function() {
          // Animation complete callback
      });
  }
  animateSlideshow();
});
*/

// Remove redundant event listener
/*
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM is ready");
  $(".slider").slick({
    // Your carousel configuration options
  });
});
*/

// Remove duplicate jQuery inclusion
/*
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
*/

function hasClass(elem, className) {
  return elem.className.split(" ").indexOf(className) > -1;
}
document.getElementById("allComments").addEventListener("click", function (e) {
  if (hasClass(e.target, "reply")) {
    const parentDiv = e.target.parentElement;
    const wrapDiv = document.createElement("div");
    wrapDiv.style.marginLeft =
      (Number.parseInt(parentDiv.style.marginLeft) + 15).toString() + "px";
    wrapDiv.className = "wrapper";
    const textArea = document.createElement("textarea");
    textArea.style.marginRight = "20px";
    const addButton = document.createElement("button");
    addButton.className = "addReply";
    addButton.innerHTML = "Add";
    const cancelButton = document.createElement("button");
    cancelButton.innerHTML = "Cancel";
    cancelButton.className = "cancelReply";
    wrapDiv.append(textArea, addButton, cancelButton);
    parentDiv.appendChild(wrapDiv);
  } else if (hasClass(e.target, "addReply")) {
    addComment(e);
  } else if (hasClass(e.target, "likeComment")) {
    const likeBtnValue = e.target.innerHTML;
    e.target.innerHTML =
      likeBtnValue !== "Like" ? Number.parseInt(likeBtnValue) + 1 : 1;
  } else if (hasClass(e.target, "cancelReply")) {
    e.target.parentElement.innerHTML = "";
  } else if (hasClass(e.target, "deleteComment")) {
    e.target.parentElement.remove();
  }
});
const form = document.querySelector("form[name='contact-form']");
const nameInput = document.querySelector("input[name='name']");
const emailInput = document.querySelector("input[name='email']");
const phoneInput = document.querySelector("input[name='phone']");
const messageInput = document.querySelector("textarea[name='message']");

nameInput.isValid = () => !!nameInput.value;
emailInput.isValid = () => isValidEmail(emailInput.value);
phoneInput.isValid = () => isValidPhone(phoneInput.value);
messageInput.isValid = () => !!messageInput.value;

const inputFields = [nameInput, emailInput, phoneInput, messageInput];

const isValidEmail = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const isValidPhone = (phone) => {
  const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return re.test(String(phone).toLowerCase());
};

let shouldValidate = false;
let isFormValid = false;

const validateInputs = () => {
  console.log("we are here");
  if (!shouldValidate) return;

  isFormValid = true;
  inputFields.forEach((input) => {
    input.classList.remove("invalid");
    input.nextElementSibling.classList.add("hide");

    if (!input.isValid()) {
      input.classList.add("invalid");
      isFormValid = false;
      input.nextElementSibling.classList.remove("hide");
    }
  });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  shouldValidate = true;
  validateInputs();
  if (isFormValid) {
    // TODO: DO AJAX REQUEST
  }
});

inputFields.forEach((input) => input.addEventListener("input", validateInputs));
$(document).ready(function() {
  $('.slider').slick({
      // Slick configuration options
  });
});


$(document).ready(function () {
  $("#slideshow1").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // Add other options as needed
  });

  $("#slideshow2").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    // Add other options as needed
  });
});
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
$(document).ready(function(){
  $("button").click(function(){
    $("#p1").css("color", "red")
      .slideUp(2000)
      .slideDown(2000);
  });
});
//https://www.w3schools.com/jquery/jquery_chaining.asp
//https://javascript.plainenglish.io/how-to-create-a-comment-section-using-html-and-vanilla-js-aa6b6a53b9cf
//https://www.youtube.com/watch?v=ps0-JAQENXI
//https://www.w3schools.com/howto/howto_js_dropdown.asp