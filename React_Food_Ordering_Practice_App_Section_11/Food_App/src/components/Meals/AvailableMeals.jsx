import React from 'react'

function AvailableMeals() {

    const DUMMY_MEALS = [
        {
            id: 'm1',
            name: 'Sushi',
            description: 'Finest fish and veggies',
            image: 'https://mms.businesswire.com/media/20180130006534/en/636980/5/%28Our_fresh_Edo-style_sushi_using_only_the_finest_natural_ingredients%29.jpg',
            price: 22.99,
        },
        {
            id: 'm2',
            name: 'Schnitzel',
            description: 'A german specialty!',
            image: 'https://toriavey.com/images/2011/02/TOA20_06-500x500.jpg',
            price: 16.5,
        },
        {
            id: 'm3',
            name: 'Barbecue Burger',
            description: 'American, raw, meaty',
            image: 'https://www.chicagotribune.com/resizer/EqslYoLSgX52x6WrLMbaYfMvzUs=/1200x0/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/B42UNDR22FC4VJYOFXDGD4UXF4.jpg',
            price: 12.99,
        },
        {
            id: 'm4',
            name: 'Green Bowl',
            description: 'Healthy...and green...',
            image: 'https://www.naturalhealthmag.com.au/sites/default/files/imagecache/new-article-image/editorial/greenbowl.jpg',
            price: 18.99,
        },
    ];
    return (
        <div>
            {
                DUMMY_MEALS.map((meal) => (
                    <>
                        <div>{meal.name}</div>
                        <div>{meal.description}</div>
                        {/* <div><img src={meal.image} width="40" height="40" /></div> */}
                        <div>{meal.price}</div>
                    </>
                ))
            }
        </div>
    )
}

export default AvailableMeals
