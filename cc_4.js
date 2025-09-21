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
            break;
    }

}