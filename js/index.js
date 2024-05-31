document.addEventListener('DOMContentLoaded', () => {
  const collectionApiUrl = "https://api.artic.edu/api/v1/artworks";
  const artworkApiUrl = "https://api.artic.edu/api/v1/artworks/129884";
  const collectionList = document.getElementById('collectionList');
  const artworkDetails = document.getElementById('artworkDetails');

  // Fetch collection data
  fetch(collectionApiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error("Couldn't fetch data from ARTIC API");
      }
      return response.json();
    })
    .then(data => {
      const artworks = data.data;
      artworks.forEach(artwork => {
        const listItem = document.createElement('li');
        listItem.textContent = `${artwork.title} by ${artwork.artist_display}`;
        collectionList.appendChild(listItem);
      });
    })
    .catch(error => {
      console.error("Something went wrong with the collection API:", error);
    });

  // Fetch single artwork data
  fetch(artworkApiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error("Couldn't fetch data from ARTIC API");
      }
      return response.json();
    })
    .then(data => {
      const artwork = data.data;
      const artworkHtml = `
        <h3>${artwork.title}</h3>
        <p>By ${artwork.artist_display}</p>
        <p>Date: ${artwork.date_display}</p>
        <img src="${artwork.image_id ? `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg` : ''}" alt="${artwork.title}">
      `;
      artworkDetails.innerHTML = artworkHtml;
    })
    .catch(error => {
      console.error("Something went wrong with the artwork API:", error);
    });
});