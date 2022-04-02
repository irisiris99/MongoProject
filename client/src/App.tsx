import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
  const [data, setData] = useState(null);

  const onClick = () => {
    axios.get("http://localhost:3000/database/")
      .then((response) => {
        setData(response.data);
      });
  };

  return (
    <div>
      <div>
        <button className="load-data" onClick={onClick}>LOAD DATA</button>
      </div>
      {data && (<textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true}></textarea>
      )}
    </div>
  );
}

export default App;
