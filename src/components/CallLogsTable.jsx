function CallLogsTable({ data }) {
    if (data.length === 0) return null;
  
    return (
      <div style={{ marginTop: "30px" }}>
        <h2>Recent Call Logs</h2>
  
        <table border="1" cellPadding="10" style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>Caller</th>
              <th>Receiver</th>
              <th>City</th>
              <th>Duration (sec)</th>
              <th>Cost ($)</th>
              <th>Status</th>
            </tr>
          </thead>
  
          <tbody>
            {data.slice(0, 10).map((call, index) => (
              <tr key={index}>
                <td>{call.caller}</td>
                <td>{call.receiver}</td>
                <td>{call.city}</td>
                <td>{call.duration}</td>
                <td>{call.callCost}</td>
                <td>{call.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
  
      </div>
    );
  }
  
  export default CallLogsTable;