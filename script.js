let currentSlide = 0;

function renderSlide() {
    const slide = slidesData[currentSlide];
    const slideContainer = document.getElementById('slideContainer');
    let html = `
        <h1>${slide.title}</h1>
        <img src="${slide.image}" alt="${slide.title}" class="slide-image">
        <ul>
            ${slide.content.map(item => `<li>${item}</li>`).join('')}
        </ul>
        <button onclick="openModal('${slide.artifactId}')">Learn More</button>
    `;

    slideContainer.innerHTML = html;
    document.getElementById('slideCounter').textContent = `Slide ${currentSlide + 1} of ${slidesData.length}`;
    updateNavButtons();
}

function openModal(artifactId) {
    const artifact = artifactsData.find(a => a.id === artifactId);
    const modalContent = document.getElementById('modalContent');
    modalContent.innerHTML = `
        <div class="modal-header">
            <h2 class="modal-title">${artifact.title}</h2>
            <button class="close-modal" onclick="closeModal()">&times;</button>
        </div>
        <img src="${artifact.image}" alt="${artifact.title}" class="modal-image">
        <div class="modal-section">
            <h3>Description</h3>
            <p>${artifact.description}</p>
        </div>
        <div class="modal-section">
            <h3>Source/Origin</h3>
            <p>${artifact.source}</p>
        </div>
        <div class="modal-section">
            <h3>Date</h3>
            <p>${artifact.date}</p>
        </div>
        <div class="modal-section">
            <h3>Key Features/Capabilities</h3>
            <ul>
                ${artifact.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        </div>
        <div class="modal-section">
            <h3>Use Cases</h3>
            <ul>
                ${artifact.useCases.map(useCase => `<li>${useCase}</li>`).join('')}
            </ul>
        </div>
        <div class="modal-section">
            <h3>Further Exploration</h3>
            <ul>
                ${artifact.furtherExploration.map(link => `<li><a href="${link.url}" target="_blank">${link.text}</a></li>`).join('')}
            </ul>
        </div>
    `;
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function changeSlide(direction) {
    currentSlide += direction;
    if (currentSlide < 0) currentSlide = 0;
    if (currentSlide >= slidesData.length) currentSlide = slidesData.length - 1;
    renderSlide();
}

function updateNavButtons() {
    document.getElementById('prevBtn').disabled = currentSlide === 0;
    document.getElementById('nextBtn').disabled = currentSlide === slidesData.length - 1;
}

function populateNavigation() {
    const navList = document.getElementById('slideNav');
    slidesData.forEach((slide, index) => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#';
        a.textContent = slide.title;
        a.onclick = (e) => {
            e.preventDefault();
            currentSlide = index;
            renderSlide();
        };
        li.appendChild(a);
        navList.appendChild(li);
    });
}

// Initial render
populateNavigation();
renderSlide();