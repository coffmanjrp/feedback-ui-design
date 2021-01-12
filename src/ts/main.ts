const ratings = document.querySelectorAll('.rating') as NodeListOf<HTMLElement>;
const ratingsContainer = document.querySelector(
  '.ratings-container'
) as HTMLElement;
const sendBtn = document.getElementById('send') as HTMLElement;
const panel = document.getElementById('panel') as HTMLElement;
let selectedRating = '';

function removeActive() {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove('active');
  }
}

ratingsContainer.addEventListener('click', (e) => {
  if (e.target?.parentNode.classList.contains('rating')) {
    removeActive();
    e.target.parentNode.classList.add('active');
    selectedRating = e.target.nextElementSibling.innerHTML;
  }
});

sendBtn.addEventListener('click', (e) => {
  if (!selectedRating) {
    panel.innerHTML = `
      <p>Please select one of the ratings.</p>
    `;

    setTimeout(() => window.location.reload(), 1500);
  } else {
    panel.innerHTML = `
      <i class='fas fa-heart'></i>
      <strong>Thank You!</strong>
      <br />
      <strong>Feedback: ${selectedRating}</strong>
      <br />
      <p>We'll use your feedback to improve our customer support.</p>
    `;
  }
});
