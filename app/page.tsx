import {
  profile, research, experience, projects, writing, teaching,
  education, skills, service, references, interests
} from "@/data/content";

const Ext = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
);

export default function Home() {
  const initials = profile.name.replace(/\./g, "").split(" ").filter(Boolean).slice(1, 3).map((w) => w[0]).join("");
  return (
    <>
      <a className="skip" href="#content">Skip to content</a>
      <header className="top">
        <div className="wrap topin">
          <a className="brand" href="#">{profile.name}</a>
          <nav>
            <a href="#biography">About</a>
            <a href="#research">Research</a>
            <a href="#experience">Experience</a>
            <a href={profile.cv} target="_blank" rel="noopener noreferrer">CV</a>
          </nav>
        </div>
      </header>

      <main id="content">
        <section className="hero wrap">
          <p className="tagline">{profile.tagline}</p>
          <h1>{profile.name}</h1>
          <a className="down" href="#biography" aria-label="Scroll to biography">↓</a>
        </section>

        <div className="wrap">
          <section id="biography" className="intro">
            <div className="portrait">
              {profile.portrait ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={profile.portrait} alt={`Portrait of ${profile.name}`} />
              ) : (
                <div className="ph" aria-hidden>{initials}</div>
              )}
            </div>
            <div>
              {profile.affiliations.map((a) => <p className="aff" key={a}>{a}</p>)}
              <p className="links">
                {profile.links.map((l) => (
                  <a className="pill" key={l.label} href={l.href} {...(l.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                    {l.label}{l.href.startsWith("http") ? "↗" : ""}
                  </a>
                ))}
              </p>
            </div>
          </section>

          <section>
            <h2>Biography</h2>
            {profile.bio.map((p) => <p key={p}><RichText text={p} /></p>)}
            <p><strong>Research interests:</strong> {profile.interests.join(" · ")}</p>
          </section>

          <section id="research">
            <h2>Research</h2>
            <ul className="entries">
              <li>
                <strong>{research.title}.</strong>{" "}
                <span className="m">
                  {research.context}, {research.period}. Supervisor: {research.supervisor}.
                </span>{" "}
                <Ext href={research.repo}>code</Ext>
                <div className="summary">{research.summary}</div>
                <ul>{research.points.map((p) => <li key={p}>{p}</li>)}</ul>
                <span className="m">Keywords: {research.keywords.join(", ")}.</span>
              </li>
            </ul>
          </section>

          <section id="experience">
            <h2>Experience</h2>
            <ul className="entries">
              {experience.map((e) => (
                <li key={e.role}>
                  <strong>{e.role}</strong>, <Ext href={e.href}>{e.org}</Ext>, {e.place}.{" "}
                  <span className="m">({e.period})</span>
                  {e.stack && <div className="m">Tools: {e.stack}</div>}
                  {e.groups.map((g) => (
                    <div key={g.title || "main"} className="group">
                      {g.title && <div className="gt">{g.title}</div>}
                      <ul>{g.points.map((p) => <li key={p}>{p}</li>)}</ul>
                    </div>
                  ))}
                </li>
              ))}
            </ul>
          </section>

          <section id="teaching">
            <h2>Teaching Experience</h2>
            <ul className="entries">
              {teaching.map((t) => (
                <li key={t.role}>
                  {t.role}, {t.org}. <span className="m">({t.period})</span>
                  <ul><li>{t.text}</li></ul>
                </li>
              ))}
            </ul>
          </section>

          <section id="projects">
            <h2>Projects</h2>
            <ul className="entries">
              {projects.map((p) => (
                <li key={p.name}>
                  <strong>{p.name}.</strong> {p.text} <span className="m">({p.period}; {p.stack})</span>{" "}
                  <Ext href={p.href}>code</Ext>
                </li>
              ))}
            </ul>
          </section>

          <section id="writing">
            <h2>Writing</h2>
            <ul className="entries">
              {writing.map((w) => (
                <li key={w.href}><Ext href={w.href}>{w.title}</Ext> <span className="m">({w.date})</span></li>
              ))}
            </ul>
          </section>

          <section>
            <h2>Honors &amp; Activities</h2>
            <ul className="entries">{service.map((s) => <li key={s}>{s}</li>)}</ul>
          </section>

          <section id="education">
            <h2>Education</h2>
            <ul className="entries">
              {education.map((e) => (
                <li key={e.degree}>{e.degree}, {e.school}. {e.period}. <span className="m">{e.note}</span></li>
              ))}
            </ul>
          </section>

          <section>
            <h2>Skills</h2>
            <ul className="entries">
              {skills.map((s) => <li key={s.group}><strong>{s.group}:</strong> {s.items}</li>)}
            </ul>
          </section>

          {/* <section id="contact">
            <h2>References</h2>
            <ul className="entries">
              {references.map((r) => (
                <li key={r.name}>{r.name}, {r.detail}. <a href={`mailto:${r.email}`}>{r.email}</a></li>
              ))}
            </ul>
          </section> */}

        <section id="interests" className="py-16">
          <h2 className="text-2xl font-bold mb-4">Interests</h2>
          <p>{interests.join(", ")}</p>
        </section>
        </div>
      </main>

      <footer className="wrap foot">
        <span>{profile.name}</span>
        <a href="#">Back to top ↑</a>
      </footer>
    </>
  );

  function RichText({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return (
    <>
      {parts.map((part, i) => {
        const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        return m ? (
          <a key={i} href={m[2]} target="_blank" rel="noopener noreferrer">{m[1]}</a>
        ) : (
          part
        );
      })}
    </>
  );
  }
}
