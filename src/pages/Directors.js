import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directorss, setDirectorss] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/directors")
    .then(r => r.json())
    .then(data => setDirectorss(data))
    .catch((error) => console.log(error))
  }, []);

  const directorList = directorss.map((director) => {
    return (
      <article key={director.id}>
        <h2>{director.name}</h2>
        <li>{director.movies}</li>
      </article>
    )
  })

  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <h1>Directors Page</h1>
        {directorList}
      </main>
    </>
  );
};

export default Directors;
