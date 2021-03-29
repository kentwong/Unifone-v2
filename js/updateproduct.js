// use AJAX to load XML file and save to array
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        // Read data from xml and store to array
        readPhonesXML(this);
        // Display the phones in a nice tabular format using the above array
        updateUI();
    }
};
xhttp.open("GET", "xml/phones.xml", true);
xhttp.send();

function updateUI() {
    var brandSelected = "Samsung";
    for (var i = 0; i < productsArray.length; i++) {
        if (productsArray[i].display == "true" && productsArray[i].brand == brandSelected) {
            document.getElementById('products').innerHTML += '<div class="product-card col-sm-12 col-md-6 col-lg-4"><img src="images/phones/' + productsArray[i].productImage + '" alt="phone image"><h5>' + productsArray[i].brand + '</h5><h3>' + productsArray[i].model + '</h3><br>' + 'Device from<br><b>$<span style="font-size: 36px">' + productsArray[i].mpp36m35 + '</span></b> per month<br>' + 'over 36 months. <br> Min cost $' + productsArray[i].rcc + ' + plan cost. <br><a href="#" class="cartBtn" onclick="checkDetails(this)" data-product-id="' + productsArray[i].productID + '">Select</a></div>';
        }
    }

    console.log(productsArray);
}

// Use AJAX to check the availability of the phones
function checkDetails(id) {
    var productID = id.getAttribute('data-product-id');

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Clear data array before reading xml again to see if there is any new changes
            productsArray = [];
            // Read new data from xml in case of any changes and store to array
            readPhonesXML(this);

            for (var i = 0; i < productsArray.length; i++) {
                if (productsArray[i].productID == productID) {
                    if (productsArray[i].availability == 'True') {
                        alert('Add to the cart successfully.');
                        // Redirect to Cart Page (Adding item to cart)
                        location.href = 'products_cart.php?id=' + productID;
                        break;
                    }
                    else {
                        alert('Sorry, the phone is not available now. Please try other phones.');
                        break;
                    }
                }
            }
        }
    }
    xhttp.open("GET", "xml/phones.xml", true);
    xhttp.send();
}