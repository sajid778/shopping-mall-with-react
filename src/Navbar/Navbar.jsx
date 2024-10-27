/* eslint-disable react/prop-types */


// eslint-disable-next-line react/prop-types
export default function Navbar({selectedProducts,price}) {
  return (
    <div>
      <h1>cart: {selectedProducts.length}</h1>
      <h1>${price}</h1>
    </div>
  )
}
