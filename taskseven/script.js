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
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    if(page === 1){
        SearchResult.innerHTML = "";
    }

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
    ShowMoreBtn.style.display="block";
}

SearchForm.addEventListener("submit",(e) => {
    e.preventDefault();
    page = 1;
    searchImage();
    
})

ShowMoreBtn.addEventListener("click",()=>{
    page++;
    searchImage();
})

// const accessKey = "z-fmBcWHuUqsy9WI8-I7gWEJbQ0QkwffJgJFGAzyAu4";
// const SearchForm = document.getElementById("search-form");
// const SearchBox = document.getElementById("search-box");
// const SearchResult = document.getElementById("search-result");
// const ShowMoreBtn = document.getElementById("show-more-btn");

// let keyword = "";
// let page = 1;

// async function searchImage() {
//     keyword = SearchBox.value;
//     const url = 'https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}';

//     try {
//         const response = await fetch(url);

//         if (!response.ok) {
//             throw new Error('Failed to fetch data from Unsplash API: ${response.status} ${response.statusText}');
//         }

//         const data = await response.json();

//         const results = data.results;

//         if (!results || results.length === 0) {
//             console.log('No results found');
//             return;
//         }

//         results.map((result) => {
//             const image = document.createElement("img");
//             image.src = result.urls.small;
//             const imageLink = document.createElement("a");
//             imageLink.href = result.links.html;
//             imageLink.target = "_blank";

//             imageLink.appendChild(image);
//             SearchResult.appendChild(imageLink);
//         });
//     } catch (error) {
//         console.error(error);
//         // Handle the error gracefully, display a message to the user, or try again
//     }
// }
// SearchForm.addEventListener("submit",(e) => {
//         e.preventDefault();
//         page = 1;
//         searchImage();
        
//     })