import styled from "styled-components";
import { useState,useEffect} from "react";
import TopContainer from "./components/TopContainer";
import FilterContainer from "./components/FilterContainer";
import FoodCardContainer from "./components/FoodCardContainer";
export const BASE_URL = "http://localhost:9000";
const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [selectedBtn, setSelectedBtn] = useState('all')


  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        setData(json);
        setFilteredData(json);
        console.log(json)
        setLoading(false);
      } catch (error) {
        setError("Unable to fetch data");
      }
    };
    fetchFoodData();
  }, []);


  if (error) return <div>{error}</div>;

  if (loading) return <div>Loading....</div>;
  const searchFood = (e) => {
    const searchValue = e.target.value;

    console.log(searchValue);

    if (searchValue === "") {
      setFilteredData(null);
    }

    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filter);
  };

  const selectFood = (type) => {
    if (type === 'all' ){
      setFilteredData(data);
      setSelectedBtn('all');
      return;
    }
    const filter = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setFilteredData(filter);
    setSelectedBtn(type);
  }
  const filterBtns = [
    {
      name: "All",
      type: "all",
    },
    {
      name: "Breakfast",
      type: "breakfast",
    },
    {
      name: "Lunch",
      type: "lunch",
    },
    {
      name: "Dinner",
      type: "dinner",
    },
  ];
  return(
  <>
    <Container>
      <TopContainer searchFood={searchFood} />
      <FilterContainer selectFood={selectFood} filterBtns={filterBtns} selectedBtn = {selectedBtn}/>
    </Container>
    <FoodCardContainer filteredData = {filteredData}/>
  </>
  )
};

export default App;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
