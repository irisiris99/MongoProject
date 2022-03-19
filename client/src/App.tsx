import './App.css';
import { useEffect, useState } from 'react';


function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (await
      await fetch(`https://yts.mx/api/v2/list_movies.json?minimun_rating=8`
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
