import {  Tab, Tabs } from "react-bootstrap";
import Fibo from "./components/Fibo";
import Login from "./components/Login";
import ShippingCostCalculator from "./components/ShippingCostCalculator";

function App() {
  return (
    <Tabs
      defaultActiveKey="fibo"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="fibo" title="Fibo">
        <Fibo/>
      </Tab>
      <Tab eventKey="shipcost" title="Shipcost">
        <ShippingCostCalculator/>
      </Tab>
      <Tab eventKey="login" title="Login">
        <Login/>
      </Tab>
    </Tabs>
  );
}

export default App;
