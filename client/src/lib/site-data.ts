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
    href: "#about",
    tagline: "RISE 사업단의 비전과 사람들",
    children: [
      { label: "인사말", href: "#about", screenType: "content", desc: "단장 인사와 운영 철학" },
      { label: "비전 및 전략", href: "#about", screenType: "content", desc: "미션·비전·핵심 전략" },
      { label: "조직도", href: "#about", screenType: "content", desc: "운영 조직과 담당 업무" },
      { label: "찾아오시는 길", href: "#about", screenType: "content", desc: "위치·연락처 안내" },
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
    href: "#notice",
    tagline: "공지·일정·자료를 한 곳에서",
    children: [
      { label: "공지사항", href: "#notice", screenType: "content", desc: "사업단 주요 공지" },
      { label: "행사/일정", href: "#programs", screenType: "program", desc: "프로그램·행사 일정", highlight: true },
      { label: "자료실", href: "#notice", screenType: "board", desc: "보고서·양식 다운로드" },
    ],
  },
  {
    label: "홍보마당",
    href: "#notice",
    tagline: "RISE의 이야기를 만나다",
    children: [
      { label: "포토갤러리", href: "#notice", screenType: "board", desc: "현장 사진 모음" },
      { label: "카드뉴스", href: "#notice", screenType: "board", desc: "카드뉴스 콘텐츠", highlight: true },
      { label: "보도자료", href: "#notice", screenType: "board", desc: "언론에 소개된 RISE" },
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
  code: string; // 예: "3-1"
  name: string; // 단위과제명
  group: "인재양성" | "연구개발" | "지역사회혁신";
  iconKey: "graduation" | "flask" | "briefcase" | "users" | "rocket" | "globe" | "leaf" | "sparkles" | "building" | "handshake";
}

// 사용자 요청: 8대 단위과제 직관 네비게이션
export const UNIT_TASKS: UnitTask[] = [
  { id: "u1", code: "1-2", name: "지역특화 R&D", group: "연구개발", iconKey: "flask" },
  { id: "u2", code: "3-1", name: "캡스톤디자인", group: "인재양성", iconKey: "graduation" },
  { id: "u3", code: "3-2", name: "현장실습 트랙", group: "인재양성", iconKey: "briefcase" },
  { id: "u4", code: "3-3", name: "융합전공 운영", group: "인재양성", iconKey: "sparkles" },
  { id: "u5", code: "3-4", name: "글로벌 PBL", group: "인재양성", iconKey: "globe" },
  { id: "u6", code: "4-1", name: "지역 청년창업", group: "지역사회혁신", iconKey: "rocket" },
  { id: "u7", code: "4-2", name: "가족회사 협력", group: "지역사회혁신", iconKey: "handshake" },
  { id: "u8", code: "4-3", name: "정주 생태계", group: "지역사회혁신", iconKey: "leaf" },
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
    eyebrow: "TOGETHER",
    title: "8대 단위과제로 만들어가는",
    titleAccent: "지역의 새로운 가능성",
    desc: "단위과제별 성과를 데이터로 공개하고, 함께 성장하는 길을 제시합니다.",
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
