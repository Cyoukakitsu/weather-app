import Loading from "./Loading";
import { useForecastWeather } from "../hooks/useForecastWeather";
import ForecastList from "./ForecastList";
import AppNav from "./AppNav";
// Weather forecast
// https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

function Forecast({ setIsHome, position }) {
  const { weatherForecastList, isLoading } = useForecastWeather(position);

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && (
        <>
          <AppNav setIsHome={setIsHome} />

          <ForecastList weatherForecastList={weatherForecastList} />
        </>
      )}
    </>
  );
}
export default Forecast;
