import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPropertyById } from '../api/propertyAPI';

const PropertyDetailPage = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    fetchPropertyById(id).then((data) => setProperty(data));
  }, [id]);

  if (!property) {
    return <p>Loading...</p>;
  }

  return (
    <div className="property-detail-page">
      <h1>{property.title}</h1>
      <img src={property.image} alt={property.title} />
      <p>{property.description}</p>
    </div>
  );
};

export default PropertyDetailPage;
