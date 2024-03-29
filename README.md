<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/gh/sunn-us/SUIT/fonts/static/woff2/SUIT.css"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="css/reset.resume.css" />
    <link rel="stylesheet" href="css/common.resume.css" />
    <link rel="stylesheet" href="css/media.resume.css" />
    <link rel="stylesheet" href="css/main.resume.css" />
  </head>
  <body>
    <header>
      <div class="wrap">
        <h1>이지현</h1>
      </div>
    </header>
    <main>
      <section id="intro">
        <div class="wrap">
          <h2>INTRODUCE</h2>
          <div class="flex">
            <div class="profile"></div>
            <div>
              <h3 class="strong">
                <strong>협업, 성장, 도전</strong> 프론트엔드 개발자
              </h3>
              <h3>Summary</h3>
              <ul class="border-marker">
                <li>
                  건축학과를 다니면서 2D 디자인,3D 툴을 다루는 작업을
                  해왔습니다.
                </li>
                <li>
                  개발 시작 3개월만에 팀프로젝트를 진행할 정도로 빠른 성장
                  속도를 가졌습니다.
                </li>
                <li>
                  Notion, Slack, GitHub 등 협업과 관련한 툴을 다루는 것을
                  좋아합니다.
                </li>
                <li>
                  지식을 공유하는 일을 좋아하여 여러 스터디를 운영 및
                  참여하였습니다.
                </li>
              </ul>
              <h3>Contact</h3>
              <ul class="border-marker">
                <li>
                  <span>GitHub:</span>
                  <a href="https://github.com/Sleepingoff" target="_blank"
                    >https://github.com/Sleepingoff</a
                  >
                </li>
                <li>
                  <span>E-MAIL:</span>
                  <a href="#" target="_blank">just_jh30@naver.com</a>
                </li>
                <li>
                  <span>BLOG:</span>
                  <a href="https://velog.io/@just_jh30" target="_blank"
                    >velog/just_jh30</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="project">
        <div class="wrap">
          <h2>PROJECT</h2>
          <article class="flex">
            <header>
              <h3>Leafyer</h3>
              <summary>
                <ul class="border-marker">
                  <li title="주제">식물 거래 및 커뮤니티</li>
                  <li title="기간">2023.06.04 ~ 진행</li>
                  <li title="팀 구성">FE 3명 / BE 4명</li>
                  <li title="역할">Designer & Frontend Developer</li>
                </ul>
                <ul class="project-skills">
                  <li title="디자인">
                    <code>Figma</code>
                  </li>
                  <li title="프론트엔드">
                    <code>React</code>
                    <code>TypeScript</code>
                    <code>Emotion</code>
                    <code>Mobx</code>
                  </li>
                  <li title="관리 및 배포">
                    <code>GitHub</code>
                  </li>
                </ul>
                <address>
                  배포:
                  <a href="http://www.leafyer.com" target="_blank"
                    >www.leafyer.com</a
                  >
                  <br />
                  GitHub:
                  <a
                    href="https://github.com/LEAFY-7/leafy-front"
                    target="_blank"
                  >
                    LEAFY-7/leafy-front</a
                  >
                  <br />
                  Notion:
                  <a
                    href="https://bitter-ambulance-f76.notion.site/c1f5a8a540854b0abf28a4de21fe4222?v=7f720865fa5548f3b68bb1490056373f&pvs=4"
                    target="_blank"
                  >
                    LEAFY-Notion</a
                  >
                </address>
              </summary>
            </header>
            <main>
              <details open>
                <summary>요약</summary>
                <ul class="border-marker">
                  <li>기획 및 디자인부터 시작하여 개발하는 프로젝트 경험</li>
                  <li>백엔드와 협업하여 API 명세를 작성</li>
                </ul>
              </details>
              <details open>
                <summary>경험</summary>
                <ol>
                  <li>
                    <strong>개발자가 디자인하여 개발자와 협업하기!</strong> /
                    피그마를 활용하여 디자인 시스템 도입
                    <p>
                      어도비 XD로 디자인을 하며 한 달 정도 기획과 디자인을
                      하였지만, 어도비를 결제한 사람들만 편집이 가능하다는 점
                      등의 어려움으로 인해 과감히 피그마로 다시 시작하였습니다.
                      이 과정에서
                      <strong
                        >디자인 시스템을 도입하여 필요한 컴포넌트를 파악할 수
                        있었고, 개발을 할 때도 재사용이 필요한 컴포넌트를 알고
                        있기에 효율적인 작업이 가능했습니다.
                      </strong>
                    </p>
                  </li>
                  <li>
                    <strong>아까운 디자인? 무거운 디자인!</strong> / 피그마와
                    깃허브를 연동하여 디자인 토큰 적용
                    <p>
                      피그마의 플러그인을 활용, 디자인 시스템을 json 파일로
                      변환하여 깃허브에 커밋하는 작업을 진행했습니다. 그렇지만,
                      디자인 시스템을 그대로 적용하려니 하나의 컴포넌트에 여러
                      개의 파일이 필요하고, 배포 시 필요없는 패키지가 생겨 힙
                      메모리 부족이 일어나는 등 활용성이 떨어지는 여러
                      문제점들이 생겼습니다. 컴포넌트 내에 아톰 컴포넌트들로
                      구성이 되어 있는 아토믹 디자인 형태여서 오히려 피그마와의
                      연동이 문제로 작용하였던 것입니다.
                      <strong
                        >따라서 기본적인 색상값, 폰트, 공통 스타일에 대해서만
                        피그마와 연동하여 의존성을 줄이고, GitHub Actions를
                        사용하여 특정 브랜치에서만 패키지 설치 및 삭제까지
                        자동화하여 배포 시에 필요없는 패키지가 들어가는 것을
                        최소화하려고 노력했습니다.</strong
                      >
                      devDependencies에 추가하지 않은 이유는 개발이 아닌 피그마
                      작업 시에만 필요했기 때문입니다.
                    </p>
                  </li>
                </ol>
              </details>
            </main>
          </article>
        </div>
      </section>
      <section id="book">
        <div class="wrap">
          <h2>BOOK</h2>
          <article class="flex">
            <header>
              <h3>눈떠보니 기술 면접 전날!?</h3>
              <ul class="border-marker">
                <li title="주제">주니어 개발자를 위한 기술 면접 정리</li>
                <li title="기간">2023.09.26 ~ 2023.10.28</li>
                <li title="역할">Leader & Frontend Developer</li>
              </ul>
              <address>
                ISBN: <a href="#" target="_blank">등록 진행 중</a>
                <br />
                Notion:
                <a href="#" target="_blank">준비 중</a>
              </address>
            </header>
            <main>
              <p>
                개발자 간 문서로 협업하는 경험과 그에 대한 결과물을 책으로
                남기는 과정에서 커뮤니케이션을 배웠습니다. 리더로써
                <strong>참여도가 적은 동료들을 어떻게 설득할 것인가</strong>라는
                질문을 받았고, 그에 대한 해결 방법을 고민했습니다. 그 과정에서
                동료와 일대일 대화도 하며 그동안 혼자 부담하고 있었던 일이
                오해를 쌓아왔다고 깨달았습니다. 그래서 스스로 담당하고 있던
                일들을 나열해 보고 역할을 재분배하였고, 기여도에 대해 정확히
                명시하여 참여도가 높은 동료를 더 밀어주는 방향으로 해결책을
                제시하였습니다.
                <strong
                  >협업하는 과정에서 역할에 대해 다시 생각해 볼 수 있는
                  경험이었고, 문제에 대한 지적보다는 긍정적인 개선 방법에
                  집중하여 결과적으로 긍정적인 피드백을 받을 수
                  있었습니다.</strong
                >
              </p>
            </main>
          </article>
        </div>
        <section id="edu">
          <div class="wrap">
            <h2>EDUCATION</h2>
            <article class="flex">
              <header>
                <h3>웹 퍼블리싱 교육과정(4개월 / 수료)</h3>
                <ul class="border-marker">
                  <li title="기관">SBS 컴퓨터 아카데미 부평점</li>
                  <li title="기간">2023.03.13 ~ 2023.06.01</li>
                  <li title="과정">자바기반 웹 개발자 양성 과정</li>
                </ul>
              </header>
              <main>
                <h4>학습 내용</h4>
                <ul>
                  <li>HTML, CSS로 한진칼 홈페이지 클론코딩</li>
                  <li>반응형 웹에 대한 대응</li>
                  <li>JQUERY로 간단한 기능 구현</li>
                </ul>
              </main>
            </article>
            <article class="flex">
              <header>
                <h3>멋쟁이 사자처럼 프론트엔드 스쿨 7기(4개월 / 진행)</h3>
                <ul class="border-marker">
                  <li title="기관">
                    멋쟁이 사자처럼 프론트엔드 스쿨 7기 / 위니브
                  </li>
                  <li title="기간">2023.07.03 ~ 2023.11.10</li>
                </ul>
              </header>
              <main>
                <h4>학습 내용</h4>
                <ul>
                  <li>GITHUB을 이용한 협업 경험</li>
                  <li>HTML, CSS에 대한 기본 개념 및 반응형 웹에 대한 대응</li>
                  <li>JAVASCRIPT에 대한 기본 개념</li>
                  <li>REACT로 프로젝트 진행</li>
                </ul>
              </main>
            </article>
          </div>
        </section>
      </section>
    </main>

  </body>
</html>

# 이력서 작성 중

- [ ] 댓글 기능 추가하기
- [ ] 연락 기능 추가하기

---
