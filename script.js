// Seleção de elementos do DOM para contato
const btnContato  = document.getElementById('btn-contato');
const infoContato = document.getElementById('info-contato');

// Alterna a visibilidade do e-mail de contato e atualiza o texto do botão
btnContato.addEventListener('click', function () {
  const oculto = infoContato.classList.toggle('hidden');
  btnContato.textContent = oculto
    ? 'Clique para ver meu e-mail'
    : 'Ocultar e-mail';
  btnContato.setAttribute('aria-expanded', String(!oculto));
});

// Funcionalidade para mostrar/ocultar detalhes dos cards de unidades curriculares
const btnDetalhes = document.querySelectorAll('.btn-detalhes');

btnDetalhes.forEach(button => {
  button.addEventListener('click', function () {
    const cardId = this.getAttribute('data-card');
    const detalhes = document.getElementById(`detalhes-${cardId}`);
    const estaOculto = detalhes.classList.toggle('hidden');
    
    this.textContent = estaOculto ? 'Saiba mais' : 'Ocultar detalhes';
  });
});

// Seleciona o botão de alternância de tema presente no HTML
const btnTema = document.getElementById('btn-tema');

// Alterna o modo escuro no body e atualiza o rótulo do botão com ícone
btnTema.addEventListener('click', function () {
  const escuro = document.body.classList.toggle('dark-mode');
  btnTema.innerHTML = escuro
    ? '<span class="icon">☀</span>Modo Claro'
    : '<span class="icon">☾</span>Modo Escuro';
  btnTema.setAttribute('aria-pressed', String(escuro));
});

// Define a saudação de acordo com a hora do dia
const hora = new Date().getHours();
let saudacao = '';

if (hora < 12)       saudacao = 'Bom dia';
else if (hora < 18)  saudacao = 'Boa tarde';
else                 saudacao = 'Boa noite';

// Atualiza o texto de apresentação preservando o destaque do nome
const h1 = document.querySelector('h1');
const nomeDestaque = document.getElementById('nome-destaque');
if (h1 && nomeDestaque) {
  const nome = nomeDestaque.textContent;
  h1.innerHTML = `${saudacao}, eu sou <span id="nome-destaque">${nome}</span>`;
}

// Funcionalidade do carrossel de imagens
const carouselImages = document.querySelectorAll('.carousel-image');
const carouselDots = document.querySelectorAll('.dot');
const btnPrev = document.querySelector('.carousel-prev');
const btnNext = document.querySelector('.carousel-next');
let currentSlide = 0;

// Função para mostrar slide
function showSlide(index) {
  carouselImages.forEach(img => img.classList.add('hidden'));
  carouselDots.forEach(dot => dot.classList.remove('active'));
  
  carouselImages[index].classList.remove('hidden');
  carouselDots[index].classList.add('active');
  currentSlide = index;
}

// Botão anterior
btnPrev.addEventListener('click', function () {
  const prevSlide = (currentSlide - 1 + carouselImages.length) % carouselImages.length;
  showSlide(prevSlide);
});

// Botão próximo
btnNext.addEventListener('click', function () {
  const nextSlide = (currentSlide + 1) % carouselImages.length;
  showSlide(nextSlide);
});

// Clique nos pontos
carouselDots.forEach(dot => {
  dot.addEventListener('click', function () {
    const slideIndex = parseInt(this.getAttribute('data-slide'));
    showSlide(slideIndex);
  });
});

// Auto-advance do carrossel a cada 5 segundos
setInterval(function () {
  const nextSlide = (currentSlide + 1) % carouselImages.length;
  showSlide(nextSlide);
}, 5000);
