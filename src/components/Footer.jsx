import './Footer.css'

const footerGroups = [
  {
    title: 'Sections',
    links: ['World', 'Politics', 'Business', 'Technology']
  },
  {
    title: 'About',
    links: ['Our newsroom', 'Careers', 'Contact us', 'Accessibility']
  },
  {
    title: 'Support',
    links: ['Help center', 'Newsletters', 'Subscription', 'Privacy']
  }
]

function Footer() {
  return (
    <footer className="site-footer">

      <div className="footer-main">

        <div className="footer-intro">
          <a className="brand footer-brand" href="/">
            The Daily Dispatch
          </a>

          <p>
            Independent reporting for a changing world.
          </p>

          <div className="social-links" aria-label="Social media">
            <a href="#facebook" aria-label="Facebook">f</a>
            <a href="#instagram" aria-label="Instagram">◎</a>
            <a href="#x" aria-label="X">𝕏</a>
          </div>
        </div>

        {footerGroups.map((group) => (
          <div className="footer-group" key={group.title}>
            <h2>{group.title}</h2>

            {group.links.map((link) => (
              <a
                href={`#${link.toLowerCase().replaceAll(' ', '-')}`}
                key={link}
              >
                {link}
              </a>
            ))}
          </div>
        ))}

      </div>

      <div className="footer-bottom">
        <span>© 2026 The Daily Dispatch</span>
        <span>Truth, context, and clarity.</span>
      </div>

    </footer>
  )
}

export default Footer