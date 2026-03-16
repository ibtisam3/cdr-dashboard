import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from "recharts";

function CityPieChart({ data }) {
  if (data.length === 0) return null;

  const cityCounts = {};

  data.forEach(call => {
    if (!cityCounts[call.city]) {
      cityCounts[call.city] = 0;
    }
    cityCounts[call.city]++;
  });

  const chartData = Object.keys(cityCounts).map(city => ({
    name: city,
    value: cityCounts[city]
  }));

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AA66CC"];

  return (
    <div style={{ width: "100%", height: 300, marginBottom: "30px" }}>
      <h2>Calls by City</h2>

      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            outerRadius={100}
            label
          >
            {chartData.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>

    </div>
  );
}

export default CityPieChart;