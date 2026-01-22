import AppNav from "../components/AppNav";
import PageNav from "../components/PageNav";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <PageNav />
      <AppNav />
      <h1>HomePage</h1>
      <Link to="/app">Go to the App</Link>
    </div>
  );
}

export default HomePage;
