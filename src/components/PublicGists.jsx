// src/components/PublicGists.jsx
import { useFetch } from "../hooks/useFetch";

const PublicGists = () => {
  const {data, loading, error} = useFetch('https://api.github.com/gists/public');

  if (loading) return <p>Loading public gists...</p>;
  if (error) return <p>Error fetching gists: {error.message}</p>;

  return (
    <div>
      <h2>Public Gists</h2>
      <ul>
        {data.map((data) => (
          <li key={data.id}>
            <a href={data.html_url} target="_blank" rel="noopener noreferrer">
              {data.description || 'No description'}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PublicGists;
