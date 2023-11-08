#!/usr/bin/node
const request = require('request');

const movieId = process.argv[2];
const url = 'https://swapi-api.alx-tools.com/api/films/' + movieId;

function requestActors (actors, index) {
  if (actors.length === index) {
    return;
  }

  request(actors[index], (error, response, body) => {
    if (error) {
      console.log(error);
    } else {
      console.log(JSON.parse(body).name);
      requestActors(actors, index + 1);
    }
  });
}

request(url, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    const actors = JSON.parse(body).characters;

    requestActors(actors, 0);
  }
});
