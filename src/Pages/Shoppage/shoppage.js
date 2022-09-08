import React from 'react';
import './shoppage.scss';
import SHOP_DATA from '../../Components/data';
import CollectionPreview from '../../Components/collection-preview/CollectionPreview';

class ShopPage extends React.Component{
    constructor(){
        super();

        this.state ={
            collections: SHOP_DATA
        }
    }

    render(){
        return(
            <div>
                <h1 className='title'>Collections</h1>
                {
                this.state.collections.map(({id, ...otherCollections})=><CollectionPreview key={id} {...otherCollections} />)
                }
                
            </div>
        )
    }
}

export default ShopPage;