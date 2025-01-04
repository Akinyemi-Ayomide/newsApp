import { useContext, useEffect } from 'react';
import { NavContext } from '../context/NavContext';
import { useParams } from 'react-router-dom';

const FoodDetails = () => {
  const { mode, articles } = useContext(NavContext);
  const { id } = useParams(); // Extract id from URL

  // Find the specific product by id
  const product = articles.find(
    (item, index) => item.id?.toString() === id || index.toString() === id,
  );

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="col-span-9">
          {product ? (
            <div className={`${mode ? 'text-white' : ''}`}>
              <p className="mb-2">
                {' '}
                <span
                  className={`${mode ? 'bg-red-500' : 'bg-black'} ${
                    mode ? 'text-white' : 'text-white'
                  } w-8 h-4 p-2 text-xs`}
                >
                  {product.author}
                </span>{' '}
                {new Date(product.publishedAt).toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </p>
              <h1 className={`${mode ? 'text-white' : ''} font-bold text-2xl`}>{product.title}</h1>

              <img
                src={product.urlToImage || 'https://via.placeholder.com/150'}
                alt={product.title || 'Article Image'}
              />
              <p className={`${mode ? 'text-red-800' : 'text-red-800'} text-xs`}>{product.url}</p>
              <p>{product.description || 'No description available'}</p>
            </div>
          ) : (
            <p>Product not found!</p>
          )}
        </div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
};

export default FoodDetails;
