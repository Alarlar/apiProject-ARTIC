// fetch-test.js
const username = "alarlar";
const apiUrl = `https://api.github.com/users/${username}/repos`; 
fetch(apiUrl)

  .then((response) => {
    if (!response.ok) {
      throw new Error("Couldn't fetch data from GitHub");
    }
    return response.json();
  })

  .then((data) => {
    console.log(data);
    const repositories = data;
    console.log(repositories);
    const projectSection = document.getElementById("Projects");

    const projectList = projectSection.querySelector("ul");

  })

.catch((error) => {
    console.error("Something went wrong:", error)
  });

  const projectList = document.getElementById("projectList");

// Loop through the repositories and create list items
repositories.forEach((repo) => {
  const listItem = document.createElement("li");
  listItem.textContent = repo.name; // Display the repository name 
  projectList.appendChild(listItem);
});




  
 