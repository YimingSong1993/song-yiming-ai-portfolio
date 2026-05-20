import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import test from "node:test";
import {
  categories,
  contacts,
  getFeaturedProjects,
  getProjectBySlug,
  getProjectsByCategory,
  metrics,
  profile,
  projects
} from "./portfolio.js";

test("profile contains the AI pharma product manager positioning", () => {
  assert.equal(profile.name, "宋依明");
  assert.match(profile.role, /AI 产品经理/);
  assert.match(profile.summary, /6 年生物制药研发/);
  assert.match(profile.summary, /3 年 AI 大模型/);
});

test("portfolio exposes resume-backed metrics and contact paths", () => {
  assert.equal(metrics.length, 4);
  assert.ok(metrics.some((metric) => metric.value === "6+ IND"));
  assert.ok(metrics.some((metric) => metric.value === "0→1"));
  assert.ok(contacts.some((contact) => contact.href === "mailto:songyimingbio@163.com"));
});

test("projects can be featured, found by slug, and filtered by category", () => {
  assert.equal(projects.length, 5);
  assert.ok(categories.includes("AI 大模型"));
  assert.ok(getFeaturedProjects().length >= 4);
  assert.equal(getProjectBySlug("ai-model-productization").title, "上游工艺 AI 大模型产品化");
  assert.deepEqual(
    getProjectsByCategory("数据产品").map((project) => project.slug),
    ["cell-process-selector"]
  );
});

test("all demo paths are internal static pages that exist", () => {
  for (const project of projects) {
    assert.match(project.demoPath, /^\.\/demos\/.+\.html$/);
    const demoUrl = new URL(`../${project.demoPath.replace("./", "")}`, import.meta.url);
    assert.equal(existsSync(demoUrl), true, `${project.demoPath} should exist`);
  }
});

test("resume attachment exists inside the static site", () => {
  assert.equal(existsSync(new URL("../resume.html", import.meta.url)), true);
  assert.equal(existsSync(new URL("../resume/song-yiming-ai-pm-resume.pdf", import.meta.url)), true);
});
