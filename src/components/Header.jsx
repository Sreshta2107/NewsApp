import './Header.css'

const navigation = ['World', 'Politics', 'Business', 'Technology', 'Culture']

function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">

        <a className="brand" href="/" aria-label="The Daily Dispatch home">
          <span className="brand-mark">D</span>
          <span>The Daily Dispatch</span>
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <a
              href={`#${item.toLowerCase()}`}
              key={item}
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="header-actions">

          <button className="icon-button" type="button" aria-label="Search">
            🔍
          </button>

          <button className="subscribe-button" type="button">
            Subscribe
          </button>

          <button className="menu-button icon-button" type="button">
            ☰
          </button>

        </div>
      </div>
    </header>
  )
}

export default Header