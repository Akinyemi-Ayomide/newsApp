import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { NavContext } from '../context/NavContext';

const Content = () => {
  const { mode, articles } = useContext(NavContext);
  const { id } = useParams;

  return (
    <div>
      <div className="grid md:grid-cols-12">
        <div className="md:col-span-9 m-3 ">
          <div className="grid md:grid-cols-3 gap-2 ">
            {/* begin of map*/}
            {articles.map((item, index) => (
              <div
                key={index}
                className={`rounded py-2 px-2 hover:shadow-lg ${
                  mode ? 'bg-blue-950' : ''
                } ${mode ? 'text-white' : ''} ${mode ? 'shadow-white' : ''}`}
              >
                <Link to={`/FoodDetails/${index.id || index}`}>
                  <img
                    src={item.urlToImage || 'https://via.placeholder.com/150'}
                    alt={item.title || 'Article image'}
                    className="w-full h-auto rounded"
                  />
                </Link>
                <p>
                  <span className="text-red-600 italic">Author:</span>{' '}
                  {item.author || 'Unknown'}
                </p>
                <p>
                  <span className="text-red-600 italic">Published:</span>{' '}
                  {new Date(item.publishedAt).toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </p>
                <h1 className="font-bold">
                  {item.title
                    ? item.title.split(' ').slice(0, 10).join(' ') // Limit to 10 words
                    : 'Untitled'}
                  {item.title && item.title.split(' ').length > 10 && '...'}
                </h1>
                <Link to={`/FoodDetails/${index.id || index}`}>
                  <p className="text-red-700 text-sm">Read more...</p>
                </Link>
              </div>
            ))}

            {/*end of map*/}
          </div>
        </div>
        <div className="hidden md:block md:col-span-3">
          <div className="flex flex-col justify-around">
            {/* begin of map*/}
            {articles.map((item, index) => (
              <div key={index} className="flex flex-row gap-3 m-2 items-center">
                <img
                  src={item.urlToImage || 'https://via.placeholder.com/150'}
                  className="w-1/2"
                  alt={item.title || 'News Image'}
                />

                <div
                  className={`items-center  text-xs ${
                    mode ? 'text-white' : ''
                  }`}
                >
                  <p>
                    <span className="text-red-600 italic text-xs">
                      Published:
                    </span>{' '}
                    {new Date(item.publishedAt).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </p>
                  <h1 className={` text-xs ${mode ? 'text-white' : ''}`}>
                    {item.title
                      ? item.title.split(' ').slice(0, 5).join(' ') // Limit to 10 words
                      : 'Untitled'}
                    {item.title && item.title.split(' ').length > 5 && '...'}
                  </h1>
                </div>
              </div>
            ))}

            {/*end of map*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
