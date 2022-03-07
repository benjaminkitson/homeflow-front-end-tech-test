import React from 'react';
import Header from './Header.js';
import PropertiesList from './PropertiesList.js';
import {filterByType, filterByMin, filterByMax, filterByBuyOrRent} from '../filters.js';

export default class Content extends React.Component {

  state = { data: [] };

  getProperties = (search, type, min, max, buyOrRent) => {
    this.setState(() => ({ data: [] }),);
    fetch(`/api/properties?location=${search}`)
      .then(response => response.json())
      .then((json) => {
        let data = json.result.properties.elements;
        if (type !== 'all') data = filterByType(data, type);
        if (min) data = filterByMin(data, min);
        if (max) data = filterByMax(data, max);
        if (buyOrRent) data = filterByBuyOrRent(data, buyOrRent);
        this.setState(() => ({ data }), );
      })
      .catch((err) => {
        console.error(err);
      });
  };

  render() {
    return (
      <div>
        <Header getProperties={this.getProperties}/>
        <div className="content">
          <PropertiesList properties={this.state.data} />
        </div>
      </div>
    );
  }
}
