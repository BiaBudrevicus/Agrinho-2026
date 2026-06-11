// Dados de Artigos
const articles = [
    {
        id: 1,
        title: "Rotação de Culturas: Melhore seu Solo",
        description: "Entenda como a rotação de culturas pode restaurar a fertilidade do solo e reduzir pragas naturalmente.",
        date: "10 de Junho, 2026",
        icon: "🌾"
    },
    {
        id: 2,
        title: "Agricultura Orgânica: Guia Prático",
        description: "Aprenda os fundamentos da agricultura orgânica e como implementar em sua propriedade.",
        date: "08 de Junho, 2026",
        icon: "🥬"
    },
    {
        id: 3,
        title: "Conservação de Água na Agricultura",
        description: "Técnicas eficazes para economizar água mantendo a produtividade agrícola.",
        date: "05 de Junho, 2026",
        icon: "💧"
    },
    {
        id: 4,
        title: "Compostagem: Transforme Resíduos em Fertilizante",
        description: "Guia completo sobre compostagem para criar fertilizante natural de qualidade.",
        date: "02 de Junho, 2026",
        icon: "♻️"
    },
    {
        id: 5,
        title: "Controle Biológico de Pragas",
        description: "Métodos naturais para controlar pragas sem prejudicar o meio ambiente.",
        date: "31 de Maio, 2026",
        icon: "🐛"
    },
    {
        id: 6,
        title: "Agroecologia: Harmonia com a Natureza",
        description: "Descubra como integrar agroecologia em seu sistema de produção.",
        date: "28 de Maio, 2026",
        icon: "🌿"
    }
];

// Dados de Dicas
const tips = [
    {
        id: 1,
        title: "Mulch no Solo",
        description: "Usar palha ou cobertura morta reduz a evaporação de água, controla ervas daninhas e mantém o solo mais fresco."
    },
    {
        id: 2,
        title: "Plantio de Leguminosas",
        description: "Culturas como feijão e grão-de-bico fixam nitrogênio no solo, reduzindo a necessidade de fertilizantes."
    },
    {
        id: 3,
        title: "Monitoramento de Pragas",
        description: "Observe regularmente suas plantas para detectar pragas cedo e intervir com métodos menos prejudiciais."
    },
    {
        id: 4,
        title: "Diversidade de Culturas",
        description: "Plantar diferentes culturas juntas aumenta a biodiversidade e reduz doenças e pragas."
    },
    {
        id: 5,
        title: "Economia de Água",
        description: "Irrigue no final do dia para reduzir evaporação e use gotejamento para economizar água."
    },
    {
        id: 6,
        title: "Adubação Verde",
        description: "Cultive plantas leguminosas e depois as incorpore ao solo para aumentar nutrientes naturalmente."
    },
    {
        id: 7,
        title: "Proteção do Solo",
        description: "Evite deixar o solo exposto. Use cobertura vegetal permanentemente para proteger contra erosão."
    },
    {
        id: 8,
        title: "Compostagem Doméstica",
        description: "Aproveite resíduos orgânicos para criar adubo de qualidade em casa. Simples e eficaz!"
    }
];

// Renderizar Artigos
function renderArticles() {
    const articlesGrid = document.getElementById('articlesGrid');
    articlesGrid.innerHTML = articles.map(article => `
        <div class="article-card">
            <div class="article-image">${article.icon}</div>
            <div class="article-content">
                <h3>${article.title}</h3>
                <p>${article.description}</p>
                <div class="article-date">${article.date}</div>
            </div>
        </div>
    `).join('');
}

// Renderizar Dicas
function renderTips() {
    const tipsGrid = document.getElementById('tipsGrid');
    tipsGrid.innerHTML = tips.map(tip => `
        <div class="tip-card">
            <h3>${tip.title}</h3>
            <p>${tip.description}</p>
        </div>
    `).join('');
}

// Menu Hamburger
function setupHamburger() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// Formulário Newsletter
function setupNewsletter() {
    const form = document.getElementById('newsletterForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = form.querySelector('input[type="email"]').value;
        alert(`Obrigado! Você se inscreveu com ${email}`);
        form.reset();
    });
}

// Formulário Contato
function setupContact() {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso.`);
        form.reset();
    });
}

// Scroll suave
function setupSmoothScroll() {
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
}

// Animação ao fazer scroll
function setupScrollAnimation() {
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

    document.querySelectorAll('.article-card, .tip-card, .about-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    renderArticles();
    renderTips();
    setupHamburger();
    setupNewsletter();
    setupContact();
    setupSmoothScroll();
    setupScrollAnimation();
});

// Função para adicionar novos artigos (opcional)
function addArticle(title, description, icon = "📝") {
    const newArticle = {
        id: articles.length + 1,
        title: title,
        description: description,
        date: new Date().toLocaleDateString('pt-BR'),
        icon: icon
    };
    articles.push(newArticle);
    renderArticles();
}

// Função para adicionar novas dicas (opcional)
function addTip(title, description) {
    const newTip = {
        id: tips.length + 1,
        title: title,
        description: description
    };
    tips.push(newTip);
    renderTips();
}
