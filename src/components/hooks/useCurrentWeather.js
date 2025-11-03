import { useEffect, useState } from "react";
import { getCurrentWeather } from "../../services/apiWeather";
export function useCurrentWeather(position) {
  const [temperature, setTemperature] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [weatherIcon, setweatherIcon] = useState("");

  useEffect(() => {
    async function loadData() {
      setIsLoading(true);

      const weatherData = await getCurrentWeather(
        position.latitude,
        position.longitude
      );

      setTemperature({
        max: weatherData.main.temp_max,
        min: weatherData.main.temp_min,
      });
      setweatherIcon(weatherData.weather[0].icon);

      setIsLoading(false);
    }

    loadData();
  }, []);

  return { temperature, weatherIcon, isLoading };
}
