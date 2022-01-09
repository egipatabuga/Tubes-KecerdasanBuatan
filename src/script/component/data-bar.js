class DataBar extends HTMLElement {

    
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    set covidData(covidData) {
        this._covidData = covidData;
        this.render();
      }

    render() {
        this.shadowDOM.innerHTML = `
           <style>
               .data-container {
                   width: 600px;
                   height: 400px;
                   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                   letter-spacing: 1pt;
                   background-color: rgba(53,93,45,0.5);
                   border-radius: 5%;
                   margin-top: 50px;
                   margin-right: auto;
	               margin-left: auto;
               }

               .header {
                   width: 100%;
                   height: 30%;
                   font-size: 30px;
                   text-align: center;
                   color: white;
               }

               .header > p {
                    padding-top: 20px;
               }

               table {
                    width: 100%;
                    height: 70%;
                    font-size: 20px;
                    color: white;
                    padding: 10px;
               }
               
               @media screen and (max-width: 600px) {
                    .data-container {
                        width: 400px;
                        height: 420px;
                        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                        letter-spacing: 1pt;
                        background-color: rgba(53,93,45,0.5);
                        border-radius: 5%;
                        margin-top: 50px;
                        margin-right: auto;
                        margin-left: auto;
                    }
               }
           </style>

           <div class="data-container">
               <div class ="header">
                    <p>Data Kasus COVID-19 <br> INDONESIA</p>
               </div>

               <table>
                    <tr>
                        <td>Terkonfirmasi</td>
                        <td>${this._covidData[0].confirmed}</td>
                    </tr>

                    <tr>
                        <td>Sembuh</td>
                        <td>${this._covidData[0].recovered}</td>
                    </tr>

                    <tr>
                        <td>Positif</td>
                        <td>${this._covidData[0].active}</td>
                    </tr>

                    <tr>
                        <td>Meninggal</td>
                        <td>${this._covidData[0].deaths}</td>
                    </tr>
               </table>
           </div>
           `;

           
    }
}

customElements.define("data-bar", DataBar);