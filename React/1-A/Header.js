export default function Header() {
  return (
    <header>
      <nav className="nav">
        <img
          className="nav-logo"
          src="./react-logo.png"
          alt="photo"
          width="10%"
        />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}
