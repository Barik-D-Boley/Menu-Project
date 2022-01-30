import React from 'react'

function MenuItems(data) {
    data = data.data;
    console.log(data);
    let menuItems = [];

    for (let i = 0; i < data.length; i++) {
        const { desc, id, img, price, title } = data[i];
        console.log(img);
        menuItems.push(
            <div className='menuItem' key={id}>
                <div className='imgContainer'><img className='image' src={img} alt={title} /></div>
                <div className='textContainer'>
                    <div className='inlineTitle'>
                        <h3 className='title'>{title}</h3>
                        <h3 className='title price'>${price}</h3>
                    </div>
                    <hr className='itemUnderline' />
                    <p className='desc'>{desc}</p>
                </div>
            </div>
        )
    }
    return menuItems;
}

export default MenuItems
