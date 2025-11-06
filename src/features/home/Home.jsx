import { Button } from "@mui/material";
import styles from "./Home.module.css";
import Loading from "../../ui/Loading";
import Day from "./Day";
import { useCurrentWeather } from "../../hooks/useCurrentWeather";
function Home({ setIsHome, position }) {
  const { temperature, weatherIcon, isLoading } = useCurrentWeather(position);

  return (
    <section className={styles.section}>
      {isLoading && <Loading />}
      {!isLoading && (
        <>
          <Day temperature={temperature} icon={weatherIcon} />
          <Button
            variant="contained"
            size="large"
            onClick={() => setIsHome(false)}
          >
            Get Start
          </Button>
        </>
      )}
    </section>
  );
}
export default Home;
