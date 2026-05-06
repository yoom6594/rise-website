# IA 반영 작업 Todo

## 메뉴 IA 정의 (사용자 제공)
- [ ] site-data.ts 또는 신규 nav 데이터 모듈에 정확한 IA 트리 반영
  - 1Depth 7개: 센터소개 / 인재양성 / 연구개발 / 지역사회혁신 / 사업·성과관리 / 알림마당 / 홍보마당
  - 각 1Depth에 ANCHOR 태그
  - 2Depth + 3Depth(TAP) + 화면타입(콘텐츠/프로그램/게시판) + 형식(HTML/PROGRAM/BOARD)

## Header 재구성
- [ ] Header.tsx 1Depth 메뉴를 IA 7개로 변경 (RISE 사업/사업단 소개/프로그램/알림마당/커뮤니티 -> 새 IA)
- [ ] 호버 시 메가 드롭다운 패널 (2Depth + 3Depth 표시)
- [ ] 화면타입 뱃지(BOARD/PROGRAM/HTML) 또는 보조 라벨 표시
- [ ] 모바일 대응 고려 (간단히 축소 메뉴)

## Footer 사이트맵
- [ ] Footer.tsx 사이트맵 영역을 IA 1Depth/2Depth로 교체

## Programs / NoticeNews 라벨링 일치
- [ ] Programs 섹션: '인재양성/연구개발/지역사회혁신' 카테고리에 매핑 (창업지원→지역사회혁신, 지역정주→지역사회혁신, 교육지원→인재양성)
- [ ] NoticeNews 탭: 공지사항 + (보도자료는 홍보마당으로) 또는 '공지사항/행사·일정' 제공
