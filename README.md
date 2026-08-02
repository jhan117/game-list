# 과제

- 웹서버프로그래밍 과제
- 모바일 먼저 디자인
- 목적
  - 제가 즐겨하고 선호하는 게임 데이터를 시각적으로 공유하는 웹을 개발하는 것을 목표로 했습니다. 특정 장르의 게임 데이터를 조회할 수 있도록 설계했습니다. 또한, UX를 향상하기 위해 노력했습니다.
- 기능
  - 게임 데이터 조회
  - 게임 장르별 필터링
  - GIF와 이미지 전환
  - 다크모드
  - 반응형 웹 디자인
  - Skeleton UI
- 개발 환경 및 도구
  - Frontend: React, JavaScript, Netlify
  - Backend: Spring Boot, Kotlin, Postman, Render
  - Database: MongoDB

- 2026/08/02 리팩토링
  - Render 슬립 모드 대응
    - Render 무료 티어의 15분 Sleep 문제를 해결하기 위해 `GET /health` 엔드포인트를 구현하고 UptimeRobot 핑 세팅 완료
  - Tenor API v2 서비스 종료 이슈 대응
    - 구글 Tenor API v2 서비스 종료에 대응하여, 오리지널 Tenor GIF 직접 링크 구조로 변경
    - 데이터 구조 변경: `postId` 제거 ➔ `gifUrl` 직접 저장 방식으로 변경
    - 프론트엔드 비동기 fetch 대기시간 제거 ➔ 직접 저장 방식이기 때문에
  - 백엔드 고도화 및 아키텍처 개선
    - 백엔드 전역 CORS 설정 추가
    - 동적 PATCH 엔드포인트 구현 (`set` 및 `unset`으로 원하는 필드 자유 수정/삭제 가능)
    - Java 21 LTS 안정 버전 환경 구축(그냥 컴퓨터에 이것밖에 없어서 새로 깔기 귀찮았다)
  - 빌드 및 개발 환경 마이그레이션
    - CRA(Create React App)에서 Vite 6로 마이그레이션하여 빌드 속도 향상

- Swagger API 자동 문서화 & Postman 연동
  - Swagger UI (웹 문서): `http://localhost:8080/swagger-ui.html` 에서 모든 API 직접 테스트 가능
  - OpenAPI JSON 스펙: `http://localhost:8080/v3/api-docs` 에서 JSON 형식으로 명세 확인
  - Postman 컬렉션 자동 생성: Postman ➔ `Import` ➔ `http://localhost:8080/v3/api-docs` (또는 다운로드한 JSON 파일) 입력 시 1초 만에 모든 API 자동 등록

## 스크린샷

[desktop]
![image](https://github.com/user-attachments/assets/587c43ba-195d-4eb8-a8ab-2489d97d88ef)

<p>[tablet & mobile]</p>
<img src="https://github.com/user-attachments/assets/3912a2f7-9f11-43d3-ad13-bf84a028dbb9" width="600">
<img src="https://github.com/user-attachments/assets/484225ac-284b-4181-8ea7-86daf73e0886" width="225">
