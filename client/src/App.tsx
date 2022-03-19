import './App.css';
import { useEffect, useState } from 'react';


function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (await
      await fetch(`https://localhost::3000/database/`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1> 
      ) : (
        <div>

        </div>
      )}
    </div>
  );
}

export default App;
