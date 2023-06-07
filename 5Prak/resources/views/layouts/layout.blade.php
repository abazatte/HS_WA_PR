<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ env('APP_NAME')}}</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
  </head>
  <body>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Schiffmanagement</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a id="ship_link" class="nav-link" href="/ships">Schiffe</a>
        </li>
        <li class="nav-item">
          <a id="model_link" class="nav-link" href="/models">Modelle</a>
        </li>
        <li class="nav-item">
          <a id="manufacturer_link" class="nav-link" href="/manufacturers">Hersteller</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    <div class="container">
        @yield('content')
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
    <script>
      console.log(window.location.pathname);
      var fullpath = window.location.pathname;
      const patharray = fullpath.split('/');

      let shiplink = document.getElementById('ship_link');
      let modelLink = document.getElementById('model_link');
      let manuLink = document.getElementById('manufacturer_link');

      shiplink.classList.remove("active");
      modelLink.classList.remove("active");
      manuLink.classList.remove("active");

      console.log(patharray[1]);

      if(patharray[1] === 'ships'){
          shiplink.classList.add("active");
          console.log('moin');
      }else if(patharray[1] === 'models'){
          modelLink.classList.add("active");
      } else if(patharray[1] === 'manufacturers'){
          manuLink.classList.remove("active");
      }
    </script>
  </body>
</html>