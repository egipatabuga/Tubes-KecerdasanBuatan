import "../component/data-bar";
import covidDataSource from "../data/data";

const main = () => {
    const dataBar = document.querySelector('data-bar');
  
    const getData = () => {
      
      covidDataSource.getCovidData()
        .then((result) => (dataBar.covidData = result));
    };
  
    getData();
  };

  export default main;