import { SearchRounded, ShoppingCartRounded, BarChart } from '@mui/icons-material'
import React, { useEffect } from 'react'
function Header() {
  useEffect (()=> {
    const toogleMenu = document.querySelector('.toogleMenu');

    toogleMenu.addEventListener('click',() => {
      document.querySelector('.rightMenu').classList.toggle('active');
    })
    
    }, [])

  return (
  <header>
    <img src='https://firebasestorage.googleapis.com/v0/b/restaurantapp-4ba1f.appspot.com/o/Images%2Flogo.png?alt=media&token=b9fee205-1ce1-4019-baf6-38249f1c9d10' 
    alt=''
    className='logo'/>

    <div className='inputBox'>
    <SearchRounded className='searchIcon' />
    <input type="text" placeholder='Search'/>
    </div>

    <div className='shoppingCart'>
    <ShoppingCartRounded className='cart' />
    <div className='cart_content'>
        <p>2 </p>
    </div>
    </div>
    <div className='profileContainer'>
        <div className='imgBox'>
            <img src='' 
            alt=''
            className='profilePic'/>
        </div>
        <h2 className='userName'>Thinh</h2>
    </div>
    <div className='toogleMenu'>
        <BarChart className='toogleIcon'/>
    </div>
  </header>
)
}

export default Header