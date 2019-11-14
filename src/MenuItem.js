import React from 'react'


const MenuItem = () => {
    const menu = ['About us', 'Career', 'Departments']
    return (
        <div className='nav-menu'>
            <img src='https://www.docplanner.com/img/logo-default-group-en.svg?v=1' height='30px'/>
            <div>
              {
              menu.map(el => <a className='titles' href ='#'>{el}</a>)
            }  

            
        </div>
        </div>
    )
}



export default MenuItem