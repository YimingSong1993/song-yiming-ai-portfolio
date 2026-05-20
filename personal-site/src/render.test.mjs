import assert from "node:assert/strict";
import test from "node:test";
import {
  renderCategoryButton,
  renderContactLinks,
  renderMetric,
  renderProjectCard,
  renderProjectDialog
} from "./render.js";

const project = {
  slug: "ai-model-productization",
  title: "上游工艺 AI 大模型产品化",
  category: "AI 大模型",
  year: "2022-2025",
  signal: "从 ML 到 Transformer LLM 的医药研发智能化项目",
  summary: "参与上游工艺 AI 大模型开发，负责数据清洗、模型验证与上线推广。",
  impact: "模型在真实项目应用成功率达到资深工艺开发者水平。",
  outcomes: ["缩短工艺开发周期", "提升实验设计效率"],
  stack: ["LLM", "Transformer", "湿实验验证"],
  demoPath: "./demos/ai-model-productization.html",
  image: "./public/assets/demo-ai-model.svg"
};

test("renderProjectCard includes accessible project controls", () => {
  const html = renderProjectCard(project);
  assert.match(html, /data-project-slug="ai-model-productization"/);
  assert.match(html, /上游工艺 AI 大模型产品化/);
  assert.match(html, /查看详情/);
  assert.match(html, /alt="上游工艺 AI 大模型产品化 案例预览"/);
});

test("renderProjectDialog includes outcomes, links, and impact", () => {
  const html = renderProjectDialog(project);
  assert.match(html, /id="dialog-title"/);
  assert.match(html, /Transformer/);
  assert.match(html, /查看案例页/);
  assert.match(html, /缩短工艺开发周期/);
  assert.match(html, /资深工艺开发者水平/);
});

test("render helpers mark active filters and contact links", () => {
  assert.match(renderCategoryButton("全部", true), /aria-pressed="true"/);
  assert.match(renderMetric({ value: "6+ IND", label: "项目交付", detail: "覆盖多个方向" }), /项目交付/);
  assert.match(
    renderContactLinks([{ label: "Email", value: "songyimingbio@163.com", href: "mailto:songyimingbio@163.com" }]),
    /mailto:songyimingbio@163.com/
  );
});
