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
    secProjects: '프로젝트',
    secExperience: '경력',
    secSkills: '학력 · 기술',
    statExp: '경력',
    statProj: '프로젝트',
    statClass: '졸업 예정',
    inProgress: '진행 중',
    boardSoon: '게시판은<br>준비 중이에요.',
    nowOrg: '대한민국 육군',
    nowRole: '소프트웨어 개발병',
  },
  en: {
    mission: 'Turning <mark>data</mark> into insight,<br>and tech into <mark class="y">better days</mark>.',
    memojiAlt: 'Donghyeok Park memoji',
    copyEmail: 'Copy email address',
    copied: (email) => `Copied ${email}`,
    secProjects: '',
    secExperience: '',
    secSkills: '',
    statExp: 'Roles',
    statProj: 'Projects',
    statClass: 'Expected',
    inProgress: 'In progress',
    boardSoon: 'The board is<br>coming soon.',
    nowOrg: 'ROK Army',
    nowRole: 'Software Developer',
  },
};

const experience = [
  {
    period: { ko: '2026.03 – 현재', en: '2026.03 – Present' },
    org: { ko: '대한민국 육군', en: 'Republic of Korea Army' },
    role: { ko: '소프트웨어 개발병', en: 'Software Developer' },
  },
  {
    period: '2025.08 – 2025.11',
    org: { ko: '카카오모빌리티', en: 'Kakao Mobility' },
    role: { ko: 'AI R&D팀 인턴', en: 'AI R&D Team Intern' },
    desc: {
      ko: 'Spring Boot 기반 모니터링 통합 서버와 Prometheus 메트릭·로그 수집 Python 라이브러리 개발',
      en: 'Built a Spring Boot monitoring hub and a Python library that ships Prometheus metrics and logs',
    },
  },
  {
    period: '2025.02 – 2025.05', href: 'https://hdi.cs.umd.edu/',
    org: { ko: 'Human Data Interaction Lab', en: 'Human Data Interaction Lab' },
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

// 링크가 있으면 카드 전체가 새 탭 링크, 없으면 일반 타일
function item({ period, title, desc, role, href, cls = '', badge = '' }) {
  const tag = href ? 'a' : 'div';
  const attrs = href ? ` href="${href}" target="_blank" rel="noopener"` : '';
  const corner = href ? `<span class="arrow-btn sm">${ICONS.arrow}</span>` : badge;
  return `
    <${tag} class="tile item ${cls}"${attrs}>
      <div class="top"><span class="period">${t(period)}</span>${corner}</div>
      <div>
        <h3>${t(title)}</h3>
        ${role ? `<div class="role">${t(role)}</div>` : ''}
        ${desc ? `<p>${t(desc)}</p>` : ''}
      </div>
    </${tag}>`;
}

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

      <div class="tile mint stack-tile now t-n">
        <div class="top"><span class="dot"></span>Now</div>
        <div><h3>${L.nowOrg}</h3><div class="role">${L.nowRole}</div></div>
      </div>

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
      <div class="resume-head">
        <div class="tile t-title">
          <span class="label">University of Maryland · Computer Science</span>
          <div class="word">Resume</div>
        </div>
        <button class="tile lilac stat" data-scroll="skills">
          <span class="label">Class of</span>
          <div><div class="num">2027</div><div class="sub">${L.statClass}</div></div>
        </button>
        <button class="tile stat" data-scroll="experience">
          <span class="label">Experience</span>
          <div><div class="num">${experience.length}</div><div class="sub">${L.statExp}</div></div>
        </button>
        <button class="tile yellow stat" data-scroll="projects">
          <span class="label">Projects</span>
          <div><div class="num">${projects.length + 1}</div><div class="sub">${L.statProj}</div></div>
        </button>
      </div>

      <h2 class="section-title" id="skills">Education &amp; Skills <small>${L.secSkills}</small></h2>
      <div class="cards-3 edu-grid">
        ${item({ period: '2023 – 2027.05', title: 'University of Maryland', desc: 'B.S. Computer Science', cls: 'lilac' })}
        <div class="tile item">
          <div class="skills">
            ${skills.map(([k, v]) => `<div><span>${k}</span><strong>${v}</strong></div>`).join('')}
          </div>
        </div>
      </div>

      <h2 class="section-title" id="experience">Experience <small>${L.secExperience}</small></h2>
      <div class="cards-2">
        ${experience.map((e) => item({ ...e, title: e.org })).join('')}
      </div>

      <h2 class="section-title" id="projects">Projects <small>${L.secProjects}</small></h2>
      <div class="cards-3">
        ${item({ ...featured, period: 'Featured', cls: 'yellow', badge: `<span class="pill">${L.inProgress}</span>` })}
        ${projects.map((p) => item(p)).join('')}
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

  const target = e.target.closest('[data-scroll]');
  if (target) document.getElementById(target.dataset.scroll)?.scrollIntoView({ behavior: 'smooth' });

  if (e.target.closest('[data-copy-email]')) copyEmail();
});

setLang(lang);
