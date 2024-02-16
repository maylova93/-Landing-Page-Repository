// globals
const myFeaturedElement = document.getElementById('featuredProducts');
const navElement = document.getElementById('navigation');

let myProducts = null

// page load
GetProductData()
GetCategoryData()


// model
function GetProductData() {
    fetch('https://dummyjson.com/products?limit=100')
        .then((result) => {

            return result.json();
        })
        .then((json) => {
            ProductsRecived(json)
        });
}

function GetProductsByCategory(myCategoryURL){
    fetch(myCategoryURL)
    .then((result) => {

        return result.json();
    })
    .then((json) => {
        ProductsRecived(json)
    });
}



// NAVIGATION 
function GetCategoryData() {
    
    fetch('https://dummyjson.com/products/categories')

        .then((result) => {
            return result.json()
        })

        .then((json) => {
            CategoryRecived(json)
        });
}

/////CONTROLLER CODE
function recivedProductsByCategory(productsByC){
    let myProductArray = productsByC.product
    CreateProductView( productdata.products)

}




function CategoryRecived(categoryData){
CreateNavBar(categoryData)

}



// controller
function ProductsRecived(productData) {

    //console.log(productData)

    let myProducts = productData.products


    myProducts = productData.products

    let myFeaturedProducts = [];

    myFeaturedProducts.push(myProducts[6], myProducts[9], myProducts[23])

    myFeaturedProducts.push(myProducts[12], myProducts[29], myProducts[19])
    //console.log(myFeaturedProducts);

    CreateProductView(myFeaturedProducts)

    //CreateProductView(myProducts)
}




function NavCallBack(CategoryName){
console.log(CategoryName);
// vi har data

// let myCategoryProducts=[]


// myProducts.forEach(product => {
//     if (product.category == CategoryName) {
//          myCategoryProducts.push(product)
//     }
// });
let myCategoryURL =`https://dummyjson.com/products/category/smartphones/${CategoryName}`
GetProductsByCategory(myCategoryURL)
}



// view code......................
function CreateNavBar(categoryData){
    let myNavHTML= ""
    
    categoryData.forEach(CategoryName => {
     
        let myButton=`<button  onclick="NavCallBack(${CategoryName}) >${CategoryName}</button>` 
        myNavHTML += myButton

    });
    navElement .innerHTML=myNavHTML
}








// view code
function CreateProductView(myCards) {
    console.log(myCards);
    //console.log(myCards);

    myCards.forEach(product => {
        console.log(product);


        let myHTML = `<figure onclick="ProductCallback(${product.id})" ><h2>${product.title}</h2><img src="${product.thumbnail}"><h3>PRIS: ${product.price} rabat: ${product.discountPercentage}</h3></figure>`


        myFeaturedElement.innerHTML += myHTML
    });
}




function ProductCallback(myId) {
    console.log(myId);
    let myClickedProduct = null;
    myProducts.forEach(product => {
        if (product.id == myId) {
            myClickedProduct = product;
        }
    }
    )
    console.log(myClickedProduct);
    clearApp();
    buildProduct(myClickedProduct)
}

function buildProduct(product) {

    let myHTML = `<figure onclick="ProductCallback(${product.id})" ><h2>${product.title}</h2><img src="${product.thumbnail}"><h3>PRIS: ${product.price}</h3></figure>`


    myFeaturedElement.innerHTML = myHTML
}

function clearApp() {

}

