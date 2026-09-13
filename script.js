const EMAIL = 'dpark021@umd.edu';
const MEMOJI = 'sources/aboutMe/Namecard/namecard memoji.png';

const ICONS = {
  github: '<svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/></svg>',
  linkedin: '<svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75Zm6.5 0h3.8v1.54h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.02c0-1.2-.02-2.74-1.67-2.74-1.67 0-1.93 1.3-1.93 2.65V21h-4V9.75Z"/></svg>',
  mail: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="m4 7 8 6 8-6"/></svg>',
  arrow: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg>',
};

const experience = [
  { period: '2025.02 – 2025.05', org: 'Human Data Interaction Lab', role: '학부 연구생 · UMD', desc: '데이터 시각화 구조 분석 웹 툴 VisAnatomy 개발', href: 'https://hdi.cs.umd.edu/' },
  { period: '2024.06 – 2024.07', org: '안국엔지니어링', role: '엔지니어 인턴', desc: 'FDS, Pathfinder로 화재 확산 및 대피 경로 시뮬레이션' },
];

const projects = [
  { period: '2025.05', title: "Who's Leaving Next?", desc: '머신러닝 기반 직원 이직 예측', href: 'https://lukakas0213.github.io/Whos_leaving_next_320_group_project/Whos_leaving_next.html' },
  { period: '2024.12', title: '수강신청 자동화', desc: '빈자리 감지 + 텔레그램 알림', href: 'https://github.com/lukakas0213/CourseCrawl' },
  { period: '', title: '웹사이트 크롤링', desc: '크롤링 데이터 파이프라인 자동화', href: 'https://github.com/lukakas0213/Crawl_crack' },
  { period: '2023.05', title: 'Submit Server 시뮬레이터', desc: 'Java 병렬 처리 제출 서버', href: 'https://github.com/lukakas0213/submit_server' },
  { period: '2022.04', title: '음주운전 방지 킥보드', desc: '알코올 감지 QR 잠금 시스템', href: 'https://docs.google.com/document/d/1wqY3j8sCIIbds-Tg3b-p1gN6T8qoCAgqYc1Ye7YWynE/edit?tab=t.0' },
];

const skills = [
  ['Languages', 'Java, Python, JavaScript, C, Kotlin'],
  ['Frameworks', 'Spring Boot, Django, PyTorch, TensorFlow, D3.js'],
  ['Tools', 'Git, Docker, Airflow, Firebase, Arduino'],
];

// 링크가 있으면 카드 전체가 새 탭 링크, 없으면 일반 타일
function item({ period, title, desc, role, href, cls = '', badge = '' }) {
  const tag = href ? 'a' : 'div';
  const attrs = href ? ` href="${href}" target="_blank" rel="noopener"` : '';
  const corner = href ? `<span class="arrow-btn sm">${ICONS.arrow}</span>` : badge;
  return `
    <${tag} class="tile item ${cls}"${attrs}>
      <div class="top"><span class="period">${period}</span>${corner}</div>
      <div>
        <h3>${title}</h3>
        ${role ? `<div class="role">${role}</div>` : ''}
        <p>${desc}</p>
      </div>
    </${tag}>`;
}

const views = {
  about: () => `
    <section class="bento">
      <div class="tile t-h1">
        <span class="label">University of Maryland · Computer Science</span>
        <div class="word">Software</div>
      </div>
      <div class="tile yellow t-h2"><div class="word">Engineer</div></div>

      <div class="tile lilac t-p">
        <div class="name">Donghyeok<br>Park</div>
        <img src="${MEMOJI}" alt="박동혁 미모지">
      </div>

      <a class="tile mint stack-tile now t-n" href="https://hdi.cs.umd.edu/" target="_blank" rel="noopener">
        <div class="top"><span class="dot"></span>Now</div>
        <h3>HDI Lab</h3>
      </a>

      <button class="tile dark stack-tile resume-cta t-r" data-go="resume">
        <div class="top"><span class="arrow-btn">${ICONS.arrow}</span></div>
        <h3>Resume</h3>
      </button>

      <div class="tile t-l">
        <p class="mission">데이터를 <mark>인사이트</mark>로,<br>기술로 일상을 <mark class="y">더 낫게</mark>.</p>
      </div>

      <div class="tile stack-tile t-s">
        <span class="label">Tech Stack</span>
        <div class="tech">${['Java', 'Python', 'JS', 'C', 'HTML', 'CSS'].map((t) => `<span>${t}</span>`).join('')}</div>
      </div>

      <div class="tile stack-tile t-c">
        <span class="label">Contact</span>
        <div class="socials">
          <a href="https://github.com/lukakas0213" target="_blank" rel="noopener" aria-label="GitHub">${ICONS.github}</a>
          <a href="https://www.linkedin.com/in/donghyeok-park-13aa7a329/" target="_blank" rel="noopener" aria-label="LinkedIn">${ICONS.linkedin}</a>
          <button type="button" data-copy-email aria-label="이메일 주소 복사">${ICONS.mail}</button>
        </div>
      </div>
    </section>
  `,

  resume: () => `
    <section>
      <div class="resume-head">
        <div class="tile t-title">
          <span class="label">University of Maryland · Computer Science</span>
          <div class="word">Resume</div>
        </div>
        <button class="tile stat" data-scroll="experience">
          <span class="label">Experience</span>
          <div><div class="num">${experience.length}</div><div class="sub">경력</div></div>
        </button>
        <button class="tile yellow stat" data-scroll="projects">
          <span class="label">Projects</span>
          <div><div class="num">${projects.length + 1}</div><div class="sub">프로젝트</div></div>
        </button>
        <button class="tile lilac stat" data-scroll="skills">
          <span class="label">Class of</span>
          <div><div class="num">2027</div><div class="sub">졸업 예정</div></div>
        </button>
      </div>

      <h2 class="section-title" id="projects">Projects <small>프로젝트</small></h2>
      <div class="cards-3">
        ${item({ period: 'Featured', title: 'AI 비서', desc: '음성으로 Mac을 제어하는 AI 어시스턴트', cls: 'yellow', badge: '<span class="pill">진행 중</span>' })}
        ${projects.map((p) => item(p)).join('')}
      </div>

      <h2 class="section-title" id="experience">Experience <small>경력</small></h2>
      <div class="cards-2">
        ${experience.map((e) => item({ ...e, title: e.org })).join('')}
      </div>

      <h2 class="section-title" id="skills">Education &amp; Skills <small>학력 · 기술</small></h2>
      <div class="cards-3 edu-grid">
        ${item({ period: '2023 – 2027.05', title: 'University of Maryland', desc: 'B.S. Computer Science', cls: 'lilac' })}
        <div class="tile item">
          <div class="skills">
            ${skills.map(([k, v]) => `<div><span>${k}</span><strong>${v}</strong></div>`).join('')}
          </div>
        </div>
      </div>
    </section>
  `,

  board: () => `
    <section class="board">
      <div class="tile t-title">
        <span class="label">Donghyeok Park</span>
        <div class="word">Board</div>
      </div>
      <div class="tile mint board-empty">
        <div class="now"><div class="top"><span class="dot"></span>Soon</div></div>
        <p>게시판은<br>준비 중이에요.</p>
      </div>
    </section>
  `,
};

const content = document.getElementById('content');
const tabs = [...document.querySelectorAll('.tabs [data-tab]')];

function show(name, scroll) {
  if (!views[name]) name = 'about';
  content.innerHTML = views[name]();
  tabs.forEach((tab) => tab.setAttribute('aria-selected', tab.dataset.tab === name));
  if (location.hash !== `#${name}`) history.replaceState(null, '', `#${name}`);
  if (scroll) window.scrollTo({ top: 0, behavior: 'smooth' });
}

tabs.forEach((tab) => tab.addEventListener('click', () => show(tab.dataset.tab, true)));
window.addEventListener('hashchange', () => show(location.hash.slice(1)));

const toast = document.getElementById('toast');
let toastTimer;

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(EMAIL);
    toast.textContent = `${EMAIL} 복사됨`;
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

show(location.hash.slice(1));
