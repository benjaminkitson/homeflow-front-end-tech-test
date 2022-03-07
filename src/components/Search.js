import React from 'react';

export default class Search extends React.Component {

  getProperties = (e) => {
    e.preventDefault();
    const search = e.target.search.value;
    const searchInput = e.target.search;
    console.log(searchInput);
    const type = e.target.type.value;
    const min = e.target.min.value;
    const max = e.target.max.value;
    const buyOrRent = e.target.buyOrRent.value;
    if (!search.trim()) return searchInput.classList.add('search__input--invalid');
    searchInput.classList.remove('search__input--invalid');
    this.props.getProperties(search, type, min, max, buyOrRent);
  };

  render() {

    // This could and probably should be divided up into further components

    return (
      <form onSubmit={this.getProperties} className="search">
        <div className="search__fields">
          <input type="text" name="search"  className="search__input"></input>
          <select name="type" className="search__input">
            <option value="all">All</option>
            <option value="house">Houses</option>
            <option value="flat">Flats</option>
            <option value="studio">Studios</option>
          </select>
        </div>
        <div className="search__price">
          <input type="number" name="max" placeholder="Max. Price" className="search__input"></input>
          <input type="number" name="min" placeholder="Min. Price" className="search__input"></input>
        </div>
        <div className="search__buyorrent">
          <div className="search__radio">
            <input type="radio" id="lettings" name="buyOrRent" value="lettings" defaultChecked></input>
            <label htmlFor="lettings" className="search__radio__label">Rent</label>
          </div>
          <div className="search__radio">
            <input type="radio" id="sales" name="buyOrRent" value="sales"></input>
            <label htmlFor="sales" className="search__radio__label">Buy</label>
          </div>
        </div>
        <button>Search</button>
      </form>
    );
  }
}
