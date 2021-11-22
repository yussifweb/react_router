import React from 'react'
import {Link} from 'react-router-dom'


function Shop() {

    // useEffect(() => {
    //     fetchItems();
    // },[])

    // const [items, setItems] = useState([]);
    // const fetchItems = async () => {
    //     const data = await fetch('https://jsonplaceholder.typicode.com/users');
    //     const items = await data.json();
    //     console.log(items);
    //     setItems (items);
    // }
    return (
        <div>
            <h1>Shop Home</h1>
            {/* {items.map(item => (
                <h3 key={item.id}>
                    <Link to={`/shop/${item.username}`}>{item.username}</Link>
                </h3>
            ))} */}
            <h3 key={this.props.id}>
                    <Link to={`/shop/${this.props.name}`}>{this.props.name}</Link>
                </h3>
            
        </div>
    )
}

export default Shop
