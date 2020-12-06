import "./App.css";
import FeaturedProduct from "./components/featuredProduct/FeaturedProduct";
import Header from "./components/header/Header";
import LeftSideMain from "./components/leftSide/LeftSideMain";
import RightMain from "./components/rightSide/RightMain";

function App() {
  return (
    <div className="App">
      <main>
        <Header />
        <div style={{ display: "flex", padding: "10px" }}>
          <LeftSideMain />
          <RightMain />
        </div>
      </main>
    </div>
  );
}

export default App;
