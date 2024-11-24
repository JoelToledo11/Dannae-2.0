const headerHTML = `

<header>
    <div id="myCarousel" class="carousel slide mb-6" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="Imagenes/LogoRcIndumentaria.jpg" alt="">
          <div class="carousel-caption text-start">
            <h1>RC Indumentaria</h1>
            <p class="opacity-75"><h4></h4></p>
            <p><a class="btn btn-lg btn-primary" href="#"></a></p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="Imagenes/OtraPromocion.jpg" alt="">
          <div class="carousel-caption">
            <h1>RC Indumentaria</h1>
            <p><h4>Te atenderemos con el mejor grupo de profesionales especializados</h4></p>
            <p><a class="btn btn-lg btn-primary" href="#"></a></p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="Imagenes/Promocion.jpg" alt="">
          <div class="carousel-caption text-end">
            <h1 class="CustomiTexto">RC Indumentaria</h1><!--"CLASS="CUSTOMITEXTO" ES PARA CAMBIAR EL COLOR AL TEXTO EN CSS-->
            <p><h4 class="CustomiTexto">Te esperamos en Rivadavia 150-Monteros, Tucumán</p><!--"CLASS="CUSTOMITEXTO" ES PARA CAMBIAR EL COLOR AL TEXTO EN CSS-->
            <p><a class="btn btn-lg btn-primary" href="#"></a></p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
</header>

`;

const footerHTML = `

<footer class="footer">
    <div class="container text-center">
      <div class="row">
        <!-- Información de la tienda -->
        <div class="col-12">
          <h5>RC Indumentaria</h5>
          <p>Dirección: Rivadavia 150, Monteros, Argentina</p>
          <p>Teléfono: +54 9 381 467-2760</p>
          <p>Email: rcindu150mont@gmail.com</p>
        </div>
      </div>

      <!-- Redes Sociales -->
      <div class="row mt-3">
        <div class="col-12">
          <div class="social-icons">
            <a href="https://www.facebook.com/richar.cruz.54" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="https://www.tiktok.com/@richarcruz15" aria-label="TikTok"><i class="fab fa-tiktok"></i></a>
            <a href="https://www.instagram.com/rc.indumentaria.tuc/" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>

      <!-- Derechos reservados -->
      <div class="row mt-3">
        <div class="col-12">
          <p>&copy; 2024 RC Indumentaria. Todos los derechos reservados.</p>
        </div>
      </div>
    </div>
  </footer>


`;

const navHTML = `

<nav class="navbar navbar-expand-lg navbar-light bg-light" id="NavBar">
    <div class="container-fluid">
        <!-- Logo -->
        <a class="navbar-brand" href="#">
            <img src="Imagenes/LogoRcIndumentaria.jpg" alt="Logo" style="height: 55px;">
        </a>

        <!-- Toggle button for mobile view -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Navbar content -->
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link" href="#">Inicio</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="productsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Productos
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="productsDropdown">
                        <li><a class="dropdown-item" href="#">Ropa de Hombre</a></li>
                        <li><a class="dropdown-item" href="#">Ropa de Mujer</a></li>
                        <li><a class="dropdown-item" href="#">Accesorios</a></li>
                        <li><a class="dropdown-item" href="#">Calzado</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contacto</a>
                </li>
            </ul>

            <!-- Inicio de sesión -->
            <div class="d-flex align-items-center me-2">
                <a href="#" class="btn btn-outline-primary d-flex align-items-center">
                    <i class="fas fa-user"></i>
                    <span class="ms-2"></span>
                </a>
            </div>

            <!-- Carrito de compras -->
            <div class="d-flex align-items-center">
                <a href="#" class="btn btn-outline-primary d-flex align-items-center position-relative">
                    <i class="fas fa-shopping-cart"></i>
                    <span class="ms-2"></span>
                    <!-- Contador de artículos en el carrito -->
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        5
                        <span class="visually-hidden">Artículos en el carrito</span>
                    </span>
                </a>
            </div>
        </div>
    </div>
</nav>

`

function HeaderFooter() {
    const headerElement = document.getElementById('myCarousel');
    const footerElement = document.getElementById('PiePagina');
    const navElement = document.getElementById('NavBar');

    if (headerElement) {
        headerElement.innerHTML = headerHTML;
    }

    if (footerElement) {
        footerElement.innerHTML = footerHTML;
    }

    if (navElement) {
        navElement.innerHTML = navHTML;
    }
}

document.addEventListener ('DOMContentLoaded', HeaderFooter)