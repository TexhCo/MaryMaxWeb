export default function Home() {
  return (
    <>
      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Local advisors. Personal care.</p>
            <h1>Trusted Medicare<br />Guidance for Every<br />Stage of Life</h1>
            <p className="lead">We help seniors and their families compare Medicare, Medicaid, and health insurance options with confidence and clarity—at no cost to you.</p>
            <div className="hero-actions">
              <a className="primary-cta" href="#quote">Get My Free Quote <span className="arrow-right" aria-hidden="true"></span></a>
              <a className="advisor-call" href="tel:8008410519">
                <svg width="30" height="30" viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M8.8 3.8 13 9.7l-2.6 3.1c1.8 3.7 5 6.9 8.7 8.7l3.2-2.6 5.9 4.2-1.5 5.1c-.3 1.1-1.4 1.8-2.5 1.7C12.3 28.5 3.4 19.7 2 7.8 1.8 6.7 2.5 5.7 3.6 5.3l5.2-1.5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg>
                <span><strong>800-841-0519</strong><small>Speak with a local advisor</small></span>
              </a>
            </div>
            <div className="hero-meta">
              <div className="stars-row"><span className="stars">★★★★★</span><span><strong>4.9/5</strong> from 1,200+ local families</span></div>
              <span className="divider" aria-hidden="true"></span>
              <div className="shield-row">
                <svg width="20" height="22" viewBox="0 0 24 26" fill="none" aria-hidden="true"><path d="M12 2 20 5v6.1c0 5.4-3.1 10.2-8 12.9-4.9-2.7-8-7.5-8-12.9V5l8-3Z" stroke="currentColor" strokeWidth="1.8"/><path d="m8.6 12 2.2 2.2 4.6-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span>No obligation. 100% free.</span>
              </div>
            </div>
          </div>
          <div className="hero-photo"><img src="/assets/hero.webp" alt="Smiling senior couple at home" /></div>
        </section>
        <section className="services-wrap" id="services" aria-label="Insurance services">
          <div className="services-grid">
            <article className="service-card">
              <div className="service-icon"><svg width="46" height="46" viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M24 4 39 10v11c0 10.3-5.9 18.8-15 23-9.1-4.2-15-12.7-15-23V10l15-6Z" stroke="currentColor" strokeWidth="2.3"/><path d="M24 9v29" stroke="currentColor" strokeWidth="2" opacity=".45"/></svg></div>
              <h2>Medicare</h2><p>Understand your options and find the right Medicare plan for your needs.</p><a className="learn-more" href="#">Learn More <span>→</span></a>
            </article>
            <article className="service-card">
              <div className="service-icon"><svg width="48" height="48" viewBox="0 0 50 50" fill="none" aria-hidden="true"><path d="M25 15c-4.6-8.2-15-4.7-15 3.2C10 28 25 36 25 36s15-8 15-17.8C40 10.3 29.6 6.8 25 15Z" stroke="#e5232f" strokeWidth="2.2"/><path d="M4 30h8l5 4h11c3 0 5 2 5 5H16l-7-3H4v-6Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round"/></svg></div>
              <h2>Medicaid</h2><p>Get help exploring Medicaid coverage and see if you qualify.</p><a className="learn-more" href="#">Learn More <span>→</span></a>
            </article>
            <article className="service-card">
              <div className="service-icon"><svg width="46" height="46" viewBox="0 0 48 48" fill="none" aria-hidden="true"><circle cx="21" cy="13" r="6" stroke="currentColor" strokeWidth="2.2"/><path d="M9 34c0-7 5.4-12 12-12s12 5 12 12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/><path d="M32 23 41 26v7c0 5-3.5 8.6-9 11-5.5-2.4-9-6-9-11v-7l9-3Z" fill="#fff" stroke="#e5232f" strokeWidth="2"/></svg></div>
              <h2>Life Insurance</h2><p>Protect your loved ones with life insurance options that fit your goals.</p><a className="learn-more" href="#">Learn More <span>→</span></a>
            </article>
            <article className="service-card">
              <div className="service-icon"><svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M14 34 34 14c3.4-3.4 8.9-3.4 12.3 0 3.4 3.4 3.4 8.9 0 12.3L26.3 46.3c-3.4 3.4-8.9 3.4-12.3 0-3.4-3.4-3.4-8.9 0-12.3Z" transform="translate(-6 -6)" fill="#e5232f" stroke="currentColor" strokeWidth="2.2"/><path d="m17 31 14-14" stroke="#fff" strokeWidth="2"/></svg></div>
              <h2>Prescription Plans</h2><p>Lower your prescription costs with plans that fit your budget.</p><a className="learn-more" href="#">Learn More <span>→</span></a>
            </article>
            <article className="service-card">
              <div className="service-icon"><svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M12 7h17v35H12z" stroke="currentColor" strokeWidth="2.2"/><path d="M17 4h7v6h-7z" fill="#fff" stroke="currentColor" strokeWidth="2"/><path d="M15 17h10M15 22h8M15 27h7" stroke="#e5232f" strokeWidth="2" strokeLinecap="round"/><path d="M34 19 43 22v7c0 5-3.4 8.5-9 11-5.6-2.5-9-6-9-11v-7l9-3Z" fill="#fff" stroke="#e5232f" strokeWidth="2"/><path d="M34 25v9M29.5 29.5h9" stroke="#e5232f" strokeWidth="2"/></svg></div>
              <h2>Supplemental<br />Coverage</h2><p>Add extra protection for vision, dental, hospital stays, and more.</p><a className="learn-more" href="#">Learn More <span>→</span></a>
            </article>
          </div>
        </section>
        <section className="benefits" id="about" aria-label="Why choose Marymax">
          <article className="benefit"><div className="benefit-icon"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M16 29s9-8.7 9-17a9 9 0 1 0-18 0c0 8.3 9 17 9 17Z" stroke="currentColor" strokeWidth="2"/><circle cx="16" cy="12" r="3" stroke="currentColor" strokeWidth="2"/></svg></div><div><h3>Local &amp; Independent</h3><p>We&apos;re local advisors who know your community.</p></div></article>
          <article className="benefit"><div className="benefit-icon"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M16 3 26 7v7c0 6.7-4 12.3-10 15-6-2.7-10-8.3-10-15V7l10-4Z" stroke="currentColor" strokeWidth="2"/><circle cx="16" cy="14" r="4" stroke="currentColor" strokeWidth="1.8"/><path d="m13.8 14 1.5 1.5 3-3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg></div><div><h3>Unbiased Guidance</h3><p>We compare plans from top carriers to find what&apos;s right for you.</p></div></article>
          <article className="benefit"><div className="benefit-icon"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M16 4v24M22 9.2C20.2 6.3 12 6.1 11 10.3c-1.3 5.8 11.5 3.9 10.4 10.2-.8 4.4-8.9 4.6-11.7 1.2" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round"/></svg></div><div><h3>No Cost to You</h3><p>Our services are always free. You pay nothing extra.</p></div></article>
          <article className="benefit"><div className="benefit-icon"><svg width="33" height="33" viewBox="0 0 34 34" fill="none" aria-hidden="true"><path d="M7 19v-3a10 10 0 0 1 20 0v3" stroke="currentColor" strokeWidth="2"/><path d="M5 18h5v8H7a2 2 0 0 1-2-2v-6ZM29 18h-5v8h3a2 2 0 0 0 2-2v-6Z" fill="currentColor"/><path d="M24 27c-1.7 2-4.2 3-7 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></div><div><h3>Ongoing Support</h3><p>We&apos;re here for you before, during, and after you enroll.</p></div></article>
        </section>
      </main>
    </>
  );
}
