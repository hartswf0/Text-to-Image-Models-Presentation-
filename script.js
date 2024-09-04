let currentSlideIndex = 0;
let currentArtifactIndex = 0;

// Function to get the first part of the artifact description
function getArtifactButtonName(artifactId) {
    const artifact = artifactsData.find(a => a.id === artifactId);
    if (artifact && artifact.title) {
        return artifact.title.split(':')[0].trim();
    }
    return artifactId;
}

// Function to render the current slide
function renderSlide() {
    const slide = slidesData[currentSlideIndex];
    const slideContainer = document.getElementById('slideContainer');
    
    // Filter out artifact-related content
    const filteredContent = slide.content.filter(item => 
        !item.startsWith("Artifact Overview:") && 
        !slide.artifactId.some(id => item.includes(id))
    );

    let html = `
        <h1>${slide.title}</h1>
        <img src="${slide.image}" alt="${slide.title}" class="slide-image">
        <ul>
            ${filteredContent.map(item => `<li>${item}</li>`).join('')}
        </ul>
        <h2>Artifacts Overview</h2>
        <div class="artifact-cards">
            ${slide.artifactId.map(id => {
                const artifact = artifactsData.find(a => a.id === id);
                const buttonName = artifact.title.split(':')[0].trim();
                return `
                    <div class="artifact-card">
                        <img src="${artifact.image}" alt="${buttonName}" class="artifact-image">
                        <button class="artifact-button" onclick="openModal('${id}')">${buttonName}</button>
                    </div>
                `;
            }).join('')}
        </div>
    `;
    slideContainer.innerHTML = html;
    document.getElementById('slideCounter').textContent = `Slide ${currentSlideIndex + 1} of ${slidesData.length}`;
    updateNavButtons();
    updateSideMenu();
}

// Function to update the side menu
function updateSideMenu() {
    const sideMenu = document.getElementById('slideNav');
    sideMenu.innerHTML = '';
    slidesData.forEach((slide, index) => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#';
        a.textContent = slide.title;
        a.onclick = (e) => {
            e.preventDefault();
            currentSlideIndex = index;
            renderSlide();
        };
        if (index === currentSlideIndex) {
            li.classList.add('active');
        }
        li.appendChild(a);
        sideMenu.appendChild(li);
    });
}

// Function to open the modal and display an artifact
function openModal(artifactId) {
    currentArtifactIndex = artifactsData.findIndex(a => a.id === artifactId);
    renderArtifact();
    document.getElementById('modal').style.display = 'flex';
}

// Function to render the current artifact
function renderArtifact() {
    const artifact = artifactsData[currentArtifactIndex];
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
        <div class="modal-navigation">
            <button onclick="changeArtifact(-1)" ${currentArtifactIndex === 0 ? 'disabled' : ''}>Previous Artifact</button>
            <button onclick="changeArtifact(1)" ${currentArtifactIndex === artifactsData.length - 1 ? 'disabled' : ''}>Next Artifact</button>
        </div>
    `;
}

// Function to close the modal
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Function to change slides
function changeSlide(direction) {
    currentSlideIndex += direction;
    if (currentSlideIndex < 0) currentSlideIndex = 0;
    if (currentSlideIndex >= slidesData.length) currentSlideIndex = slidesData.length - 1;
    renderSlide();
}

// Function to change artifacts
function changeArtifact(direction) {
    currentArtifactIndex += direction;
    if (currentArtifactIndex < 0) currentArtifactIndex = 0;
    if (currentArtifactIndex >= artifactsData.length) currentArtifactIndex = artifactsData.length - 1;
    renderArtifact();
}

// Function to update navigation buttons
function updateNavButtons() {
    document.getElementById('prevBtn').disabled = currentSlideIndex === 0;
    document.getElementById('nextBtn').disabled = currentSlideIndex === slidesData.length - 1;
}

// Event listeners
document.getElementById('prevBtn').addEventListener('click', () => changeSlide(-1));
document.getElementById('nextBtn').addEventListener('click', () => changeSlide(1));

// Initialize the presentation
renderSlide();
updateSideMenu();