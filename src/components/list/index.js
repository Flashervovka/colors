import React from 'react';

const List = (props) => {

    let date = props.date || []
    let list = date.map((element,index)=>
        {
            return <div key={index} className="colorItemContainer">{props.itemRenderer({data:element,onRemoveItem:props.onRemoveItem,onSetFavorite:props.onSetFavorite})}</div>
        }
    );

    return (
        <div className="flex-list-container">
            {list}
        </div>

    )
}

export default List;