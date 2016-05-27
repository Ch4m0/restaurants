<!DOCTYPE html>
<html lang="en" ng-app="Client">
<head>
	<meta charset="UTF-8">
	<title>Prototipo</title>
	  <!-- Compiled and minified CSS -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/css/materialize.min.css">
   <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <!--Import materialize.css-->
  <link rel="stylesheet" href="webapp/assets/css/styles.css">



</head>
<body>
 <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo center">Buscador de restaurante</a>
 	</div>
  </nav>
       <div ng-view></div>


	 <!-- Compiled and minified JavaScript -->
 <script src="webapp/components/angular.min.js"></script>
 <script src="webapp/components/angular-resource.min.js"></script>
 <script src="webapp/components/angular-route.min.js"></script>
 <script src="webapp/scripts/router.js"></script>
 <script src="webapp/scripts/app.constants.js"></script>

 <script src="webapp/scripts/services/restaurant.service.js"></script>
 <script src="webapp/scripts/services/menu.service.js"></script>
 <script src="webapp/scripts/controllers/search.controller.js"></script>
 <script src="webapp/scripts/controllers/restaurant.controller.js"></script>
 <script src="webapp/scripts/controllers/menu.controller.js"></script>

  <script src="https://code.jquery.com/jquery-2.2.3.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/js/materialize.min.js"></script>
  <script>
  	    $(document).ready(function(){
      $('.parallax').parallax();
    });

  $(document).ready(function(){
    $('.tooltipped').tooltip({delay: 50});
  });

  </script>

</body>
</html>
