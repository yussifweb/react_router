import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'


function Shop() {

    useEffect(() => {
        fetchItems();
    },[])

    const [items, setItems] = useState([]);
    const fetchItems = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/albums');
        const items = await data.json();
        console.log(items);
        setItems (items);
    }
    return (
        <div>
            <h1>Shop Home</h1>
            {items.map(item => (
                <h3 key={item.id}>
                    {/* {item.id}. <span>{item.title}</span> */}
                    <Link to={`/shop/${item.title}`}>{item.title}</Link>
                </h3>
            ))}
            
        </div>
    )
}

export default Shop
