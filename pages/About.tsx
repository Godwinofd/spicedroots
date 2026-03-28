
import React from 'react';
import heritageHero from '../assets/DSC08713.jpg';

const About: React.FC = () => {
  return (
    <div className="about-page">

      {/* ─── HERO ─────────────────────────────────────── */}
      <section className="about-hero">
        <div className="about-hero__image-wrap">
          <img
            src={heritageHero}
            alt="Spiced Roots Oxford"
            className="about-hero__image"
          />
          <div className="about-hero__overlay" />
        </div>
        <div className="about-hero__content">
          <p className="about-hero__eyebrow">Est. 2019 · Cowley Road, Oxford</p>
          <h1 className="font-just-another-hand text-[7rem] sm:text-[10rem] lg:text-[13rem] leading-[0.85] mb-4">Our Story</h1>
          <p className="about-hero__subtitle">
            Rooted in the islands. Cooked with everything we've got.
          </p>
        </div>
      </section>

      {/* ─── INTRO EDITORIAL ──────────────────────────── */}
      <section className="about-intro">
        <div className="about-intro__inner">
          <div className="about-intro__lead-col">
            <span className="about-section-label">Who We Are</span>
            <h2 className="font-just-another-hand text-6xl sm:text-7xl lg:text-[6.5rem] leading-[0.9] text-[#1a2e3b]">
              Food is how we remember<br />where we come from.
            </h2>
          </div>
          <div className="about-intro__body-col">
            <p className="about-body-text">
              Spiced Roots was born from a simple truth — that the best Caribbean food doesn't need to be dressed up, it just needs to be done properly. When we opened on Cowley Road in 2019, we weren't trying to reinvent anything. We were trying to do justice to the kitchens we grew up in: the slow-simmered pots, the smoky jerk pits, the curries that bubble away for half a day.
            </p>
            <p className="about-body-text">
              Every recipe on our menu carries a memory. The oxtail comes from Sunday afternoons. The jerk is marinated the way it's always been — overnight, in green seasoning and scotch bonnet, then kissed by smoke. We don't cut corners here, because the people who taught us how to cook never did.
            </p>
          </div>
        </div>
      </section>

      {/* ─── DIVIDER ──────────────────────────────────── */}
      <div className="about-rule-wrap">
        <span className="about-rule-label">Our Mission</span>
        <div className="about-rule" />
      </div>

      {/* ─── THREE PILLARS ────────────────────────────── */}
      <section className="about-pillars">
        <div className="about-pillars__inner">

          <article className="about-pillar">
            <span className="about-pillar__num">01</span>
            <h3 className="about-pillar__title">Craft &amp; Technique</h3>
            <p className="about-pillar__text">
              Meats marinated for 48 hours minimum. Curries slow-cooked in bone stock we make ourselves. Spice blends toasted fresh. None of it is glamorous — it's just the way it has to be done if you want it to taste right. That commitment is non-negotiable in our kitchen.
            </p>
          </article>

          <article className="about-pillar">
            <span className="about-pillar__num">02</span>
            <h3 className="about-pillar__title">Culture &amp; Community</h3>
            <p className="about-pillar__text">
              We've always seen Spiced Roots as more than a place to eat. It's a yard — somewhere you come and feel at home. We host live music, sip &amp; paint nights, and celebrations of all kinds. Oxford welcomed us from day one, and that warmth gets poured back into everything we do.
            </p>
          </article>

          <article className="about-pillar">
            <span className="about-pillar__num">03</span>
            <h3 className="about-pillar__title">Rum &amp; Good Company</h3>
            <p className="about-pillar__text">
              The bar is its own world. Over 50 Caribbean rums, handpicked from across the islands — Jamaica, Barbados, Trinidad, Guyana — poured properly and talked about with real knowledge. Our cocktails are built on island tradition. Come in for dinner and you might not leave until last orders.
            </p>
          </article>

        </div>
      </section>

      {/* ─── CLOSING STATEMENT ────────────────────────── */}
      <section className="about-closing">
        <div className="about-closing__inner">
          <blockquote className="about-closing__quote">
            "Come hungry. Bring people you love. We'll handle the rest."
          </blockquote>
          <p className="about-closing__attribution">— Spiced Roots Kitchen, Cowley Road</p>
          <div className="about-closing__cta-row">
            <a href="/menu" className="about-btn about-btn--primary">View Our Menu</a>
            <a href="/reservations" className="about-btn about-btn--ghost">Make a Reservation</a>
          </div>
        </div>
      </section>

      <style>{`
        /* ── Base ── */
        .about-page {
          background: #F9F8F6;
          color: #1a2e3b;
          overflow-x: hidden;
          padding-top: 80px;
          font-family: 'Georgia', serif;
        }

        /* ── Hero ── */
        .about-hero {
          position: relative;
          height: 88vh;
          min-height: 560px;
          display: flex;
          align-items: flex-end;
          overflow: hidden;
        }
        .about-hero__image-wrap {
          position: absolute;
          inset: 0;
        }
        .about-hero__image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        .about-hero__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(10, 25, 38, 0.25) 0%,
            rgba(10, 25, 38, 0.55) 60%,
            rgba(10, 25, 38, 0.82) 100%
          );
        }
        .about-hero__content {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 48px 72px;
          color: #fff;
        }
        .about-hero__eyebrow {
          font-family: 'Arial', sans-serif;
          font-size: 11px;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: #D1BB94;
          font-weight: 600;
          margin-bottom: 16px;
        }
        .about-hero__title {
          font-size: clamp(3.5rem, 9vw, 7rem);
          font-weight: 400;
          line-height: 1;
          margin: 0 0 20px;
          letter-spacing: -0.02em;
        }
        .about-hero__subtitle {
          font-size: clamp(1rem, 2vw, 1.25rem);
          font-weight: 300;
          color: rgba(255,255,255,0.75);
          letter-spacing: 0.02em;
          max-width: 400px;
          margin: 0;
          font-family: 'Arial', sans-serif;
        }

        /* ── Intro ── */
        .about-intro {
          padding: 100px 48px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .about-intro__inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }
        .about-section-label {
          display: block;
          font-family: 'Arial', sans-serif;
          font-size: 10px;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: #D1BB94;
          font-weight: 700;
          margin-bottom: 24px;
        }
        .about-intro__heading {
          font-size: clamp(2rem, 4vw, 3.25rem);
          font-weight: 400;
          line-height: 1.15;
          color: #1a2e3b;
          margin: 0;
          letter-spacing: -0.01em;
        }
        .about-intro__body-col {
          padding-top: 48px;
        }
        .about-body-text {
          font-family: 'Arial', sans-serif;
          font-size: 1rem;
          line-height: 1.85;
          color: #3a5068;
          margin: 0 0 24px;
          font-weight: 300;
        }
        .about-body-text:last-child { margin-bottom: 0; }

        /* ── Rule ── */
        .about-rule-wrap {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 48px;
          display: flex;
          align-items: center;
          gap: 24px;
        }
        .about-rule-label {
          font-family: 'Arial', sans-serif;
          font-size: 10px;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: #D1BB94;
          font-weight: 700;
          white-space: nowrap;
        }
        .about-rule {
          flex: 1;
          height: 1px;
          background: linear-gradient(to right, #D1BB94, transparent);
        }

        /* ── Pillars ── */
        .about-pillars {
          padding: 80px 48px 100px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .about-pillars__inner {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 64px;
          margin-top: 56px;
        }
        .about-pillar {
          border-top: 1px solid #D1BB94;
          padding-top: 32px;
        }
        .about-pillar__num {
          display: block;
          font-family: 'Arial', sans-serif;
          font-size: 10px;
          letter-spacing: 0.3em;
          color: #D1BB94;
          font-weight: 700;
          margin-bottom: 16px;
        }
        .about-pillar__title {
          font-size: 1.375rem;
          font-weight: 400;
          color: #1a2e3b;
          margin: 0 0 16px;
          letter-spacing: -0.01em;
          line-height: 1.2;
        }
        .about-pillar__text {
          font-family: 'Arial', sans-serif;
          font-size: 0.9375rem;
          line-height: 1.8;
          color: #3a5068;
          font-weight: 300;
          margin: 0;
        }

        /* ── Closing ── */
        .about-closing {
          background: #1a2e3b;
          padding: 100px 48px;
        }
        .about-closing__inner {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }
        .about-closing__quote {
          font-size: clamp(1.25rem, 2.5vw, 1.75rem);
          font-weight: 400;
          font-style: italic;
          color: #fff;
          line-height: 1.6;
          margin: 0 0 24px;
          letter-spacing: 0.01em;
        }
        .about-closing__attribution {
          font-family: 'Arial', sans-serif;
          font-size: 11px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #D1BB94;
          font-weight: 600;
          margin: 0 0 56px;
        }
        .about-closing__cta-row {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .about-btn {
          display: inline-block;
          padding: 14px 36px;
          font-family: 'Arial', sans-serif;
          font-size: 12px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          font-weight: 700;
          text-decoration: none;
          border-radius: 2px;
          transition: all 0.25s ease;
        }
        .about-btn--primary {
          background: #D1BB94;
          color: #1a2e3b;
        }
        .about-btn--primary:hover {
          background: #c4aa7d;
        }
        .about-btn--ghost {
          border: 1px solid rgba(255,255,255,0.3);
          color: #fff;
        }
        .about-btn--ghost:hover {
          border-color: #D1BB94;
          color: #D1BB94;
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .about-intro__inner {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .about-intro__body-col { padding-top: 0; }
          .about-pillars__inner {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .about-intro,
          .about-pillars,
          .about-closing {
            padding-left: 24px;
            padding-right: 24px;
          }
          .about-hero__content { padding: 0 24px 48px; }
          .about-rule-wrap { padding: 0 24px; }
        }
      `}</style>
    </div>
  );
};

export default About;
