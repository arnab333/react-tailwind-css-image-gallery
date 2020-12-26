import { useState, useEffect, Fragment } from 'react';

import ImageSearch from './components/ImageSearch';

import ImageCard from './components/ImageCard';

const initState = {
  loading: true,
  images: [],
  searchText: '',
};

function App() {
  const [state, setState] = useState(initState);

  function handleState(data) {
    setState((prevState) => ({
      ...prevState,
      ...data,
    }));
  }

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${state.searchText}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((response) => {
        handleState({ images: response.hits || [], loading: false });
      })
      .catch((err) => {
        console.log(err);
        handleState({ loading: false });
      });
  }, [state.searchText]);

  function handleSearch(text) {
    handleState({ searchText: text });
  }

  return (
    <Fragment>
      <div className="container mx-auto">
        <ImageSearch handleSearch={handleSearch} />

        {!state.loading && state.images.length === 0 && (
          <h1 className="text-5xl text-center mx-auto mt-32">
            No Images Found
          </h1>
        )}

        {state.loading ? (
          <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1>
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {state.images.length > 0 &&
              state.images.map((item) => {
                return <ImageCard key={item.id} image={item} />;
              })}
          </div>
        )}
      </div>
    </Fragment>
  );
}

export default App;
