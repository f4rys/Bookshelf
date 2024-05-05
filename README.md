# Bookshelf
E-book reader for books in public domain.

# Use case diagram
![Use case diagram](use_case_diagram.png)

# Overview
## App
- Bookshelf is SPA thanks to the use of the Vue.js framework.
- It is PWA, can be downloaded and installed.
- It is hosted on Firebase Hosting.
- Application layout is responsive and both desktop and mobile-friendly thanks to the use of the Bootstrap.
- It uses 3 collection of documents stored in Firebase DB that stores information about books, users and bookstores.

## Books
- Possibility to view books loaded from Firebase Storage for logged in and not logged in users.
- Logged in users can add to and remove books from their favourites list.
- Device vibrates as the user adds to or removes book from their favourites list.
- Logged in users have their progress in book saved in database. The book always opens where the user finished reading last time.

## Stores
- A map of bookstores in Krakow built with Leaflet.js.
- User can find their current GPS location. It is marked on a map.

## Login and signup
- Authentication system is built with the help of Firebase services.
- It allows to create account with email and password or log in with Google account.
- Account dropdown menu has a button to log out.

## Profile
- User can see their username and email
- User can also set and change their avatar. The files are stored via Firebase Storage.
- A new avatar can be set by selecting a photo in user device's image picker or by accessing their camera and taking photo.