function KpiCards({ data }) {

    const totalCalls = data.length;
  
    const totalCost = data.reduce(
      (sum, call) => sum + parseFloat(call.callCost),
      0
    );
  
    const avgDuration =
      data.reduce((sum, call) => sum + call.callDuration, 0) / data.length;
  
    const successfulCalls = data.filter(call => call.callStatus === true).length;
  
    const failedCalls = data.filter(call => call.callStatus === false).length;
  
    return (
      <div style={{display: "flex", gap: "20px", marginBottom: "30px"}}>
        
        <div>
          <h3>Total Calls</h3>
          <p>{totalCalls}</p>
        </div>
  
        <div>
          <h3>Total Cost</h3>
          <p>${totalCost.toFixed(2)}</p>
        </div>
  
        <div>
          <h3>Average Duration</h3>
          <p>{avgDuration.toFixed(0)} sec</p>
        </div>
  
        <div>
          <h3>Successful Calls</h3>
          <p>{successfulCalls}</p>
        </div>
  
        <div>
          <h3>Failed Calls</h3>
          <p>{failedCalls}</p>
        </div>
  
      </div>
    );
  }
  
  export default KpiCards;