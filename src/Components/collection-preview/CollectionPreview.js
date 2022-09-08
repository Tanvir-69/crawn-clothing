import React from 'react';
import './CollectionPreview.scss';
import CollectionItem from '../collection-items/CollectionItems';
import { Link  } from 'react-router-dom';

        


const CollectionPreview =({title,routeName ,items})=>{

    return(

    <div className='collection-preview'>        
        <Link className='title'  to={routeName}>{title}</Link> 
        <div className='preview'>
            {
                items.filter((item,idx)=>idx < 4).map(({id,...otherCollectionitem})=><CollectionItem key={id} {...otherCollectionitem} />)
            }

        </div>
    </div>
 )
}

export default CollectionPreview;