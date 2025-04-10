디렉토리구조 

/quiz-app
  ├── index.html
  ├── style.css
  ├── main.js
  └── questions.json

  
  ---------------------------------------------------


1. [브랜치 네이밍]
feature/기능명       ← 새로운 기능 작업
fix/버그명           ← 버그 수정
style/스타일명       ← CSS, UI 등 비즈니스 로직 없는 수정
refactor/모듈명      ← 리팩토링 (동작 변화 없는 코드 개선)
docs/파일명          ← 문서 작업 (README 등)
chore/기타           ← 설정, 패키지 설치 등

-----------------------------------------------------

2. [커밋 메시지 컨벤션]
[타입] 기능요약 (선택적으로 #이슈번호)

Ex)
	•	feat: 시작 화면 구현
	•	fix: 버튼 중복 클릭 버그 수정 #12
	•	style: OX 버튼 색상 변경
	•	refactor: 점수 계산 함수 분리
	•	docs: README에 프로젝트 설명 추가
	•	chore: eslint 설정 추가


 -----------------------------------------------------

3. [이슈템플릿] 
 ### 기능 설명
- 어떤 기능인지 간단히 요약

### 작업 내용
- 해야 할 작업 리스트
- [ ] 버튼 UI 구현
- [ ] O 클릭 시 다음 문제 로직 추가

### 참고사항
- 없음 / 또는 관련된 파일

 
