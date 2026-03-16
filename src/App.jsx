import { useEffect, useState } from "react";
import { fetchCallData } from "./services/api";
import KpiCards from "./components/KpiCards";
import CallDurationChart from "./components/CallDurationChart";
import CallCostChart from "./components/CallCostChart";
import TimelineChart from "./components/TimelineChart";
import CityPieChart from "./components/CityPieChart";
import CallLogsTable from "./components/CallLogsTable";

function App() {
  const [cdrData, setCdrData] = useState([]);

  useEffect(() => {
    fetchCallData().then((data) => {
      setCdrData(data);
    });
  }, []);

  return (
    <div>
      <h1>Call Analytics Dashboard</h1>
  
      <KpiCards data={cdrData} />
   <CallDurationChart data={cdrData} />
   <CallCostChart data={cdrData} />
   <TimelineChart data={cdrData} />
   <CityPieChart data={cdrData} />
   <CallLogsTable data={cdrData} />

    </div>
  );
}

export default App;
