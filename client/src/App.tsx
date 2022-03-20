import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { setTextRange } from 'typescript';


function App ()  {
  const [data, setData] = useState(null);

  const onClick = () => {
    axios.get("http://localhost:3000/database/")
      .then((response) => {
        setData(response.data);
      });
  };

  return (
    <div>
      <div className="button">
        <button onClick={onClick}>가져오기</button>
      </div>
      {data && (<textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true}></textarea>
      )}
    </div>
  );
}

export default App;
