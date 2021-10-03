import React from 'react';
import SearchView from './components/SearchView';
import data from './data.json'
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";


class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      items: data.items,
      productSearchString: "",
      adminModeActive: false,
    }
  }

  onSearchFieldChange = (event) => {

    console.log('Keyboard event');
    console.log(event.target.value);
    this.setState({ productSearchString: event.target.value });
  }

  addNewItem = (name, rating, manufacturer, price) => {
    let newItems = [...this.state.items];
    newItems.push({
      id: newItems.length + 1,
      name: name,
      rating: rating,
      manufacturer: manufacturer,
      price: price
    });

    this.setState({
      items: newItems
    });
  }


  deleteItem = itemId => this.setState({items: this.state.items.filter(item => item.id !== itemId)})



  render()
  {
    let output =
      <>
        <div>
          Hae <input type="text" onChange={ this.onSearchFieldChange } value={ this.state.productSearchString }/>
        </div>
        <SearchView
          items={ this.state.items.filter((item) => item.name.includes(this.state.productSearchString)) }
          />
      </>  

    const ReturnStar = ({index}) => {
      let stars = Math.round(this.addNewItem.rating*2)/2;

      if (stars > index + 1) {
          return <FaStar color="orange" />
      } else if (stars === index + 0.5) {
          return <FaStarHalfAlt color="orange" />
      } else {
          return <FaRegStar color="orange" />
      }
  }



    return (
      <>
        { output }
      </>
    )
  }
}

export default App;