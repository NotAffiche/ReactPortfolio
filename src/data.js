let repositories = Promise.resolve(fetch(
  `https://api.github.com/users/NotAffiche/repos`
).then(response => response.json()).then(repos => {
  for (let i = 0; i < repos.length; i++) {
    repositories[i] = repos[i];
  }
}
));
export const projects = repositories;