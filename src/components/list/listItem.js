import React from 'react';
import close from '../../assets/svg/close.svg'
import fav from '../../assets/svg/fav.svg'
import fav_none from '../../assets/svg/fav_none.svg'

function ListItem(props) {

    let divStyle = {
        background: props.data.color
    };

    let favorite = props.data.isFavorite ? fav : fav_none;

    return (
        <div className="colorItem flex-column-container">
            <div className="colorBlock flex-column-container">
                <div className="color" style={divStyle}></div>
                <div>{props.data.color.toUpperCase()}</div>
            </div>
            <div className="flex-controlls-container">
                <img onClick={()=>{props.onRemoveItem(props.data.itemIndex)}} src={close} alt="close"/>
                <img src={favorite} onClick={()=>{props.onSetFavorite(props.data.itemIndex)}} alt=""/>
            </div>
        </div>
    );
}

export default ListItem;