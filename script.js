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
    mission: '<mark>아이디어</mark>를<br><mark class="y">코드</mark>로.',
    name: '박동혁',
    nameCard: '박동혁',
    memojiAlt: '박동혁 미모지',
    copyEmail: '이메일 주소 복사',
    copied: (email) => `${email} 복사됨`,
    githubMore: 'GitHub에서 더 보기',
    inProgress: '진행 중',
    privateRepo: '비공개 저장소',
    back: 'Resume로 돌아가기',
    secOverview: '개요',
    secScreens: '화면',
    secArchitecture: '구조와 기술',
    secStrategy: '투자 전략과 평가',
    openImage: '크게 보기',
    boardSoon: '게시판은<br>준비 중이에요.',
  },
  en: {
    mission: 'Turning <mark>ideas</mark><br>into <mark class="y">code</mark>.',
    name: 'Donghyeok (Lucas) Park',
    nameCard: 'Donghyeok<br>(Lucas) Park',
    memojiAlt: 'Donghyeok (Lucas) Park memoji',
    copyEmail: 'Copy email address',
    copied: (email) => `Copied ${email}`,
    githubMore: 'More on GitHub',
    inProgress: 'In progress',
    privateRepo: 'Private repo',
    back: 'Back to Resume',
    secOverview: 'Overview',
    secScreens: 'Screens',
    secArchitecture: 'Architecture',
    secStrategy: 'Strategy',
    openImage: 'Open full size',
    boardSoon: 'The board is<br>coming soon.',
  },
};

const experience = [
  {
    period: { ko: '2026.03 – 현재', en: '2026.03 – Present' },
    org: { ko: '대한민국 육군', en: 'Republic of Korea Army' },
    short: { ko: '대한민국 육군', en: 'ROK Army' },
    role: { ko: '소프트웨어 개발병', en: 'Software Engineer' },
    desc: { ko: '정보체계관리단', en: 'Information Systems Management Group' },
    theme: 'army',
  },
  {
    period: '2025.11 – 2026.01',
    org: { ko: '오히메 (아우라제이)', en: 'Ohime (Aura J)' },
    short: { ko: '오히메', en: 'Ohime' },
    role: { ko: '소프트웨어 엔지니어', en: 'Software Engineer' },
    desc: { ko: '쇼핑몰 정산 자동화 개발', en: 'Built shopping mall settlement automation' },
    theme: 'ohime', logo: { src: 'sources/logos/ohime-logo.png', alt: 'OHIME', h: 18 },
  },
  {
    period: '2025.08 – 2025.11',
    org: { ko: '카카오모빌리티', en: 'Kakao Mobility' },
    role: { ko: 'AI R&D팀 인턴', en: 'AI R&D Team Intern' },
    theme: 'kakao',
    desc: {
      ko: '모니터링 통합 서버 · Python 모니터링 라이브러리 개발',
      en: 'Monitoring hub server · Python monitoring library',
    },
  },
  {
    period: '2025.02 – 2025.05', href: 'https://hdi.cs.umd.edu/',
    org: { ko: 'Human Data Interaction Lab', en: 'Human Data Interaction Lab' },
    short: 'HDI Lab',
    theme: 'hdi', logo: { src: 'sources/logos/hdi-logo.webp', alt: 'Human-Data Interaction Group', h: 34 },
    role: { ko: '학부 연구생 · UMD', en: 'Undergraduate Researcher · UMD' },
    desc: { ko: '데이터 시각화 구조 분석 웹 툴 VisAnatomy 개발', en: 'Built VisAnatomy, a web tool for analyzing visualization structure' },
  },
  {
    period: '2024.06 – 2024.07',
    org: { ko: '안국엔지니어링', en: 'Ankug Engineering' },
    theme: 'ankug', logo: { src: 'sources/logos/ankug-white.svg', alt: 'Ankug Engineering', h: 28 },
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
    period: { ko: '2026.06 ~', en: '2026.06 ~' },
    detail: '#quant',
    title: { ko: '퀀트 자동매매 에이전트', en: 'Quant Trading Agent' },
    desc: { ko: 'LangGraph 매매 파이프라인 · FastAPI 백엔드 · Next.js 대시보드', en: 'LangGraph trading pipeline, FastAPI backend and Next.js dashboard' },
  },
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

// 퀀트 자동매매 에이전트 상세 페이지 (노션 소개 문서 기반)
const QUANT = {
  repo: 'agent-pay-for-urself2',
  title: { ko: '퀀트 자동매매 에이전트', en: 'Quant Trading Agent' },
  summary: {
    ko: '종목 탐색부터 평가, 주문, 결과 확인까지 연결한 주식 자동매매 프로젝트',
    en: 'An automated stock trading project that connects discovery, evaluation, ordering and result tracking',
  },
  meta: [
    { ko: '2인 프로젝트', en: 'Team of 2' },
    { ko: '한국·미국 주식 및 ETF', en: 'KR & US stocks and ETFs' },
    { ko: '비공개 저장소', en: 'Private repo' },
  ],
  stack: ['Python', 'FastAPI', 'LangGraph', 'PostgreSQL', 'Next.js'],
  flow: {
    ko: ['종목 발굴', '차트·뉴스·재무 평가', '매매 판단', '리스크 확인', '주문', '결과 기록'],
    en: ['Discovery', 'Chart · news · financials', 'Trade decision', 'Risk check', 'Order', 'Record results'],
  },
  overview: {
    ko: '주식 투자에서는 후보 종목을 찾고, 가격·뉴스·재무 정보를 비교한 뒤, 계좌 상황에 맞춰 매매 여부를 결정해야 합니다. 이 프로젝트는 그 과정을 자동화하면서도 사람이 판단 근거와 운영 상태를 확인할 수 있도록 만들었습니다.',
    en: 'Investing means finding candidates, comparing price, news and financial data, and deciding whether to trade based on the account. This project automates that process while keeping the reasoning and operating status visible to people.',
  },
  screens: [
    { file: 'home', ko: ['홈', '계좌 현황과 보유 종목, 관심 종목, 최근 분석 결과를 먼저 확인합니다.'], en: ['Home', 'Account summary, holdings, watchlist and recent analysis at a glance.'] },
    { file: 'detail', ko: ['종목 상세', '종합 평가와 매매 판단을 차트·퀀트·재무·뉴스 탭으로 나누어 확인합니다.'], en: ['Stock detail', 'Overall score and trade decision, split into chart, quant, financials and news tabs.'] },
    { file: 'chart', ko: ['차트', '가격 흐름, 이동평균선, 거래량, 보조지표와 손절 기준을 함께 봅니다.'], en: ['Chart', 'Price, moving averages, volume, indicators and stop-loss levels together.'] },
    { file: 'quant', ko: ['퀀트', '모멘텀, 추세, RSI, MACD, 거래량 등 후보로 선정된 근거를 수치로 확인합니다.'], en: ['Quant', 'Momentum, trend, RSI, MACD and volume behind each candidate.'] },
    { file: 'financials', ko: ['재무제표', '수익성, 성장성, 재무 건전성, 밸류에이션 점수와 주요 수치를 봅니다.'], en: ['Financials', 'Profitability, growth, financial health and valuation with key figures.'] },
    { file: 'news', ko: ['뉴스', '수집한 기사의 감성·위험도 분석을 종합 평가의 한 요소로 사용합니다.'], en: ['News', 'Sentiment and risk analysis of collected articles, used as one input.'] },
    { file: 'report', ko: ['리포트', '실행 결과와 전략 평가 내용을 다시 점검합니다.'], en: ['Report', 'Review run results and strategy evaluation.'] },
    { file: 'system', ko: ['시스템', '파이프라인과 외부 서비스 상태를 운영 관점에서 점검합니다.'], en: ['System', 'Check pipeline and external service health.'] },
  ],
  architectureNote: {
    ko: '매매 파이프라인은 종목 발굴 → 필터링 → 매매 판단 → 주문 → 결과 보고 순서로 실행하고 각 단계 결과를 저장해, 주문이 어떤 데이터와 판단을 거쳤는지 추적할 수 있습니다. 정기 분석과 손절·주문 상태 점검은 별도 작업으로 분리해, 분석에 오류가 생겨도 보유 종목의 위험 점검은 멈추지 않도록 했습니다.',
    en: 'The pipeline runs discovery → filtering → decision → order → report and stores every step, so each order can be traced back to its data and reasoning. Scheduled analysis and stop-loss/order checks run as separate jobs, so a failed analysis never stops risk checks on holdings.',
  },
  architecture: {
    head: { ko: ['구성', '역할', '주요 기술'], en: ['Part', 'Role', 'Tech'] },
    rows: {
      ko: [['운영 화면', '계좌·종목·리포트 표시', 'Next.js, React, TypeScript'], ['백엔드', '인증과 계좌·주문·분석 API', 'FastAPI, SQLAlchemy'], ['매매 파이프라인', '후보 발굴, 평가, 주문, 감시', 'LangGraph, APScheduler'], ['데이터 저장', '가격, 뉴스, 점수, 주문 기록', 'PostgreSQL'], ['외부 연동', '증권사 계좌·주문과 뉴스·시세 수집', 'KIS, Toss, Finnhub 등']],
      en: [['Console', 'Accounts, stocks and reports', 'Next.js, React, TypeScript'], ['Backend', 'Auth, account, order and analysis APIs', 'FastAPI, SQLAlchemy'], ['Trading pipeline', 'Discovery, evaluation, orders, monitoring', 'LangGraph, APScheduler'], ['Storage', 'Prices, news, scores, order history', 'PostgreSQL'], ['Integrations', 'Broker accounts & orders, news and quotes', 'KIS, Toss, Finnhub, etc.']],
    },
  },
  strategyNote: {
    ko: '가격·거래량과 모멘텀으로 후보를 고른 뒤 차트, 뉴스, 재무를 각각 평가해 종합점수를 만들고, 점수와 보유 상태에 따라 매수·추가매수·보유·매도를 판단합니다. AI는 뉴스 분류와 분석 설명에 활용하지만, 실제 주문은 점수와 리스크 규칙을 통과해야 실행됩니다.',
    en: 'Candidates are picked by price, volume and momentum, then chart, news and financials are scored into an overall score that drives buy, add, hold or sell decisions. AI is used for news classification and explanations, but orders only run when scores and risk rules pass.',
  },
  strategy: {
    head: { ko: ['평가 영역', '확인하는 내용'], en: ['Area', 'What it checks'] },
    rows: {
      ko: [['차트·퀀트', '추세, 모멘텀, RSI, 거래량, 변동성'], ['뉴스', '기사 감성, 위험 이벤트, 신뢰도와 최신성'], ['재무', '수익성, 성장성, 건전성, 밸류에이션'], ['리스크', '종목 비중, 일일 손실, 거래 횟수, 손절 기준']],
      en: [['Chart · quant', 'Trend, momentum, RSI, volume, volatility'], ['News', 'Sentiment, risk events, credibility, recency'], ['Financials', 'Profitability, growth, health, valuation'], ['Risk', 'Position size, daily loss, trade count, stop-loss']],
    },
  },
  limit: {
    ko: 'AI 분석을 활용하면서도 매매 판단과 주문을 확인 가능한 규칙 안에서 실행하도록 설계했습니다. 백테스트는 예비 결과이며 향후 성과를 보장하지 않습니다.',
    en: 'Designed so AI assists analysis while decisions and orders run inside verifiable rules. Backtests are preliminary and do not guarantee future performance.',
  },
};

const skills = [
  ['Languages', 'Python, TypeScript, JavaScript, Java, C'],
  ['Frameworks', 'FastAPI, LangGraph, Next.js, React, SQLAlchemy, D3.js'],
  ['Tools', 'Git, Docker, PostgreSQL, Airflow, Playwright, Selenium'],
];

// 항상 영어로 시작, KO/EN 선택은 저장하지 않음
let lang = 'en';

const t = (value) => (value && typeof value === 'object' ? value[lang] : value);

// 같은 해 기간은 '2025.08 – 11'처럼 줄여서 표시
const shortPeriod = (period) => t(period).replace(/(\d{4})\.(\d{2}) – \1\.(\d{2})/, '$1.$2 – $3');

// About의 Now 타일: 세로 타임라인 하나 (맨 위가 지금, 아래로 갈수록 과거)
function nowTile() {
  const [current, ...previous] = experience;
  const yy = (e) => shortPeriod(e.period).replace(/\b20(\d{2})\./g, '$1.');
  return `
    <div class="tile now t-n">
      <ul class="now-rail">
        <li class="is-now"><b>${t(current.short || current.org)}</b><time>${lang === 'ko' ? '현재' : 'Now'}</time><span>${t(current.role)}</span></li>
        ${previous.map((e) => `<li><b>${t(e.short || e.org)}</b><time>${yy(e)}</time></li>`).join('')}
      </ul>
    </div>`;
}

// 글자 폭(한글 ≈ 1em, 영문 ≈ 0.6em)을 어림해서 타일 폭 안에 들어가는 글자 크기(cqi) 계산
function fitSize(text, budget, max) {
  const em = [...text].reduce((sum, ch) => sum + (/[ㄱ-힝]/.test(ch) ? 0.98 : ch === ' ' ? 0.3 : 0.62), 0);
  return `${Math.min(max, budget / em).toFixed(2)}cqi`;
}

// 카카오모빌리티 앱 아이콘
const APPS = [
  { src: 'sources/logos/kakaot-app.webp', alt: '카카오 T' },
  { src: 'sources/logos/kakaonavi-app.webp', alt: '카카오내비' },
  { src: 'sources/logos/kakaomap-app.webp', alt: '카카오맵' },
];

// 테마별 배경: 육군은 위장무늬, 나머지는 각 브랜드 컬러만
const TAXI = '<svg class="taxi" viewBox="0 0 100 100" aria-hidden="true"><rect x="42" y="14" width="16" height="10" rx="3" fill="#fff" stroke="#191919" stroke-width="3"/><path d="M24 46 L33 28 H67 L76 46Z" fill="#191919"/><rect x="8" y="44" width="84" height="30" rx="11" fill="#191919"/><path d="M35 44 L40 33 H48 V44Z M52 44 V33 H60 L65 44Z" fill="#fee500"/><rect x="80" y="52" width="9" height="7" rx="3" fill="#fee500"/><circle cx="28" cy="76" r="10" fill="#191919" stroke="#fff" stroke-width="4"/><circle cx="72" cy="76" r="10" fill="#191919" stroke="#fff" stroke-width="4"/></svg>';

const ROUTE = '<svg class="pat" viewBox="0 0 1000 210" preserveAspectRatio="none"><path d="M-10 170 C 180 170, 220 60, 420 80 S 700 190, 1010 40" stroke="#191919" stroke-width="4" stroke-dasharray="2 14" stroke-linecap="round" fill="none" opacity="0.35" vector-effect="non-scaling-stroke"/></svg>';

// 오히메: 취급 명품 브랜드 로고를 쇼핑백 인쇄처럼 성긴 반복 패턴으로
const LUX_LOGOS = [
  { key: 'lvmono', w: 28 }, { key: 'chanel', w: 92 }, { key: 'gucci', w: 28 },
  { key: 'hermes', w: 96 }, { key: 'dior', w: 64 }, { key: 'goyard', w: 96 },
];
const OHIME_PATTERN = (() => {
  const stepX = 190, stepY = 60, cols = 7, rows = 3;
  let marks = '';
  for (let r = 0; r < rows; r += 1) {
    for (let c = 0; c < cols; c += 1) {
      const logo = LUX_LOGOS[(r * 2 + c) % LUX_LOGOS.length];
      const x = c * stepX + (r % 2 ? stepX / 2 : 0) - 30;
      marks += `<img src="sources/logos/luxury/${logo.key}.svg" alt="" style="left: ${x}px; top: ${r * stepY + 28}px; width: ${logo.w}px">`;
    }
  }
  return `<div class="lux-marks">${marks}</div>`;
})();

const DECO = {
  army: { pattern: '<div class="pat pat-army"></div>' },
  kakao: { pattern: ROUTE, art: TAXI, apps: APPS },
  hdi: { pattern: '' },
  ankug: { pattern: '' },
  ohime: { pattern: OHIME_PATTERN + '<div class="pat pat-ohime"></div>' },
};

function expDeco(e) {
  const d = DECO[e.theme];
  if (!d) return '';
  const pattern = d.pattern ? `<div class="exp-deco" aria-hidden="true">${d.pattern}${d.art ? `<div class="exp-art">${d.art}</div>` : ''}</div>` : '';
  const apps = d.apps ? `<div class="exp-apps">${d.apps.map((a) => `<img src="${a.src}" alt="${a.alt}" title="${a.alt}">`).join('')}</div>` : '';
  return pattern + apps;
}

// 카드 색은 경력 순서가 바뀌어도 회사별로 고정
const THEME_CLASS = { army: 0, kakao: 1, hdi: 2, ankug: 3, ohime: 4 };

// Resume 경력 줄: 회사 이름을 크게, 오른쪽에 역할 · 기간 · 한 줄 설명
function expRow(e, i) {
  const name = t(e.short || e.org);
  const tag = e.href ? 'a' : 'div';
  const attrs = e.href ? ` href="${e.href}" target="_blank" rel="noopener"` : '';
  return `
    <${tag} class="tile exp-row c${THEME_CLASS[e.theme] ?? i % 4}"${attrs}>
      ${expDeco(e)}
      ${e.logo ? `<span class="exp-logo"><img src="${e.logo.src}" alt="${e.logo.alt}" style="--lh: ${e.logo.h}px"></span>` : ''}
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
  const L = I18N[lang];
  const inner = (corner) => `
      <div class="top"><span class="period">${t(p.period)}</span>${corner}</div>
      <div><h3>${t(p.title)}</h3><p>${t(p.desc)}</p></div>`;
  if (p.detail) return `<a class="tile proj p${i + 1}" href="${p.detail}">${inner(`<span class="arrow-btn sm">${ICONS.arrow}</span>`)}</a>`;
  if (!p.href) return `<div class="tile proj p${i + 1}">${inner(`<span class="private-tag">${L.privateRepo}</span>`)}</div>`;
  return `<a class="tile proj p${i + 1}" href="${p.href}" target="_blank" rel="noopener">${inner(`<span class="arrow-btn sm">${ICONS.arrow}</span>`)}</a>`;
}

// Resume 섹션 레일: 섹션 이름만
const rail = (title) => `<div class="rail"><h2>${title}</h2></div>`;

const views = {
  about: (L) => `
    <section class="bento">
      <div class="tile t-h1">
        <img class="h1-flag" src="sources/patterns/maryland-flag.svg" alt="">
        <div class="info">
          <span class="h1-eyebrow">Education</span>
          <strong>University of Maryland</strong>
          <span>Computer Science · Class of 2027</span>
        </div>
        <div class="word">Software</div>
      </div>
      <div class="tile yellow t-h2"><div class="word">Engineer</div></div>

      <div class="tile lilac t-p">
        <div class="name">${L.nameCard}</div>
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
            <div class="tile edu">
              <img class="edu-flag" src="sources/patterns/maryland-flag.svg" alt="">
              <div class="top"><span class="edu-eyebrow">Education</span><span class="edu-years">2023 – 2027.05</span></div>
              <div>
                <h3>University of Maryland</h3>
                <p><svg class="edu-arrow" viewBox="0 0 20 22" aria-hidden="true"><polygon points="0,0 10,0 20,11 10,22 0,22 10,11"/></svg>B.S. Computer Science</p>
              </div>
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

  quant: (L) => {
    const table = (tbl) => `
      <div class="table-wrap"><table>
        <thead><tr>${t(tbl.head).map((h) => `<th>${h}</th>`).join('')}</tr></thead>
        <tbody>${t(tbl.rows).map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody>
      </table></div>`;
    return `
    <section class="detail">
      <a class="back-link" href="#resume">${ICONS.arrow}<span>${L.back}</span></a>

      <div class="tile yellow detail-hero">
        <span class="label">${QUANT.repo}</span>
        <h1>${t(QUANT.title)}</h1>
        <p>${t(QUANT.summary)}</p>
        <div class="detail-meta">${QUANT.meta.map((m) => `<span class="pill">${t(m)}</span>`).join('')}</div>
        <div class="detail-stack">${QUANT.stack.map((s) => `<span>${s}</span>`).join('')}</div>
      </div>

      <ol class="tile detail-flow">${t(QUANT.flow).map((s, i) => `<li><b>${String(i + 1).padStart(2, '0')}</b>${s}</li>`).join('')}</ol>

      <h2 class="detail-h">${L.secOverview}</h2>
      <div class="tile detail-text"><p>${t(QUANT.overview)}</p></div>

      <h2 class="detail-h">${L.secScreens}</h2>
      <div class="shots">
        ${QUANT.screens.map((s, i) => {
          const [name, text] = t(s);
          const src = `sources/projects/quant/${s.file}.webp`;
          return `
          <figure class="tile shot">
            <a href="${src}" target="_blank" rel="noopener" aria-label="${name} · ${L.openImage}"><img src="${src}" alt="${name}" loading="lazy"></a>
            <figcaption><b>${String(i + 1).padStart(2, '0')} ${name}</b><span>${text}</span></figcaption>
          </figure>`;
        }).join('')}
      </div>

      <h2 class="detail-h">${L.secArchitecture}</h2>
      <div class="tile detail-text"><p>${t(QUANT.architectureNote)}</p>${table(QUANT.architecture)}</div>

      <h2 class="detail-h">${L.secStrategy}</h2>
      <div class="tile detail-text"><p>${t(QUANT.strategyNote)}</p>${table(QUANT.strategy)}<p class="detail-limit">${t(QUANT.limit)}</p></div>
    </section>`;
  },

  board: (L) => `
    <section class="board">
      <div class="tile t-title">
        <span class="label">${L.name}</span>
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
  const activeTab = name === 'quant' ? 'resume' : name;
  tabs.forEach((tab) => tab.setAttribute('aria-selected', tab.dataset.tab === activeTab));
  if (location.hash !== `#${name}`) history.replaceState(null, '', `#${name}`);
  if (scroll) window.scrollTo({ top: 0, behavior: 'smooth' });
}

function setLang(next) {
  lang = next;
  document.documentElement.lang = next;
  document.title = `${I18N[next].name} · Portfolio`;
  langButtons.forEach((btn) => btn.setAttribute('aria-pressed', btn.dataset.lang === next));
  show(currentTab());
}

tabs.forEach((tab) => tab.addEventListener('click', () => show(tab.dataset.tab, true)));
langButtons.forEach((btn) => btn.addEventListener('click', () => setLang(btn.dataset.lang)));
window.addEventListener('hashchange', () => show(currentTab(), true));

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
