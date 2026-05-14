// =========================================
// JAVASCRIPT COMPLETO PARA PORTAFOLIO
// Tommylee Fernández - Optimizado 2026
// =========================================

// 1. DESPLAZAMIENTO SUAVE PARA NAVEGACIÓN
document.querySelectorAll('nav a, .btn').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        const section = document.querySelector(href);
        
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 2. EFECTO DE APARICIÓN CON INTERSECTION OBSERVER (MÁS EFICIENTE)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar todas las tarjetas y secciones
document.addEventListener('DOMContentLoaded', function() {
    const elementsToAnimate = document.querySelectorAll('.card, .card-iyv, .card-purpose, .exp-card, .investigacion-card, .item, .learning-col, .foda-grid > div, section');
    
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });
});

// 3. EFECTO HOVER EN CARDS
document.querySelectorAll('.card, .card-iyv, .card-purpose, .exp-card, .investigacion-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
        this.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
    });
});

// 4. ANIMACIÓN DEL LOGO AL CARGAR
window.addEventListener('load', function() {
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.style.opacity = '0';
        logo.style.transform = 'scale(0.5) rotate(-180deg)';
        
        setTimeout(() => {
            logo.style.transition = 'all 1s ease';
            logo.style.opacity = '1';
            logo.style.transform = 'scale(1) rotate(0deg)';
        }, 500);
    }
});

// 5. EFECTO PARALLAX SUAVE EN HERO
window.addEventListener('scroll', function() {
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        const scrolled = window.pageYOffset;
        heroImage.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// 6. RESPONSIVE PARA MÓVIL - CERRAR MENÚ AL CLIC
function closeMobileMenu() {
    const navUl = document.querySelector('nav ul');
    if (window.innerWidth <= 768 && navUl.classList.contains('active')) {
        navUl.classList.remove('active');
    }
}

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

// 7. ANIMACIÓN DE CONTADORES (SI TIENES NÚMEROS)
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.floor(current) + '+';
                setTimeout(updateCounter, 20);
            } else {
                counter.textContent = target + '+';
            }
        };
        updateCounter();
    });
}

// 8. SMOOTH SCROLL PARA ANCLARES INTERNOS
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 9. EFECTO DE ESCRITURA EN TÍTULOS (OPCIONAL)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// 10. BACK TO TOP BUTTON (AGREGAR AL HTML SI QUIERES)
// const backToTop = document.createElement('button');
// backToTop.innerHTML = '↑';
// backToTop.className = 'back-to-top';
// document.body.appendChild(backToTop);

// window.addEventListener('scroll', () => {
//     if (window.pageYOffset > 300) {
//         backToTop.style.opacity = '1';
//         backToTop.style.visibility = 'visible';
//     } else {
//         backToTop.style.opacity = '0';
//         backToTop.style.visibility = 'hidden';
//     }
// });

// backToTop.addEventListener('click', () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
// });

// =========================================
// INICIALIZACIÓN AUTOMÁTICA
// =========================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ Portafolio JS cargado correctamente');
    
    // Inicializar efectos
    setTimeout(() => {
        observer.observe(document.querySelector('#inicio'));
    }, 100);
    
    // Activar animación de título principal (opcional)
    const mainTitle = document.querySelector('h1');
    if (mainTitle) {
        typeWriter(mainTitle, mainTitle.textContent, 80);
    }
});
// EFECTO CLICK EN SOCIAL BUTTONS
document.querySelectorAll('.social-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // Animación de pulso
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'translateY(-5px) scale(1.05)';
        }, 150);
        
        // Mensaje de copiado (opcional)
        console.log('Abriendo:', this.title);
    });
});
