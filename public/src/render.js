function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export function renderMetric(metric) {
  return `
    <article class="metric">
      <strong>${escapeHtml(metric.value)}</strong>
      <span>${escapeHtml(metric.label)}</span>
      <p>${escapeHtml(metric.detail)}</p>
    </article>
  `;
}

export function renderCategoryButton(category, isActive) {
  return `
    <button
      class="filter-button${isActive ? " is-active" : ""}"
      type="button"
      data-category="${escapeHtml(category)}"
      aria-pressed="${isActive ? "true" : "false"}"
    >
      ${escapeHtml(category)}
    </button>
  `;
}

export function renderProjectCard(project) {
  return `
    <article class="project-card" data-project-slug="${escapeHtml(project.slug)}">
      <img class="project-image" src="${escapeHtml(project.image)}" alt="${escapeHtml(project.title)} 案例预览" />
      <div class="project-card-body">
        <div class="project-meta">
          <span>${escapeHtml(project.category)}</span>
          <span>${escapeHtml(project.year)}</span>
        </div>
        <h3>${escapeHtml(project.title)}</h3>
        <p class="project-signal">${escapeHtml(project.signal)}</p>
        <p>${escapeHtml(project.summary)}</p>
        <div class="project-stack">
          ${project.stack.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
        </div>
        <button class="text-button" type="button" data-open-project="${escapeHtml(project.slug)}">
          查看详情
        </button>
      </div>
    </article>
  `;
}

export function renderProjectDialog(project) {
  return `
    <div class="dialog-layout">
      <img class="dialog-image" src="${escapeHtml(project.image)}" alt="${escapeHtml(project.title)} 详情图" />
      <div>
        <p class="eyebrow">${escapeHtml(project.category)} · ${escapeHtml(project.year)}</p>
        <h3 id="dialog-title">${escapeHtml(project.title)}</h3>
        <p class="project-signal">${escapeHtml(project.signal)}</p>
        <p>${escapeHtml(project.summary)}</p>
        <p class="impact">${escapeHtml(project.impact)}</p>
        <ul class="outcome-list">
          ${project.outcomes.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
        <div class="project-stack">
          ${project.stack.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
        </div>
        <div class="dialog-actions">
          <a class="button primary" href="${escapeHtml(project.demoPath)}">查看案例页</a>
          <a class="button secondary" href="mailto:songyimingbio@163.com">联系候选人</a>
        </div>
      </div>
    </div>
  `;
}

export function renderContactLinks(contacts) {
  return contacts
    .map(
      (contact) => `
        <a class="contact-link" href="${escapeHtml(contact.href)}">
          <span>${escapeHtml(contact.label)}</span>
          <strong>${escapeHtml(contact.value)}</strong>
        </a>
      `
    )
    .join("");
}
