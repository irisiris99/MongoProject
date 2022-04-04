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

  const [toDo, setToDo] = useState("");
  const onChange = (event :any) => setToDo(event.target.value);
  const onSubmit = (event :any) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDo("");
  }

  return (
    <div>
      <div>
        <button className="load-data" onClick={onClick}>LOAD DATA</button>
      </div>
      {data && (<textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true}></textarea>)}
      <div>
        <form onSubmit={onSubmit}>
          <input 
            onChange={onChange}
            value={toDo} 
            type="text" 
            placeholder="Write To Do.." />
          <button>Add To Do</button>
        </form>
      </div>
    </div>
  );
}

export default App;
