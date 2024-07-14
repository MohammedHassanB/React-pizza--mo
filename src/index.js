import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import PizzaData from "./data";
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  return (
    <header className="header">
      <h1>React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const numPizzas = PizzaData.length;
  return (
    <main className="menu">
      <h2>Our menu</h2>
      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italin cuisine. 6 creative dishes to choose from. All from
            our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {PizzaData.map((pizza) => (
              <Pizza props={pizza} key={pizza.photoName} />
            ))}
          </ul>
        </>
      ) : (
        <p>We are working on our menu. Please com back later...</p>
      )}
      {/* <Pizza props={PizzaData[0]} />
      <Pizza props={PizzaData[1]} />
      <Pizza props={PizzaData[2]} />
      <Pizza props={PizzaData[3]} />
      <Pizza props={PizzaData[4]} />
      <Pizza props={PizzaData[5]} />*/}
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>We are open till {closeHour}:00, Come visit us or order online</p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>
          You`re welcome between {openHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
}
function Pizza({ props }) {
  return (
    <li className={`pizza ${props.soldOut ? "sold-out" : ""}`}>
      <img src={props.photoName} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.soldOut ? "SOLD OUT" : +props.price}</span>
      </div>
    </li>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
