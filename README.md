# 오늘의 운세

<div>
<a target="_blank" href="https://ounse.imweb.me/">랜딩 페이지</a>
</div>
<div>
<a target="_blank" href="https://github.com/Devinix00/today-s-horoscope-admin">어드민 페이지 깃허브</a>
</div>

<br/>

오늘의 운세는 유저들에게 운세를 제공하는 모바일 어플리케이션입니다. 매일마다 푸시 메세지의 형태로 오늘의 한마디 알림을 보내며, 어플리케이션에 접속 시 유저가 설정한 정보에 따라서 아래의 운세들을 제공합니다.

1. 띠 별 운세
2. 별자리 별 운세
3. MBTI 별 운세

<br/>

오늘의 운세는 React와 React-Native로 구성된 웹뷰 어플리케이션입니다.

<br/>

<img width="300px" src="./imges/시연.gif">

## 기술 스택

1. Typescript
2. React
3. Next.Js (어드민 페이지)
4. Tailwind (어드민 페이지)
5. React-Native
6. React-Query
7. zustand (어드민 페이지)
8. Firebase (FCM)
9. vercel (turbo repo로 모노 레포 구성)

## 팀 소개

<table>
  <thead>
    <tr >
      <th style="text-align:center;" >김범수</th>
      <th style="text-align:center;" >배하연</th>
      <th style="text-align:center;" >김선희</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img width="200" src="./imges/김범수.jpeg" /></td>
      <td><img width="200" src="./imges/배하연.jpeg" /></td>
      <td><img width="200" src="./imges/김선희.jpeg" /></td>
    </tr>
    <tr>
      <td><a target="_blank" href="https://github.com/Devinix00">Devinix</a></td>
      <td><a target="_blank" href="https://github.com/hayeonbae7">hayeonbae7</a></td>
      <td><a target="_blank" href="https://github.com/Sprisun12">Sprisun12</a></td>
    </tr>
    <tr>
      <td>팀장</td>
      <td>팀원</td>
      <td>팀원</td>
    </tr>
    <tr>
      <td width="200">
      모노레포 구성
      <br/>
      어드민 페이지 개발
      <br/>
      푸시 메세지 구현
      <br/>
       React-Native 웹뷰 구현
      </td>
      <td width="200">
      메인 화면 (롤링 배너) 개발
      <br/>
      유저 정보 페이지 개발
      <br/>
      푸시 메세지 구현
      <br/>
      </td>
      <td width="200">
      상세 페이지 개발
      <br/>
      스크롤 애니메이션 구현
      <br/>
      설정 페이지 개발
      </td>
    </tr>
  </tbody>
</table>

## 주요 기능

1. 유저 정보 로컬 스토리지에 저장
2. 저장된 유저 정보로 운세 데이터 받아오기 (띠, 별자리, MBTI)
3. 파이어베이스를 이용한 푸시 메세지

## 커밋 컨벤션

커밋 메시지는 다음과 같이 구성됩니다:

### 커밋 타입

| 타입       | 설명                                                     |
| ---------- | -------------------------------------------------------- |
| `feat`     | 새로운 기능에 대한 커밋                                  |
| `fix`      | 버그 수정에 대한 커밋                                    |
| `docs`     | 문서만 변경했을 경우                                     |
| `design`   | css 및 UI 디자인 수정                                    |
| `style`    | 코드 스타일 변경 (기능/버그 변경 없음)                   |
| `refactor` | 리팩토링                                                 |
| `test`     | 테스트 추가, 테스트 리팩토링 (비즈니스 로직에 변경 없음) |
| `chore`    | 빌드 업무 수정, 패키지 매니저 설정할 경우 등             |
| `rename`   | 파일, 폴더 이름 수정                                     |
| `remove`   | 파일, 폴더 삭제                                          |

### 제목

제목은 최대 50글자까지 작성하며, 소문자로 시작하고 마침표를 붙이지 않습니다

예시)

<ul>
    <li>feat: 로그인 기능 구현</li>
    <li> design: 헤더 레이아웃 수정</li>
</ul>

### 본문

본문은 선택사항이며, 커밋의 상세한 설명을 작성합니다. 본문은 한 줄에 72자를 넘지 않도록 하며, 어떻게 보다는 무엇과 왜를 설명하는데 집중합니다.
