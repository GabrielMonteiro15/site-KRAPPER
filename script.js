const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');

let activeSlideIndex = 0;

// Função para mostrar o slide ativo
function showSlide(slideIndex) {
    slides.forEach(slide => slide.style.display = 'none');
    slides[slideIndex].style.display = 'flex';

    dots.forEach(dot => dot.classList.remove('active'));
    dots[slideIndex].classList.add('active');
}

// Função para ir para o próximo slide
function nextSlide() {
    if (activeSlideIndex === slides.length - 1) {
        activeSlideIndex = 0;
    } else {
        activeSlideIndex++;
    }

    showSlide(activeSlideIndex);
}

// Função para ir para o slide anterior
function previousSlide() {
    if (activeSlideIndex === 0) {
        activeSlideIndex = slides.length - 1;
    } else {
        activeSlideIndex--;
    }

    showSlide(activeSlideIndex);
}

// Adicionar eventos de click nos botões de navegação
arrowLeft.addEventListener('click', previousSlide);
arrowRight.addEventListener('click', nextSlide);

// Mostrar o slide inicial
showSlide(activeSlideIndex);

// Adicionar eventos de click nos indicadores de paginação
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        activeSlideIndex = index;
        showSlide(activeSlideIndex);
    });
});

function clickmenu(){
    const menu = document.getElementById("itensmenu")
    if(menu.style.display == 'block'){
        menu.style.display = 'none';

    }else{
        menu.style.display = 'block'
    
    }
}

function popup(){
    const modal = document.getElementById("modal")
    const botao = document.getElementById("botao")
    modal.show()
}
function fecharpopup(){
    const modal = document.getElementById("modal")
    const botao = document.getElementById("botao")
    modal.close()
}