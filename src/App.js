import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./Routes/Routes";
import Navigation from "./components/General/Navigation";
function App() {
  return (
    <div className="m-auto w-full font-poppins">
      <Router>
        <Navigation />
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
