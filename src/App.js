import VehicleManagement from "./pages/VehicleManagement";
import "./App.less";
import { useEffect, useState } from "react";

function App() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/vehicles");

      if (!res.ok) {
        console.log("Something went wrong!");
      }

      const data = await res.json();

      const vehiclesData = data.map((vehicle, idx) => {
        return {
          key: idx + 1,
          ...vehicle,
        };
      });

      setVehicles(vehiclesData);
      }catch(e) {
        console.log("Something went wrong");
      }
      
    };

    fetchVehicles();
  }, []);

  let content = <p>Loading...</p>;

  if (vehicles.length > 0) {
    content = <VehicleManagement vehiclesData={vehicles} />;
  }

  return <div className="App">{content}</div>;
}

export default App;
