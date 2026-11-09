/* Project-specific labels, fields and preview data. */
const PROJECT = {
  "id": "01",
  "slug": "基于 Vue3 的街道社区活动报名管理系统的设计与实现",
  "mark": "社",
  "short": "邻里活动",
  "enShort": "Neighborhood",
  "cnTitle": "街道社区活动报名管理系统",
  "enTitle": "Community Activity Signup System",
  "stack": [
    "Vue 3",
    "Spring Boot",
    "SQLite"
  ],
  "headerCta": "报名活动",
  "stats": [
    {
      "v": "128",
      "k": "在办活动"
    },
    {
      "v": "24,680",
      "k": "累计报名"
    },
    {
      "v": "36",
      "k": "覆盖社区"
    },
    {
      "v": "98.2%",
      "k": "签到率"
    }
  ],
  "featuresTitle": {
    "eyebrow": "核心功能",
    "title": "报名这件事，本可以更简单",
    "sub": "把散落在微信群里的接龙，变成有秩序、有数据、可复盘的活动管理流程。"
  },
  "features": [
    {
      "icon": "calendar",
      "t": "活动发布",
      "d": "填写一次即生成活动详情页与报名二维码，支持多场次、多时段并行开放。"
    },
    {
      "icon": "users",
      "t": "名额管控",
      "d": "报名人数实时校验，满员自动进入候补队列，有人退订即刻补位。"
    },
    {
      "icon": "qr",
      "t": "扫码签到",
      "d": "现场扫码核销，离线缓存自动补传，签到率实时同步到大屏。"
    },
    {
      "icon": "bell",
      "t": "消息提醒",
      "d": "报名成功、活动变更、开场前两小时自动推送，降低爽约率。"
    },
    {
      "icon": "chart",
      "t": "数据看板",
      "d": "参与人群画像、社区活跃度、活动复购率，一屏看清运营效果。"
    },
    {
      "icon": "shield",
      "t": "权限分级",
      "d": "街道—社区—网格三级权限，所有操作留痕，责任可追溯。"
    }
  ],
  "modules": [
    "活动发布与审核",
    "在线报名与候补",
    "名额实时管控",
    "扫码签到核销",
    "居民档案管理",
    "消息通知中心",
    "活动数据看板",
    "权限与操作日志"
  ],
  "modulesTitle": "八个模块，覆盖活动全生命周期",
  "modulesSub": "从活动策划到签到复盘，每个环节都有对应的功能模块与数据沉淀。",
  "roles": [
    {
      "name": "街道管理员",
      "d": "全街道活动审核与数据汇总",
      "n": 8,
      "c": "#C2410C"
    },
    {
      "name": "社区社工",
      "d": "本社区活动发布与报名管理",
      "n": 6,
      "c": "#F59E0B"
    },
    {
      "name": "居民用户",
      "d": "浏览、报名、签到与评价",
      "n": 4,
      "c": "#0EA5E9"
    }
  ],
  "arch": [
    {
      "t": "前端展示层",
      "tag": "Vue 3",
      "icon": "layers",
      "items": [
        "Vue 3 + Vite",
        "Pinia 状态管理",
        "响应式布局",
        "扫码组件"
      ]
    },
    {
      "t": "接口服务层",
      "tag": "Spring Boot",
      "icon": "server",
      "items": [
        "Spring Boot 3",
        "RESTful API",
        "JWT 鉴权",
        "MyBatis-Plus"
      ]
    },
    {
      "t": "数据存储层",
      "tag": "SQLite",
      "icon": "database",
      "items": [
        "SQLite 3",
        "活动 / 报名 / 用户表",
        "事务与索引",
        "定时备份"
      ]
    }
  ],
  "stackSub": "前后端分离的轻量架构，单机即可跑通全部业务流程，适合课程设计与中小型社区部署。",
  "layout": "events",
  "sectionLabel": "社区活动",
  "heading": "发现身边的社区活动",
  "description": "浏览街道与社区发布的活动，按类别查询剩余名额，选择活动完成报名登记。",
  "recordTitle": "活动列表",
  "itemUnit": "场",
  "stockUnit": "人",
  "action": "确认报名",
  "submissionTitle": "报名记录",
  "accent": "#a15332",
  "wash": "#f4ece5",
  "title": "基于 Vue3 的街道社区活动报名管理系统的设计与实现",
  "consumer": true,
  "dated": false,
  "user": "演示管理员",
  "role": "项目工作台",
  "collectionLabel": "活动安排 / SCHEDULE",
  "asideTitle": "选好活动，登记参与人",
  "asideText": "查看地点、时间和剩余名额。登记成功后，可在记录列表中查看提交结果。",
  "recordNav": "活动列表",
  "searchHint": "输入名称、类别或地点",
  "addLabel": "新增记录",
  "sampleLogs": [],
  "specialTech": "选题所用技术",
  "specialNote": "当前演示未接入完整方案中的外部业务系统、细粒度权限和第三方通知服务。",
  "columns": [
    "资源名称",
    "分类",
    "地点或规格"
  ],
  "statuses": {
    "ok": "有效",
    "warn": "待确认",
    "off": "已关闭"
  },
  "records": [],
  "items": [
    {
      "title": "邻里手工坊 · 非遗扎染体验",
      "cat": "文化活动",
      "place": "幸福里社区活动中心",
      "time": "6月12日 14:00 - 16:30",
      "day": "12",
      "mon": "6月",
      "seats": 30,
      "taken": 24,
      "tint": "#FDECE3",
      "ink": "#C2410C",
      "id": "item-001",
      "stock": 6,
      "priceLabel": "按活动或批次登记",
      "image": "assets/images/item-01.svg"
    },
    {
      "title": "社区义诊 · 中医推拿进小区",
      "cat": "健康服务",
      "place": "阳光花园南门广场",
      "time": "6月13日 09:00 - 12:00",
      "day": "13",
      "mon": "6月",
      "seats": 80,
      "taken": 61,
      "tint": "#E8F3EC",
      "ink": "#2F6B4F",
      "id": "item-002",
      "stock": 19,
      "priceLabel": "按活动或批次登记",
      "image": "assets/images/item-02.svg"
    },
    {
      "title": "亲子自然课堂 · 昆虫观察",
      "cat": "亲子活动",
      "place": "城市绿廊生态园",
      "time": "6月15日 09:30 - 11:30",
      "day": "15",
      "mon": "6月",
      "seats": 20,
      "taken": 20,
      "tint": "#EAF1FB",
      "ink": "#1D4ED8",
      "id": "item-003",
      "stock": 0,
      "priceLabel": "按活动或批次登记",
      "image": "assets/images/item-03.svg"
    },
    {
      "title": "老年智能手机课堂",
      "cat": "数字助老",
      "place": "银龄之家二楼活动室",
      "time": "6月18日 14:00 - 15:30",
      "day": "18",
      "mon": "6月",
      "seats": 25,
      "taken": 9,
      "tint": "#FDF3E3",
      "ink": "#B45309",
      "id": "item-004",
      "stock": 16,
      "priceLabel": "按活动或批次登记",
      "image": "assets/images/item-04.svg"
    },
    {
      "title": "社区篮球友谊赛",
      "cat": "体育健身",
      "place": "中央公园篮球场",
      "time": "6月20日 19:00 - 21:00",
      "day": "20",
      "mon": "6月",
      "seats": 40,
      "taken": 32,
      "tint": "#F0EDFB",
      "ink": "#6D28D9",
      "id": "item-005",
      "stock": 8,
      "priceLabel": "按活动或批次登记",
      "image": "assets/images/item-05.svg"
    },
    {
      "title": "端午包粽子大赛",
      "cat": "节庆活动",
      "place": "邻里中心食堂",
      "time": "6月22日 10:00 - 12:00",
      "day": "22",
      "mon": "6月",
      "seats": 50,
      "taken": 18,
      "tint": "#FDECEC",
      "ink": "#BE123C",
      "id": "item-006",
      "stock": 32,
      "priceLabel": "按活动或批次登记",
      "image": "assets/images/item-06.svg"
    }
  ],
  "moduleDescriptions": [
    "填写一次即生成活动详情页与报名二维码，支持多场次、多时段并行开放。 完整系统可进一步增加权限、条件检索与操作追溯；本模块是否已接入，以实现范围表为准。",
    "围绕在线报名与候补维护业务对象、责任人、处理状态和备注信息，支持按业务条件查询与追踪。 完整系统可进一步增加权限、条件检索与操作追溯；本模块是否已接入，以实现范围表为准。",
    "围绕名额实时管控维护业务对象、责任人、处理状态和备注信息，支持按业务条件查询与追踪。 完整系统可进一步增加权限、条件检索与操作追溯；本模块是否已接入，以实现范围表为准。",
    "围绕扫码签到核销维护业务对象、责任人、处理状态和备注信息，支持按业务条件查询与追踪。 完整系统可进一步增加权限、条件检索与操作追溯；本模块是否已接入，以实现范围表为准。",
    "围绕居民档案管理维护业务对象、责任人、处理状态和备注信息，支持按业务条件查询与追踪。 完整系统可进一步增加权限、条件检索与操作追溯；本模块是否已接入，以实现范围表为准。",
    "围绕消息通知中心维护业务对象、责任人、处理状态和备注信息，支持按业务条件查询与追踪。 完整系统可进一步增加权限、条件检索与操作追溯；本模块是否已接入，以实现范围表为准。",
    "围绕活动数据看板维护业务对象、责任人、处理状态和备注信息，支持按业务条件查询与追踪。 完整系统可进一步增加权限、条件检索与操作追溯；本模块是否已接入，以实现范围表为准。",
    "街道—社区—网格三级权限，所有操作留痕，责任可追溯。 完整系统可进一步增加权限、条件检索与操作追溯；本模块是否已接入，以实现范围表为准。"
  ]
};
