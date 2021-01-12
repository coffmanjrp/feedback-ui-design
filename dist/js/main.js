"use strict";
var ratings = document.querySelectorAll('.rating');
var ratingsContainer = document.querySelector('.ratings-container');
var sendBtn = document.getElementById('send');
var panel = document.getElementById('panel');
var selectedRating = '';
function removeActive() {
    for (var i = 0; i < ratings.length; i++) {
        ratings[i].classList.remove('active');
    }
}
ratingsContainer.addEventListener('click', function (e) {
    var _a, _b;
    removeActive();
    if ((_a = e.target) === null || _a === void 0 ? void 0 : _a.parentNode.classList.contains('rating')) {
        e.target.parentNode.classList.add('active');
        if (e.target.matches('small')) {
            selectedRating = e.target.innerHTML;
        }
        else {
            selectedRating = e.target.nextElementSibling.innerHTML;
        }
    }
    else {
        (_b = e.target) === null || _b === void 0 ? void 0 : _b.classList.add('active');
        selectedRating =
            e.target.firstChild.nextElementSibling.nextElementSibling.innerHTML;
    }
});
sendBtn.addEventListener('click', function (e) {
    if (!selectedRating) {
        panel.innerHTML = "\n      <p>Please select one of the ratings.</p>\n    ";
    }
    else {
        panel.innerHTML = "\n      <i class='fas fa-heart'></i>\n      <strong>Thank You!</strong>\n      <br />\n      <strong>Feedback: " + selectedRating + "</strong>\n      <br />\n      <p>We'll use your feedback to improve our customer support.</p>\n    ";
    }
});
