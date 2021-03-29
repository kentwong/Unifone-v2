var productsArray = []; //array to store XML info

function readPhonesXML(xml) {
    var xmlResponse = xml.responseXML;
    var xmlProducts = xmlResponse.getElementsByTagName("Products");
    for (var i = 0; i < xmlProducts.length; i++) {
        var productID = xmlProducts[i].getElementsByTagName("ProductID")[0].childNodes[0].nodeValue;
        var category = xmlProducts[i].getElementsByTagName("Category")[0].childNodes[0].nodeValue;
        var brand = xmlProducts[i].getElementsByTagName("Brand")[0].childNodes[0].nodeValue;
        var model = xmlProducts[i].getElementsByTagName("Model")[0].childNodes[0].nodeValue;
        var modelVariance = xmlProducts[i].getElementsByTagName("ModelVariance")[0].childNodes[0].nodeValue;
        var availability = xmlProducts[i].getElementsByTagName("Availability")[0].childNodes[0].nodeValue;
        var display = xmlProducts[i].getElementsByTagName("Display")[0].childNodes[0].nodeValue;
        var color = xmlProducts[i].getElementsByTagName("Color")[0].childNodes[0].nodeValue;
        var productImage = xmlProducts[i].getElementsByTagName("ProductImage")[0].childNodes[0].nodeValue;
        var note = xmlProducts[i].getElementsByTagName("Note")[0].childNodes[0].nodeValue;
        var rrp = xmlProducts[i].getElementsByTagName("RRP")[0].childNodes[0].nodeValue;
        var rcc = xmlProducts[i].getElementsByTagName("RCC")[0].childNodes[0].nodeValue;
        var mpp12m35 = xmlProducts[i].getElementsByTagName("MPP12m35")[0].childNodes[0].nodeValue;
        var mpp12m40 = xmlProducts[i].getElementsByTagName("MPP12m40")[0].childNodes[0].nodeValue;
        var mpp12m45 = xmlProducts[i].getElementsByTagName("MPP12m45")[0].childNodes[0].nodeValue;
        var mpp12m55 = xmlProducts[i].getElementsByTagName("MPP12m55")[0].childNodes[0].nodeValue;
        var mpp12m65 = xmlProducts[i].getElementsByTagName("MPP12m65")[0].childNodes[0].nodeValue;
        var mpp12m80 = xmlProducts[i].getElementsByTagName("MPP12m80")[0].childNodes[0].nodeValue;
        var mpp12m120 = xmlProducts[i].getElementsByTagName("MPP12m120")[0].childNodes[0].nodeValue;
        var mpp24m35 = xmlProducts[i].getElementsByTagName("MPP24m35")[0].childNodes[0].nodeValue;
        var mpp24m40 = xmlProducts[i].getElementsByTagName("MPP24m40")[0].childNodes[0].nodeValue;
        var mpp24m45 = xmlProducts[i].getElementsByTagName("MPP24m45")[0].childNodes[0].nodeValue;
        var mpp24m55 = xmlProducts[i].getElementsByTagName("MPP24m55")[0].childNodes[0].nodeValue;
        var mpp24m65 = xmlProducts[i].getElementsByTagName("MPP24m65")[0].childNodes[0].nodeValue;
        var mpp24m80 = xmlProducts[i].getElementsByTagName("MPP24m80")[0].childNodes[0].nodeValue;
        var mpp24m120 = xmlProducts[i].getElementsByTagName("MPP24m120")[0].childNodes[0].nodeValue;
        var mpp36m35 = xmlProducts[i].getElementsByTagName("MPP36m35")[0].childNodes[0].nodeValue;
        var mpp36m40 = xmlProducts[i].getElementsByTagName("MPP36m40")[0].childNodes[0].nodeValue;
        var mpp36m45 = xmlProducts[i].getElementsByTagName("MPP36m45")[0].childNodes[0].nodeValue;
        var mpp36m55 = xmlProducts[i].getElementsByTagName("MPP36m55")[0].childNodes[0].nodeValue;
        var mpp36m65 = xmlProducts[i].getElementsByTagName("MPP36m65")[0].childNodes[0].nodeValue;
        var mpp36m80 = xmlProducts[i].getElementsByTagName("MPP36m80")[0].childNodes[0].nodeValue;
        var mpp36m120 = xmlProducts[i].getElementsByTagName("MPP36m120")[0].childNodes[0].nodeValue;

        var products = new Object;
        products.productID = productID;
        products.category = category;
        products.brand = brand;
        products.model = model;
        products.modelVariance = modelVariance;
        products.availability = availability;
        products.display = display;
        products.color = color;
        products.productImage = productImage;
        products.note = note;
        products.rrp = rrp;
        products.rcc = rcc;
        products.mpp12m35 = mpp12m35;
        products.mpp12m40 = mpp12m40;
        products.mpp12m45 = mpp12m45;
        products.mpp12m55 = mpp12m55;
        products.mpp12m65 = mpp12m65;
        products.mpp12m80 = mpp12m80;
        products.mpp12m120 = mpp12m120;
        products.mpp24m35 = mpp24m35;
        products.mpp24m40 = mpp24m40;
        products.mpp24m45 = mpp24m45;
        products.mpp24m55 = mpp24m55;
        products.mpp24m65 = mpp24m65;
        products.mpp24m80 = mpp24m80;
        products.mpp24m120 = mpp24m120;
        products.mpp36m35 = mpp36m35;
        products.mpp36m40 = mpp36m40;
        products.mpp36m45 = mpp36m45;
        products.mpp36m55 = mpp36m55;
        products.mpp36m65 = mpp36m65;
        products.mpp36m80 = mpp36m80;
        products.mpp36m120 = mpp36m120;

        productsArray.push(products);
    }
}
