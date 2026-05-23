# Singapore CBD Office — 技术规格文档

## 1. 项目概述

**目标**：为新加坡 CBD 办公室中介服务打造一个专业个人站，主要功能包括：
- 展示个人介绍与服务范围
- 呈现 CBD 著名大楼基础信息
- 提供办公室类型科普与租赁流程引导
- AI 聊天助手驱动线索转换

**目标用户**：正在寻找新加坡 CBD 办公空间的企业主、创业者、外资进驻团队

---

## 2. 技术栈

| 层级 | 技术选型 | 原因 |
|------|---------|------|
| 框架 | Next.js 14 (App Router) | SSR/SSG 对 SEO 友好，适合内容站 |
| UI 样式 | Tailwind CSS + shadcn/ui | 高效构建专业 UI |
| 语言 | TypeScript | 类型安全，维护性强 |
| 动效 | Framer Motion | 流畅页面过渡与组件动画 |
| AI 聊天 | Anthropic Claude API (claude-haiku-4-5) | 低延迟、低成本，适合实时对话 |
| 表单/线索 | React Hook Form + Resend (Email) | 轻量表单管理 + 邮件通知 |
| 部署 | Vercel | 与 Next.js 原生集成，自动 CI/CD |
| 分析 | Vercel Analytics + Google Tag Manager | 流量与转换追踪 |

---

## 3. 站点架构

```
/                         首页 (Hero + CTA + 快速入口)
/about                    个人介绍 + 服务说明
/buildings                CBD 著名大楼展示
/office-types             办公室类型科普
  ├── /shared             共享办公室
  └── /private            独立办公室（带装修 / 不带装修）
/tenant-guide             租户须知 + 合约条款解读 + 时间线
/promotions               优惠活动（CapitaLand Vouchers 等）
/consultation             AI 聊天顾问 + 线索收集表单
/contact                  联系方式
```

---

## 4. 页面详细规划

### 4.1 首页 `/`
- **Hero Section**：大图背景（Marina Bay 天际线），一句话 Tagline，双 CTA 按钮（"Find My Office" / "Talk to AI Agent"）
- **Services Strip**：3 个服务亮点图标（买卖 / 出租 / 一站式方案）
- **Featured Buildings**：3-4 栋热门大楼卡片
- **Promotion Banner**：首次成功注册送 CapitaLand Vouchers
- **Testimonials**：客户评价（可占位）
- **AI Chat 悬浮入口**：右下角固定气泡

### 4.2 个人介绍 `/about`
- 头像 + 姓名 + 执照号
- 服务：出租 & 买卖 CBD Office，一站式 CBD Office Solution
- 核心优势：直接对接大业主（Direct Landlord Access）
- 服务区域地图（新加坡 CBD 范围高亮）
- 联系 CTA

### 4.3 CBD 大楼展示 `/buildings`
覆盖主要 CBD 大楼，每栋包含：
- 大楼名称、地址、竣工年份
- 楼层数、总面积、认证等级（Grade A/B）
- 最小租赁面积、参考租金区间
- 主要设施（停车、地铁距离等）
- 图片 + "Enquire Now" CTA

**初始覆盖大楼**（可扩展）：
1. Marina Bay Financial Centre (MBFC)
2. One Raffles Quay
3. Ocean Financial Centre
4. CapitaGreen
5. Guoco Tower
6. UIC Building
7. Suntec City Office Towers
8. Six Battery Road

### 4.4 办公室类型 `/office-types`
#### 共享办公室（Serviced / Co-working）
- 定义、适合人群（初创 / 短期项目 / 小团队）
- 优点：灵活合约、含家具与服务、低启动成本
- 缺点：隐私较低、品牌感弱
- 代表运营商：WeWork、The Executive Centre、JustCo

#### 独立办公室 — 带装修（Fitted Office）
- 定义：业主或前租户已完成装修
- 优点：即迁入（Plug & Play）、节省装修时间与成本
- 缺点：装修风格固定，灵活性低
- 时间线：签约 → 2-4 周入驻

#### 独立办公室 — 不带装修（Bare Shell）
- 定义：毛坯交付，需自行装修
- 优点：完全定制品牌空间
- 缺点：需要 2-4 个月装修期 + 前期资本投入
- 时间线：签约 → 装修规划 → 施工（8-16 周）→ 入驻

#### 整体时间线可视化
```
[需求确认] → [看盘] → [意向书LOI] → [谈判] → [签约TA] → [装修/入驻]
  1周          2-4周      1周          1-2周      1周        2-16周
```

### 4.5 租户须知 `/tenant-guide`
- **合约条款解读**：
  - Letter of Intent (LOI) vs Tenancy Agreement (TA)
  - 押金条款（通常 2-3 个月租金）
  - 装修期免租（Rent-Free Period）
  - 提前终止条款（Break Clause）
  - 续租选项（Renewal Option）
  - 还原义务（Reinstatement）
- **常见费用清单**：基础租金、服务费、水电、停车
- **谈判技巧提示**

### 4.6 优惠活动 `/promotions`
- 首次通过本站成功注册办公室 → CapitaLand Vouchers（金额待定）
- 限时优惠大楼（业主直接优惠）
- 推荐奖励（Referral Program）
- 领取条件 + 表单收集

### 4.7 AI 聊天顾问 `/consultation`
- 全页聊天界面 + 侧边信息栏
- AI 能力范围：
  - 回答 CBD 办公室基础问题
  - 根据预算 / 人数 / 偏好推荐大楼类型
  - 解释租约条款
  - 最终引导：留下姓名 + 联系方式 + 需求摘要
- 线索收集：对话结束时弹出表单或直接在对话中收集

---

## 5. AI Agent 设计

### System Prompt 策略
```
你是新加坡 CBD 办公室专业顾问助手。你的目标是：
1. 用友好专业的方式回答关于新加坡 CBD 办公空间的问题
2. 根据用户需求（人数、预算、地点偏好）给出建议
3. 解释租约流程和条款
4. 在适当时机引导用户留下联系方式以获得专业服务
语言：根据用户语言自动切换（中文/英文）
```

### 对话流程
1. 欢迎语 → 了解基本需求（人数、预算、时间）
2. 推荐匹配的办公室类型和大楼
3. 回答细节问题
4. 引导线索转换："我们的专业顾问可以为您安排实地看房，请留下您的联系方式"

---

## 6. SEO 策略

- **目标关键词**：Singapore CBD office for rent, office space Singapore CBD, Grade A office Singapore
- Next.js Metadata API 配置每页 Title / Description
- 结构化数据（Schema.org RealEstateAgent）
- 站点地图 (sitemap.xml) 自动生成
- Open Graph 图片用于社交分享

---

## 7. 线索转换漏斗

```
访客 → 内容消费 → AI对话 → 留下联系方式 → 邮件通知顾问 → 跟进
```

收集字段：姓名、WhatsApp/电话、公司名、需求摘要、预算范围

---

## 8. 后续扩展建议

- **物业列表系统**：接入真实房源数据库
- **预约看房**：日历集成（Calendly）
- **WhatsApp 集成**：直接点击跳转 WhatsApp 对话
- **多语言**：中文 / 英文（next-intl）
- **CRM 集成**：HubSpot 或 Notion Database 管理线索
- **博客/内容营销**：新加坡办公室市场资讯

---

## 9. 开发里程碑

| 阶段 | 内容 | 时间 |
|------|------|------|
| Phase 1 | 框架搭建、首页、About、Buildings | Week 1 |
| Phase 2 | Office Types、Tenant Guide、Promotions | Week 2 |
| Phase 3 | AI Chat Agent、线索收集系统 | Week 3 |
| Phase 4 | SEO优化、Analytics、部署上线 | Week 4 |
