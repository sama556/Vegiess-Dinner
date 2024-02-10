// Get the login form
var modal1 = document.getElementById('login-form');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}



// Get the sign up form
var modal2 = document.getElementById('signUp');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}

////////   Setting Box 
let mainColor = localStorage.getItem('color_option');

//  check if local storage is empty
if (mainColor !== null) {

    document.documentElement.style.setProperty('--main-color', mainColor);

    // remove class active from all colors list items
    document.querySelectorAll('.colors-list li').forEach(Element => {

        Element.classList.remove('active');

        //add class active on element with data color === local storage item
        if (Element.dataset.color === mainColor) {

            // Add active class
            Element.classList.add('active');

        }

    });

}

document.querySelector('.setting-box .icon i').onclick = function() {

    this.classList.toggle('fa-spin');

    document.querySelector('.setting-box').classList.toggle('open');
}

// change color
const colorLi = document.querySelectorAll('.colors-list li');

colorLi.forEach(li => {

    // addd event click
    li.addEventListener("click", (e) => {

        //set color on root
        document.documentElement.style.setProperty("--main-color", e.target.dataset.color);

        //set color on local storage
        localStorage.setItem("color_option", e.target.dataset.color);

        // remove class active from all colors
        e.target.parentElement.querySelectorAll('.active').forEach(Element => {

            Element.classList.remove('active');

        });

        // add class active on target
        e.target.classList.add('active');
    });

});

/* login form

var user = document.getElementById('user'),
    pass = document.getElementById('pass'),
    log = document.getElementById('log'),
    form = document.getElementById('form');

form.addEventListener('submit', (e) => {

    if (user.Value === 'admin') {

        document.querySelector(".setting-box .icon").style.setProperty('display', 'block');
    };
});
*/
