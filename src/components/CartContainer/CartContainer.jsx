
import About from '../About/About'
import Cart from '../Cart/Cart'
import './CartContainer.css'

export default function CartContainer({handleIsActiveState,isActive,selectedProducts,handleDelete}) {
    // console.log(handleIsActiveState);
    // console.log(isActive);
    
  return (
    <div>
      <h1>CartCOntainer.jsx</h1>

      <div className='flex'>
        <div onClick={() => handleIsActiveState('cart')} className={`${isActive.cart ? "btn active" : "btn"}`}>CART</div>
        <div onClick={() => handleIsActiveState('about')} className={`${isActive.cart ? "btn" : "active btn"}`}>About</div>
      </div>

      {
        isActive.cart ? <Cart handleDelete={handleDelete} selectedProducts={selectedProducts}></Cart>:
        <About></About>
      }
    </div>
  )
}
