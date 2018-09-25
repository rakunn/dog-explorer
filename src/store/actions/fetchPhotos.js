import updatePhotos from '../actions/updatePhotos';

export default (dispatch) => {
  return fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=c72e4cad056b2b4b7a04483d515d11a9&text=dogs&format=json&nojsoncallback=1&extras=date_upload,description,owner_name')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      dispatch(updatePhotos(data));
    })
    .catch(err => err);
};