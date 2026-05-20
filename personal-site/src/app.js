import {
  categories,
  contacts,
  getProjectBySlug,
  getProjectsByCategory,
  metrics,
  profile
} from "./portfolio.js";
import {
  renderCategoryButton,
  renderContactLinks,
  renderMetric,
  renderProjectCard,
  renderProjectDialog
} from "./render.js";

const state = {
  activeCategory: "全部"
};

const elements = {
  metrics: document.querySelector("#metrics"),
  filters: document.querySelector("#category-filters"),
  grid: document.querySelector("#project-grid"),
  about: document.querySelector("#about-content"),
  contacts: document.querySelector("#contact-links"),
  dialog: document.querySelector("#project-dialog"),
  dialogContent: document.querySelector("#dialog-content"),
  dialogClose: document.querySelector("#dialog-close")
};

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderMetrics() {
  elements.metrics.innerHTML = metrics.map(renderMetric).join("");
}

function renderFilters() {
  const filterOptions = ["全部", ...categories];
  elements.filters.innerHTML = filterOptions
    .map((category) => renderCategoryButton(category, category === state.activeCategory))
    .join("");
}

function renderProjects() {
  const visibleProjects = getProjectsByCategory(state.activeCategory);
  elements.grid.innerHTML = visibleProjects.map(renderProjectCard).join("");
}

function renderAbout() {
  elements.about.innerHTML = `
    <p>${escapeHtml(profile.summary)}</p>
    <div class="focus-list">
      ${profile.focusAreas.map((area) => `<span>${escapeHtml(area)}</span>`).join("")}
    </div>
    <ul class="resume-highlights">
      ${profile.highlights.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
    </ul>
  `;
}

function openProject(slug) {
  const project = getProjectBySlug(slug);
  if (!project) {
    return;
  }
  elements.dialogContent.innerHTML = renderProjectDialog(project);
  elements.dialog.showModal();
}

function bindEvents() {
  elements.filters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-category]");
    if (!button) {
      return;
    }
    state.activeCategory = button.dataset.category;
    renderFilters();
    renderProjects();
  });

  elements.grid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-open-project]");
    if (!button) {
      return;
    }
    openProject(button.dataset.openProject);
  });

  elements.dialogClose.addEventListener("click", () => {
    elements.dialog.close();
  });

  elements.dialog.addEventListener("click", (event) => {
    if (event.target === elements.dialog) {
      elements.dialog.close();
    }
  });
}

function init() {
  renderMetrics();
  renderFilters();
  renderProjects();
  renderAbout();
  elements.contacts.innerHTML = renderContactLinks(contacts);
  bindEvents();
}

init();
