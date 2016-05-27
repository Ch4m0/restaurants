
  angular.module("app").constant("CONFIG", {
    ROOT_URL: "https://immense-retreat-62506.herokuapp.com/",
    API_URL: "https://immense-retreat-62506.herokuapp.com/api/"
  }).constant("AUTH_EVENTS", {
    notAuthenticated: "auth-not-authenticated", 
    notAuthorized: "auth-not-authorized",
    tokenExpired: "token-expired",
    logout: "auth-logout"
  });

