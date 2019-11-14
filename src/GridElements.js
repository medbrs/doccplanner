import React from 'react'



const GridElements = () => {
    const menu = [
        {
            for: 'For patients',
            title: 'Find a doctor, book a visit and solve any health-related doubt',
            img: 'https://www.docplanner.com/img/screen-marketplace@2x.png'
        },
        {
            for: 'For doctors',
            title: 'Save time managing visits and cut no-shows by half',
            img: 'https://www.docplanner.com/img/screen-saas@2x.png'
        } 
    ]

    return (
                <div className ='cards'>
                    {menu.map(el => (
                        <div className={el.for === 'For patients' ? "card green-card" : "card blue-card"}>

                           
                    <h6>{el.for}</h6>
                    <h2>{el.title}</h2>
                    <div className='ss'>
                    {el.for === 'For patients' ? <select className='btns'>
                        <option>Choose Country</option>
                        <option>Tunisia</option>
                        <option>Sweden</option>
                        </select> : <div className="btns" ></div>
                        }
                        <img className='imgs' src={el.img}/>
                        </div>
                        </div>
                    ))}    


        </div>
                    
    )
}



export default GridElements