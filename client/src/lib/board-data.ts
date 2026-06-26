// =============================================================================
// 공통 게시판(Board) 데이터 모델 & 샘플 데이터
// -----------------------------------------------------------------------------
// 디자인 언어: 확정 메인 시안 계승 (Royal Blue #003D92 + Cyan Teal + Amber)
// 게시판 유형 2종을 단일 데이터 모델로 통합 관리한다.
//   - "text"    : 텍스트형(리스트/표) — 공지사항·자료실·보도자료 등
//   - "gallery" : 갤러리형(카드 썸네일) — 포토갤러리·카드뉴스·행사 등
// 각 게시판은 BoardConfig 로 정의하고, 게시글은 BoardPost[] 로 보관한다.
// =============================================================================

export type BoardType = "text" | "gallery";

export interface BoardAttachment {
  name: string;
  size: string; // 예: "1.2MB"
}

export interface BoardPost {
  id: string;
  boardId: string;
  category?: string; // 분류(말머리)
  title: string;
  /** 목록 요약 / 갤러리 카드 설명 */
  summary: string;
  /** 상세 본문 단락 (Markdown 미사용, 단순 문자열 배열) */
  content: string[];
  author: string;
  date: string; // YYYY.MM.DD
  views: number;
  pinned?: boolean; // 상단 고정 (텍스트형)
  isNew?: boolean; // NEW 뱃지
  thumbnail?: string; // 갤러리형 대표 이미지
  images?: string[]; // 갤러리형 상세 다중 이미지
  attachments?: BoardAttachment[]; // 첨부파일
}

export interface BoardConfig {
  id: string;
  type: BoardType;
  /** 1Depth 메뉴 라벨 (Breadcrumb·LNB 헤더) */
  groupLabel: string;
  groupHref: string;
  /** 게시판 제목 (SubHero title) */
  title: string;
  eyebrow: string; // SubHero eyebrow (영문)
  subtitle: string; // SubHero subtitle
  /** 분류 필터 (선택). 첫 항목은 보통 "전체" */
  categories?: string[];
}

// -----------------------------------------------------------------------------
// LNB (게시판이 속한 1Depth 그룹의 2Depth 목록)
// -----------------------------------------------------------------------------
import type { LnbSection } from "@/lib/site-data";

// 알림마당 LNB
export const NOTICE_LNB: LnbSection = {
  groupLabel: "알림마당",
  groupHref: "/notice/notices",
  items: [
    { label: "공지사항", href: "/notice/notices", available: true },
    { label: "행사·일정", href: "/notice/events", available: false },
    { label: "자료실", href: "/notice/resources", available: true },
  ],
};

// 홍보마당 LNB
export const PROMOTION_LNB: LnbSection = {
  groupLabel: "홍보마당",
  groupHref: "/promotion/gallery",
  items: [
    { label: "포토갤러리", href: "/promotion/gallery", available: true },
    { label: "카드뉴스", href: "/promotion/cardnews", available: true },
    { label: "보도자료", href: "/promotion/press", available: true },
  ],
};

// -----------------------------------------------------------------------------
// 게시판 정의
// -----------------------------------------------------------------------------
export const BOARDS: Record<string, BoardConfig> = {
  notices: {
    id: "notices",
    type: "text",
    groupLabel: "알림마당",
    groupHref: "/notice/notices",
    eyebrow: "NOTICE",
    title: "공지사항",
    subtitle: "RISE 사업단의 주요 공지와 안내 사항을 확인하세요.",
    categories: ["전체", "공지", "사업", "행정", "시스템"],
  },
  resources: {
    id: "resources",
    type: "text",
    groupLabel: "알림마당",
    groupHref: "/notice/notices",
    eyebrow: "RESOURCES",
    title: "자료실",
    subtitle: "사업 운영에 필요한 양식과 보고서를 내려받을 수 있습니다.",
    categories: ["전체", "양식", "보고서", "가이드"],
  },
  press: {
    id: "press",
    type: "text",
    groupLabel: "홍보마당",
    groupHref: "/promotion/gallery",
    eyebrow: "PRESS",
    title: "보도자료",
    subtitle: "언론에 소개된 RISE 사업단의 소식을 모았습니다.",
    categories: ["전체", "보도", "기고", "인터뷰"],
  },
  gallery: {
    id: "gallery",
    type: "gallery",
    groupLabel: "홍보마당",
    groupHref: "/promotion/gallery",
    eyebrow: "PHOTO GALLERY",
    title: "포토갤러리",
    subtitle: "RISE 사업단의 현장을 사진으로 만나보세요.",
    categories: ["전체", "행사", "협약", "교육", "현장"],
  },
  cardnews: {
    id: "cardnews",
    type: "gallery",
    groupLabel: "홍보마당",
    groupHref: "/promotion/gallery",
    eyebrow: "CARD NEWS",
    title: "카드뉴스",
    subtitle: "한눈에 보는 RISE 사업 이야기, 카드뉴스로 전합니다.",
    categories: ["전체", "사업소개", "성과", "참여안내"],
  },
};

// -----------------------------------------------------------------------------
// 게시글 샘플 데이터
// -----------------------------------------------------------------------------
const IMG = {
  ceremony: "/manus-storage/g1-ceremony_cea75be1.jpg",
  mou: "/manus-storage/g2-mou_6691e706.jpg",
  capstone: "/manus-storage/g3-capstone_c6297500.jpg",
  campus: "/manus-storage/g4-campus_7d83e6b8.jpg",
  lab: "/manus-storage/g5-lab_da17c35f.jpg",
  forum: "/manus-storage/g6-forum_8853ac67.jpg",
  mentoring: "/manus-storage/g7-mentoring_725eee37.jpg",
  festival: "/manus-storage/g8-festival_b37d30b9.jpg",
  internship: "/manus-storage/g9-internship_2bd7f96e.jpg",
};

export const BOARD_POSTS: BoardPost[] = [
  // ─── 공지사항 (텍스트형) ───────────────────────────────────────────────
  {
    id: "notice-1",
    boardId: "notices",
    category: "공지",
    title: "[필독] 2026학년도 RISE 사업 운영 가이드라인 개정 안내",
    summary:
      "2026학년도 RISE 사업 운영 가이드라인이 개정되어 주요 변경 사항을 안내드립니다. 사업 참여 기관은 반드시 확인하시기 바랍니다.",
    content: [
      "2026학년도 RISE 사업 운영 가이드라인이 개정되었습니다. 이번 개정은 단위과제별 성과관리 체계 강화와 사업비 집행 기준 명확화를 핵심으로 합니다.",
      "주요 변경 사항은 다음과 같습니다. 첫째, 단위과제별 성과지표(KPI) 보고 주기가 분기 단위로 변경됩니다. 둘째, 사업비 집행 증빙 서류 제출 기한이 익월 10일까지로 통일됩니다. 셋째, 가족회사 등록 절차가 온라인 통합플랫폼으로 일원화됩니다.",
      "개정 가이드라인 전문은 첨부파일을 통해 내려받으실 수 있으며, 관련 문의는 사업단 운영지원팀으로 연락 주시기 바랍니다.",
    ],
    author: "운영지원팀",
    date: "2026.05.02",
    views: 1842,
    pinned: true,
    isNew: true,
    attachments: [
      { name: "2026_RISE_운영가이드라인_개정본.pdf", size: "3.4MB" },
      { name: "주요_변경사항_요약.hwp", size: "248KB" },
    ],
  },
  {
    id: "notice-2",
    boardId: "notices",
    category: "시스템",
    title: "RISE 통합정보플랫폼 시스템 점검 안내 (5/12 02:00~04:00)",
    summary:
      "안정적인 서비스 제공을 위한 시스템 정기 점검이 예정되어 있습니다. 점검 시간 동안 서비스 이용이 일시 중단됩니다.",
    content: [
      "RISE 통합정보플랫폼의 안정적인 운영을 위해 아래와 같이 시스템 정기 점검을 실시합니다.",
      "점검 일시: 2026년 5월 12일(화) 02:00 ~ 04:00 (2시간)\n점검 대상: 통합정보플랫폼 전체 서비스\n영향: 점검 시간 동안 로그인 및 신청·조회 서비스 이용 불가",
      "이용에 불편을 드려 죄송합니다. 점검 일정은 사정에 따라 변경될 수 있습니다.",
    ],
    author: "정보화팀",
    date: "2026.04.30",
    views: 631,
  },
  {
    id: "notice-3",
    boardId: "notices",
    category: "사업",
    title: "2026 상반기 가족회사 등록 신청 연장 안내 (~5/15까지)",
    summary:
      "지역 기업의 많은 참여 요청에 따라 2026 상반기 가족회사 등록 신청 기간을 5월 15일까지 연장합니다.",
    content: [
      "지역 기업 여러분의 높은 관심과 참여 요청에 따라 2026 상반기 가족회사 등록 신청 기간을 연장합니다.",
      "신청 연장 기한: 2026년 5월 15일(목) 18:00까지\n신청 방법: RISE 통합정보플랫폼 > 가족회사 > 등록 신청\n대상: 지역 소재 기업 및 기관",
      "가족회사로 등록하시면 산학협력 프로젝트, 채용연계 인턴십, 기술이전 등 다양한 협력 기회에 우선 참여하실 수 있습니다.",
    ],
    author: "산학협력팀",
    date: "2026.04.28",
    views: 924,
  },
  {
    id: "notice-4",
    boardId: "notices",
    category: "행정",
    title: "사업단 운영위원회 정기회의 결과 공유",
    summary:
      "제3차 RISE 사업단 운영위원회 정기회의가 개최되었습니다. 주요 심의·의결 사항을 공유드립니다.",
    content: [
      "2026년 제3차 RISE 사업단 운영위원회 정기회의가 4월 24일 개최되었습니다.",
      "이번 회의에서는 상반기 사업 추진 현황 점검, 단위과제별 예산 조정안 심의, 하반기 신규 프로그램 추진 계획 등이 논의되었습니다.",
      "회의 결과 주요 의결 사항은 첨부된 회의록을 참고하시기 바랍니다.",
    ],
    author: "기획총괄팀",
    date: "2026.04.25",
    views: 412,
    attachments: [{ name: "제3차_운영위원회_회의록.pdf", size: "1.1MB" }],
  },
  {
    id: "notice-5",
    boardId: "notices",
    category: "사업",
    title: "캡스톤디자인 결과물 지식재산권 안내 자료 배포",
    summary:
      "캡스톤디자인 프로젝트 결과물의 지식재산권 귀속 및 활용에 관한 안내 자료를 배포합니다.",
    content: [
      "캡스톤디자인 프로젝트 결과물의 지식재산권 보호와 활용을 돕기 위한 안내 자료를 배포합니다.",
      "본 자료에는 지식재산권 귀속 원칙, 특허 출원 절차, 기업 협력 시 권리 관계 등이 포함되어 있습니다.",
      "참여 학생과 지도교수는 프로젝트 시작 전 반드시 내용을 숙지하시기 바랍니다.",
    ],
    author: "산학협력팀",
    date: "2026.04.20",
    views: 358,
    attachments: [{ name: "캡스톤_지식재산권_안내.pdf", size: "2.0MB" }],
  },

  // ─── 자료실 (텍스트형) ───────────────────────────────────────────────
  {
    id: "res-1",
    boardId: "resources",
    category: "양식",
    title: "2026 RISE 사업비 집행 정산 양식 (통합본)",
    summary:
      "사업비 집행 및 정산에 필요한 표준 양식 통합본입니다. 최신 버전을 사용하시기 바랍니다.",
    content: [
      "2026년도 RISE 사업비 집행·정산에 사용하는 표준 양식 통합본입니다.",
      "집행계획서, 정산보고서, 증빙 점검표가 하나의 파일에 포함되어 있습니다. 반드시 최신 버전을 내려받아 사용하시기 바랍니다.",
    ],
    author: "운영지원팀",
    date: "2026.04.22",
    views: 1203,
    isNew: true,
    attachments: [{ name: "2026_사업비_집행정산_양식.xlsx", size: "186KB" }],
  },
  {
    id: "res-2",
    boardId: "resources",
    category: "보고서",
    title: "2025년 RISE 사업 성과보고서",
    summary:
      "2025년 한 해 동안의 RISE 사업 추진 성과를 종합한 연차 성과보고서입니다.",
    content: [
      "2025년도 RISE 사업의 추진 실적과 성과를 종합 정리한 연차 성과보고서입니다.",
      "단위과제별 성과지표 달성 현황, 주요 사례, 향후 개선 과제가 수록되어 있습니다.",
    ],
    author: "기획총괄팀",
    date: "2026.03.30",
    views: 876,
    attachments: [{ name: "2025_RISE_성과보고서.pdf", size: "8.7MB" }],
  },
  {
    id: "res-3",
    boardId: "resources",
    category: "가이드",
    title: "통합정보플랫폼 사용자 매뉴얼 (v2.0)",
    summary:
      "RISE 통합정보플랫폼 이용 방법을 단계별로 정리한 사용자 매뉴얼 최신판입니다.",
    content: [
      "RISE 통합정보플랫폼의 회원가입부터 사업 신청, 정산까지 전 과정을 안내하는 사용자 매뉴얼입니다.",
      "화면 캡처와 함께 단계별로 설명되어 있어 처음 이용하는 분도 쉽게 따라 하실 수 있습니다.",
    ],
    author: "정보화팀",
    date: "2026.03.15",
    views: 654,
    attachments: [{ name: "통합정보플랫폼_매뉴얼_v2.0.pdf", size: "5.3MB" }],
  },

  // ─── 보도자료 (텍스트형) ───────────────────────────────────────────────
  {
    id: "press-1",
    boardId: "press",
    category: "보도",
    title: "RISE 사업단, 지역 강소기업 32개사와 산학협력 MOU 체결",
    summary:
      "지역 우수기업과의 협력 확대를 통해 학생 현장실습과 채용연계의 폭이 한층 넓어졌습니다.",
    content: [
      "RISE 사업단이 지역 강소기업 32개사와 산학협력 업무협약(MOU)을 체결했습니다.",
      "이번 협약을 통해 학생 현장실습 기회 확대, 채용연계형 인턴십, 공동 기술개발 등 다양한 협력 사업이 추진될 예정입니다.",
      "사업단 관계자는 \"지역 기업과 대학이 함께 성장하는 선순환 생태계를 만들어가겠다\"고 밝혔습니다.",
    ],
    author: "홍보팀",
    date: "2026.05.01",
    views: 1521,
    isNew: true,
    thumbnail: IMG.mou,
  },
  {
    id: "press-2",
    boardId: "press",
    category: "보도",
    title: "지역혁신 인재양성을 위한 정부 추가 예산 200억원 확정",
    summary:
      "교육부의 RISE 추가 지원 결정으로 신규 프로그램 7개 분야가 신설될 예정입니다.",
    content: [
      "교육부가 RISE 사업에 대한 추가 예산 200억원을 확정했습니다.",
      "이번 추가 지원으로 로컬인재 양성, 탄소중립 지원 등 신규 프로그램 7개 분야가 신설될 예정입니다.",
    ],
    author: "홍보팀",
    date: "2026.04.18",
    views: 1342,
    thumbnail: IMG.forum,
  },
  {
    id: "press-3",
    boardId: "press",
    category: "인터뷰",
    title: "[인터뷰] \"지역에서 배우고 지역에 남는다\" RISE 수료생 이야기",
    summary:
      "RISE 프로그램을 수료하고 지역 기업에 취업한 청년들의 생생한 경험담을 전합니다.",
    content: [
      "RISE 프로그램을 수료하고 지역에 정착한 청년들을 만났습니다.",
      "이들은 \"지역에서도 충분히 성장할 기회가 있다는 것을 RISE를 통해 확인했다\"고 입을 모았습니다.",
    ],
    author: "홍보팀",
    date: "2026.04.05",
    views: 987,
    thumbnail: IMG.mentoring,
  },

  // ─── 포토갤러리 (갤러리형) ───────────────────────────────────────────────
  {
    id: "gal-1",
    boardId: "gallery",
    category: "행사",
    title: "2026 RISE 사업단 출범식 및 비전 선포식",
    summary: "지역과 대학이 함께하는 새로운 출발을 알린 출범식 현장입니다.",
    content: [
      "2026 RISE 사업단 출범식이 성황리에 개최되었습니다.",
      "지자체, 대학, 지역 기업 관계자 300여 명이 참석해 지역혁신 생태계 구축의 첫걸음을 함께했습니다.",
    ],
    author: "홍보팀",
    date: "2026.03.04",
    views: 2104,
    isNew: true,
    thumbnail: IMG.ceremony,
    images: [IMG.ceremony, IMG.forum, IMG.campus],
  },
  {
    id: "gal-2",
    boardId: "gallery",
    category: "협약",
    title: "지역 강소기업 산학협력 MOU 체결식",
    summary: "32개 지역 기업과 함께한 산학협력 업무협약 체결 현장입니다.",
    content: [
      "지역 강소기업 32개사와의 산학협력 MOU 체결식이 진행되었습니다.",
      "협약을 통해 현장실습, 채용연계, 공동 R&D 등 폭넓은 협력이 이뤄질 예정입니다.",
    ],
    author: "홍보팀",
    date: "2026.04.30",
    views: 1488,
    thumbnail: IMG.mou,
    images: [IMG.mou, IMG.mentoring],
  },
  {
    id: "gal-3",
    boardId: "gallery",
    category: "교육",
    title: "캡스톤디자인 우수작품 전시회",
    summary: "128팀이 참가한 캡스톤디자인 전시회의 열정적인 현장입니다.",
    content: [
      "올해 캡스톤디자인 우수작품 전시회가 개최되었습니다.",
      "총 128팀이 참가해 지역 산업 현안을 해결하는 창의적인 결과물을 선보였습니다.",
    ],
    author: "홍보팀",
    date: "2026.04.27",
    views: 1320,
    thumbnail: IMG.capstone,
    images: [IMG.capstone, IMG.lab],
  },
  {
    id: "gal-4",
    boardId: "gallery",
    category: "현장",
    title: "지역기업 채용연계형 인턴십 현장",
    summary: "지역 우수기업에서 실무를 경험하는 인턴십 참가자들의 모습입니다.",
    content: [
      "채용연계형 인턴십에 참여한 학생들이 지역 기업 현장에서 실무를 익히고 있습니다.",
      "8주간의 유급 인턴십을 통해 학생과 기업 모두 만족도 높은 성과를 거두었습니다.",
    ],
    author: "홍보팀",
    date: "2026.04.15",
    views: 1095,
    thumbnail: IMG.internship,
    images: [IMG.internship, IMG.mentoring],
  },
  {
    id: "gal-5",
    boardId: "gallery",
    category: "교육",
    title: "지역특화 R&D 공동연구 워크숍",
    summary: "대학과 기업 연구자가 함께한 공동연구 워크숍 현장입니다.",
    content: [
      "지역특화 R&D 공동연구 워크숍이 개최되었습니다.",
      "대학과 기업의 연구자들이 모여 지역 전략산업 분야의 협력 과제를 논의했습니다.",
    ],
    author: "홍보팀",
    date: "2026.04.02",
    views: 743,
    thumbnail: IMG.lab,
    images: [IMG.lab, IMG.forum],
  },
  {
    id: "gal-6",
    boardId: "gallery",
    category: "행사",
    title: "지역 청년 정주 페스티벌",
    summary: "지역 청년들이 함께 어울린 정주 페스티벌의 활기찬 현장입니다.",
    content: [
      "지역 청년 정주 페스티벌이 지역 시민과 함께 열렸습니다.",
      "지역에서 살아가는 청년들의 다양한 활동과 창업 사례가 소개되었습니다.",
    ],
    author: "홍보팀",
    date: "2026.03.22",
    views: 982,
    thumbnail: IMG.festival,
    images: [IMG.festival, IMG.campus],
  },

  // ─── 카드뉴스 (갤러리형) ───────────────────────────────────────────────
  {
    id: "card-1",
    boardId: "cardnews",
    category: "사업소개",
    title: "한눈에 보는 RISE, 무엇이 달라지나요?",
    summary: "지역혁신중심 대학지원체계 RISE를 카드뉴스로 쉽게 알아봅니다.",
    content: [
      "RISE(지역혁신중심 대학지원체계)가 무엇인지 카드뉴스로 쉽게 풀어드립니다.",
      "분절적으로 운영되던 대학재정지원사업이 지자체 주도로 어떻게 통합되는지 살펴보세요.",
    ],
    author: "홍보팀",
    date: "2026.04.20",
    views: 1654,
    isNew: true,
    thumbnail: IMG.campus,
    images: [IMG.campus, IMG.forum],
  },
  {
    id: "card-2",
    boardId: "cardnews",
    category: "성과",
    title: "숫자로 보는 2025 RISE 성과",
    summary: "참여 가족회사 128개사, 지역 정주율 92%. 데이터로 확인하는 성과.",
    content: [
      "2025년 RISE 사업의 주요 성과를 숫자로 정리했습니다.",
      "참여 가족회사 128개사, 수혜 학생 4,280명, 지역 정주율 92% 등 의미 있는 결실을 거두었습니다.",
    ],
    author: "홍보팀",
    date: "2026.03.28",
    views: 1287,
    thumbnail: IMG.ceremony,
    images: [IMG.ceremony],
  },
  {
    id: "card-3",
    boardId: "cardnews",
    category: "참여안내",
    title: "RISE 프로그램, 이렇게 참여하세요",
    summary: "학생·기업·지역이 RISE에 참여하는 방법을 단계별로 안내합니다.",
    content: [
      "RISE 프로그램에 참여하는 방법을 대상별로 안내합니다.",
      "학생, 기업, 지역기관 각각의 참여 절차와 혜택을 카드뉴스로 확인하세요.",
    ],
    author: "홍보팀",
    date: "2026.03.10",
    views: 1043,
    thumbnail: IMG.mentoring,
    images: [IMG.mentoring, IMG.internship],
  },
];

// -----------------------------------------------------------------------------
// 헬퍼
// -----------------------------------------------------------------------------
export function getBoard(boardId: string): BoardConfig | undefined {
  return BOARDS[boardId];
}

export function getPostsByBoard(boardId: string): BoardPost[] {
  return BOARD_POSTS.filter((p) => p.boardId === boardId);
}

export function getPost(postId: string): BoardPost | undefined {
  return BOARD_POSTS.find((p) => p.id === postId);
}

export function getLnbForBoard(boardId: string): LnbSection {
  const board = BOARDS[boardId];
  if (board?.groupLabel === "홍보마당") return PROMOTION_LNB;
  return NOTICE_LNB;
}
