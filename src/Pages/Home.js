function Hero() {
  return (
    <div className="heroSection">
      <h1>Little Lemon</h1>
      <h3>Chicago</h3>
      <p>Idk</p>
      <a href="#reservations">
        <button className="reserveButton">Reserve A Table</button>
      </a>
    </div>
  );
}

function Cards() {
  return <div className="foodCards"></div>;
}

function Home() {
  return <Hero />;
}

export default Home;
