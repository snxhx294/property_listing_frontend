import React from "react";
import { Link } from "react-router-dom";

// Mock Data for Dummy Properties
const dummyProperties = [
  {
    id: "1",
    name: "Cozy Apartment",
    location: "Downtown",
    price: "$1,200/month",
    description: "A cozy 2-bedroom apartment in the heart of the city.",
    imageUrl: "https://via.placeholder.com/300x200?text=Cozy+Apartment",
  },
  {
    id: "2",
    name: "Luxury Villa",
    location: "Suburbs",
    price: "$5,000/month",
    description: "A spacious villa with a private pool and garden.",
    imageUrl: "https://via.placeholder.com/300x200?text=Luxury+Villa",
  },
  {
    id: "3",
    name: "Modern Studio",
    location: "City Center",
    price: "$800/month",
    description: "A modern studio perfect for a single professional.",
    imageUrl: "https://via.placeholder.com/300x200?text=Modern+Studio",
  },
];

const PropertyListingPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Available Properties</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {dummyProperties.map((property) => (
          <div
            key={property.id}
            className="border rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
          >
            <img
              src={property.imageUrl}
              alt={property.name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold">{property.name}</h2>
            <p className="text-gray-600">{property.location}</p>
            <p className="text-green-600 font-bold">{property.price}</p>
            <p className="text-gray-700 text-sm mt-2">
              {property.description}
            </p>
            <Link
              to={`/properties/${property.id}`}
              className="mt-4 inline-block text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyListingPage;
