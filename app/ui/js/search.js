// fetch node api
fetch (`http://localhost:3000/api`)
.then (response => {
    return response.json()
})
.then (data => {
    for (i = 0; i < data.length; i++) {
        searchResults.innerHTML += `<article class="products__card">
            <img src="img/${data[i].imageUrl}" alt="<%= data[0][i].title %>" class="products__card--img">
            <p class="products__card--name"><strong>${data[i].title}</strong></p>
            <p class="products__card--description">${data[i].category}</p>
            <p class="products__card--description">${data[i].brief}</p>
            <a class="products__card--btn" href="/products/${data[i].id}">$${data[i].price}</a>
        </article>`}
});

// search products
let searchResults = document.querySelector("#search__results")

function searchProducts () {
    let searchQuery = document.getElementById("search__bar")
    let search = searchQuery.value.toUpperCase()
    let prod = document.querySelectorAll(".products__card")

    for (i = 0; i < prod.length; i++) {
        let p = prod[i].getElementsByTagName("p") [0];
        let txtValue = p.textContent || p.innerHTML;
        if (txtValue.toUpperCase().indexOf(search) > -1 ) {
            prod[i].classList.remove('remove');
        } else {
            prod[i].classList.add('remove');
        }
    }
}

function sortByPriceDesc() {
    let buttonDesc = document.getElementById('button__desc');
    
}