# netflix-gpt

Basic Netflix UI-clone with GPT
Hosting URL: https://netflix-gpt-f011a.web.app

# Features it has are:

    - Login Page
        - Sign In / Sign Up form
    - Browse Page
        - Header with logo and user icon
        - Billboard presentation of a movie
        - Rows of Movies list
    - GPT search

# Steps

- created with create-react-app
- tailwind-css
- react-router
- sign-up flow and sign in flow with firebase
- redux setup
- show user name in user icon with tooltip \*\*
- handle sign out using signOut api from firebase
- onAuthStateChanged handles the routing between login and home page
- As onAuthStateChanged is an event listner cleaning it up when component unmounts via useEffect()'s return function
- Sign UP in TMDB and create an app to get access key under API
- docs - get data from API of now playing section
- key: 71e0596ae225f27dab23287cc30f6cbf
- token: eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MWUwNTk2YWUyMjVmMjdkYWIyMzI4N2NjMzBmNmNiZiIsIm5iZiI6MTcyMTM4NTE3Ni4zNjY4NzYsInN1YiI6IjY2OWEzZDJlZjQ0NDVjMDFkOGMxYTgzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Avw33WD72hcqJbDP8LtGpAtKkXCxZ-DfMuBjM3NMLSU

Browse Page
-PromotionalMovie Container - Movie Title - movie des - buttons

- MoviesListContainer
