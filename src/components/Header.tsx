import Link from 'next/link';

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="Marymax Insurance Services home">
          <img src="/assets/logomarymax.webp" alt="Marymax Insurance Services" />
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link className="nav-item" href="/medicare">Medicare <span className="chevron" aria-hidden="true"></span></Link>
          <Link className="nav-item" href="/medicaid">Medicaid <span className="chevron" aria-hidden="true"></span></Link>
          <Link className="nav-item" href="/life-insurance">Life Insurance <span className="chevron" aria-hidden="true"></span></Link>
          <Link className="nav-item" href="/resources">Resources <span className="chevron" aria-hidden="true"></span></Link>
          <Link className="nav-item" href="/about">About Us</Link>
        </nav>
        <div className="language"><span>EN</span> <span>/ ES</span></div>
        <a className="call-header" href="tel:8008410519">Call 800-841-0519</a>
        <button className="mobile-menu" aria-label="Open menu"><span></span><span></span><span></span></button>
      </div>
    </header>
  );
}
