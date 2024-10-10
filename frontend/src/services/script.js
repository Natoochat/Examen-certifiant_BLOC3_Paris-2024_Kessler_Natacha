const buttons = document.querySelectorAll('.caroussel_btn');
const slides = document.querySelectorAll('.slide');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const calcNextSlide = e.target.id === 'next' ? 1 : -1 ;
    const activeSlide = document.querySelector('.active');
    newIndex = calcNextSlide + [...slides].indexOf(activeSlide);
    if (newIndex < 0) newIndex = slides.length - 1;
    if (newIndex >= slides.length) newIndex = 0;
    slides[newIndex].classList.add('active');
    activeSlide.classList.remove('active');
  });
})

function handleRegistrationResponse(response) {
  if (response.success) {
      const modal = document.getElementById("myModal");
      modal.style.display = "block";
  } else {
      // Afficher un message d'erreur
  }
}
function redirectToHome() {
  // Récupérer le token de l'email
  const token = 'votre_token'; // Remplacer par le token récupéré de l'email
  window.location.href = '/home?token=' + token;
}