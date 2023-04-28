import "./Servicios.css";
export function Servicios() {
  let servicios = [
    {
      id: 1,
      nombre: "Axl Rose",
      // role: "Vocalista y pianista",
      foto: "https://firebasestorage.googleapis.com/v0/b/magicbarber-3ae8a.appspot.com/o/Tinturado.png?alt=media&token=3b6abc55-411b-492e-bf9b-7bb1f5522c95",
      // nacimiento:
      //   "6 de febrero de 1962 (edad 61 años), Lafayette, Indiana, Estados Unidos",
    },
    {
      id: 2,
      nombre: "Axl Rose",
      // role: "Vocalista y pianista",
      foto: "https://firebasestorage.googleapis.com/v0/b/magicbarber-3ae8a.appspot.com/o/Tinturado.png?alt=media&token=3b6abc55-411b-492e-bf9b-7bb1f5522c95",
      // nacimiento:
      //   "6 de febrero de 1962 (edad 61 años), Lafayette, Indiana, Estados Unidos",
    },
  ];
  return (
    <>
      <div
        id="myCarousel"
        className="carousel slide my-5 pt-2"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to={3}
            aria-label="Slide 4"
          />
        </div>
        <div className="carousel-inner text-center">
          <div className="carousel-item active">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/magicbarber-3ae8a.appspot.com/o/Tinturado.png?alt=media&token=3b6abc55-411b-492e-bf9b-7bb1f5522c95"
              alt=""
              className="img-fluid w-100"
            />
            <div className="container">
              <div className="carousel-caption text-start">
                <h1>Tintura</h1>
                <p>
                  Nos caracterizamos por ser lo mas profesionales a la hora de
                  diseñar tu estilo de color deseado
                </p>
                <p>
                  <a className="btn btn-lg btn-primary" href="#">
                    Ver Estilos
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/magicbarber-3ae8a.appspot.com/o/Cuidado_facial.png?alt=media&token=8938c1d8-af43-495b-8a75-9f4179740e9a"
              alt=""
              className="img-fluid  w-100"
            />
            <div className="container">
              <div className="carousel-caption">
                <h1>Cuidado facial.</h1>
                <p>
                  Tambien nos preocupamos por que tengas una piel bien cuidada.
                </p>
                <p>
                  <a className="btn btn-lg btn-primary" href="#">
                    Ver Estilos
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/magicbarber-3ae8a.appspot.com/o/Corte_cabello.png?alt=media&token=2c8be3cd-1c55-4e2b-ab27-6b76c690de29"
              className="img-fluid  w-100"
            />
            <div className="container">
              <div className="carousel-caption text-end">
                <h1 className="text-dark">Corte de Cabello.</h1>
                <p>
                  Nos caracterizamos por ser lo mas profesionales a la hora de
                  diseñar tu estilo en el momento de realizar tu corte de cabello
                </p>
                <p>
                  <a className="btn btn-lg btn-primary" href="#">
                    Ver Estilos
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/magicbarber-3ae8a.appspot.com/o/Corte_barba.png?alt=media&token=a45cb21e-e3bb-4f4c-8c6a-402f1e714369"
              className="img-fluid  w-100"
            />
            <div className="container">
              <div className="carousel-caption text-start">
                <h1>Corte de Barba</h1>
                <p>
                Nos caracterizamos por ser lo mas profesionales a la hora de
                  complacerte y hacer que se vea tu barba como lo deseas.
                </p>
                <p>
                  <a className="btn btn-lg btn-primary" href="#">
                    Agenda tú cita
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <section>
      <h1 className="text-center">Tipos de Tinturas</h1>
      <div className="container-fluid bg-img mt-5">
      <div className="row row-cols-1 row-cols-md-2 g-3 mt-5">
        {servicios.map(function (servicio) {
          return (
            <div key={servicio.id}>
              <div className="col m-2">
                <div className="card h-100 shadow bg-img">
                  <h3 className="fw-bold text-center">{servicio.nombre}</h3>
                  <img
                    src={servicio.foto}
                    alt="foto"
                    className="img-fluid w-100 h-100"
                  />
                  <h4 className="text-center mt-3">{servicio.role}</h4>
                  <h5 className="m-3">{servicio.nacimiento}</h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      </div>
      </section>
    </>
  );
}
