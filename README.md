# Dog Explorer - Assignment Project
See live demo [here](https://rakunn.github.io/dog-explorer/)

### Description
A simple gallery App showing images of dogs, that are beign displayed directly from Flickr API.
Application features:
- Photos with captions - author, date, description (if exists)
- Infinite scroll
- Error handling and loading indicators
- Simple text-based filter allowing for photos drill down!

### Getting Started
* Clone this project on your local machine
* Then install all project dependencies
```
cd dog-explorer
npm install
```
* Run the app with 
```
npm run start
```
Or check out [live version](https://rakunn.github.io/dog-explorer/)

### Built with

* [React](https://reactjs.org/) (of course!)
* [Flickr API](https://www.flickr.com/services/api/) - photos and captions

### Known issues

* With slower internet, images might load before position transition occurs, making cluttered photo display. Idea: fire 'finish loading' action after the last image is rendered. Actually, it was addressed in loading-spinner branch, but I removed this because my solution was not elegant and possibly buggy.
* When photos are fitting on one page (due to filter for example), we cannot use infinite scroll. Idea: create fetch button when window doesn't have scroll.
* When filter is on and we use infinite scroll, the photos will be fetched but will not display. Idea: provide general photo counter, to communicate all changes in the data to the user

### Possible enhacements

* Add more filters and sorting functionality. How? Parametrize fetchPhotos's URI function creator to make it more universal
* Add conditional photos rendering for better user experience. How? Add toolbar with display options. Depending on selection, we could generate different class for Photo / Photos components.
* Better Error handling for users, possibly with the help of Service Workers. We could add quick popups, like Material UI's snackbars to communicate different information to the user.

### Contribution 
No contribution expected, due to the project's nature, but I am always accepting helpful comments and PRs :)