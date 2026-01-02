import './Header.css';

export default function Header() {
  return (
    <>
      <header className="container">
        <div className="header">
          <div className="logo">
            <svg width="220" height="48" viewBox="0 0 220 48" xmlns="http://www.w3.org/2000/svg" role="img"
                 aria-label="EasyResume logo">
              <g transform="translate(0,4)">
                <path d="M24 0 C10 0 4 4 4 4 V22 C4 30 24 36 24 36 C24 36 44 30 44 22 V4 C44 4 38 0 24 0Z"
                      fill="#F97316"/>
                <path d="M24 36 C24 36 4 30 4 22 V18 C4 26 24 32 24 32 C24 32 44 26 44 18 V22 C44 30 24 36 24 36Z"
                      fill="#2563EB"/>

                <rect x="14" y="8" width="20" height="20" rx="2" fill="#ffffff"/>
                <line x1="18" y1="14" x2="30" y2="14" stroke="#2563EB" strokeWidth="2"/>
                <line x1="18" y1="18" x2="30" y2="18" stroke="#2563EB" strokeWidth="2"/>
                <line x1="18" y1="22" x2="26" y2="22" stroke="#2563EB" strokeWidth="2"/>

                <path d="M18 24 L22 28 L30 20" stroke="#F97316" strokeWidth="2.5" fill="none" strokeLinecap="round"
                      strokeLinejoin="round"/>
              </g>

              <text x="56" y="28" fontFamily="Inter, Arial, sans-serif" fontSize="22" fontWeight="700">
                <tspan fill="#F97316">Easy</tspan>
                <tspan fill="#2563EB">Resume</tspan>
              </text>
            </svg>
          </div>
          <nav className="menu">
            <a href="#">Шаблоны</a>
            <a href="#">Шаблоны</a>
            <a href="#">Шаблоны</a>
          </nav>
          <nav className="menu menu-right">
            <div className="button-group">
              <button className="btn btn-outline" name="PreviewBtn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2ecc71" strokeWidth="2">
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  <path
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                  <path d="M22 12h-4l-3-3m0 0L12 6m3 3v6"/>
                </svg>
                Предпросмотр
              </button>
              <button className="btn btn-primary" name="DownloadBtn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 15V3"/>
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <path d="m7 10 5 5 5-5"/>
                </svg>
                Загрузить
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}