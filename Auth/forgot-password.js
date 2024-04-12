// Megkeresi  a forgot-password és registration gombokat.
const forgotPasswordButton = document.querySelector('.forgot-password');
const registration = document.querySelector('.registration');
// Egy tömb ami random szövegeket tárolja.
const errorMessages = [
    'Password? What password?',
    'Password amnesia strikes again.',
    'Cant remember your own password?',
    'Who needs passwords, anyway?',
    'Another day, another password forgotten.',
    'Passwords are overrated, right?',
    'Your password is "password", right?',
    'I cant remember your password.',
    'Keep calm and change passwords.',
    'No password, no problem!',
    'Lost your password? Join the club.',
    'Your password is "incorrect", try again.',
    'Need a password reminder? Get in line.',
  ];

// Ha az egér a registration gomb felett van akkor csinálja ezt, ha elhagyja pedig ezt.
registration.addEventListener('mouseenter', function() {
    forgotPasswordButton.style.top = '67%';
    forgotPasswordButton.style.transition = 'top 0.3s ease-in-out';
});
registration.addEventListener('mouseleave', function() {
    forgotPasswordButton.style.top = '68%';
    forgotPasswordButton.style.transition = 'top 0.3s ease-in-out';
});

// Kattintás esemény figyelő.
forgotPasswordButton.addEventListener('click', function() {
  
  const errorContainer = document.querySelector('.error-container');
  const randomIndex = Math.floor(Math.random() * errorMessages.length);

  errorContainer.style.display = 'flex';
  errorContainer.style.alignItems = 'center';
  errorContainer.style.justifyContent = 'center';
  errorContainer.style.backgroundColor = 'var(--secondary-color)';
  errorContainer.style.borderRadius = '15px';
  errorContainer.style.height = '3rem';
  errorContainer.style.backdropFilter = 'blur(10px)';
  errorContainer.style.boxShadow = 'var(--shadow)';
  errorContainer.style.fontWeight = '300';
  errorContainer.style.fontSize = '14pt';

  // Random szöveg beírása a div-be.
  errorContainer.innerText = errorMessages[randomIndex];

  // CSS fájlban található MediaQuery-t imitáló, a képernyő méretét figyelő beállítás, mely az errorContainer paramétereit módosítja az ablak méretének megfelelően.
  const mediaQuery750 = window.matchMedia('(max-width: 750px)');
  const mediaQuery500 = window.matchMedia('(max-width: 500px) and (resolution: 200dpi)');

  if (mediaQuery750.matches) {
    errorContainer.style.height = '2.5rem';
    errorContainer.style.fontSize = '9pt';
  } 
  else if (mediaQuery500.matches) {
    errorContainer.style.height = '2.5rem';
    errorContainer.style.fontSize = '9pt';
  } 
  else {
    errorContainer.style.height = '3rem';
    errorContainer.style.fontSize = '14pt';
  }
});