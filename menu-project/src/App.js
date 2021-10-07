import React from 'react';
import MenuItems from './Components/MenuItems';

function App() {
    function menuItems(param) {
        console.log(`"${param}" is what's passed in`);
        return <MenuItems params={param}/>;
    }

    return (
        <div>
            <h1>Our Menu</h1>
            <div id='navbar'>
                <button onClick={() => {
                    console.log('Button Works');
                    menuItems('none');
                }}>Here</button>
            </div>
        </div>
    )
}

export default App