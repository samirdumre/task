import "./App.css";

const GlassCard = () => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="section">
        <div className="rectangle"></div>
          <div className="circle"></div>
          <div className="lines">
          <div className="big-line"></div>
          <div className="small-line"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <GlassCard />
    </div>
  );
}

export default App;
