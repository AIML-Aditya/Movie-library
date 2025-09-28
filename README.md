  Movie Library (React + Vite + TMDB API)

A responsive React web application that allows users to browse movies, search by title, and manage a personal watchlist.  
The app fetches movie data from the [TMDB API](https://www.themoviedb.org/documentation/api) and uses localStorage to persist watchlist data on the client side.

   

   Features

   Search for movies by title using TMDB API  
   View popular movies on page load  
   Add / Remove movies to a persistent Watchlist (saved in localStorage)  
   Client side routing for Home and Watchlist pages  
   Global state management using React Context API      
   Built with React + Vite + Vanilla CSS (no UI libraries)

   

    Tech Stack

      React  (JS)
      Vite – Fast dev server and build tool
      React Router v6– For navigation
      TMDB API – For movie data
      localStorage – For persistence

   

    Getting Started (Local Setup)

    Clone the repository or unzip the project
```bash
git clone https://github.com/AIML-Aditya/movie-library.git
cd movie library  

Test Cases


Manual test cases to verify:

Home page loads popular movies.
Search returns matching movies from TMDB.
Clicking "Add to Watchlist" stores the movie and persists after refresh.
Watchlist page displays all saved movies.
Clicking "Remove" deletes a movie from the watchlist.
Navigation between Home and Watchlist works without reload.
Responsive layout works on desktop and mobile.
(Automated unit tests using Jest + React Testing Library can be added as a future improvement.)

Assumptions & Design Choices 

API Key Handling: The TMDB API key is stored in .env and exposed at build time. Since this is a client only app, the key cannot be fully hidden.

Persistence: Used localStorage for simplicity since no backend is required. Data persists per browser.

Routing: React Router is used to handle Home (/) and Watchlist (/watchlist) views.

Styling: Vanilla CSS is used intentionally to demonstrate layout and responsive skills without relying on frameworks.

State Management: Context API is sufficient for this project (no Redux needed).

Future Enhancements

Add movie detail pages (with trailers, description, etc.)
Add pagination or infinite scrolling for movie list
Implement automated tests (Jest + RTL)
Store watchlist on backend for multi device sync

Author

Aditya Sahu
Frontend Developer | React | JavaScript
Built as part of the Associate Software Engineer Challenge


