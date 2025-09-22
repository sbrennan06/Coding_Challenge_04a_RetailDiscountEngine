//Coding Challenge 4

//Step 2: Create an array of objects for 5 products

let products = [
    {productName: "headphones", productCategory: "electronics", productPrice: "149.99", productInventoryCount: "32"},
    {productName: "tube socks", productCategory: "apparel", productPrice: "14.85", productInventoryCount: "56"},
    {productName: "standing desk", productCategory: "furniture", productPrice: "499.97", productInventoryCount: "11"},
    {productName: "tortellini", productCategory: "groceries", productPrice: "6.59", productInventoryCount: "18"},
    {productName: "paper towels", productCategory: "household", productPrice: "11.49", productInventoryCount: "27"},    
]

//products.forEach(products => console.log(`Name: ${products.productName}, Category: ${products.productCategory}, Price: $${products.productPrice}, Inventory Count: ${products.productInventoryCount}`))

//Step 3: write for...of loop to add discounts & switch statement

for (const product of products) {
    let categoryDiscount = 0; // 0% discount is the default
    switch (product.productCategory) {
        case "electronics":
            categoryDiscount = 0.20; //20% discount
            break;
            case "apparel": 
            categoryDiscount = 0.15; //15% discount
            break;
            case "groceries":
            case "household": //group cases with same discount rate
            categoryDiscount = 0.10; //10% discount
            break;  
            default:
            categoryDiscount = 0; //no discount
            break;
    }
      
//   console.log(`Product: ${product.productName}, Category: ${product.productCategory}`, `Original Price: $${product.productPrice}, 
//     Discount: ${(categoryDiscount * 100).toFixed(0)}%,`, `Discounted Price: $${discountPrice.toFixed(2)}`)
 }

//Step 4 - create variable customer types and use if/else if to apply additional discounts.  

let customerType = "senior";
//console.log(customerType)
let extraDiscount = 0;

if (customerType === "student") {
    extraDiscount = 0.05; // 5% extra discount
} else if (customerType === "senior") {
    extraDiscount = 0.07; // 7% extra discount 
} else {
    extraDiscount = 0; // default is 0 discount
}
//console.log(`Customer Type: ${customerType}, Extra Discount: ${(extraDiscount * 100).toFixed(0)}%`);

// step 5 - use for-loops to simulate checkout process
for (let i = 1; i <= 3; i++) {
    let subtotal = 0;

    for (const product of products) {
    let categoryDiscount = 0; // 0% discount is the default
    switch (product.productCategory) {
        case "electronics":
            categoryDiscount = 0.20; //20% discount
            break;
            case "apparel": 
            categoryDiscount = 0.15; //15% discount
            break;
            case "groceries":
            case "household": //group cases with same discount rate
            categoryDiscount = 0.10; //10% discount
            break;  
        default:
            categoryDiscount = 0; //no discount
            break;
    }
let priceAfterCategory = (+product.productPrice) * (1 - categoryDiscount);
subtotal = subtotal + priceAfterCategory;
//console.log(subtotal.toFixed(2));
let inventory = +product.productInventoryCount;
if (inventory > 0) {
    product.productInventoryCount --;
    //console.log(product.productName + "inventory now: " + product.productInventoryCount);

}
    }
    const finalTotal = subtotal * (1 - extraDiscount);
    console.log("Customer " + i + " Total: $" + finalTotal.toFixed(2)); //step 5 console log output
}
    console.log("==============================================================") 
    //just want to break up the console log
//step 6 - use for...in to log key & value of pairs for a product after discounts applied

let selectedProduct = products[0]; // product0 = headphones from line 6
let labels = {
    productName: "Product Name",
    productCategory: "Product Category",
    productPrice: "Product Original Price",
    productInventoryCount: "Product Inventory Remaining (Count)"

}
  let categoryDiscount = 0; // 0% discount is the default
    switch (selectedProduct.productCategory) {
        case "electronics":
            categoryDiscount = 0.20; //20% discount
            break;
            case "apparel": 
            categoryDiscount = 0.15; //15% discount
            break;
            case "groceries":
            case "household": //group cases with same discount rate
            categoryDiscount = 0.10; //10% discount
            break;  
        default:
            categoryDiscount = 0; //no discount
            break;
       }

       let discountedPrice = (+selectedProduct.productPrice) * (1 - categoryDiscount);
       for (const key in selectedProduct) {const label = labels[key] || key;
        
        let value = selectedProduct[key];
        if (key === "productPrice") {
            value = "$" + (+value).toFixed(2);
        }
        console.log(label + ": " + value);
       }
console.log("Discounted Price: $" + discountedPrice.toFixed(2));

//step 7 - use object.entries to log all product info after inventory is updated
console.log("==============================================================");
console.log("All products after inventory update:");
for (const product of products) {

    console.log(" "); //add blank row for ease of review

    console.log("Product: " + product.productName);
for (const [key, value] of Object.entries(product)) {
    let label = key.replace(/([A-Z])/g, "$1");    //make labels to avoid camelCase in console log
    label = label[0].toUpperCase() + label.slice(1);

    let out = value;
    if (key === "productPrice") out = "$" + (+value).toFixed(2); //change key to allow for $ symbol

    console.log(label + ": " + out);
}

}
