import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");
const css = readFileSync(new URL("../styles.css", import.meta.url), "utf8");
const app = readFileSync(new URL("./app.js", import.meta.url), "utf8");
const aiModelAsset = readFileSync(new URL("../public/assets/demo-ai-model.svg", import.meta.url), "utf8");
const aiModelCase = readFileSync(new URL("../demos/ai-model-productization.html", import.meta.url), "utf8");
const labCase = readFileSync(new URL("../demos/lights-out-lab.html", import.meta.url), "utf8");
const resumePage = readFileSync(new URL("../resume.html", import.meta.url), "utf8");

test("index.html has the AI product manager portfolio shell", () => {
  assert.match(html, /<title>宋依明 · AI 产品经理作品集<\/title>/);
  assert.match(html, /<h1 id="hero-title">AI 产品经理<\/h1>/);
  assert.match(html, /id="featured-work"/);
  assert.match(html, /id="project-grid"/);
  assert.match(html, /id="resume"/);
  assert.match(html, /src="\.\/src\/app\.js"/);
});

test("app.js wires data, filters, and the project dialog", () => {
  assert.match(app, /getProjectsByCategory/);
  assert.match(app, /project-dialog/);
  assert.match(app, /data-open-project/);
  assert.match(app, /renderProjectDialog/);
});

test("styles include the newsprint visual system and responsive states", () => {
  assert.match(css, /--paper:\s*#f9f9f7/);
  assert.match(css, /--ink:\s*#111111/);
  assert.match(css, /--accent:\s*#cc0000/);
  assert.match(css, /Playfair Display/);
  assert.match(css, /\.newsprint-texture/);
  assert.match(css, /\.ticker/);
  assert.match(css, /\.hard-shadow-hover/);
  assert.match(css, /\.model-flow/);
  assert.match(css, /\.case-gallery/);
  assert.match(css, /\.resume-card/);
  assert.match(css, /@media \(max-width: 760px\)/);
  assert.match(css, /:focus-visible/);
});

test("visual assets are present", () => {
  assert.match(aiModelAsset, /AI Model Pipeline/);
  assert.match(aiModelAsset, /<svg/);
});

test("case pages include embedded reference images", () => {
  assert.match(aiModelCase, /public\/case-images\/ai-model-1\.png/);
  assert.match(aiModelCase, /public\/case-images\/ai-model-2\.png/);
  assert.match(labCase, /public\/case-images\/lab-3\.png/);
});

test("resume detail page is linked and contains resume content", () => {
  assert.match(html, /href="\.\/resume\.html"/);
  assert.match(resumePage, /宋依明 AI 产品经理简历/);
  assert.match(resumePage, /song-yiming-ai-pm-resume\.pdf/);
  assert.match(resumePage, /6\+IND项目/);
});
