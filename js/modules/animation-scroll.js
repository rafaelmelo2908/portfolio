//Scroll coming by side//

export default function initAnimationScroll() {

    const sections = document.querySelectorAll('.js-scroll');
  
    if(sections.length) {
        const windowHalf = window.innerHeight * .6;
  
        function animateScroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - windowHalf);
  
                if(isSectionVisible < 0) {
                    section.classList.add('active');
                }
            })
        }
  
        animateScroll();
  
        window.addEventListener('scroll', animateScroll);
  
    }
  
  }
  
  