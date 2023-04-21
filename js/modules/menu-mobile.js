//Menu mobile//

export default function menuMobile() {
 
    const btnMobile = document.getElementById('btn-mobile');
  
    function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
    }
  
    // to close menu
  
    function scrollToID(event) {
        event.preventDefault();
        const ID = event.currentTarget.getAttribute('href');
        const target = document.querySelector(ID);
        target.scrollIntoView({ behavior: "smooth" });
        // close the menu
        btnMobile.click();
    }
    
    // Select internal links
    const intLinks = document.querySelectorAll('[href^="#"]');
    intLinks.forEach(link => {
        link.addEventListener('click', scrollToID);
    });
  
   
  
    btnMobile.addEventListener('click', toggleMenu);
    btnMobile.addEventListener('touchstart', toggleMenu);
  
  }
  
  