import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
      <Button />
    </div>
  );
}

export default App;

function Header() {
  return (
    <div className="header">
      <h1>FAST REACT PIZZA CO</h1>
    </div>
  );
}

function Footer() {
  const time = new Date().getHours;
  console.log(time);

  if (time >= 12 && time < 22) {
    return (
      <footer className="footer" style={{ textAlign: "center", color: "green" }}>
        We are OPEN. We're open from 12:00 to 22:00. Come visit us or order
        online.
      </footer>
    );
  } else {
    return (
      <footer className="footer" style={{ textAlign: "center", color: "green" }}>
        We are CLOSED. We're open from 12:00 to 22:00. Come visit us or order
        online.
      </footer>
    );
  }
}

function Menu() {
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <p>
        Authentic Italian Cuisine. 6 creative dishes to choose from. All from
        our stone oven, all organic, all delicious.
      </p>
      <div className="pizzas">
        <Pizza name = "Focaccia" description="Bread with itailian olive oil and rosemary." img="focaccia.jpg" qty="6"
        /> 

      <Pizza name = "Funhi" description="Bread with itailian olive oil and rosemary." img="funghi.jpg" qty="6"
        /> 
         <Pizza name = "Margherita" description="Bread with itailian olive oil and rosemary." img="margherita.jpg" qty="6"
        /> 
        <Pizza name = "Prosciutto" description="Bread with itailian olive oil and rosemary." img="prosciutto.jpg" qty="6"
        /> 
         <Pizza name = "Salamino" description="Bread with itailian olive oil and rosemary." img="salamino.jpg" qty="6"
        /> 
         <Pizza name = "Spinaci" description="Bread with itailian olive oil and rosemary." img="spinaci.jpg" qty="6"
        /> 
      </div>
    </div>
  );
}

function Pizza(props) {
  return (
    <div className="pizza">
      <img src={props.img} alt={props.name}></img>
      <div>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <span>{props.qty}</span>
      </div>
    </div>
  );
}

function Button() {
  return <button className="btn">Order</button>;
}