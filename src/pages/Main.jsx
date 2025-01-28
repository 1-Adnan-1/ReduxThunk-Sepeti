import { useDispatch, useSelector } from "react-redux";
import Container from "../components/Container";
import { getRestaurants } from "../redux/actions/restaurantActions";
import { useEffect } from "react";
import Loader from "../components/Loader";
import Error from "../components/Error";
import RestaurantCard from "../components/ReasturantCard";

const Main = () => {
  const dispatch = useDispatch();
  const { isLoading, error, restaurants } = useSelector(
    (store) => store.restaurants
  );
  const getData = () => {
    dispatch(getRestaurants());
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <h1 className="text-3xl">Tüm Restoranlar</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Error message={error} retry={getData} />
        ) : (
          restaurants.length > 0 &&
          restaurants.map((item) => (
            <RestaurantCard key={item.id} data={item} />
          ))
        )}
      </div>
    </Container>
  );
};

export default Main;
