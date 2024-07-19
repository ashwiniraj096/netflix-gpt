# netflix-gpt

Basic Netflix UI-clone with GPT

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
