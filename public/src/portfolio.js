export const profile = {
  name: "宋依明",
  role: "AI 产品经理 | 医药方向",
  location: "上海",
  phone: "18511889781",
  email: "songyimingbio@163.com",
  summary:
    "北大医学部背景，6 年生物制药研发经验叠加 3 年 AI 大模型产品化实践，擅长把医药研发痛点转化为可验证、可推广、可交付的智能产品。",
  focusAreas: ["AI 大模型产品化", "医药研发数字化", "实验室自动化", "知识库与数据平台"],
  highlights: [
    "主导 WuXi AI 助手、CCPD 知识库、细胞工艺筛选器等 0 到 1 产品建设",
    "深度参与上游工艺 AI 大模型开发，推动模型从 ML 升级到 Transformer 架构 LLM",
    "主导黑灯实验室自动取样、补料、检测系统方案与二期升级",
    "交付 6+ IND 项目，具备客户汇报、申报资料和跨部门协作经验"
  ]
};

export const metrics = [
  { value: "6+ IND", label: "项目交付", detail: "单抗、双抗、ADC、融合蛋白、疫苗等上游工艺项目" },
  { value: "3 年", label: "AI 实战", detail: "数据收集、模型验证、上线测试、培训推广全流程" },
  { value: "0→1", label: "产品落地", detail: "AI 助手、知识库、黑灯实验室、数字化平台" },
  { value: "北大", label: "医学背景", detail: "北京大学医学部硕士，本科预防医学" }
];

export const projects = [
  {
    slug: "ai-model-productization",
    title: "上游工艺 AI 大模型产品化",
    category: "AI 大模型",
    year: "2022-2025",
    featured: true,
    signal: "从 ML 到 Transformer LLM 的医药研发智能化项目",
    summary: "参与上游工艺 AI 大模型开发，负责数据清洗、可信度评估、参数优化、湿实验验证、上线测试与推广培训。",
    impact: "模型在真实项目应用成功率达到资深工艺开发者水平，成为部门 AI 应用标杆。",
    outcomes: ["缩短工艺开发周期", "提升实验设计效率", "推动研发智能化转型"],
    stack: ["LLM", "Transformer", "湿实验验证", "用户培训"],
    demoPath: "./demos/ai-model-productization.html",
    image: "./public/assets/demo-ai-model.svg"
  },
  {
    slug: "wuxi-ai-assistant",
    title: "WuXi AI 助手与 CCPD 知识库",
    category: "知识库产品",
    year: "2023-2025",
    featured: true,
    signal: "部门级 AI 知识管理产品，从需求到运维拓展",
    summary: "从 0 到 1 搭建部门级 AI 知识管理产品，覆盖需求调研、模块设计、知识库构建、功能验证、培训推广与运维拓展。",
    impact: "形成 CCPD 知识库体系，支撑团队知识沉淀、经验复用和高效协作。",
    outcomes: ["沉淀工艺经验", "支撑团队协作", "统筹 IT 开发资源"],
    stack: ["知识库", "RAG 思路", "产品规划", "跨部门协作"],
    demoPath: "./demos/wuxi-ai-assistant.html",
    image: "./public/assets/demo-knowledge-base.svg"
  },
  {
    slug: "lights-out-lab",
    title: "黑灯实验室自动化系统",
    category: "自动化实验室",
    year: "2019-2025",
    featured: true,
    signal: "自动取样、补料、检测系统与 UI 体验的产品化落地",
    summary: "主导自动取样系统方案设计，参与自动补料、检测系统及 UI 界面设计，并负责二期实验室布局与系统升级。",
    impact: "解决检测结果不准确、机械臂停止、信号中断、操作繁琐等关键问题，实验室成为客户和领导参观必看项目。",
    outcomes: ["一期从 0 到 1", "二期升级交付", "用户体验持续优化"],
    stack: ["自动化控制", "实验室系统", "UI 设计", "项目管理"],
    demoPath: "./demos/lights-out-lab.html",
    image: "./public/assets/demo-lab-automation.svg"
  },
  {
    slug: "cell-process-selector",
    title: "细胞工艺筛选器与 Toolbox 平台",
    category: "数据产品",
    year: "2021-2025",
    featured: true,
    signal: "把历史工艺数据转化为可视化决策工具",
    summary: "主导设计细胞工艺筛选器，参与 Toolbox 平台建设，从多维度挖掘历史数据价值，呈现工艺参数与结果关联。",
    impact: "辅助工艺决策，提高实验设计效率，把历史数据从存档转化为业务资产。",
    outcomes: ["参数关联分析", "数据可视化", "辅助实验设计"],
    stack: ["数据产品", "可视化", "工艺参数", "业务分析"],
    demoPath: "./demos/cell-process-selector.html",
    image: "./public/assets/demo-data-platform.svg"
  },
  {
    slug: "ind-delivery",
    title: "6+ IND 项目与 B 端客户交付",
    category: "项目交付",
    year: "2019-2025",
    featured: false,
    signal: "医药研发场景理解、客户沟通和申报资料交付能力",
    summary: "负责抗体类药物上游小试工艺开发、中试、生产技术转移，作为 Function Leader 设计实验方案并协调跨部门资源。",
    impact: "成功交付 6+ IND 项目，具备向客户汇报实验结果、提供实验报告和申报资料的 B 端交付经验。",
    outcomes: ["6+ IND", "客户汇报", "跨部门项目管理"],
    stack: ["工艺开发", "IND 申报", "客户沟通", "Function Leader"],
    demoPath: "./demos/ind-delivery.html",
    image: "./public/assets/demo-ind-delivery.svg"
  }
];

export const contacts = [
  { kind: "email", label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { kind: "phone", label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
  { kind: "location", label: "Location", value: "上海 · 可面试 AI 产品经理", href: "#top" }
];

export const categories = [...new Set(projects.map((project) => project.category))];

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectsByCategory(category) {
  if (category === "全部") {
    return projects;
  }
  return projects.filter((project) => project.category === category);
}
