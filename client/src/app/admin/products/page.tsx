import React from 'react';
import Image from 'next/image';

const product = {
  id: '1',
  title: 'Sample Product',
  price: '$99.99',
  description: 'This is a short description of the product.',
  fullDescription: 'This is a more detailed description of the product. It includes all the features, specifications, and other important information.',
  rating: 4.5,
  reviews: [
    {
      name: 'John Doe',
      rating: 5,
      comment: 'Great product!',
    },
    {
      name: 'Jane Smith',
      rating: 4,
      comment: 'Good quality, but a bit expensive.',
    },
  ],
  images: [
    '/img1.png',
    '/img2.png',
    '/img3.png',
  ],
  relatedProducts: [
    {
      id: '2',
      title: 'Related Product 1',
      price: '$89.99',
      image: '/img1.png',
    },
    {
      id: '3',
      title: 'Related Product 2',
      price: '$79.99',
      image: '/img2.png',
    },
  ],
};

const ProductPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Images */}
          <div>
            <Image src={product.images[0]} alt={product.title} width={500} height={500} className="rounded-lg" />
            <div className="flex mt-4 space-x-4">
              {product.images.map((img, idx) => (
                <Image key={idx} src={img} alt={product.title} width={100} height={100} className="rounded-lg cursor-pointer" />
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
            <p className="text-xl text-green-600 mb-4">{product.price}</p>
            <p className="mb-4">{product.description}</p>
            <div className="flex items-center mb-4">
              <span className="text-yellow-500">{`⭐`.repeat(Math.floor(product.rating))}</span>
              <span className="ml-2 text-gray-600">{product.rating} / 5</span>
            </div>
            <div className="mb-4">
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
                Quantity
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                defaultValue="1"
                min="1"
                className="mt-1 block w-20 border-gray-300 rounded-md"
              />
            </div>
            <div className="flex space-x-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Add to Cart</button>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">Buy Now</button>
            </div>
          </div>
        </div>

        {/* Full Description */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-2">Product Details</h2>
          <p>{product.fullDescription}</p>
        </div>

        {/* Customer Reviews */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-2">Customer Reviews</h2>
          <div>
            {product.reviews.map((review, idx) => (
              <div key={idx} className="border-t border-gray-200 pt-4">
                <div className="flex items-center">
                  <span className="text-yellow-500">{`⭐`.repeat(review.rating)}</span>
                  <span className="ml-2 text-gray-600">{review.name}</span>
                </div>
                <p className="mt-2">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Related Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {product.relatedProducts.map((relatedProduct) => (
            <div key={relatedProduct.id} className="bg-white p-4 rounded-lg shadow">
              <Image src={relatedProduct.image} alt={relatedProduct.title} width={200} height={200} className="rounded-lg mb-4" />
              <h3 className="text-lg font-bold">{relatedProduct.title}</h3>
              <p className="text-green-600">{relatedProduct.price}</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">View Product</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
