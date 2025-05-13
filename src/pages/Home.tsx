const Home = () => {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-12 col-md-8">
        <div className="titulo-contenedor">
          <h1 className="titulo-texto">Escribe el Destino: Death Note</h1>
        </div>

          <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel"  data-bs-interval="1000">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img 
                  src="https://traditionalcatholicweeb.wordpress.com/wp-content/uploads/2023/04/death-note-light-yagami.jpg" 
                  className="d-block w-100" 
                  alt="..."/>
              </div>
              <div className="carousel-item">
                <img 
                  src="https://cdn.shopify.com/s/files/1/0593/0526/3264/files/Death_Note_Characters__Heights__Age_and_Birthday_An_480x480.jpg?v=1657187332" 
                  className="d-block w-100" 
                  alt="..."/>
              </div>
              <div className="carousel-item">
                <img 
                  src="https://cdn.kayiprihtim.com/wp-content/uploads/2024/06/Yeni-Death-Note-Serisi-Yolda-Olabilir.jpg" 
                  className="d-block w-100" 
                  alt="..."/>
              </div>
            </div>
          </div>


          <div className="ultimas-victimas">
          <h1>Últimas Víctimas</h1>
          <ul className="lista-victimas">
            <li>John Doe</li>
            <li>Jane Smith</li>
            <li>Takashi Arai</li>
          </ul>
        </div>


        </div>

        <div className="col-12 col-md-4 d-flex flex-column gap-4">
        <div className="card d-flex flex-column">
          <img src="https://www.anime-colors.com/wp-content/uploads/light-yagami.png"
            className="card-img-top" alt="Light Yagami" />
        </div>


        <div className="card d-flex flex-column">
          <img src="https://www.anime-colors.com/wp-content/uploads/ryuk.png"
            className="card-img-top" alt="Light Yagami" />
        </div>


        <div className="card d-flex flex-column">
          <img src="https://www.anime-colors.com/wp-content/uploads/l.png"
            className="card-img-top" alt="Light Yagami" />
        </div>

        </div>
      </div>
    </div>
  );
};

export default Home;