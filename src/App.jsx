
import { useState } from 'react'
import './App.css'
import AllProducts from './components/AllProducts/AllProducts'
import CartContainer from './components/CartContainer/CartContainer'
import Navbar from './Navbar/Navbar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [isActive, setIsActive] = useState({
    cart: true,
    status:'cart'
  })
  

const [selectedProducts, setSelectedProducts] = useState([]);
const [price,setPrice] = useState(500);


const handleIncreasePrice = (pr) => {
 setPrice(price+pr)
}

const handleDeletePrice =(id) => {
 const product = selectedProducts.find((p) => p.id == id)
 setPrice(price - product.price)
}

const handleDelete = (id) => {
  handleDeletePrice(id)
  const newProduct =selectedProducts.filter((p) => p.id!=id)
  setSelectedProducts(newProduct)
  
}

const handleSelectedProduct = (product) => {
  const isexist = selectedProducts.find((p) => p.id == product.id)
 
  if (isexist) {
    alert(' r add kora jabe na')
  }
  else{
    handleIncreasePrice(product.price)
    const newProducts = [...selectedProducts,product]
    setSelectedProducts(newProducts)
    
  }
  
  
}

// console.log(selectedProducts);


  const handleIsActiveState =(status) => {
    if (status == 'cart') {
      setIsActive({
        cart: true,
        status:'cart'
      })
    }
    else{
      setIsActive({
        cart: false,
        status:'about'
      })
    }
  }
  console.log(isActive);
  
  const notify = () => toast("Wow so easy!");

  return (
    <>
    <Navbar price={price} selectedProducts={selectedProducts}></Navbar>
  <div className='flex'>
  <AllProducts handleSelectedProduct={handleSelectedProduct}></AllProducts>
  <button onClick={notify}>Notify!</button>
  <CartContainer handleDelete={handleDelete} selectedProducts={selectedProducts} isActive={isActive} handleIsActiveState={handleIsActiveState}></CartContainer>
 <ToastContainer></ToastContainer>
  </div> 
    
    </>
  )
}

export default App
