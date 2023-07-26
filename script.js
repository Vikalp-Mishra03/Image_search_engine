const accessKey = "NlcrOmJHeoH2qCFWS6NCDHE57y_bBiRFv9sAP8pZlbY";

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

async function searchImages() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}`;

    const response = await fetch(url)
    const data = await response.json()

    const results = data.results
    results.map((result) => {
        const image = document.createElement("img")
        image.src = result.urls.small;
        const imageLink = document.createElement("a")
        imageLink.href = result.links.html
        imageLink.target = "_blank"
        imageLink.appendChild(image)
        searchResult.appendChild(imageLink)
    })
    // try {
    //     const response = await fetch(url);
    //     if (!response.ok) {
    //         throw new Error("Network response was not ok");
    //     }
    //     const data = await response.json();
    //     console.log(data);
    //     // Do something with the data, like displaying images in the searchResult div
    // } catch (error) {
    //     console.error("Error fetching images:", error);
    // }
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
});
