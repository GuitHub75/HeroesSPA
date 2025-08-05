import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../components";
import queryString from "query-string";
import { getHeroesByName } from "../helpers";

export const SearchPage = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);

  const heroes = getHeroesByName(q);

  const { searchText, onInputChange, onResetForm } = useForm({
    searchText: q,
  });

  const showSearch = q.length === 0;
  const showError = q.length > 0 && heroes.length === 0;

  const onSearchSubmit = (e) => {
    e.preventDefault();
    // if (searchText.trim().length <= 1) return;
    navigate(`?q=${searchText}`);
    //onResetForm();
  };

  return (
    <>
      <h1 className="text-center mb-4">Search Heroes</h1>
      <hr />
      <div className="row">
        <div className="col-5 mx-auto">
          <h4 className="text-center mb-4"></h4>
          <form className="form" onSubmit={onSearchSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="searchText"
                value={searchText}
                onChange={onInputChange}
                placeholder="Search for a hero..."
              />
            </div>
            <div className="form-group mt-3">
              <button type="submit" className="btn btn-primary">
                Search
              </button>
            </div>
          </form>
        </div>
        <div className="col-7 mx-auto">
          
          <h4 className="text-center mb-4">Results</h4>

          <div className="alert alert-info" style={showSearch ? { display: "block" } : { display: "none" }}>
            Search for a hero by name or alias.
          </div>

          <div className="alert alert-warning" style={showError ? { display: "block" } : { display: "none" }}>
            No heroes found. {q}
          </div>

          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
        <div />
      </div>
    </>
  );
};
