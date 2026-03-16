import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

function TimelineChart({ data }) {
  if (data.length === 0) return null;

  // Group calls by hour
  const callsByHour = {};

  data.forEach(call => {
    const date = new Date(call.startTime);
    const hour = date.getHours();

    if (!callsByHour[hour]) {
      callsByHour[hour] = 0;
    }

    callsByHour[hour]++;
  });

  const chartData = Object.keys(callsByHour).map(hour => ({
    hour: `${hour}:00`,
    calls: callsByHour[hour]
  }));

  return (
    <div style={{ width: "100%", height: 300, marginBottom: "30px" }}>
      <h2>Call Activity Timeline</h2>

      <ResponsiveContainer>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="hour" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="calls" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>

    </div>
  );
}

export default TimelineChart;