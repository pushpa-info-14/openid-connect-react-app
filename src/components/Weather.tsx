import { useEffect, useState } from "react";
import { useAuth } from "oidc-react";

// interface Props {
//   auth: AuthContextProps;
// }

function Wheather() {
  const auth = useAuth();
  const token = auth.userData?.access_token;
  //console.log(token);

  const url = "https://localhost:7133/WeatherForecast";

  const [records, setRecords] = useState<any[]>([]);

  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setRecords(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div>
        {/* <h3>Wheather component consuming rest-api</h3> */}
        <table id="weather" className="table table-striped">
          <thead>
            <tr>
              <th>Date</th>
              <th>Temperature (°C)</th>
              <th>Temperature (°F)</th>
              <th>Summary</th>
            </tr>
          </thead>
          <tbody>
            {records.map((list, index) => (
              <tr key={index}>
                <td>{list.date}</td>
                <td>{list.temperatureC}°C</td>
                <td>{list.temperatureF}°F</td>
                <td>{list.summary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Wheather;
