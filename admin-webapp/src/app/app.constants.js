
  angular.module("app").constant("CONFIG", {
    ROOT_URL: "http://localhost:8000/",
    API_URL: "http://localhost:8000/api/"
  }).constant("AUTH_EVENTS", {
    notAuthenticated: "auth-not-authenticated", 
    notAuthorized: "auth-not-authorized",
    tokenExpired: "token-expired",
    logout: "auth-logout"
  });

