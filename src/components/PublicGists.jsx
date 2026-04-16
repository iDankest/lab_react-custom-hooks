// src/components/PublicGists.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';

const PublicGists = () => {
  const [gists, setGists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGists = async () => {
      try {
        const response = await axios.get('https://api.github.com/gists/public');
        setGists(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchGists();
  }, []); // Empty dependency array means this runs once on mount

  if (loading) return <p>Loading public gists...</p>;
  if (error) return <p>Error fetching gists: {error.message}</p>;

  return (
    <div>
      <h2>Public Gists</h2>
      <ul>
        {gists.map((gist) => (
          <li key={gist.id}>
            <a href={gist.html_url} target="_blank" rel="noopener noreferrer">
              {gist.description || 'No description'}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PublicGists;
