import './styles/Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <a href="/resume.pdf" download className="footer-link">Download Resume</a>
      </div>
      <div className="footer-right">
        <span>Follow me on:</span>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
    </footer>
  )
}
