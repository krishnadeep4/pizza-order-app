import Axios from "axios";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";

const RoutesComponent = ({token}) => {
  if (token) {
    Axios.defaults.headers.common["Authorization"] = "Token " + token;
    return <Routes isLoggedIn={true} />;
  } else {
    return <Routes isLoggedIn={false} />;
  }
}

const App = () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  console.log(baseUrl);
  Axios.defaults.baseURL = baseUrl;
  return (
      <Router>
        <RoutesComponent token={false} />
      </Router>
  );
}

export default App;
