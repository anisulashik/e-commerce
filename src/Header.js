import React from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider';
import { auth } from './fireabase'



function Header() {
    const [{basket,user},dispatch]= useStateValue();

    const handleAuthenticaton = () => {
        if (user) {
          auth.signOut();
        }
      }

    return (
        <div className='header'>
            <Link to='/'> 
                <img className="header__logo"
                src="https://cloudfront-us-east-1.images.arcpublishing.com/ajc/KHBQ4LE6CJGQRA6LIKISDCCVHE.jpg"/>
            </Link>
           <div>
           
             
           </div>
           <div className="header__search">
                <input className="header__searchInput " type="text" />
                <FontAwesomeIcon icon={faSearch} className="header__searchIcon"/>
           </div>
           <div className="header__nav">

            <Link to='/login'> 
            <div onClick={handleAuthenticaton} className="header__option"> 
                <span className="header__optionLineOne "> 
                Hello Guest
                </span>
                <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>

            </div>
            </Link>

            <div className="header__option"> 
                <span className="header__optionLineOne "> 
                Returns
                </span> 
                <span className="header__optionLineTwo "> 
                Orders
                </span>
            </div>

            <div className="header__option"> 
                <span className="header__optionLineOne "> 
                Your
                </span> 
                <span className="header__optionLineTwo "> 
                Prime
                </span>
            </div>
            <Link to="/checkout">
            <div className="header__optionBasket">
            <FontAwesomeIcon icon={faShoppingBasket} />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
            </div>
            </Link>

             </div>
           </div>
       
    )
}

export default Header
