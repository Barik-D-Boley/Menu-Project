import React from 'react'

function MenuItems(data) {
    data = data.data;
    console.log(data);
    let menuItems = [];

    for (let i = 0; i < data.length; i++) {
        const { desc, id, img, price, title } = data[i];
        menuItems.push(
            <div className='menuItem' key={id}>
                <img src={img} alt={title} />
                <div className='textContainer'>
                    <h3 className='title'>{title}</h3>
                    <h3 className='title price'>${price}</h3><hr />
                    <p className='desc'>{desc}</p>
                </div>
            </div>
        )
    }
    return menuItems;
}

export default MenuItems
