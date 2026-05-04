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
    category: "창업지원",
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
    category: "지역정주",
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
    category: "교육지원",
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
    title: "네트워크 활성화",
    subtitle: "Ecosystem Network",
    desc: "지자체·기업·대학을 연결하는 협력 네트워크를 구축하고, 가족회사 제도를 통해 지속가능한 파트너십을 만듭니다.",
    image: ASSETS.iconNetwork,
    color: "from-emerald-700/90 to-emerald-900/90",
    points: ["가족회사", "MOU 협력", "지역 협의체"],
  },
  {
    id: "b4",
    title: "취·창업 및 정주",
    subtitle: "Career & Settlement",
    desc: "지역 청년이 지역에 머물며 성장할 수 있도록, 채용연계 인턴십과 청년창업 보육을 종합 지원합니다.",
    image: ASSETS.iconStartup,
    color: "from-orange-500/90 to-rose-600/90",
    points: ["채용연계 인턴십", "청년창업 보육", "정주지원금"],
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

export const NAV_ITEMS: { label: string; href: string; children?: { label: string; href: string }[] }[] = [
  {
    label: "사업단 소개",
    href: "#about",
    children: [
      { label: "인사말", href: "#about" },
      { label: "비전과 미션", href: "#about" },
      { label: "조직도", href: "#about" },
      { label: "찾아오시는 길", href: "#about" },
    ],
  },
  {
    label: "RISE 사업",
    href: "#business",
    children: [
      { label: "인재양성", href: "#business" },
      { label: "연구개발", href: "#business" },
      { label: "네트워크 활성화", href: "#business" },
      { label: "취·창업 및 정주", href: "#business" },
    ],
  },
  {
    label: "프로그램",
    href: "#programs",
    children: [
      { label: "모집중 프로그램", href: "#programs" },
      { label: "지원사업 안내", href: "#programs" },
      { label: "신청 절차", href: "#programs" },
    ],
  },
  {
    label: "알림마당",
    href: "#notice",
    children: [
      { label: "공지사항", href: "#notice" },
      { label: "보도자료", href: "#notice" },
      { label: "자료실", href: "#notice" },
      { label: "FAQ", href: "#notice" },
    ],
  },
  {
    label: "커뮤니티",
    href: "#community",
    children: [
      { label: "Q&A", href: "#community" },
      { label: "성공 사례", href: "#community" },
      { label: "갤러리", href: "#community" },
    ],
  },
];
