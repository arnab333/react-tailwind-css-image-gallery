import { Fragment } from 'react';

function ImageCard({ image }) {
  const tags = image.tags.split(',');

  return (
    <Fragment>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img src={image.webformatURL} alt="random_image" className="w-full" />
        <div className="px-6 py-4">
          <div className="font-bold text-purple-500 text-xl mb-2">
            Photo by {image.user}
          </div>
          <ul>
            <li>
              <strong>Views: </strong>
              {image.views}
            </li>
            <li>
              <strong>Downloads: </strong>
              {image.downloads}
            </li>
            <li>
              <strong>Likes: </strong>
              {image.likes}
            </li>
          </ul>
        </div>
        <div className="px-6 py-4">
          {Array.isArray(tags) &&
            tags.length > 0 &&
            tags.map((item, index) => {
              return (
                <span
                  key={index}
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  #{item}
                </span>
              );
            })}
        </div>
      </div>
    </Fragment>
  );
}

export default ImageCard;
