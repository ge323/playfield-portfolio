import { useMemo, useState } from "react";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  ExternalLink,
  Github,
  Layers3,
  Mail,
  Menu,
  MessageCircle,
  MousePointer2,
  Play,
  Sparkles,
  X,
} from "lucide-react";
import { profile, projects } from "@/data/games";

const filters = ["전체", ...Array.from(new Set(projects.map((project) => project.genre)))];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("전체");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const filteredProjects = useMemo(
    () =>
      activeFilter === "전체"
        ? projects
        : projects.filter((project) => project.genre === activeFilter),
    [activeFilter],
  );

  const closeMenu = () => setMobileMenuOpen(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <div className="portfolio-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Playfield 홈으로">
          <span className="brand-mark" aria-hidden="true">
            <span />
          </span>
          <span className="brand-name">PLAYFIELD<span className="brand-dot">.</span></span>
          <span className="brand-caption">DEVELOPER PORTFOLIO</span>
        </a>

        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={mobileMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          {mobileMenuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <nav className={`main-nav${mobileMenuOpen ? " is-open" : ""}`} aria-label="주요 메뉴">
          <a href="#work" onClick={closeMenu}><span>01</span> 작품</a>
          <a href="#about" onClick={closeMenu}><span>02</span> 소개</a>
          <a href="#contact" onClick={closeMenu}><span>03</span> 연락</a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            함께 만들기 <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero-section page-wrap" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow hero-eyebrow">
              <span className="status-dot" />
              INDEPENDENT DEVELOPER
            </div>
            <h1 id="hero-title">
              아이디어를 켜고,
              <br />
              <span className="headline-highlight">경험으로 만듭니다.</span>
            </h1>
            <p className="hero-description">
              게임부터 앱까지, 직접 쓰고 즐기는 경험을 만들어요.
              <br className="desktop-break" />
              작지만 선명한 아이디어를 제품으로 구현합니다.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                작품 둘러보기 <ArrowDownRight size={17} />
              </a>
              <a className="button button-quiet" href="#about">
                개발자 소개 <ArrowRight size={16} />
              </a>
            </div>
            <div className="hero-footnote">
              <span className="footnote-line" />
              <span>SCROLL TO EXPLORE</span>
              <ArrowDown size={14} />
            </div>
          </div>

          <div className="hero-art-wrap" aria-label="게임과 앱의 여러 디지털 경험을 담은 포트폴리오 아트워크">
            <div className="hero-art-frame">
              <img
                className="hero-art"
                src="/images/portfolio-hero.svg"
                alt="다양한 아이디어와 디지털 경험이 하나로 이어지는 포트폴리오 아트워크"
              />
              <div className="hero-art-shade" />
              <div className="hero-art-label">
                <span className="label-kicker">A WORLD IS WAITING</span>
                <span className="label-title">Made to be experienced<span>.</span></span>
              </div>
              <div className="hero-art-index"><span>01</span> / {String(projects.length).padStart(2, "0")}</div>
            </div>
            <div className="hero-orbit orbit-one" />
            <div className="hero-orbit orbit-two" />
            <div className="hero-sticker"><Sparkles size={17} /><span>IDEAS<br />IN MOTION</span></div>
            <span className="hero-side-note">BUILT FOR PLAY · ALWAYS IN PROGRESS</span>
          </div>
        </section>

        <section className="work-section section-wrap" id="work" aria-labelledby="work-title">
          <div className="section-topline">
            <span className="section-index">01 / SELECTED WORK</span>
            <span className="section-note"><span className="live-dot" /> {projects.length.toString().padStart(2, "0")} PROJECTS TO EXPLORE</span>
          </div>
          <div className="work-heading-row">
            <div>
              <p className="eyebrow section-eyebrow">GAMES &amp; APPS, BUILT WITH INTENT</p>
              <h2 id="work-title">게임과 앱,<br className="mobile-break" /> 직접 만든 경험.</h2>
            </div>
            <p className="work-intro">직접 만든 게임과 앱을 소개합니다.<br />플레이하거나 스토어에서 만나보세요.</p>
          </div>

          <div className="filter-row" aria-label="분야 필터">
            <span className="filter-label">FILTER /</span>
            {filters.map((filter) => (
              <button
                type="button"
                key={filter}
                className={`filter-chip${activeFilter === filter ? " is-active" : ""}`}
                aria-pressed={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
                {activeFilter === filter && <span className="filter-active-dot" />}
              </button>
            ))}
          </div>

          <div className={`game-grid${filteredProjects.length === 1 ? " game-grid-single" : ""}`} aria-live="polite">
            {filteredProjects.map((project, index) => (
              <article className={`game-card${filteredProjects.length === 1 ? " game-card-single" : ""}`} key={project.id}>
                <div className={`game-art${project.imageFit === "contain" ? " game-art-contain" : ""}${!project.image ? " game-art-placeholder" : ""}`} style={{ "--game-accent": project.accent } as React.CSSProperties}>
                  {project.image ? (
                    <img src={project.image} alt={project.platform.includes("APP") ? `${project.title} 앱 화면 스크린샷` : `${project.title} 실제 게임 플레이 화면`} loading={index > 1 ? "lazy" : "eager"} />
                  ) : (
                    <div className="project-image-placeholder" role="img" aria-label={`${project.title} 썸네일 추가 예정`}>
                      <div className="project-placeholder-icon"><MessageCircle size={27} /><Sparkles className="placeholder-sparkle" size={15} /></div>
                      <span className="project-placeholder-kicker">AI MYSTERY · WEB GAME</span>
                      <strong>{project.title}</strong>
                      <span className="project-placeholder-status">이미지 추가 예정</span>
                    </div>
                  )}
                  <div className="game-art-overlay" />
                  <span className="game-live-label">{project.platform.includes("APP") ? "GOOGLE PLAY" : project.playUrl ? "PLAY IN BROWSER" : "LINK COMING SOON"}</span>
                  <span className="game-number">{String(projects.findIndex((item) => item.id === project.id) + 1).padStart(2, "0")}</span>
                  <div className="game-art-bottom">
                    <span className="game-genre">{project.genre}</span>
                    <span className="game-year">{project.year}</span>
                  </div>
                  {project.playUrl ? (
                    <a
                      className="game-play-overlay"
                      href={project.playUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={project.platform.includes("APP") ? `${project.title} Google Play 페이지 열기` : `${project.title} 플레이하기`}
                    >
                      <span>{project.platform.includes("APP") ? <ExternalLink size={16} /> : <Play size={16} fill="currentColor" />} {project.platform.includes("APP") ? "스토어에서 보기" : "지금 플레이"}</span>
                    </a>
                  ) : (
                    <span className="game-play-overlay is-unavailable" aria-label="실제 프로젝트 링크가 아직 등록되지 않았습니다">
                      <span><Play size={16} fill="currentColor" /> 링크 준비 중</span>
                    </span>
                  )}
                </div>
                <div className="game-info">
                  <div className="game-title-row">
                    <div>
                      <p className="game-subtitle">{project.subtitle}</p>
                      <h3>{project.title}</h3>
                    </div>
                    {project.playUrl ? (
                      <a className="game-link-icon" href={project.playUrl} target="_blank" rel="noreferrer" aria-label={project.platform.includes("APP") ? `${project.title} Google Play 페이지 열기` : `${project.title} 새 창에서 플레이`}>
                        <ArrowUpRight size={19} />
                      </a>
                    ) : (
                      <span className="game-link-icon is-muted" aria-hidden="true"><ArrowUpRight size={19} /></span>
                    )}
                  </div>
                  <p className="game-description">{project.description}</p>
                  <div className="game-meta">
                    <span>{project.platform.join(" · ")}</span>
                    <span className="meta-divider" />
                    <span>{project.genre}</span>
                  </div>
                  {project.playUrl ? (
                    <a className="game-action" href={project.playUrl} target="_blank" rel="noreferrer" aria-label={project.platform.includes("APP") ? `${project.title} Google Play에서 보기` : `${project.title} 새 탭에서 플레이하기`}>
                      <span>{project.platform.includes("APP") ? <ExternalLink size={16} /> : <Play size={16} fill="currentColor" />} {project.platform.includes("APP") ? "Google Play에서 보기" : "지금 플레이하기"}</span>
                      <ArrowUpRight size={18} />
                    </a>
                  ) : (
                    <p className="play-link-note">플레이 또는 스토어 링크를 입력하면 버튼이 활성화됩니다.</p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section" id="about" aria-labelledby="about-title">
          <div className="about-inner section-wrap">
            <div className="section-topline about-topline">
              <span className="section-index">02 / THE MAKER</span>
              <span className="section-note">A LITTLE ABOUT ME</span>
            </div>
            <div className="about-layout">
              <div className="about-heading">
                <p className="eyebrow section-eyebrow">THE PERSON BEHIND THE PLAY</p>
                <p className="profile-name">{profile.name} <span>· DEVELOPER</span></p>
                <h2 id="about-title">안녕하세요,<br />게임과 앱을 만드는<br /><span>개발자입니다.</span></h2>
                <div className="profile-stamp"><Layers3 size={24} /><span>CURIOUS<br />BY NATURE</span></div>
              </div>
              <div className="about-content">
                <div className="about-quote-mark">“</div>
                <p className="about-lead">좋은 경험은 설명보다<br /><em>먼저 느껴지는 것</em>이라고 믿어요.</p>
                <p className="about-body">
                  저는 아이디어를 빠르게 실험하고, 작지만 선명한 재미와 쓸모를 만드는 개발자입니다.
                  게임과 앱에서 사용자가 다시 찾고 싶어지는 순간을 설계합니다.
                </p>
                <div className="skills-heading"><Layers3 size={15} /> WHAT I BUILD <span>EXAMPLE</span></div>
                <div className="skill-list">
                  {profile.skills.map((skill, index) => (
                    <div className="skill-item" key={skill}>
                      <span className="skill-number">0{index + 1}</span>
                      <span>{skill}</span>
                      <ArrowUpRight size={14} />
                    </div>
                  ))}
                </div>
                <div className="stack-block">
                  <div className="stack-heading"><Code2 size={15} /> TOOLS &amp; TECH STACK <span>EXAMPLE</span></div>
                  <div className="stack-list">
                    {profile.stack.map((tool) => <span className="stack-chip" key={tool}>{tool}</span>)}
                  </div>
                </div>
              </div>
            </div>
            <div className="about-bottom-note"><MousePointer2 size={14} /> BUILT WITH CURIOSITY, POLISHED THROUGH REAL USE</div>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact" aria-labelledby="contact-title">
          <div className="contact-shell">
            <div className="contact-topline">
              <span className="section-index">03 / SAY HELLO</span>
              <span className="contact-spark"><Sparkles size={16} /></span>
            </div>
            <div className="contact-content">
              <div>
                <p className="eyebrow contact-eyebrow">HAVE A GOOD IDEA?</p>
                <h2 id="contact-title">다음 플레이,<br /><span>함께 만들어볼까요?</span></h2>
              </div>
              <div className="contact-action-wrap">
                <button className="email-copy-button" type="button" onClick={copyEmail}>
                  <span className="email-icon">{copied ? <Check size={18} /> : <Mail size={18} />}</span>
                  <span className="email-text">
                    <span>{copied ? "복사했어요" : "EMAIL / COPY ADDRESS"}</span>
                    <strong>{profile.email}</strong>
                  </span>
                  <ArrowUpRight size={18} />
                </button>
                <p className="contact-hint">이메일을 복사해 바로 연락할 수 있어요. (예시 주소를 본인 주소로 바꿔 주세요)</p>
              </div>
            </div>
            <div className="contact-socials">
              <span className="socials-label">FIND ME ELSEWHERE</span>
              {profile.links.map((link) => (
                link.url ? (
                  <a key={link.label} href={link.url} target="_blank" rel="noreferrer">
                    {link.label === "GitHub" && <Github size={15} />}
                    {link.label !== "GitHub" && <ExternalLink size={14} />}
                    {link.label} <ArrowUpRight size={12} />
                  </a>
                ) : (
                  <span className="social-placeholder" key={link.label} title="client/src/data/games.ts 에서 링크를 입력하세요">
                    {link.label === "GitHub" && <Github size={15} />}
                    {link.label !== "GitHub" && <ExternalLink size={14} />}
                    {link.label} <span className="placeholder-mark">+</span>
                  </span>
                )
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="brand footer-brand" href="#top" aria-label="맨 위로">
          <span className="brand-mark" aria-hidden="true"><span /></span>
          <span className="brand-name">PLAYFIELD<span className="brand-dot">.</span></span>
        </a>
        <span className="footer-center">MADE WITH <span>♥</span> AND TOO MUCH COFFEE</span>
        <a className="back-to-top" href="#top">BACK TO TOP <ArrowUpRight size={14} /></a>
        <span className="footer-copyright">© {new Date().getFullYear()} · {profile.name}</span>
      </footer>
    </div>
  );
}
