import { useState, useEffect } from "react";
import Container from "./ui/Container";
import Forecast from "./features/forecast/Forecast";
import Home from "./features/home/Home";
import { useGeolocation } from "./hooks/useGeolocation";
import Loading from "./ui/Loading";

function App() {
  const { getCurrentLocation, isLoading, position } = useGeolocation();

  const [isHome, setIsHome] = useState(true);

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <Container>
      {isLoading ? (
        <Loading />
      ) : isHome ? (
        <Home setIsHome={setIsHome} position={position} />
      ) : (
        <Forecast setIsHome={setIsHome} position={position} />
      )}
    </Container>
  );
}

export default App;
