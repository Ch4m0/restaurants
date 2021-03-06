
  angular.module("app").constant("CONFIG", {
      
    // ROOT_URL: "localhost:8000",
    // API_URL: "localhost:8000/api/"

    ROOT_URL: "https://srestaurants.herokuapp.com/",
    API_URL: "https://srestaurants.herokuapp.com/api/"
  }).constant("AUTH_EVENTS", {
    notAuthenticated: "auth-not-authenticated", 
    notAuthorized: "auth-not-authorized",
    tokenExpired: "token-expired",
    logout: "auth-logout"
  });

