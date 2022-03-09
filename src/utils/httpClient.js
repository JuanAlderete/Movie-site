const API = "https://api.themoviedb.org/3";

export function get(path) {
  return fetch(API + path, {
    headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTNjMzM5ZjE0M2Y1MWJlMmUyM2I2MzhkODc5ZTYxYiIsInN1YiI6IjYyMDU5NzE2NTU5MzdiMDA5NmFkNWYwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YYAk503l7wusNFVTTEOKa6cBaloOvYBiUD4Ajt4yBAo",
        "Content-Type": "application/json;charset=utf-8",
    },
  }).then(result => result.json())
}

