const accessKey = "z-fmBcWHuUqsy9WI8-I7gWEJbQ0QkwffJgJFGAzyAu4";
const SearchForm = document.getElementById("search-form");
const SearchBox = document.getElementById("search-box");
const SearchResult = document.getElementById("search-result");
const ShowMoreBtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

async function searchImage()
{
    keyword = SearchBox.value;
    const url = 'https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}';

    const response = await fetch(url);
    const data = await response.json();

    const results= data.results;

    results.map((result) =>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";


        imageLink.appendChild(image);
        SearchResult.appendChild(imageLink);

    })
}

SearchForm.addEventListener("submit",(e) => {
    e.preventDefault();
    page = 1;
    searchImage();
    
})