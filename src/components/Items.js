function Items({title,products}){
    return(
        <div className="item">
            <h1 className="category">{title}</h1>
            <div className="pics">
                {products.map((product,index)=>(
                    <div key={index} className="all">
                        <img className="pic" src={product.image} alt={product.title}/>
                        <p className="price">₹ {product.price}</p>
                        <p className="name">{product.name}</p>                        
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Items;