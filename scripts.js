function renderProjects(filter = "all") {
  const grid = document.getElementById("projects-grid");
  grid.innerHTML = "";

  const filtered =
    filter === "all"
      ? projectData
      : projectData.filter((p) => p.type === filter);

  filtered.forEach((project) => {
    const card = document.createElement("div");
    card.className = "col portfolio-item isotope-item filter-web"; // Let Bootstrap handle column sizing
    card.innerHTML = `
  <div class="portfolio-card">
    <div class="portfolio-image">
      <img src="${project.image}" class="img-fluid" alt="${
      project.name
    }" loading="lazy">
      <div class="portfolio-overlay">
        <div class="portfolio-actions project-buttons">
          <a onclick='window.open("${
            project.video
          }", "_blank")' class="details-link"><i class="bi bi-eye"></i></a>
          <a onclick='window.open("${
            project.github
          }", "_blank")' class="details-link"><i class="bi bi-github"></i></a>
          
        </div>
      </div>
      
    </div>
    <div class="portfolio-content">
      <span class="category">${project.type}</span>
      <h3>${project.name}</h3>
      <p>${project.description}</p>
    </div>
  </div>
`;

    grid.appendChild(card);
  });
}

function filterProjects(category) {
  renderProjects(category);
}

function openModal(gallery) {
  const modal = document.getElementById("imageModal");
  const modalContent = document.getElementById("modal-images");
  modalContent.innerHTML = "";
  gallery.forEach((img) => {
    const image = document.createElement("img");
    image.src = img;
    image.style.borderRadius = "10px";
    image.style.maxWidth = '100%';
    image.style.maxHeight = "100%";
    image.style.padding = "30px";
    modalContent.appendChild(image);
  });
  modal.style.display = "block";
}

function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}

window.onload = () => renderProjects();
// <img src="${project.image}" alt="${project.name}">
//     <h3>${project.name}</h3>
//     <p class="project-description">${project.description}</p>
//     <div class="project-buttons">
//       <button onclick='openModal(${JSON.stringify(project.gallery)})'>👁</button>
//       <button onclick='window.open("${project.github}", "_blank")'>GitHub</button>
//     </div>
