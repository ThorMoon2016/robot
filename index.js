document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('active');
        // Ovo onemogućava skrolovanje na stranici kada je meni otvoren
        document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : 'auto';
    });
});







document.addEventListener('DOMContentLoaded', function() {
    const poruciDugme = document.querySelector('.poruci-dugme');
    const infoContainer = document.querySelector('.info-container');

    poruciDugme.addEventListener('click', function() {
        infoContainer.style.display = 'block';
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const poruciDugme = document.querySelector('.poruci-dugme');
    const extrasSectionLabel = document.getElementById('openExtrasSectionLabel');
    const infoSectionLabel = document.getElementById('openInfoSectionLabel');
    const productOutlineBox = document.querySelector('.product-outline-box');
    const infoContainer = document.getElementById('infoContainer');
    const naruciButton = document.getElementById('naruciButton');

    // Dodajte flag za praćenje statusa sekcija
    let extrasSectionOpen = false;
    let infoSectionOpen = false;

    poruciDugme.addEventListener('click', function() {
        extrasSectionLabel.style.display = 'block';
        extrasSectionLabel.addEventListener('click', function() {
            if (extrasSectionOpen) {
                productOutlineBox.style.display = 'none';
            } else {
                productOutlineBox.style.display = 'block';
            }
            extrasSectionOpen = !extrasSectionOpen;

            // Ako je sekcija "Podaci" otvorena, zatvorite je
            if (infoSectionOpen) {
                infoContainer.style.display = 'none';
                naruciButton.disabled = true;
                infoSectionOpen = !infoSectionOpen;
                infoSectionLabel.classList.remove('active');
            }
        });

        infoSectionLabel.style.display = 'block';
        infoContainer.style.display = 'none'; // Početno sakrijte sekciju "Podaci"
        naruciButton.disabled = true; // Početno onemogućite dugme "Naruči"

        infoSectionLabel.addEventListener('click', function() {
            if (infoSectionOpen) {
                infoContainer.style.display = 'none';
                naruciButton.disabled = true;
            } else {
                infoContainer.style.display = 'block';
                naruciButton.disabled = false;
            }
            infoSectionOpen = !infoSectionOpen;

            // Ako je sekcija "Dodatak uz cvijeće" otvorena, zatvorite je
            if (extrasSectionOpen) {
                productOutlineBox.style.display = 'none';
                extrasSectionOpen = !extrasSectionOpen;
                extrasSectionLabel.classList.remove('active');
            }
        });
    });
});








document.addEventListener('DOMContentLoaded', function() {
    const naruciDugme = document.querySelector('.naruci-dugme');
    const paypalContainer = document.getElementById('paypal-button-container');

    naruciDugme.addEventListener('click', function() {
        // Prikazi PayPal dugme kada se klikne na dugme "NARUČI"
        paypalContainer.style.display = 'block';

        // Ovde možete dodati kod za inicijalizaciju PayPal dugmeta, ako je potrebno
    });
});




    function displayThankYouMessage() {
        // Ovdje možete prikazati zahvalnu poruku korisniku
        alert('Hvala vam na narudžbi! Vaša narudžba je uspješno zaprimljena.');
    }





   // JavaScript za dodavanje klase na dugmad-container kako bi se pokrenula animacija
document.addEventListener('DOMContentLoaded', function() {
    const dugmadContainer = document.querySelector('.dugmad-container');
    dugmadContainer.classList.add('animate-klackanje');
});


document.addEventListener('DOMContentLoaded', function() {
    const elementsToAnimate = document.querySelectorAll('.animate-on-load');

    elementsToAnimate.forEach(element => {
        element.classList.add('flower-info-animation'); // Dodajemo klasu za animaciju
    });
});




$(document).ready(function () {
    let isDragging = false;
    let startPosition = 0;
    let currentTranslate = 0;
  
    $(".float").on("mousedown touchstart", function (event) {
      isDragging = true;
      startPosition = event.pageX || event.originalEvent.touches[0].pageX;
      currentTranslate = parseInt($(this).css("transform").split(",")[4]);
    });
  
    $(".float").on("mouseup touchend", function () {
      isDragging = false;
    });
  
    $(".float").on("mousemove touchmove", function (event) {
      if (!isDragging) return;
      
      const currentPosition = event.pageX || event.originalEvent.touches[0].pageX;
      const diff = currentPosition - startPosition;
      
      $(this).css("transform", `translateX(${currentTranslate + diff}px)`);
    });
  });
  





  document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.dodaj-u-korpu');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = button.parentElement.querySelector('h3').textContent;
            const productInfo = {
                naziv: productName,
                cijena: '1KM', // Ovdje možete postaviti stvarnu cijenu
                imageUrl: button.parentElement.querySelector('img').src // Čitanje URL slike
            };

            let proizvodiUKorpi = JSON.parse(localStorage.getItem('proizvodiUKorpi')) || [];
            proizvodiUKorpi.push(productInfo);
            localStorage.setItem('proizvodiUKorpi', JSON.stringify(proizvodiUKorpi));

            alert('Proizvod je dodat u korpu!');
        });
    });
});
