import React from 'react'




const Footer = () => {
    const tab = ['Poland','Turkey','Spain', 'Italy', ' Czech Republic', 'Mexico', 'Colombia', 'Brazil', 'Argentina' , 'Chile']
    return (
        <footer>
            <div className='main-footer'>
                <p className='under'>
                We are leaders in 10 countries: 
                {tab.map(el => <a className='hrefs' href='#'>{el},</a>)}
                </p>
                <p className='under'>
                This site uses cookies to deliver services in accordance with this Privacy Policy. You can specify the conditions for storing or accessing cookies on your browser.
                </p>
                <p className='under'>www.docplanner.com © 2019</p>
                </div>  
        </footer>
       
    

    )
}




export default Footer