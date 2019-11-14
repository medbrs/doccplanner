import React from 'react'


const HealthCare = () => {
    const tab = [
        {
            image : 'https://www.docplanner.com/img/flag.png',
            title : 'Leader in 10 countries',
            parag : 'Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile',
        },
        {
            image : 'https://www.docplanner.com/img/visits.png',
            title : '1.5 million appointments',
            parag : 'booked last month',

        },
        {
            image : 'https://www.docplanner.com/img/patients.png',
            title : '30 million unique patients',
            parag : 'visit us every month',
        },
        {
            image : 'https://www.docplanner.com/img/doctors.png',
            title : '2 million active doctors',
            parag : 'trust in our solutions'
        }

    ]
    return (
                <div className='health-care'>
                    <div className='informations'>
                    <h1 className='platform'>The world's biggest healthcare platform</h1>
                    <p className='para'>We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.</p>
                   <img  className="big-star" src ='https://www.docplanner.com/img/logo.png'/>
                    </div>
                                <div className='tags'>
                                {tab.map(el => 
                                 <div className="tag">
                                    <img src ={el.image}/>
                                    <h2>{el.title}</h2>
                                    <p className='para'>{el.parag}</p>
                                </div>)}
                                </div>
                                </div>
    )
}
export default HealthCare   