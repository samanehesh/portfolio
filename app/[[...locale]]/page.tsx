import Image from "next/image";
import { CopyEmail } from "../../components/copy-email";
import { SkillsCarousel } from "../../components/skills-carousel";
import { contact } from "../../lib/contact";
import { existsSync } from "node:fs";
import { join } from "node:path";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { routing } from "../../i18n/routing";
import { resolveLocale } from "../../i18n/locale";
import NextLink from "next/link";
import { projects, strengthIds } from "../../lib/projects";
import { Link, getPathname } from "../../i18n/navigation";
import { ThemeToggle } from "../../components/theme-toggle";
import { SiteNavigation } from "../../components/site-navigation";

export const dynamicParams = false;
export function generateStaticParams() {
  return [
    { locale: [] },
    ...routing.locales.map((locale) => ({ locale: [locale] }))
  ];
}
export async function generateMetadata({ params }: { params: Promise<{ locale?: string[] }> }): Promise<Metadata> {
  const locale = resolveLocale((await params).locale);
  const t = await getTranslations({ locale });
  return { title: t("metadataTitle"), description: t("intro"), robots: { index: false, follow: false } };
}

export default async function Home({ params }: { params: Promise<{ locale?: string[] }> }) {
  const locale = resolveLocale((await params).locale);
  const t = await getTranslations({ locale });
  const resumeAvailable = existsSync(join(process.cwd(), "public", "resume.pdf"));
  const otherLocale = locale === "fa" ? "en" : "fa";
  return <>
    <div id="top" aria-hidden="true" />
    <a className="skip" href="#main">{t("skip")}</a>
    <div className="aurora" aria-hidden="true" />
    <header className="header wrap">
      <Link className="brand" href="/"><span className="terminal" aria-hidden="true">&gt;_</span>{t("brand")}</Link>
      <SiteNavigation />
      <div className="tools"><NextLink className="language" href={getPathname({ locale: otherLocale, href: "/" })} hrefLang={otherLocale} lang={otherLocale}>{t("switchLanguage")}</NextLink><span className="tool-divider" /><ThemeToggle label={t("theme")} /></div>
    </header>
    <main id="main">
      <section className="hero wrap" aria-labelledby="intro-title">
        <div className="hero-copy"><p className="eyebrow"><span />{t("label")}</p><h1 id="intro-title">{t("greeting")}<br /><span>{t("name")}</span></h1><p className="intro">{t("intro")}</p><div className="hero-actions"><a className="button primary" href="#projects">{t("work")}<span aria-hidden="true">↗</span></a><span className="resume-action">{resumeAvailable ? <a className="button secondary" href="/resume.pdf" download="resume.pdf">{t("downloadResume")}<span aria-hidden="true">↓</span></a> : <><button className="button secondary" type="button" disabled aria-describedby="resume-status">{t("downloadResume")}<span aria-hidden="true">↓</span></button><small id="resume-status">{t("resumeUnavailable")}</small></>}</span><a className="text-link" href="#about">{t("about")}<span aria-hidden="true">↓</span></a></div></div>
      </section>
      <section className="about wrap" id="about"><div className="section-top"><p className="eyebrow">{t("nav.about")}</p><h2>{t("strengthTitle")}</h2></div><div className="strengths">{strengthIds.map((id) => <article key={id}><span className="number">{t(`strengths.${id}.number`)}</span><h3>{t(`strengths.${id}.title`)}</h3><p>{t(`strengths.${id}.description`)}</p></article>)}</div><SkillsCarousel /></section>
      <section className="projects wrap" id="projects"><div className="section-top"><div><p className="eyebrow">{t("projectLabel")}</p><h2>{t("projectTitle")}</h2></div><p className="section-intro">{t("projectIntro")}</p></div><div className="project-grid">{projects.map((p,i) => <article className="project" key={p.id}>{p.image ? <div className="project-art project-screenshot"><Image src={p.image} alt={t("projectScreenshot", { title: t(`projects.${p.id}.title`) })} fill sizes="(max-width: 720px) calc(100vw - 40px), 550px" /></div> : <div className={`project-art project-cover ${p.art}`} aria-hidden="true"><span className="project-cover-index">{String(i+1).padStart(2,"0")}</span><span className="project-cover-title">{t(`projects.${p.id}.title`)}</span><span className="project-cover-stack" dir="ltr">{p.tags.join(" / ")}</span><span className="project-cover-shape" /></div>}<div className="project-meta"><span>{t(`projects.${p.id}.type`)}</span><span dir="ltr">0{i+1}</span></div><h3>{t(`projects.${p.id}.title`)}</h3><p>{t(`projects.${p.id}.description`)}</p><div className="tags">{p.tags.map(tag=><span key={tag}>{tag}</span>)}</div><details><summary>{t("detail")}<span aria-hidden="true">＋</span></summary><p>{t(`projects.${p.id}.details`)}</p></details><div className="project-links"><a className="text-link" href={p.repoUrl} target="_blank" rel="noopener noreferrer">{t("viewCode")}<span aria-hidden="true">↗</span></a>{p.liveUrl && <a className="text-link" href={p.liveUrl} target="_blank" rel="noopener noreferrer">{t("liveDemo")}<span aria-hidden="true">↗</span></a>}</div></article>)}</div></section>
      <section className="contact wrap" id="contact"><p className="eyebrow">{t("contactLabel")}</p><h2>{t("contactTitle")}</h2><p>{t("contactIntro")}</p><div className="contact-links"><a className="button primary" href={contact.composeUrl} target="_blank" rel="noopener noreferrer">{t("emailMe")}<span aria-hidden="true">↗</span></a><a className="button secondary" href={contact.linkedin} target="_blank" rel="noopener noreferrer">{t("linkedin")}<span aria-hidden="true">↗</span></a><CopyEmail email={contact.email} /></div><span className="contact-flower" aria-hidden="true">✳</span></section>
    </main>
    <footer className="footer wrap"><a className="brand" href="#top"><span className="terminal" aria-hidden="true">&gt;_</span>{t("brand")}</a><p>{t("footer")}</p><a className="text-link" href="#top">{t("backTop")}<span aria-hidden="true">↑</span></a></footer>
  </>;
}
