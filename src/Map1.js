function Map1() {
  var employees = [
    { empId: 1234, name: "John", designation: "SE", exp: 2.5 },
    { empId: 4567, name: "Tom", designation: "SSE", exp: 5.5 },
    { empId: 8910, name: "Kevin", designation: "TA", exp: 1.5 },
  ];
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Emp Id</th>
            <th>Name</th>
            <th>Designation</th>
            <th>Eligibilty</th>
          </tr>
        </thead>
        <tbody>
            {
                employees.map((emp)=>{return(
                    <tr key={emp.empId}>
                        <td>{emp.empId}</td>
                        <td>{emp.name}</td>
                        <td>{emp.designation}</td>
                        <td>{emp.exp>=2.5?<h4>Eligible</h4>:<h4>Not Eligible</h4>}</td>

                    </tr>
                )})
            }
        </tbody>
      </table>
    </>
  );
}
export default Map1;
