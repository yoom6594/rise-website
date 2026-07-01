// RISE 사업단 사이트 데이터
// Style: Organic Tech Bloom — RISE 정보제공 + 사용자 행동 유도(UX 고도화)

export const ASSETS = {
  hero: "https://d2xsxph8kpxj0f.cloudfront.net/310519663580844259/TN29Q4upFjtdizsDoVTFzf/hero-rise-RW4nRtwQLK4zgNTxMeCLVA.webp",
  collaboration: "https://d2xsxph8kpxj0f.cloudfront.net/310519663580844259/TN29Q4upFjtdizsDoVTFzf/students-collaboration-BnNZjdZJXkQiEHsLZ57don.webp",
  regional: "https://d2xsxph8kpxj0f.cloudfront.net/310519663580844259/TN29Q4upFjtdizsDoVTFzf/regional-network-HgbGnqqFNiLwetWTJahJyn.webp",
  innovationLab: "https://d2xsxph8kpxj0f.cloudfront.net/310519663580844259/TN29Q4upFjtdizsDoVTFzf/innovation-lab-YJCoBnCYxdu36rrnNS3VWs.webp",
  statsBg: "https://d2xsxph8kpxj0f.cloudfront.net/310519663580844259/TN29Q4upFjtdizsDoVTFzf/stats-bg-Gyy9YoLg4tjwWkmqNufscQ.webp",
  iconTalent: "https://d2xsxph8kpxj0f.cloudfront.net/310519663580844259/TN29Q4upFjtdizsDoVTFzf/icon-talent-CjdSGxSBm5kuXZ7zuAiPCo.webp",
  iconResearch: "https://d2xsxph8kpxj0f.cloudfront.net/310519663580844259/TN29Q4upFjtdizsDoVTFzf/icon-research-cfo8FdayVXEEZ9BkpqGgJQ.webp",
  iconNetwork: "https://d2xsxph8kpxj0f.cloudfront.net/310519663580844259/TN29Q4upFjtdizsDoVTFzf/icon-network-hPzYZDNfVQf3QFqKcfNs65.webp",
  iconStartup: "https://d2xsxph8kpxj0f.cloudfront.net/310519663580844259/TN29Q4upFjtdizsDoVTFzf/icon-startup-nWBJezyPG65yuQ7EDgJKzm.webp",
  oneViewHero: "https://d2xsxph8kpxj0f.cloudfront.net/310519663580844259/TN29Q4upFjtdizsDoVTFzf/oneview-hero-nUpfrgD75rFS32J6tYzS8a.webp",
  subHeroBg: "https://d2xsxph8kpxj0f.cloudfront.net/310519663580844259/TN29Q4upFjtdizsDoVTFzf/sub-hero-bg-GFHsxfXjUx3BthudtcWrYr.webp",
  directorPortrait: "https://d2xsxph8kpxj0f.cloudfront.net/310519663580844259/TN29Q4upFjtdizsDoVTFzf/director-portrait-M5do5gXW5TEPMTFn2yQx6b.webp",
};

export type ProgramStatus = "open" | "upcoming" | "closed";

export interface Program {
  id: string;
  category: string;
  title: string;
  description: string;
  status: ProgramStatus;
  startDate: string;
  endDate: string;
  target: string;
  daysLeft?: number;
}

export const PROGRAMS: Program[] = [
  {
    id: "p1",
    category: "인재양성",
    title: "2026 RISE 캡스톤디자인 프로젝트 참가팀 모집",
    description: "지역 기업과 함께하는 산학협력 프로젝트로 실무역량을 키울 학부생 팀을 모집합니다.",
    status: "open",
    startDate: "2026.04.20",
    endDate: "2026.05.20",
    target: "재학생(학부)",
    daysLeft: 16,
  },
  {
    id: "p2",
    category: "지역사회혁신",
    title: "지역 청년창업 인큐베이팅 5기",
    description: "RISE 사업단이 운영하는 창업 보육 프로그램. 멘토링·시제품 제작비·사무공간을 지원합니다.",
    status: "open",
    startDate: "2026.04.15",
    endDate: "2026.05.31",
    target: "예비창업자",
    daysLeft: 27,
  },
  {
    id: "p3",
    category: "지역사회혁신",
    title: "지역기업 채용연계형 인턴십 (상반기)",
    description: "지역 우수기업 80여 곳과 매칭하는 8주간의 유급 인턴십 프로그램입니다.",
    status: "open",
    startDate: "2026.04.10",
    endDate: "2026.05.10",
    target: "재학생/졸업예정자",
    daysLeft: 6,
  },
  {
    id: "p4",
    category: "연구개발",
    title: "지역특화 R&D 공동연구 과제 공모",
    description: "지역혁신 클러스터 분야에서 대학-기업 공동연구 과제를 공모합니다.",
    status: "upcoming",
    startDate: "2026.05.10",
    endDate: "2026.06.20",
    target: "교수/연구자",
  },
  {
    id: "p5",
    category: "인재양성",
    title: "글로벌 PBL 현장조사 참가자 모집",
    description: "지역사회 문제 해결을 위한 글로벌 PBL(Problem-Based Learning) 현장조사 프로그램입니다.",
    status: "closed",
    startDate: "2026.03.05",
    endDate: "2026.04.30",
    target: "재학생(학부)",
  },
];

export const NOTICES = [
  {
    id: "n1",
    type: "공지",
    pinned: true,
    title: "[필독] 2026학년도 RISE 사업 운영 가이드라인 개정 안내",
    date: "2026.05.02",
  },
  {
    id: "n2",
    type: "공지",
    pinned: false,
    title: "RISE 통합정보플랫폼 시스템 점검 안내(5/12 02:00~04:00)",
    date: "2026.04.30",
  },
  {
    id: "n3",
    type: "공지",
    pinned: false,
    title: "2026 상반기 가족회사 등록 신청 연장 안내(~5/15까지)",
    date: "2026.04.28",
  },
  {
    id: "n4",
    type: "공지",
    pinned: false,
    title: "사업단 운영위원회 정기회의 결과 공유",
    date: "2026.04.25",
  },
  {
    id: "n5",
    type: "공지",
    pinned: false,
    title: "캡스톤디자인 결과물 지식재산권 안내 자료 배포",
    date: "2026.04.20",
  },
];

export const NEWS = [
  {
    id: "ne1",
    title: "RISE 사업단, 지역 강소기업 32개사와 산학협력 MOU 체결",
    date: "2026.05.01",
    excerpt: "지역 우수기업과의 협력 확대를 통해 학생 현장실습과 채용연계의 폭이 한층 넓어졌습니다.",
  },
  {
    id: "ne2",
    title: "캡스톤디자인 우수작품 전시회 성황리에 마무리",
    date: "2026.04.27",
    excerpt: "총 128팀이 참가한 올해 캡스톤디자인 전시회는 지역 시민과 기업 관계자가 모이는 축제가 되었습니다.",
  },
  {
    id: "ne3",
    title: "지역혁신 인재양성을 위한 정부 추가 예산 200억원 확정",
    date: "2026.04.18",
    excerpt: "교육부의 RISE 추가 지원 결정으로 신규 프로그램 7개 분야가 신설될 예정입니다.",
  },
];

export const QUICK_LINKS = [
  { id: "q1", label: "사업관리 플랫폼", description: "통합정보 및 신청관리", iconKey: "platform" },
  { id: "q2", label: "공지사항", description: "사업단 주요 공지", iconKey: "bell" },
  { id: "q3", label: "온라인 신청", description: "프로그램 참여 신청", iconKey: "edit" },
  { id: "q4", label: "자료실", description: "양식·보고서 다운로드", iconKey: "folder" },
  { id: "q5", label: "Q&A", description: "문의 및 답변 검색", iconKey: "help" },
  { id: "q6", label: "찾아오시는 길", description: "사업단 위치 안내", iconKey: "map" },
];

export const BUSINESS_AREAS = [
  {
    id: "b1",
    title: "인재양성",
    subtitle: "Talent Development",
    desc: "지역 산업이 필요로 하는 융복합 실무 인재를 길러냅니다. 캡스톤디자인, 현장실습, 트랙 교육과정을 통합 운영합니다.",
    image: ASSETS.iconTalent,
    color: "from-teal-700/90 to-teal-900/90",
    points: ["캡스톤디자인", "현장실습", "특화 트랙"],
  },
  {
    id: "b2",
    title: "연구개발",
    subtitle: "Research & Innovation",
    desc: "지역 전략산업과 연계한 R&D 과제를 통해 대학의 연구역량을 지역 혁신으로 환원합니다.",
    image: ASSETS.iconResearch,
    color: "from-amber-500/90 to-amber-700/90",
    points: ["공동연구 과제", "기술이전", "특허 지원"],
  },
  {
    id: "b3",
    title: "지역사회혁신",
    subtitle: "Regional Social Innovation",
    desc: "지자체·기업·시민사회와 연결되는 협력 네트워크를 구축하고, 지역 청년의 정주와 창업을 종합 지원합니다.",
    image: ASSETS.iconNetwork,
    color: "from-emerald-700/90 to-emerald-900/90",
    points: ["가족회사 / MOU 협력", "채용연계 인턴십", "청년창업 보육"],
  },
  {
    id: "b4",
    title: "사업·성과관리",
    subtitle: "Performance Management",
    desc: "단위과제별 성과를 그래프 형태로 시각화하고, 사업 수행과정의 데이터를 체계적으로 관리·공개합니다.",
    image: ASSETS.iconStartup,
    color: "from-orange-500/90 to-rose-600/90",
    points: ["단위과제 성과관리", "성과 대시보드", "투명한 정보공개"],
  },
];

export const STATS = [
  { id: "s1", value: 128, suffix: "+", label: "참여 가족회사", desc: "지역 강소기업 네트워크" },
  { id: "s2", value: 4280, suffix: "명", label: "수혜 학생 수", desc: "2025년 누적 기준" },
  { id: "s3", value: 92, suffix: "%", label: "지역 정주율", desc: "RISE 프로그램 수료생 기준" },
  { id: "s4", value: 47, suffix: "건", label: "기술이전 성과", desc: "최근 3년간 누적" },
];

export const PARTNERS = [
  "교육부", "대전광역시", "충청남도", "한국연구재단", "지역혁신플랫폼",
  "지역상공회의소", "테크노파크", "창조경제혁신센터", "지역대학협의회",
  "산업통상자원부", "중소벤처기업부", "한국산업기술진흥원",
];

// 사용자 제공 IA 기반 메뉴 트리
// 화면타입: content(HTML) | program(PROGRAM) | board(BOARD)
export type ScreenType = "content" | "program" | "board";

export interface NavLeaf {
  label: string;
  href: string;
  screenType: ScreenType;
  tabs?: string[]; // 3Depth (TAP)
  desc?: string;
  highlight?: boolean;
}

export interface NavGroup {
  label: string;
  href: string;
  tagline: string; // 메가 메뉴 좌측 헤드 카피
  children: NavLeaf[];
}

export const NAV_ITEMS: NavGroup[] = [
  {
    label: "센터소개",
    href: "/intro/greetings",
    tagline: "RISE 사업단의 비전과 사람들",
    children: [
      { label: "인사말", href: "/intro/greetings", screenType: "content", desc: "단장 인사와 운영 철학" },
      { label: "비전 및 전략", href: "/intro/vision", screenType: "content", desc: "미션·비전·핵심 전략" },
      { label: "조직도", href: "/intro/org", screenType: "content", desc: "운영 조직과 담당 업무" },
      { label: "찾아오시는 길", href: "/intro/location", screenType: "content", desc: "위치·연락처 안내" },
    ],
  },
  {
    label: "인재양성",
    href: "#business",
    tagline: "지역이 키우고 지역이 머무는 인재",
    children: [
      {
        label: "단위과제 소개",
        href: "#business",
        screenType: "content",
        tabs: ["3-1과제", "3-2과제", "3-3과제", "3-4과제"],
        desc: "인재양성 4개 단위과제",
      },
      { label: "담당자 연락처", href: "#about", screenType: "content", desc: "과제별 담당자 정보" },
    ],
  },
  {
    label: "연구개발",
    href: "#business",
    tagline: "지역 전략산업과 함께하는 R&D",
    children: [
      {
        label: "단위과제 소개",
        href: "#business",
        screenType: "content",
        tabs: ["1-2과제"],
        desc: "연구개발 단위과제",
      },
      { label: "담당자 연락처", href: "#about", screenType: "content", desc: "연구개발 담당자" },
    ],
  },
  {
    label: "지역사회혁신",
    href: "#business",
    tagline: "대학과 지역이 함께 만드는 변화",
    children: [
      {
        label: "단위과제 소개",
        href: "#business",
        screenType: "content",
        tabs: ["4-1과제", "4-2과제", "4-3과제", "4-4과제", "4-5과제"],
        desc: "지역사회혁신 5개 단위과제",
        highlight: true,
      },
      { label: "담당자 연락처", href: "#about", screenType: "content", desc: "지역사회혁신 담당자", highlight: true },
    ],
  },
  {
    label: "사업·성과관리",
    href: "#stats",
    tagline: "성과를 데이터로 투명하게",
    children: [
      {
        label: "단위과제별 성과관리",
        href: "#stats",
        screenType: "content",
        tabs: ["전체 과제"],
        desc: "그래프 형태의 성과 대시보드",
        highlight: true,
      },
    ],
  },
  {
    label: "알림마당",
    href: "/board/notices",
    tagline: "공지·일정·자료를 한 곳에서",
    children: [
      { label: "공지사항", href: "/board/notices", screenType: "board", desc: "사업단 주요 공지" },
      { label: "행사/일정", href: "#programs", screenType: "program", desc: "프로그램·행사 일정", highlight: true },
      { label: "자료실", href: "/board/resources", screenType: "board", desc: "보고서·양식 다운로드" },
    ],
  },
  {
    label: "홍보마당",
    href: "/board/gallery",
    tagline: "RISE의 이야기를 만나다",
    children: [
      { label: "포토갤러리", href: "/board/gallery", screenType: "board", desc: "현장 사진 모음" },
      { label: "카드뉴스", href: "/board/cardnews", screenType: "board", desc: "카드뉴스 콘텐츠", highlight: true },
      { label: "보도자료", href: "/board/press", screenType: "board", desc: "언론에 소개된 RISE" },
    ],
  },
];

export const SCREEN_TYPE_LABEL: Record<ScreenType, string> = {
  content: "HTML",
  program: "PROGRAM",
  board: "BOARD",
};


// =============================================================================
// One-View 메인 페이지용 추가 데이터
// =============================================================================

export interface UnitTask {
  id: string;
  code: string; // 예: "01" ~ "08"
  name: string; // 단위과제명
  sub: string; // 부제(괄호 안 설명 요약)
  group: "인재·교육" | "R&D·혁신" | "지역·정책";
  iconKey:
    | "graduation"
    | "flask"
    | "briefcase"
    | "users"
    | "rocket"
    | "globe"
    | "leaf"
    | "sparkles"
    | "building"
    | "handshake";
}

// 충남형 RISE 8대 핵심과제
export const UNIT_TASKS: UnitTask[] = [
  {
    id: "u1",
    code: "01",
    name: "계약학과 운영",
    sub: "지역취업 보장 충남형 계약학과",
    group: "인재·교육",
    iconKey: "briefcase",
  },
  {
    id: "u2",
    code: "02",
    name: "평생직업교육",
    sub: "생애주기별 평생직업교육체계",
    group: "인재·교육",
    iconKey: "graduation",
  },
  {
    id: "u3",
    code: "03",
    name: "로컬인재 양성",
    sub: "청년 로컬활동 생태계·로컬혁신인재",
    group: "인재·교육",
    iconKey: "users",
  },
  {
    id: "u4",
    code: "04",
    name: "대학 R&D 혁신",
    sub: "시장지향형 대학 R&D 혁신역량 강화",
    group: "R&D·혁신",
    iconKey: "flask",
  },
  {
    id: "u5",
    code: "05",
    name: "대학 혁신체계",
    sub: "특성화 분야 충남형 대학혁신체계",
    group: "R&D·혁신",
    iconKey: "sparkles",
  },
  {
    id: "u6",
    code: "06",
    name: "탄소중립 지원",
    sub: "탄소중립 활성화 지원",
    group: "지역·정책",
    iconKey: "leaf",
  },
  {
    id: "u7",
    code: "07",
    name: "지역현안 해결",
    sub: "기초지자체-대학 협약 자율형 해결",
    group: "지역·정책",
    iconKey: "handshake",
  },
  {
    id: "u8",
    code: "08",
    name: "늘봄학교 고도화",
    sub: "충남형 늘봄학교 고도화 지원",
    group: "인재·교육",
    iconKey: "building",
  },
];

// 사업성과 위젯 데이터 (간략 카드)
export const PERFORMANCE_HIGHLIGHTS = [
  {
    id: "ph1",
    metric: "+128",
    label: "참여 가족회사",
    desc: "지역 강소기업과의 산학협력 확대",
    trend: "+18% YoY",
  },
  {
    id: "ph2",
    metric: "92%",
    label: "지역 정주율",
    desc: "RISE 수료생 지역 취·창업 비율",
    trend: "+6%p",
  },
  {
    id: "ph3",
    metric: "47건",
    label: "기술이전 성과",
    desc: "최근 3년간 누적 이전 건수",
    trend: "+12건",
  },
];

// 히어로 슬라이드 데이터 (01 / 02)
export const HERO_SLIDES = [
  {
    id: "hs1",
    eyebrow: "ANCHOR · RISE",
    title: "지역과 대학이 함께 성장하는",
    titleAccent: "혁신 생태계, RISE",
    desc: "지역혁신중심 대학지원체계로 인재 양성·연구개발·지역 정주를 선도합니다.",
  },
  {
    id: "hs2",
    eyebrow: "8 CORE TASKS",
    title: "충남형 RISE 8대 핵심과제로",
    titleAccent: "지역의 미래를 설계합니다",
    desc: "계약학과·평생직업교육부터 탄소중립·늘봄학교까지, 8개 과제가 지역과 대학을 잇습니다.",
  },
];


// ─────────────────────────────────────────────────────────────────────────────
// 단위과제별 성과현황 (Bar Chart 데이터)
// 4개 핵심 영역의 목표 대비 달성률을 시각화하기 위한 시리즈
// ─────────────────────────────────────────────────────────────────────────────
export interface PerformanceUnit {
  id: string;
  name: string;     // 인재양성·연구개발·지역혁신·산학협력
  short: string;    // 짧은 라벨 (차트 X축용)
  value: number;    // 0-100 달성률
  delta: string;    // YoY 증감
  desc: string;     // 보조 설명
  colorVar: "primary" | "teal" | "amber" | "pine";
}

export const PERFORMANCE_BY_UNIT: PerformanceUnit[] = [
  {
    id: "talent",
    name: "인재양성",
    short: "인재양성",
    value: 85,
    delta: "+7%p",
    desc: "캡스톤·현장실습·융합전공 누적 이수율",
    colorVar: "primary",
  },
  {
    id: "rd",
    name: "연구개발",
    short: "연구개발",
    value: 92,
    delta: "+12%p",
    desc: "지역특화 R&D 과제 목표 달성률",
    colorVar: "primary",
  },
  {
    id: "region",
    name: "지역혁신",
    short: "지역혁신",
    value: 78,
    delta: "+9%p",
    desc: "지역 청년 창업·정주 생태계 지표",
    colorVar: "teal",
  },
  {
    id: "industry",
    name: "산학협력",
    short: "산학협력",
    value: 88,
    delta: "+15%p",
    desc: "가족회사 등록 및 기술이전 성과",
    colorVar: "teal",
  },
];


// =============================================================================
// 서브페이지 공통 데이터
// =============================================================================

export interface LnbItem {
  label: string;
  href: string;
  available?: boolean; // 실제 페이지 구현 여부 (false면 준비중 toast)
}

export interface LnbSection {
  groupLabel: string;   // 1Depth (예: 센터소개)
  groupHref: string;
  items: LnbItem[];     // 2Depth
}

// 센터소개 LNB (인사말 / 비전 및 전략 / 조직도 / 찾아오시는 길)
export const ABOUT_LNB: LnbSection = {
  groupLabel: "센터소개",
  groupHref: "/intro/greetings",
  items: [
    { label: "인사말", href: "/intro/greetings", available: true },
    { label: "비전 및 전략", href: "/intro/vision", available: false },
    { label: "조직도", href: "/intro/org", available: false },
    { label: "찾아오시는 길", href: "/intro/location", available: false },
  ],
};

// 인사말 페이지 콘텐츠
export const GREETING_CONTENT = {
  eyebrow: "GREETINGS",
  pageTitle: "인사말",
  pageSubtitle: "지역과 대학이 함께 여는 새로운 미래, RISE 사업단이 함께합니다.",
  badge: "충남형 RISE 사업단",
  headline: "지역의 가능성을 키우고,\n대학의 역량을 지역으로 환원하겠습니다.",
  // 본문 단락 (Markdown 형태로 다룰 수 있도록 배열)
  paragraphs: [
    "RISE 사업단 누리집을 찾아주신 여러분을 진심으로 환영합니다.",
    "RISE(Regional Innovation System & Education, 지역혁신중심 대학지원체계)는 대학이 지역혁신의 중심에 서서, 지역의 인재가 지역에서 성장하고 정주할 수 있는 선순환 생태계를 만들어가는 국가적 전환의 출발점입니다. 그동안 분절적으로 운영되어 온 대학재정지원사업을 지방자치단체 주도로 통합하여, 지역의 수요에 가장 가까운 곳에서 가장 빠르게 응답하는 것이 RISE의 핵심 철학입니다.",
    "우리 사업단은 계약학과 운영, 평생직업교육, 로컬인재 양성, 대학 R&D 혁신, 대학 혁신체계 구축, 탄소중립 지원, 지역현안 해결, 늘봄학교 고도화에 이르는 8대 핵심과제를 통해 지역사회가 직면한 문제에 실질적으로 응답하고자 합니다. 학생에게는 배움과 진로를, 기업에게는 인재와 기술을, 지역에는 지속가능한 활력을 제공하는 것이 우리의 약속입니다.",
    "지역과 대학, 기업과 시민이 한 방향으로 힘을 모을 때 변화는 비로소 현실이 됩니다. RISE 사업단은 모든 구성원과 지역사회 여러분의 목소리에 귀 기울이며, 투명하고 책임 있는 사업 운영으로 신뢰받는 동반자가 되겠습니다.",
    "여러분의 따뜻한 관심과 적극적인 참여를 부탁드립니다. 감사합니다.",
  ],
  signOff: "RISE 사업단장",
  signName: "김 혁 신",
  // 핵심 약속 (인사말 하단 강조 카드)
  pillars: [
    { id: "g1", title: "사람 중심", desc: "지역 청년이 지역에서 성장하고 정주하는 인재 선순환", iconKey: "users" },
    { id: "g2", title: "현장 중심", desc: "지역 수요에 가장 빠르게 응답하는 실질적 사업 운영", iconKey: "compass" },
    { id: "g3", title: "신뢰 중심", desc: "데이터에 기반한 투명하고 책임 있는 성과 관리", iconKey: "shield" },
  ],
};


// =============================================================================
// 사이트맵 (3Depth 전체 메뉴 트리)
// -----------------------------------------------------------------------------
// - 1Depth(대분류) → 2Depth(중분류) → 3Depth(소분류/탭)
// - available: 실제 구현된 라우트 여부. false면 사이트맵에서 "준비중" 처리(toast)
// =============================================================================
export interface SitemapLeaf {
  label: string;
  href: string;
  available?: boolean;
}

export interface SitemapNode {
  label: string;
  href: string;
  available?: boolean;
  children?: SitemapLeaf[]; // 3Depth
}

export interface SitemapGroup {
  label: string; // 1Depth
  href: string;
  iconKey:
    | "compass"
    | "graduation"
    | "microscope"
    | "sprout"
    | "chart"
    | "megaphone"
    | "image"
    | "user";
  children: SitemapNode[]; // 2Depth
}

export const SITEMAP: SitemapGroup[] = [
  {
    label: "센터소개",
    href: "/intro/greetings",
    iconKey: "compass",
    children: [
      { label: "인사말", href: "/intro/greetings", available: true },
      { label: "비전 및 전략", href: "/intro/vision" },
      { label: "조직도", href: "/intro/org" },
      { label: "찾아오시는 길", href: "/intro/location" },
    ],
  },
  {
    label: "인재양성",
    href: "#business",
    iconKey: "graduation",
    children: [
      {
        label: "단위과제 소개",
        href: "#business",
        children: [
          { label: "3-1과제", href: "#business" },
          { label: "3-2과제", href: "#business" },
          { label: "3-3과제", href: "#business" },
          { label: "3-4과제", href: "#business" },
        ],
      },
      { label: "담당자 연락처", href: "#about" },
    ],
  },
  {
    label: "연구개발",
    href: "#business",
    iconKey: "microscope",
    children: [
      {
        label: "단위과제 소개",
        href: "#business",
        children: [{ label: "1-2과제", href: "#business" }],
      },
      { label: "담당자 연락처", href: "#about" },
    ],
  },
  {
    label: "지역사회혁신",
    href: "#business",
    iconKey: "sprout",
    children: [
      {
        label: "단위과제 소개",
        href: "#business",
        children: [
          { label: "4-1과제", href: "#business" },
          { label: "4-2과제", href: "#business" },
          { label: "4-3과제", href: "#business" },
          { label: "4-4과제", href: "#business" },
          { label: "4-5과제", href: "#business" },
        ],
      },
      { label: "담당자 연락처", href: "#about" },
    ],
  },
  {
    label: "사업·성과관리",
    href: "#stats",
    iconKey: "chart",
    children: [
      {
        label: "단위과제별 성과관리",
        href: "#stats",
        children: [{ label: "전체 과제 대시보드", href: "#stats" }],
      },
    ],
  },
  {
    label: "알림마당",
    href: "/board/notices",
    iconKey: "megaphone",
    children: [
      { label: "공지사항", href: "/board/notices", available: true },
      { label: "행사·일정", href: "/board/events", available: true },
      { label: "자료실", href: "/board/resources", available: true },
    ],
  },
  {
    label: "홍보마당",
    href: "/board/gallery",
    iconKey: "image",
    children: [
      { label: "포토갤러리", href: "/board/gallery", available: true },
      { label: "카드뉴스", href: "/board/cardnews", available: true },
      { label: "보도자료", href: "/board/press", available: true },
    ],
  },
  {
    label: "회원",
    href: "/login",
    iconKey: "user",
    children: [
      { label: "로그인", href: "/login", available: true },
      { label: "회원가입", href: "/signup", available: true },
    ],
  },
];
