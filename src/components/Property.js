import React from 'react';

function Property(props) {
  return (
    <article className="property">
      {props.photo ?
        <img className="property__photo" src={`http://mr0.homeflow.co.uk/${props.photo}`}/> :
        <img className="property__photo__placeholder" src=
          'https://www.ecpgr.cgiar.org/fileadmin/templates/ecpgr.org/Assets/images/No_Image_Available.jpg'/>
      }
      <div className="property__info">
        <h2 className="property__address">{props.address}</h2>
        <h3 className="property__price">
          {props.price ?
          `${new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 }).format(props.price)}
          ${props.rental ? ' PCM' : ''}` : '£ TBC'}
        </h3>
        <h3 className="property__type">{props.type}</h3>
        <h3 className="property__agency">{props.agency}</h3>

      </div>
    </article>
  );
}

export default Property;
