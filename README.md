# 파일 구조

📦src <br />
┣ 📂Assets <br />
┃ ┗ 📜logo1.png {메인 로고} <br />
┣ 📂Pages<br />
┣ 📂Work<br />
┃ ┣ 📂Content<br />
┃ ┃ ┣ 📜Content.css<br />
┃ ┃ ┗ 📜Content.jsx<br />
┃ ┣ 📂Sidebar<br />
┃ ┃ ┣ 📜GroupSelector.css<br />
┃ ┃ ┣ 📜GroupSelector.jsx<br />
┃ ┃ ┣ 📜Sidebar.css<br />
┃ ┃ ┣ 📜Sidebar.jsx<br />
┃ ┃ ┣ 📜SidebarItem.css<br />
┃ ┃ ┗ 📜SidebarItem.jsx<br />
┃ ┣ 📜Work.css<br />
┃ ┗ 📜Work.jsx<br />
┣ 📜App.css<br />
┣ 📜App.js<br />
┣ 📜index.css<br />
┗ 📜index.js<br />

# 사용 라이브러리

- react-icons <br />
  -> npm install react-icons --save

# 구현 기능 Detail

- [x] work page 접근시, 로그인 상태여부 확인. false -> 로그인 페이지로 이동
- [ ] GroupSelector 드롭다운을 통해 스터디그룹 변경
  - [ ] dropdown design하기
- [ ] Content영역에 기능들 렌더링

# 필요 API

- 사용자가 가입한 스터디들의 data
  - group.id, group.name

# Problems

- [x] sidebarItem 선택시 hover효과가 유지되지 않음
- Work페이지 진입시 DashBoard를 바로 뜨게 해야하는데, Router가 꼬인다.
- Work페이지 진입시 기본으로 어떤 Study를 출력할 것인가?
  - Study가 1개일 때 : 해당 스터디 출력
  - Study가 여러개일 때 : ???
- 회원별로 다른 Work페이지를 출력해주어야 한다.
- 로그인한 사용자의 정보는 전역 상태 관리 도구 (Redux,MobX,Zustand ,Context API)를 사용하여 앱 전체에서 접근 가능하게 저장해야 한다.

# 공부한 내용

2024.05.28

- React-ContextAPI
