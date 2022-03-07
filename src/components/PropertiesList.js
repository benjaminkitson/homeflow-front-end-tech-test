import React from 'react';
import Property from './Property';

function capitalise(word) {
  const letters = word.split('');
  letters[0] = letters[0].toUpperCase();
  return letters.join('');
}

function PropertiesList(props) {

  return(
    <div className="properties">
      {props.properties.map(property =>
        <Property
          key={property.property_id}
          address={property.display_address}
          type={property.property_type ? capitalise(property.property_type) : undefined}
          soldStatus={property.status ? capitalise(property.status) : undefined}
          agency={property.agency.agency_name ? capitalise(property.agency.agency_name) : undefined}
          photo={property.photos[0]}
          price={property.price_value}
          rental={property.primary_channel === 'lettings'}
        />
      )}
    </div>
  );
}

export default PropertiesList;
