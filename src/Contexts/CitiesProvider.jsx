/* eslint-disable */
import { createContext, useContext } from "react";
import { useEffect, useState } from "react";
const CeitiesContext = createContext();

const BASED_URL = `http://localhost:8000`;

function CitiesProvider({ children }) {
  const [cities, setIsCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASED_URL}/cities`);
        const data = await res.json();
        setIsCities(data);
      } catch (error) {
        alert("Something Went Wrong...");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  async function getCity(id) {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASED_URL}/cities/${id}`);
      const data = await res.json();
      setCurrentCity(data);
    } catch (error) {
      alert("Something Went Wrong...");
    } finally {
      setIsLoading(false);
    }
  }
  async function createCity(newCity) {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASED_URL}/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      // console.log(data);
      setIsCities((city) => [...city, data]);
    } catch (error) {
      alert("Something Went Wrong...");
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <CeitiesContext.Provider
      value={{ cities, isLoading, currentCity, createCity, getCity }}
    >
      {children}
    </CeitiesContext.Provider>
  );
}
function useCities() {
  const context = useContext(CeitiesContext);
  if (context === undefined)
    throw new Error("CitiesContext was used outside the CitiesProvider...");
  return context;
}

export { CitiesProvider, useCities };
