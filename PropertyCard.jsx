import React from 'react';
import { Link } from 'react-router-dom';

const PropertyCard = ({ property }) => {
  return (
    <div className="property-card">
      <img src={property.image} alt={property.title} />
      <h3>{property.title}</h3>
      <p>{property.description}</p>
      <Link to={`/properties/${property.id}`}>View Details</Link>
    </div>
  );
};

export default PropertyCard;
