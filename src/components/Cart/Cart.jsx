

export default function Cart({selectedProducts,handleDelete}) {
  return (
    <div>

     {
        selectedProducts.map((product) => (
            <div key={product.id} className="flex">
                <img className="selected-img" src={product.image} alt="" />
                <p>{product.name}</p>
                <p>{product.price}</p>
                <button onClick={() => handleDelete({ p: 500000 })}>Delete</button>

            </div>
        ))
     }
    </div>
  )
}
