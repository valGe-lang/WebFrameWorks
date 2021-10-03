import React from "react";
import Title from './components/Title';
import ShoppingList from './components/ShoppingList';
import styles from './App.module.css';
import './App.css';

/* A ES6 class style stateful component for the shopping list application */
class App extends React.Component {
  constructor(props)
  {
    /* You should call super(props) before any other statement. 
       Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
    */
    super(props);

    this.state = {
      items: [
        { id: 1, value: 'Milk', qty: 5, unit: 'ltr' },
        { id: 2, value: 'Bananas', qty: 6, unit: 'pcs' },
        { id: 3, value: 'Bread', qty: 3, unit: 'x' },
        { id: 4, value: 'Eggs', qty: 16, unit: 'x' }
      ]
    };

  }


  addProduct = (stuffdescription, quantity) =>  {
   return () =>  {
     const searchResult = this.state.items.findIndex((element, index, array) => {
      if(element.value === stuffdescription) {
        return true;
      } else {
        return false;
      }
     });
  if(searchResult != -1) {
      let newItems = [...this.state.items];
      newItems[searchResult].qty += quantity;

      this.setState({ items: newItems });

  }else {
    console.log('no milk :/');
  
  this.setState({
    items:
    [...this.state.items, 
    {
    id: this.state.items.lenght + 1, 
    value: stuffdescription, qty: quantity
      }
     ]
    });
  }
  }
}
 

 

  render()
  {
    const { applicationDescription, applicationName } = this.props;
    return <div className={ styles.shoppingList }>
      <Title 
        applicationDescription={ applicationDescription }
        applicationName={ applicationName }
      />
      <ShoppingList items={ this.state.items } />
      <button onClick={this.addProduct('Carrots', 5, 7)}>Carrots</button>
      <button onClick={this.addProduct('Bananas', 2)}>Bananas</button>
      <button onClick={this.addProduct('Bread', 4)}>Bread</button>
      <button onClick={this.addProduct('Beer', 6)}>Beer</button>
    </div>
  }
}



export default App;