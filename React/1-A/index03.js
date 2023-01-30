// import Header from "./Header"
function Header() {
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
function Footer() {
  return (
    <footer>
      <small>@ 2022 Kelvin Ojeda</small>
    </footer>
  )
}

function Body() {
  return (
    <div>
      <h1>Reason to learn react</h1>
      <ol>
        <li>It's a popula library</li>
        <li>It's more likely to get a job as a developer If I know React</li>
      </ol>
    </div>
  )
}

function Page() {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

ReactDOM.render(<Page />, document.getElementById("root"))
