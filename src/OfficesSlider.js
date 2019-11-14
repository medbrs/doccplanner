    import React from 'react'




    const OfficesSlider = () => {
        const tab = [
            {
                image : 'https://www.docplanner.com/images/warsaw.png',
                title : 'Warsaw',
                btn : 'SEE OPENINGS',
            },
            {
                image : 'https://www.docplanner.com/images/barcelona.png',
                title : 'Barcelona',
                btn : 'SEE OPENINGS'
            },
            {
                image : 'https://www.docplanner.com/images/istanbul.png',
                title : 'Istanbul',
                btn : 'SEE OPENINGS',
            },
            {
                image : 'https://www.docplanner.com/images/rome.png',
                title : 'Rome',
                btn : 'SEE OPENINGS',
            },
            {
                image : 'https://www.docplanner.com/images/mexico-city.png',
                title : 'Mexico',
                btn : 'SEE OPENINGS',
            },
            {
                image : 'https://www.docplanner.com/images/curitiba.png',
                title : 'Curitibia',
                btn : 'SEE OPENINGS',
            }
        ]
                return (
                    <div className='countrys'>
                        {tab.map(el => (
                            <div className ='list-countrys'>
                                <img className='img-countrys' src ={el.image}/>
                                <div className='title-btns'>
                                <h3>{el.title}</h3>
                            <button className='all-btns'>{el.btn}</button>
                            </div>
                            </div>
                                            ))}
                                        </div>

        )
}


export default OfficesSlider