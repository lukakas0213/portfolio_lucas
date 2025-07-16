
document.getElementById('copyEmail').addEventListener('click', function(e) {
  e.preventDefault();
  const email = "dpark021@umd.edu"; // 본인 이메일로 변경
  navigator.clipboard.writeText(email).then(() => {
    Swal.fire({
      icon: 'success',
      title: 'Copied!',
      text: `${email}`,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'OK'
    });
  });
});

document.getElementById('aboutMenu').addEventListener('click', function() {
  const aboutContent = document.getElementById('aboutContent');
  aboutContent.classList.remove('resume-active');
  aboutContent.innerHTML = `

    <h1><span class="highlight">Software</span> Engineer</h1>
    <p class="intro">
      메릴랜드 대학교 컴퓨터과학과 재학 중인 박동혁입니다. 현재 Human Data Interaction Lab에서 학부 연구생으로 활동하며 데이터 시각화 웹 툴을 개발하고 있습니다. Java, Python, JavaScript를 주로 사용하며, 머신러닝과 웹 개발 프로젝트에 경험이 있습니다. 수강신청 자동화, AI 비서 개발, 웹 크롤링 시스템 등 실생활 문제를 해결하는 프로젝트들을 진행해왔습니다. 데이터를 의미 있는 인사이트로 변환하고, 기술을 통해 사람들의 일상을 개선하는 솔루션을 만드는 것이 목표입니다.    </p>
  `;
});

document.getElementById('resumeMenu').addEventListener('click', function () {
  const aboutContent = document.getElementById('aboutContent');
  aboutContent.classList.add('resume-active');
  aboutContent.innerHTML = `
    <section id="resumeSection" style="padding: 6rem 2rem; max-width: 1100px; margin: auto; font-family: 'Inter', sans-serif; color: #f3f4f6;">
      <h2 style="font-size: 2.5rem; text-align: center; margin-bottom: 4rem; color: #ffe14d; font-weight: 900; letter-spacing: 0.05em;"></h2>
      <div style="display: flex; flex-direction: column; gap: 2.5rem; align-items: center; justify-content: center;">
        <!-- 학력 -->
        <div class="resume-card" style="width: 100%; min-height: 200px;">
          <h3 class="rounded-highlight" style="font-size: 2rem; color: #222; font-weight: 800; margin-bottom: 1.2rem; background:#ffe14d; display:block; text-align:center; margin-left:auto; margin-right:auto; width:max-content;">📚 학력</h3>
          <p style="font-size: 1.3rem; font-weight: 700; color: #fff; margin-bottom: 0.3rem;">University of Maryland, College Park</p>
          <p class="sub" style="font-size: 1.1rem; color: #bdbdbd; margin-bottom: 1.2rem;">B.S. Computer Science <span style='color:#ffe14d;'>(2023 – 2027)</span></p>
          <ul style="display: flex; flex-wrap: wrap; gap: 2.5rem 3rem; margin: 1.2rem 0 0 0; padding: 0; list-style: none;">
            <li style="font-size: 1.1rem; color: #60a5fa; font-weight: 600;">자료구조</li>
            <li style="font-size: 1.1rem; color: #60a5fa; font-weight: 600;">알고리즘</li>
            <li style="font-size: 1.1rem; color: #60a5fa; font-weight: 600;">웹 프로그래밍</li>
            <li style="font-size: 1.1rem; color: #60a5fa; font-weight: 600;">AI, 데이터 사이언스</li>
          </ul>
        </div>
        <!-- 기술 스택 -->
        <div class="resume-card" style="width: 100%; min-height: 200px;">
          <h3 class="rounded-highlight" style="font-size: 2rem; color: #222; font-weight: 800; margin-bottom: 1.2rem; background:#ffe14d; display:block; text-align:center; margin-left:auto; margin-right:auto; width:max-content;">🛠 기술 스택</h3>
          <ul style="display: flex; flex-direction: column; gap: 0.7rem; margin: 1.2rem 0 0 0; padding: 0; list-style: none;">
            <li><span style="color: #60a5fa; font-weight: 700;">언어</span>: <span style="color:#fff; font-weight:600;">Java, Python, JS, C, Kotlin</span></li>
            <li><span style="color: #60a5fa; font-weight: 700;">프레임워크</span>: <span style="color:#fff; font-weight:600;">Django, Spring Boot, PyTorch</span></li>
            <li><span style="color: #60a5fa; font-weight: 700;">기타</span>: <span style="color:#fff; font-weight:600;">Git, Arduino, Firebase, OpenAI API</span></li>
          </ul>
        </div>
        <!-- 경력 타이틀 -->
        <h3 class="rounded-highlight" style="font-size: 2rem; color: #222; font-weight: 800; margin-bottom: 1.2rem; text-align:center; background:#ffe14d; display:block; margin-left:auto; margin-right:auto; width:max-content;">💼 경력</h3>
        <div class="resume-timeline-wrapper">
          <div class="resume-timeline-line"></div>
          <div class="resume-card timeline-card">
            <div class="timeline-dot"></div>
            <h4 style="font-size: 1.3rem; color: #60a5fa; font-weight: 800; margin:0;">Human Data Interaction Lab <span style="color: #9ca3af; font-size:1.1rem; font-weight:500;">(2025.02 – 2025.05)</span></h4>
            <div style="color:#fff; font-size:1.08rem; font-weight:600;">VisAnatomy: <span style='color:#ffe14d;'>D3.js 기반 주석 인터페이스 개발</span></div>
            <div style="color:#fff; font-size:1.08rem; font-weight:600;">SVG/JSON 연동 및 실시간 시각화 처리</div>
          </div>
          <div class="resume-card timeline-card">
            <div class="timeline-dot"></div>
            <h4 style="font-size: 1.3rem; color: #60a5fa; font-weight: 800; margin:0;">안국엔지니어링 <span style="color: #9ca3af; font-size:1.1rem; font-weight:500;">(2024.06 – 2024.07)</span></h4>
            <div style="color:#fff; font-size:1.08rem; font-weight:600;">FDS, Pathfinder로 <span style='color:#ffe14d;'>화재 시뮬레이션 설계 및 해석</span></div>
          </div>
        </div>
        <!-- 프로젝트 타이틀 -->
        <h3 class="rounded-highlight" style="font-size: 2rem; color: #222; font-weight: 800; margin-bottom: 1.2rem; text-align:center; background:#ffe14d; display:block; margin-left:auto; margin-right:auto; width:max-content;">🚀 프로젝트</h3>
        <div class="resume-timeline-wrapper">
          <div class="resume-timeline-line"></div>
          <div class="resume-card timeline-card">
            <div class="timeline-dot"></div>
            <h4 style="font-size: 1.3rem; color: #60a5fa; font-weight: 800; margin:0;">🤖 AI 비서 <span class="timeline-stack">Python, OpenAI API</span></h4>
            <div style="color:#fff; font-size:1.08rem; font-weight:600;">Mac 제어 음성 어시스턴트</div>
            <div style="color:#bdbdbd; font-size:0.98rem;">OpenAI API를 활용한 자연어 명령 인식 및 실행</div>
          </div>
          <div class="resume-card timeline-card">
            <div class="timeline-dot"></div>
            <h4 style="font-size: 1.3rem; color: #60a5fa; font-weight: 800; margin:0;">⚙️ 웹사이트 크롤링 <span class="timeline-stack">Python, Docker, Airflow</span></h4>
            <div style="color:#fff; font-size:1.08rem; font-weight:600;">웹 크롤링 및 데이터 파이프라인 자동화</div>
            <div style="color:#bdbdbd; font-size:0.98rem; text-align:center; margin-top:1.1rem;">
              <a href="https://github.com/lukakas0213/Crawl_crack" class="link-badge github" target="_blank">GitHub</a>
            </div>
          </div>
          <div class="resume-card timeline-card">
            <div class="timeline-dot"></div>
            <h4 style="font-size: 1.3rem; color: #60a5fa; font-weight: 800; margin:0;">🧾 수강신청 자동화 <span class="timeline-stack">Python, Telegram API</span></h4>
            <div style="color:#fff; font-size:1.08rem; font-weight:600;">자리 추적 + 텔레그램 알림</div>
            <div style="color:#bdbdbd; font-size:0.98rem; text-align:center; margin-top:1.1rem;">
              <a href="https://github.com/lukakas0213/CourseCrawl" class="link-badge github" target="_blank">GitHub</a>
            </div>
          </div>
          <div class="resume-card timeline-card">
            <div class="timeline-dot"></div>
            <h4 style="font-size: 1.3rem; color: #60a5fa; font-weight: 800; margin:0;">📊 이직 예측 <span class="timeline-stack">Python, ML</span></h4>
            <div style="color:#fff; font-size:1.08rem; font-weight:600;">머신러닝 기반 HR 분석</div>
            <div style="color:#bdbdbd; font-size:0.98rem; text-align:center; margin-top:1.1rem;">
              <a href="https://lukakas0213.github.io/Whos_leaving_next_320_group_project/Whos_leaving_next.html" class="link-badge view" target="_blank">View</a>
            </div>
          </div>
          <div class="resume-card timeline-card">
            <div class="timeline-dot"></div>
            <h4 style="font-size: 1.3rem; color: #60a5fa; font-weight: 800; margin:0;">💻 Submit Server 시뮬레이터 <span class="timeline-stack">Java</span></h4>
            <div style="color:#fff; font-size:1.08rem; font-weight:600;">병렬 처리 기반 자바 백엔드</div>
            <div style="color:#bdbdbd; font-size:0.98rem; text-align:center; margin-top:1.1rem;">
              <a href="https://github.com/lukakas0213/submit_server" class="link-badge github" target="_blank">GitHub</a>
            </div>
          </div>
          <div class="resume-card timeline-card">
            <div class="timeline-dot"></div>
            <h4 style="font-size: 1.3rem; color: #60a5fa; font-weight: 800; margin:0;">🛴 음주운전 방지 킥보드 <span class="timeline-stack">Arduino, C</span></h4>
            <div style="color:#fff; font-size:1.08rem; font-weight:600;">음주 감지 + QR 잠금 시스템</div>
            <div style="color:#bdbdbd; font-size:0.98rem; text-align:center; margin-top:1.1rem;">
              <a href="https://docs.google.com/document/d/1wqY3j8sCIIbds-Tg3b-p1gN6T8qoCAgqYc1Ye7YWynE/edit?tab=t.0" class="link-badge docs" target="_blank">Docs</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <style>
      .resume-card {
        padding: 2rem;
        border-radius: 1.25rem;
        transition: transform 0.3s ease;
        backdrop-filter: blur(10px);
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255,255,255,0.08);
        box-shadow: 0 8px 20px rgba(0,0,0,0.2);
      }
      .resume-card:hover {
        transform: translateY(-6px);
        box-shadow: 0 12px 24px rgba(0,0,0,0.25);
      }
      .resume-card h3, .resume-card h4 {
        font-size: 1.3rem;
        margin-bottom: 1rem;
        color: #f9fafb;
      }
      .resume-timeline-wrapper {
        position: relative;
        padding-left: 2rem;
      }
      .resume-timeline-line {
        position: absolute;
        top: 0;
        left: 0.8rem;
        bottom: 0;
        width: 2px;
        background: linear-gradient(to bottom, #ffe14d, transparent);
      }
      .timeline-card {
        position: relative;
        padding-left: 2.5rem;
        border-radius: 1.25rem;
        transition: transform 0.3s ease;
        backdrop-filter: blur(10px);
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255,255,255,0.08);
        box-shadow: 0 8px 20px rgba(0,0,0,0.2);
      }
      .timeline-card:hover {
        transform: translateY(-6px);
        box-shadow: 0 12px 24px rgba(0,0,0,0.25);
      }
      .timeline-dot {
        position: absolute;
        top: 0.6rem;
        left: 0;
        width: 1rem;
        height: 1rem;
        background: #ffe14d;
        border-radius: 50%;
        border: 2px solid #222;
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
      }
      .timeline-stack {
        background:#ffe14d;
        color:#222;
        font-size:0.95rem;
        font-weight:700;
        border-radius:0.6em;
        padding:0.2em 0.8em;
        margin-left:0.5em;
      }
    </style>
  `;
});

document.getElementById('boardMenu').addEventListener('click', function() {
  document.getElementById('aboutContent').innerHTML = `
    <h1>Working on it</h1>
  `;
});