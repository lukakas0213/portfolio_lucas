const EMAIL = 'dpark021@umd.edu';
const MEMOJI = 'sources/aboutMe/Namecard/namecard memoji.png';

const ICONS = {
  github: '<svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/></svg>',
  linkedin: '<svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75Zm6.5 0h3.8v1.54h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.02c0-1.2-.02-2.74-1.67-2.74-1.67 0-1.93 1.3-1.93 2.65V21h-4V9.75Z"/></svg>',
  mail: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="m4 7 8 6 8-6"/></svg>',
  arrow: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg>',
};

const I18N = {
  ko: {
    mission: '데이터를 <mark>인사이트</mark>로,<br>기술로 일상을 <mark class="y">더 낫게</mark>.',
    memojiAlt: '박동혁 미모지',
    copyEmail: '이메일 주소 복사',
    copied: (email) => `${email} 복사됨`,
    githubMore: 'GitHub에서 더 보기',
    inProgress: '진행 중',
    boardSoon: '게시판은<br>준비 중이에요.',
  },
  en: {
    mission: 'Turning <mark>data</mark> into insight,<br>and tech into <mark class="y">better days</mark>.',
    memojiAlt: 'Donghyeok Park memoji',
    copyEmail: 'Copy email address',
    copied: (email) => `Copied ${email}`,
    githubMore: 'More on GitHub',
    inProgress: 'In progress',
    boardSoon: 'The board is<br>coming soon.',
  },
};

const experience = [
  {
    period: { ko: '2026.03 – 현재', en: '2026.03 – Present' },
    org: { ko: '대한민국 육군', en: 'Republic of Korea Army' },
    short: { ko: '대한민국 육군', en: 'ROK Army' },
    role: { ko: '소프트웨어 개발병', en: 'Software Developer' },
  },
  {
    period: '2025.08 – 2025.11',
    org: { ko: '카카오모빌리티', en: 'Kakao Mobility' },
    role: { ko: 'AI R&D팀 인턴', en: 'AI R&D Team Intern' },
    desc: {
      ko: '모니터링 통합 서버 · Python 모니터링 라이브러리 개발',
      en: 'Monitoring hub server · Python monitoring library',
    },
  },
  {
    period: '2025.02 – 2025.05', href: 'https://hdi.cs.umd.edu/',
    org: { ko: 'Human Data Interaction Lab', en: 'Human Data Interaction Lab' },
    short: 'HDI Lab',
    role: { ko: '학부 연구생 · UMD', en: 'Undergraduate Researcher · UMD' },
    desc: { ko: '데이터 시각화 구조 분석 웹 툴 VisAnatomy 개발', en: 'Built VisAnatomy, a web tool for analyzing visualization structure' },
  },
  {
    period: '2024.06 – 2024.07',
    org: { ko: '안국엔지니어링', en: 'Anguk Engineering' },
    role: { ko: '엔지니어 인턴', en: 'Engineering Intern' },
    desc: { ko: 'FDS, Pathfinder로 화재 확산 및 대피 경로 시뮬레이션', en: 'Simulated fire spread and evacuation routes with FDS and Pathfinder' },
  },
];

const featured = {
  title: { ko: 'AI 비서', en: 'AI Assistant' },
  desc: { ko: '음성으로 Mac을 제어하는 AI 어시스턴트', en: 'Voice-controlled AI assistant for macOS' },
};

const projects = [
  {
    period: '2025.05', href: 'https://lukakas0213.github.io/Whos_leaving_next_320_group_project/Whos_leaving_next.html',
    title: { ko: "Who's Leaving Next?", en: "Who's Leaving Next?" },
    desc: { ko: '머신러닝 기반 직원 이직 예측', en: 'Predicting employee attrition with machine learning' },
  },
  {
    period: '2024.12', href: 'https://github.com/lukakas0213/CourseCrawl',
    title: { ko: '수강신청 자동화', en: 'Course Registration Bot' },
    desc: { ko: '빈자리 감지 + 텔레그램 알림', en: 'Detects open seats and sends Telegram alerts' },
  },
  {
    period: '', href: 'https://github.com/lukakas0213/Crawl_crack',
    title: { ko: '웹사이트 크롤링', en: 'Web Crawler' },
    desc: { ko: '크롤링 데이터 파이프라인 자동화', en: 'Automated crawling data pipeline' },
  },
  {
    period: '2023.05', href: 'https://github.com/lukakas0213/submit_server',
    title: { ko: 'Submit Server 시뮬레이터', en: 'Submit Server Simulator' },
    desc: { ko: 'Java 병렬 처리 제출 서버', en: 'Concurrent submission server in Java' },
  },
  {
    period: '2022.04', href: 'https://docs.google.com/document/d/1wqY3j8sCIIbds-Tg3b-p1gN6T8qoCAgqYc1Ye7YWynE/edit?tab=t.0',
    title: { ko: '음주운전 방지 킥보드', en: 'Anti Drunk-Riding Scooter' },
    desc: { ko: '알코올 감지 QR 잠금 시스템', en: 'Alcohol sensor with a QR lock system' },
  },
];

const skills = [
  ['Languages', 'Java, Python, JavaScript, C, Kotlin'],
  ['Frameworks', 'Spring Boot, Django, PyTorch, TensorFlow, D3.js'],
  ['Tools', 'Git, Docker, Airflow, Firebase, Arduino'],
];

let lang = 'ko';
try {
  lang = localStorage.getItem('lang') || (navigator.language.startsWith('ko') ? 'ko' : 'en');
} catch {
  lang = navigator.language.startsWith('ko') ? 'ko' : 'en';
}
if (!I18N[lang]) lang = 'ko';

const t = (value) => (value && typeof value === 'object' ? value[lang] : value);

// 같은 해 기간은 '2025.08 – 11'처럼 줄여서 표시
const shortPeriod = (period) => t(period).replace(/(\d{4})\.(\d{2}) – \1\.(\d{2})/, '$1.$2 – $3');

// About의 Now 타일: 가장 최근 경력 + 이전 경력 미니 타임라인
function nowTile() {
  const [current, ...previous] = experience;
  return `
    <div class="tile mint stack-tile now t-n">
      <div class="top">
        <span class="badge"><span class="dot"></span>Now</span>
        <span class="when">${shortPeriod(current.period)}</span>
      </div>
      <div class="current"><strong>${t(current.short || current.org)}</strong><span>${t(current.role)}</span></div>
      <ul class="now-list">
        ${previous.map((e) => `<li><b>${t(e.short || e.org)}</b><small>${shortPeriod(e.period)}</small></li>`).join('')}
      </ul>
    </div>`;
}

// 글자 폭(한글 ≈ 1em, 영문 ≈ 0.6em)을 어림해서 타일 폭 안에 들어가는 글자 크기(cqi) 계산
function fitSize(text, budget, max) {
  const em = [...text].reduce((sum, ch) => sum + (/[ㄱ-힝]/.test(ch) ? 0.98 : ch === ' ' ? 0.3 : 0.62), 0);
  return `${Math.min(max, budget / em).toFixed(2)}cqi`;
}

// Resume 경력 줄: 회사 이름을 크게, 오른쪽에 역할 · 기간 · 한 줄 설명
function expRow(e, i) {
  const name = t(e.short || e.org);
  const tag = e.href ? 'a' : 'div';
  const attrs = e.href ? ` href="${e.href}" target="_blank" rel="noopener"` : '';
  return `
    <${tag} class="tile exp-row c${i % 4}"${attrs}>
      ${i === 0 ? '<div class="exp-now"><span class="dot"></span>Now</div>' : ''}
      <div class="exp-name" style="--nd: ${fitSize(name, 54, 9)}; --nm: ${fitSize(name, 88, 15)}">${name}</div>
      <div class="exp-info">
        <span class="exp-period">${t(e.period)}</span>
        <strong>${t(e.role)}</strong>
        ${e.desc ? `<span class="desc">${t(e.desc)}</span>` : ''}
      </div>
    </${tag}>`;
}

function projTile(p, i) {
  return `
    <a class="tile proj p${i + 1}" href="${p.href}" target="_blank" rel="noopener">
      <div class="top"><span class="period">${p.period}</span><span class="arrow-btn sm">${ICONS.arrow}</span></div>
      <div><h3>${t(p.title)}</h3><p>${t(p.desc)}</p></div>
    </a>`;
}

// Resume 섹션 레일: 섹션 이름만
const rail = (title) => `<div class="rail"><h2>${title}</h2></div>`;

const views = {
  about: (L) => `
    <section class="bento">
      <div class="tile t-h1">
        <div class="info">
          <strong>University of Maryland</strong>
          <span>Computer Science · Class of 2027</span>
        </div>
        <div class="word">Software</div>
      </div>
      <div class="tile yellow t-h2"><div class="word">Engineer</div></div>

      <div class="tile lilac t-p">
        <div class="name">Donghyeok<br>Park</div>
        <img src="${MEMOJI}" alt="${L.memojiAlt}">
      </div>

      ${nowTile()}

      <button class="tile dark stack-tile resume-cta t-r" data-go="resume">
        <div class="top"><span class="arrow-btn">${ICONS.arrow}</span></div>
        <h3>Resume</h3>
      </button>

      <div class="tile t-l">
        <p class="mission">${L.mission}</p>
      </div>

      <div class="t-c">
        <a class="tile dark contact" href="https://github.com/lukakas0213" target="_blank" rel="noopener">
          <span class="c-icon">${ICONS.github}</span>
          <span class="c-arrow">${ICONS.arrow}</span>
          <span class="c-text"><strong>GitHub</strong><span>@lukakas0213</span></span>
        </a>
        <a class="tile linkedin contact" href="https://www.linkedin.com/in/donghyeok-park-13aa7a329/" target="_blank" rel="noopener">
          <span class="c-icon">${ICONS.linkedin}</span>
          <span class="c-arrow">${ICONS.arrow}</span>
          <span class="c-text"><strong>LinkedIn</strong><span>Donghyeok Park</span></span>
        </a>
        <button type="button" class="tile yellow contact" data-copy-email aria-label="${L.copyEmail}">
          <span class="c-icon">${ICONS.mail}</span>
          <span class="c-arrow">${ICONS.arrow}</span>
          <span class="c-text"><strong>Email</strong><span>${EMAIL}</span></span>
        </button>
      </div>
    </section>
  `,

  resume: (L) => `
    <section>
      <div class="sec sec-edu">
        ${rail('Education')}
        <div class="sec-body">
          <div class="edu-row">
            <div class="tile lilac edu">
              <div class="top"><span class="label">Education</span><span class="pill">2023 – 2027.05</span></div>
              <div><h3>University of Maryland</h3><p>B.S. Computer Science</p></div>
            </div>
            <div class="tile skills-tile">
              ${skills.map(([k, v]) => `<div><span>${k}</span><strong>${v}</strong></div>`).join('')}
            </div>
          </div>
        </div>
      </div>

      <div class="sec sec-exp">
        ${rail('Experience')}
        <div class="sec-body">
          <div class="exp-list">${experience.map(expRow).join('')}</div>
        </div>
      </div>

      <div class="sec sec-proj">
        ${rail('Projects')}
        <div class="sec-body">
          <div class="proj-bento">
            <div class="tile yellow proj-featured pf">
              <div class="top"><span class="label">Featured</span><span class="pill">${L.inProgress}</span></div>
              <div><h3>${t(featured.title)}</h3><p>${t(featured.desc)}</p></div>
            </div>
            ${projects.map((p, i) => projTile(p, i)).join('')}
            <a class="tile dark proj-gh gh" href="https://github.com/lukakas0213" target="_blank" rel="noopener">
              <div class="top">${ICONS.github}<span class="c-arrow">${ICONS.arrow}</span></div>
              <div><h3>${L.githubMore}</h3><span>@lukakas0213</span></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  `,

  board: (L) => `
    <section class="board">
      <div class="tile t-title">
        <span class="label">Donghyeok Park</span>
        <div class="word">Board</div>
      </div>
      <div class="tile mint board-empty">
        <div class="now"><div class="top"><span class="dot"></span>Soon</div></div>
        <p>${L.boardSoon}</p>
      </div>
    </section>
  `,
};

const content = document.getElementById('content');
const tabs = [...document.querySelectorAll('.tabs [data-tab]')];
const langButtons = [...document.querySelectorAll('.lang [data-lang]')];

function currentTab() {
  const name = location.hash.slice(1);
  return views[name] ? name : 'about';
}

function show(name, scroll) {
  if (!views[name]) name = 'about';
  content.innerHTML = views[name](I18N[lang]);
  tabs.forEach((tab) => tab.setAttribute('aria-selected', tab.dataset.tab === name));
  if (location.hash !== `#${name}`) history.replaceState(null, '', `#${name}`);
  if (scroll) window.scrollTo({ top: 0, behavior: 'smooth' });
}

function setLang(next) {
  lang = next;
  try {
    localStorage.setItem('lang', next);
  } catch {
    // 저장 불가 환경에서는 이번 방문 동안만 유지
  }
  document.documentElement.lang = next;
  langButtons.forEach((btn) => btn.setAttribute('aria-pressed', btn.dataset.lang === next));
  show(currentTab());
}

tabs.forEach((tab) => tab.addEventListener('click', () => show(tab.dataset.tab, true)));
langButtons.forEach((btn) => btn.addEventListener('click', () => setLang(btn.dataset.lang)));
window.addEventListener('hashchange', () => show(currentTab()));

const toast = document.getElementById('toast');
let toastTimer;

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(EMAIL);
    toast.textContent = I18N[lang].copied(EMAIL);
  } catch {
    toast.textContent = EMAIL;
  }
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
}

content.addEventListener('click', (e) => {
  const go = e.target.closest('[data-go]');
  if (go) show(go.dataset.go, true);

  if (e.target.closest('[data-copy-email]')) copyEmail();
});

setLang(lang);
