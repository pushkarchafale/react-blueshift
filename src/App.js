import React, { useState } from 'react';
import './style.css';
import axios from 'axios';

export default function App() {
  const [listOfRepo, setListOfRepo] = useState(null);

  function getUserRepos(event) {
    console.log(event.target.value);
    axios(`https://api.github.com/users/${event.target.value}/repos`).then(
      function(data) {
        console.log(data.data);
        setListOfRepo(data.data);
      }
    );
  }

  return (
    <div>
      <div id='input-section'>
        <label>Get User Repos: </label>
        <input id="get-user-repos" onChange={getUserRepos} type="text" />
        <br />
        <label> Search: </label>
        <input type="text" />
      </div>
      <div id='list-section'>
        {listOfRepo === null ? '' : <>{listOfRepo.map(repo => <a href={repo.url} class='repo-name'>{repo.name}</a>)}</>}
      </div>
    </div>
  );
}
