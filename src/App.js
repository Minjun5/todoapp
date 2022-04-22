import Mainpage from "./mainpage"
import { BrowserRouter as Router, Route } from "react-router-dom"
function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Mainpage}/>
      </Router>
    </div>
  );
}

export default App;
