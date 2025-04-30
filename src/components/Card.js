import React from 'react'

function Card({product}) {
    return (
     
            <div className="border rounded-lg overflow-hidden shadow-md w-64 margin-right: rem">
                <div className="relative">
                    <img src={product?.image} alt={product?.title} className="w-full h-40 object-cover" />
                    {/* <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md">
                        ❤️
                    </button> */}
                </div>
                <div className="p-4">
                    {product.featured && (
                        <span className="bg-yellow-400 text-black text-xs px-2 py-1 rounded">FEATURED</span>
                    )}
                    <h2 className="text-lg font-semibold mt-2">₹ {product.price}</h2>
                    <p className="text-gray-500 text-sm">{product.details}</p>
                    <p className="text-gray-400 text-xs">{product.location}</p>
                    <p className="text-gray-400 text-xs">{product.date}</p>
                </div>
            </div>
    )
}

export default Card