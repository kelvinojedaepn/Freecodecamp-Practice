const h1 = document.createElement("h1")
h1.textContent = "Hey this a creation of using impartiive"
h1.className = "header"
document.getElementById("root").append(h1)
const header = (
  <div>
    <h1 className="header"> Hey react</h1>
    <p>Hola react parrafo</p>
  </div>
)
console.log(h1)

ReactDOM.render(header, document.getElementById("root"))
console.log(header)
// "$$typeof": Symbol("react.element")
// ​
// _owner: null
// ​
// _self: null
// ​
// _source: null
// ​
// _store: Object { … }
// ​
// key: null
// ​
// props: Object { className: "header",
// children: " Hey react" }
// ​
// ref: null
// ​
// type: "h1"

const navbar = (
  <nav>
    <h1>Hola que tal</h1>
    <ul>
      <li>Pricing</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
)

function FuntionOfReact() {
  return (
    <nav>
      <h1>Hola que tal</h1>
      <ul>
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

// ReactDOM.render(navbar, document.getElementById("root"))
// document.getElementById("root").append(JSON.stringify(navbar))
ReactDOM.render(<FuntionOfReact />, document.getElementById("root"))
