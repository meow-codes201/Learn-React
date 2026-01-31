function ProductInfo(){
    const product = {
        name: "Laptop",
        price:"$1000",
        available: "In Stock",
        features : ["16GB RAM", "512GB SSD", "Intel i7 Processor"]
        
    
    };
  
  
return(
<>
<ul>
    <li>{product.name}</li>
    <li>{product.price}</li>
    <li>{product.available}</li>
    {product.features.map((feature, index) => (
        <li key={index}>{feature}</li>
    ))}
</ul>
</>
);


}
export default ProductInfo;