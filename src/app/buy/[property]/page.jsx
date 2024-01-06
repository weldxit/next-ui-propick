'use client'
import { useEffect, useState } from 'react';

const dummyProperties = [
  {
    id: 1,
    title: "Spacious Villa with a View",
    description: "Beautiful villa overlooking the hills, perfect for a family.",
    price: 550000,
    location: "City A",
    type: "House",
    imageUrl: "https://via.placeholder.com/300x200",
  },
  {
    id: 2,
    title: "Modern Downtown Apartment",
    description: "Stylish apartment in the heart of the city, close to all amenities.",
    price: 320000,
    location: "City B",
    type: "Apartment",
    imageUrl: "https://via.placeholder.com/300x200",
  },
  {
    id: 3,
    title: "Seaside Luxury Condo",
    description: "Luxurious condo with a stunning view of the ocean and private beach access.",
    price: 980000,
    location: "City C",
    type: "Condo",
    imageUrl: "https://via.placeholder.com/300x200",
  },
  {
    id: 4,
    title: "Rustic Country House",
    description: "Charming country house with acres of land, ideal for nature lovers.",
    price: 450000,
    location: "City D",
    type: "House",
    imageUrl: "https://via.placeholder.com/300x200",
  },
  {
    id: 5,
    title: "Cozy Suburban Home",
    description: "Lovely home in a quiet neighborhood, perfect for a growing family.",
    price: 280000,
    location: "City E",
    type: "House",
    imageUrl: "https://via.placeholder.com/300x200",
  },
  {
    id: 6,
    title: "Downtown Loft Apartment",
    description: "Trendy loft-style apartment in the bustling downtown area.",
    price: 420000,
    location: "City F",
    type: "Apartment",
    imageUrl: "https://via.placeholder.com/300x200",
  },
  {
    id: 7,
    title: "Lakefront Cabin Retreat",
    description: "Cozy cabin with a picturesque view of the lake, perfect for a weekend getaway.",
    price: 380000,
    location: "City G",
    type: "Cabin",
    imageUrl: "https://via.placeholder.com/300x200",
  },
  {
    id: 8,
    title: "Urban Townhouse",
    description: "Modern townhouse with rooftop garden, close to city attractions.",
    price: 500000,
    location: "City H",
    type: "Townhouse",
    imageUrl: "https://via.placeholder.com/300x200",
  },
  {
    id: 9,
    title: "Mountain View Retreat",
    description: "Peaceful retreat with breathtaking mountain views, ideal for relaxation.",
    price: 670000,
    location: "City I",
    type: "House",
    imageUrl: "https://via.placeholder.com/300x200",
  },
  {
    id: 10,
    title: "Golf Course Villa",
    description: "Elegant villa overlooking a golf course, perfect for golf enthusiasts.",
    price: 720000,
    location: "City J",
    type: "Villa",
    imageUrl: "https://via.placeholder.com/300x200",
  },
];
const fetchPropertyDetails = async (pid) => {
  try {
    // Fetch property details based on propertyId
    // For now, using the dummyProperties array to simulate data
    const propertyDetails = dummyProperties.find((prop) => prop.id == parseInt(pid));
    // setProperty(propertyDetails);
    return propertyDetails
  } catch (error) {
    console.error('Error fetching property details:', error);
  }
};

export default async function PropertyDetail({params}) {
  // console.log(params)
  const property = await fetchPropertyDetails(params.property) // Extract propertyId from the URL
  // Render loading or property details once available
  return (
    <div className="container mx-auto py-8">
      {!property ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h1 className="text-2xl font-bold">{property.title}</h1>
          <p>{property.description}</p>
          <p>Price: ${property.price}</p>
          <p>Location: {property.location}</p>
          {/* Add more property details as needed */}
        </div>
      )}
    </div>
  );
}
