// src/components/UserGists.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';

const UserGists = () => {
  const [gists, setGists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const username = 'gaearon'; // A famous React developer!

  useEffect(() => {
    const fetchGists = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/users/${username}/gists`,
        );
        setGists(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchGists();
  }, []); // The username is hardcoded, so we still run once

  if (loading) return <p>Loading {username}'s gists...</p>;
  if (error) return <p>Error fetching gists: {error.message}</p>;

  return (
    <div>
      <h2>{username}'s Gists</h2>
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

export default UserGists;
