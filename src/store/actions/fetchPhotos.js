import axios from 'axios';
import incrementPage from './incrementPage';
import updatePhotos from './updatePhotos';
import startLoading from './startLoading';

export default (iteration, startingPage = 1) => (dispatch) => {
  /* TODO: parametrize URI creactor function */
  const URI = (pageNum) => `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=c72e4cad056b2b4b7a04483d515d11a9&text=dogs&format=json&nojsoncallback=1&extras=date_upload,description,license,owner_name&page=${pageNum}&per_page=25`;

  dispatch(startLoading());

  let currentPage = startingPage;
  let promises = [];
  for (let i = 1; i <= iteration; i += 1) {
    dispatch(incrementPage(currentPage));
    promises.push(axios.get(URI(currentPage)));
    currentPage += 1;
  }

  return Promise.all(promises)
    .then(responses => responses.map(response => response.data.photos.photo))
    .then(photoArrays => {
      const combinedArrays = photoArrays.reduce((acc, next) => {
        acc = acc.concat(next);
        return acc;
      }, []);
      dispatch(updatePhotos(combinedArrays));
    });
};