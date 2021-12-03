import React, { createContext } from "react";
import * as Location from "expo-location";
import * as TaskManager from "expo-task-manager";
import haversine from "haversine";
import useTimer from "../hooks/useTimer";

const LocationContext = createContext({});
const TASK_FETCH_LOCATION = "TASK_FETCH_LOCATION";

const defaultCircuit = {
  circuitOn: false,
  prevLatLng: {},
  coordinates: [],
  distanceTravelled: 0,
  averageSpeed: 0,
  elevation: 0,
  altitude: 0,
  speed: 0,
};

const LocationProvider = ({ children }) => {
  const cronometro = useTimer();
  const [circuit, setCircuit] = React.useState(defaultCircuit);

  React.useEffect(() => {
    async function getLocation() {
      await Location.startLocationUpdatesAsync(TASK_FETCH_LOCATION, {
        accuracy: Location.Accuracy.BestForNavigation,
        activityType: Location.ActivityType.Fitness,
        showsBackgroundLocationIndicator: true,
        deferredUpdatesInterval: 1000,
        distanceInterval: 1,
        timeInterval: 1000,
        foregroundService: {
          notificationTitle: "Noves Bike",
          notificationBody:
            "O aplicativo está sendo executado em segundo plano",
        },
      });
    }
    getLocation();
    return () => Location.stopLocationUpdatesAsync(TASK_FETCH_LOCATION);
  }, []);

  TaskManager.defineTask(
    TASK_FETCH_LOCATION,
    async ({ data: { locations }, error }) => {
      if (error) return;

      const {
        timestamp,
        coords: { latitude, longitude, altitude, speed },
      } = locations[0];
      const { coordinates, distanceTravelled } = circuit;

      const newCoordinate = {
        latitude,
        longitude,
        timestamp,
      };

      if (circuit.circuitOn) {
        setCircuit({
          ...circuit,
          prevLatLng: newCoordinate,
          coordinates: coordinates.concat([newCoordinate]),
          distanceTravelled:
            distanceTravelled + calcDistance(newCoordinate, "meter"),
          averageSpeed: calcAvgSpeed(distanceTravelled),
          altitude,
          speed,
        });
      } else {
        setCircuit({
          ...circuit,
          prevLatLng: newCoordinate,
          speed,
        });
      }
    }
  );

  /**
   * Calcula a distância entre duas coordenadas utilizando a formula de Haversine
   * unit: km, mile, meter, nmi
   * @param {*} newLatLng
   * @param {*} unit
   * @returns float
   */
  const calcDistance = (newLatLng, unit = "meter") => {
    const { prevLatLng } = circuit;
    return haversine(prevLatLng, newLatLng, { unit }) || 0;
  };

  /**
   * Calcula a velocidade média percorrida
   * @param {*} distanceTravelled
   * @returns float
   */
  const calcAvgSpeed = (distanceTravelled) => {
    return parseFloat(distanceTravelled / cronometro.timer) || 0;
  };

  /**
   * Sinaliza para gravar dados no circuito
   * @returns
   */
  const startCircuit = () => {
    if (!circuit.circuitOn) {
      cronometro.play();
      setCircuit({ ...circuit, circuitOn: true });
    }
  };

  /**
   * Sinaliza para de impedir de receber novos dados
   * @returns
   */
  const stopCircuit = () => {
    if (circuit.circuitOn) {
      cronometro.pause();
      setCircuit({ ...circuit, circuitOn: false });
    }
  };

  /**
   * Reinicia o circuito com dados padrão
   * @returns
   */
  const resetCircuit = () => {
    cronometro.stop();
    setCircuit(defaultCircuit);
  };

  const useContext = {
    circuit,
    timer: cronometro,
    start: startCircuit,
    stop: stopCircuit,
    clear: resetCircuit,
  };

  return (
    <LocationContext.Provider value={useContext}>
      {children}
    </LocationContext.Provider>
  );
};

export { LocationProvider, LocationContext };
