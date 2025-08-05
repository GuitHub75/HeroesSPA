import { useState, useEffect, useMemo } from "react";
import { getHeroeById } from "../helpers";
import { Navigate, useNavigate, useParams } from "react-router-dom";

export const HeroPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const navigate = useNavigate();

  const { Id } = useParams();
  const heroe = useMemo(() => getHeroeById(Id), [Id]); //cuando Id cambia, recalcula heroe

  if (!heroe) {
    return <Navigate to="/marvel" />;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="container-fluid py-5 hero-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div
              className={`card shadow-lg border-0 hero-card${
                isLoaded ? " loaded" : ""
              }`}
            >
              <div className="row g-0">
                <div className="col-12 col-md-5 col-lg-4">
                  <div
                    className="position-relative h-100"
                    style={{ minHeight: "400px" }}
                  >
                    <div className="position-absolute w-100 h-100 hero-image-bg" />
                    <div
                      className={`w-100 h-100 d-flex align-items-center justify-content-center hero-image-container${
                        isLoaded ? " loaded" : ""
                      }`}
                    >
                      <img
                        src={`/assets/heroes/${heroe.id}.jpg`}
                        alt={heroe.superhero}
                        className="img-fluid rounded hero-img"
                      />
                    </div>
                    <div
                      className="position-absolute bottom-0 start-0 w-100 p-3"
                      style={{
                        background:
                          "linear-gradient(transparent, rgba(0,0,0,0.7))",
                        color: "white",
                      }}
                    >
                      <small className="fw-bold ">{heroe.publisher}</small>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-7 col-lg-8">
                  <div
                    className={`card-body p-4 p-lg-5 hero-content${
                      isLoaded ? " loaded" : ""
                    }`}
                  >
                    <h2 className="mb-3">{heroe.superhero}</h2>
                    <ul className="list-unstyled mb-4">
                      <li>
                        <strong>Alter ego:</strong> {heroe.alter_ego}
                      </li>
                      <li>
                        <strong>First appearance:</strong>{" "}
                        {heroe.first_appearance}
                      </li>
                      <li>
                        <strong>Publisher:</strong> {heroe.publisher}
                      </li>
                      <li>
                        <strong>Characters:</strong> {heroe.characters}
                      </li>
                    </ul>
                    <div className="d-flex flex-wrap gap-3">
                      <button
                        className="btn btn-lg px-4 py-2 hero-btn-main"
                        onClick={handleBack}
                      >
                        ← Back
                      </button>
                      <button className="btn btn-outline-dark btn-lg px-4 py-2 border-2 hero-btn-fav">
                        ❤️ Add to Favorites
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
