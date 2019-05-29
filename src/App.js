import React, {Component} from 'react';
import ls from 'local-storage';
import './App.css';

import InputField from './components/inputField'
import List from './components/list'
import ListItem from './components/list/listItem'

class App extends Component {

  state = ls.get('colorsAppState') || {colorsList:[], itemIndex:0};

  onAddColor(color){
    this.setState({colorsList:[...this.state.colorsList,{color:color,itemIndex:this.state.itemIndex,isFavorite:false}],itemIndex:this.state.itemIndex+1});
  }

  onRemoveColor(itemIndex){
    this.setState({colorsList:[...this.state.colorsList.filter(item => item.itemIndex!==itemIndex)]})
    ls.set('colorsAppState',{colorsList:this.state.colorsList.filter(item => (item.isFavorite && item.itemIndex!==itemIndex)),itemIndex:this.state.itemIndex})
  }

  onSetFavorite(itemIndex){
    let result = this.state.colorsList.map((element)=>{
          if(element.itemIndex === itemIndex)element.isFavorite=!element.isFavorite;
          return element
    });
    this.setState({colorsList:[...result]})
    ls.set('colorsAppState',{colorsList:this.state.colorsList.filter(item => item.isFavorite),itemIndex:this.state.itemIndex})
  }

  render(){
      return (
          <div className="flex-container">
            <div className="flex-column-container">
                <h1 className="mainHeader">Управление карточками</h1>
                <InputField onAddColor={this.onAddColor.bind(this)}/>
                <List date={this.state.colorsList} itemRenderer={ListItem} onRemoveItem={this.onRemoveColor.bind(this)} onSetFavorite={this.onSetFavorite.bind(this)}/>
            </div>
          </div>
      )
  }

}

export default App;
