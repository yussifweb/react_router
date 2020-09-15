import React, {useState, useEffect} from 'react'



function ItemDetail({ match }) {

    useEffect(() => {
        fetchItem();
        console.log(match);
    },[]);

    const [item, setItem] = useState({});

    const fetchItem = async () => {
        const fetchItem = await fetch(`https://jsonplaceholder.typicode.com/albums?ids=${match.params.id}`);
        const item = await fetchItem.json();
        setItem(item);
        console.log(item);
    }
    return (
        <div>
            <h1><span></span>{item.id}</h1>
        </div>
    )
}

export default ItemDetail
