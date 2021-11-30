import React, { useState } from 'react';
import menu from './Utils/data';
import MenuItems from './Components/MenuItems';

function App() {
    const [data, setData] = useState(menu);

    return (
        <div>
            <h1 id='title'>Our Menu</h1><hr id='titleUnderline'/>
            <div id='navbar'>
                <button className='navBtn' onClick={() => setData(menu)}>All</button>
                <button className='navBtn' onClick={() => setData(menu.filter(item => item.category === 'breakfast'))}>Breakfast</button>
                <button className='navBtn' onClick={() => setData(menu.filter(item => item.category === 'lunch'))}>Lunch</button>
                <button className='navBtn' onClick={() => setData(menu.filter(item => item.category === 'shakes'))}>Shakes</button>
            </div>
            <div id='menuItems'>
                <MenuItems data={data} />
            </div>
        </div>
    )
}

export default App