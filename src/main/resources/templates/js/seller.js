// This returns houses that have recently been sold in the houston area
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '4b79262d6emsh7cc3f4048fc7718p12b945jsndb86ef3ab993',
        'X-RapidAPI-Host': 'zillow-com1.p.rapidapi.com'
    }
};
let deleteListing = 'https://zillow-com1.p.rapidapi.com/propertyExtende…Sold&home_type=Houses&sort=Homes_for_Youundefined'
let counter = 0

let imgSrc
let address
let propertyType
let listing
let appendHtml = document.getElementById("listing-display");
function getListings() {
    fetch('https://zillow-com1.p.rapidapi.com/propertyExtendedSearch?location=houston%2C%20Tx&page=1&status_type=RecentlySold&home_type=Houses&sort=Homes_for_You', options)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            imgSrc = data.props[0].imgSrc
            address = data.props[0].address
            propertyType = data.props[0].propertyType
            console.log(imgSrc);
            console.log(address);
            console.log(propertyType);

            let html = `
                          <div class="card" style="width: 18rem;">
                          <img class="card-img-top" src="${data.props[19].imgSrc}" alt="Card image cap">
                          <div class="card-body">
                          <h5 class="card-title">SAVED HOMES</h5>
                          <p class="card-text">${data.props[19].address}</p>
                          <p class="card-text">${data.props[19].propertyType}</p>
                          <p>PRICE</p>
                          <p>$200,000</p>
                          <a href="#" class="btn btn-primary" id=${data.props[19].id}" onclick="deleteFunction(this.parentNode.parentNode)">DELETE</a>
                          <a href="#" class="btn btn-primary">EDIT</a>
                          </div>
                          </div>
                            
                          <div class="card" style="width: 18rem;">
                          <img class="card-img-top" src="${data.props[23].imgSrc}" alt="Card image cap">
                          <div class="card-body">
                          <h5 class="card-title">SAVED HOMES</h5>
                          <p class="card-text">${data.props[23].address}</p>
                          <p class="card-text">${data.props[23].propertyType}</p>
                          <p>PRICE</p>
                          <p>$200,000</p>
                          <a href="#" class="btn btn-primary" id=${data.props[23].id}" onclick="deleteFunction(this.parentNode.parentNode)">DELETE</a>
                          <a href="#" class="btn btn-primary" id="update">EDIT</a>
               
                          </div>
                          </div>

                          <div class="card" style="width: 18rem;">
                          <img class="card-img-top" src="${data.props[30].imgSrc}" alt="Card image cap">
                          <div class="card-body">
                          <h5 class="card-title">SAVED HOMES</h5>
                          <p class="card-text">${data.props[30].address}</p>
                          <p class="card-text">${data.props[30].propertyType}</p>
                          <p>PRICE</p>
                          <p>$200,000</p>
                          <a href="#" class="btn btn-primary"id=${data.props[30].id}"  onclick="deleteFunction(this.parentNode.parentNode)">DELETE</a>
                          <a href="#" class="btn btn-primary">EDIT</a>
                          </div>
                          </div>`
            $(appendHtml).append(html)

        })
}
getListings();

//DELETE FUNCTION
function deleteFunction(element) {
    let id = $(element).remove('.card').data('id');
    fetch(deleteListing + id, {
        method: 'DELETE',
    }).then(response => {
        console.log(response);
        $(element).remove('.card').remove();
    });
}

//DELETE METHOD
// function deleteMovies(id) {
//     fetch(deleteUrl + id, {
//         method: 'DELETE',
//     }).then(response => {
//         console.log(response);
//         getMovies();
//     });
// }
//NOT USED ATM
function setButtons() {
    let deleteBtn = document.querySelectorAll('a');
    deleteBtn.forEach(x => {
        deleteBtn.addEventListener('click', function (e) {
            e.preventDefault();
        });
    });
}
//EDIT FORM FUNCTION
