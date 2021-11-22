import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class ShopList extends Component {
    render() {
        return (
            <div>
               <h1>Shop Home</h1>
               <h3 key={this.props.id}>
                    <Link to={`/shop/${this.props.name}`} name={this.props.name}></Link>
                </h3>


                
            </div>
        )
    }
}

export default ShopList
