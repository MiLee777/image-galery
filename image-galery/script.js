const url = 'https://api.unsplash.com/search/photos?query=spring&per_page=30&orientation=landscape&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo';
const picturesContainer = document.getElementById('pictures');

fetch(url)
.then(response => response.json())
.then(data => {
    data.results.map(photo => {
    const img = document.createElement('img');
    img.classList.add('img');
    img.src = photo.urls.regular;
    img.alt = `Image`;
    picturesContainer.appendChild(img);
    });
})
.catch(error => console.error(error));

const input = document.querySelector('#input');

input.addEventListener('keydown', enter);

function enter(e) {
    if (e.keyCode === 13) {
        getInfo(input.value);
    }
}

async function getInfo(data) {
    const url = `https://api.unsplash.com/search/photos?query=${data}&per_page=30&orientation=landscape&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo`;
    const res = await fetch(url);
    const result = await res.json();
    displayresult(result);
}

function displayresult(result) {
    picturesContainer.innerHTML = '';
    result.results.forEach(photo => {
        const img = document.createElement('img');
        img.classList.add('img');
        img.src = photo.urls.regular;
        img.alt = `Image`;
        picturesContainer.appendChild(img);
    });
}




