const apiUrl = "https://api.artic.edu/api/v1/artworks";

let repositories = [];
fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Couldn't fetch data from ARTIC API");
    }
    return response.json();
  })

  .then((data) => {
    console.log( data.data[0].artist_display);
    repositories = data;
    console.log(repositories);
    const projectSection = document.getElementById("Collection");

    const projectList = projectSection.querySelector("ul");
  })

  .catch((error) => {
    console.error("Something went wrong:", error);
  });

const projectList = document.getElementById("projectList");

// Loop through the repositories and create list items
repositories.forEach((repo) => {
  const listItem = document.createElement("li");
  listItem.textContent = repo.data[0].artist_display; // Display the repository name
  projectList.appendChild(listItem);
  console.log(listItem);
});
