export function Servicios(){
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
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                {/* <svg
                  className="bd-placeholder-img"
                  width="100%"
                  height="100%"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <rect
                    width="100%"
                    height="100%"
                    fill="var(--bs-secondary-color)"
                  />
                </svg> */}
                <img src="https://firebasestorage.googleapis.com/v0/b/magicbarber-3ae8a.appspot.com/o/corte%20de%20barba.jpg?alt=media&token=6528596f-b3c1-491d-a497-d5e478e3d80f"  alt="" className="img-fluid shop w-100"/>
                <div className="container">
                  <div className="carousel-caption text-start">
                    <h1>Corte Barba</h1>
                    <p>
                      Nos caracterizamos por ser lo mas profesionales a la hora de diseñar tu corte de barba.
                    </p>
                    <p>
                      <a className="btn btn-lg btn-primary" href="#">
                        Agenda tú cita
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img src="https://firebasestorage.googleapis.com/v0/b/magicbarber-3ae8a.appspot.com/o/corte%20de%20cabello.jpg?alt=media&token=2a6c2a3b-2d4c-46e5-aac0-0c933781b325"  alt="" className="img-fluid shop w-100"/>
                <div className="container">
                  <div className="carousel-caption">
                    <h1>Corte de Cabello.</h1>
                    <p>
                      Nos acomodamos al estilo que desees en tu corte de cabello.
                    </p>
                    <p>
                      <a className="btn btn-lg btn-primary" href="#">
                        Agenda tú cita
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img src="https://firebasestorage.googleapis.com/v0/b/magicbarber-3ae8a.appspot.com/o/cuidado%20facial.jpg?alt=media&token=d8baf3bd-2a5d-48ae-9a69-ea103ab12728"  className="img-fluid shop w-100"/>
                <div className="container">
                  <div className="carousel-caption text-end">
                    <h1>Cuidado facial.</h1>
                    <p>
                      Tambien nos preocupamos por que tengas una piel bien cuidada.
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
        </>
      );
}