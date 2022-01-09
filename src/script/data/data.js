class covidDataSource {
    static getCovidData() {
        return fetch(`https://covid19.mathdro.id/api/countries/indonesia/confirmed`)
        .then((response) => {
            return response.json();
        })
        .then((responseJson) => {
            if (responseJson) {
            return Promise.resolve(responseJson);
            } else {
            return Promise.reject(`ERROR`);
            }
        });
    }
}

export default covidDataSource;
        
        
            

            
     



    



