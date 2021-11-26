class CountryItem extends HTMLElement {
    set country(country) {
        this._country = country;
        this.classList.add('col-lg-4', 'col-md-6', 'col-sm-12', 'mb-3');
        this.render();
    }

    render() {
        this.innerHTML = `
            <article class="card h-100">
                <div class="card-header d-flex align-items-center">
                    <img class="mr-3" src="${this._country.countryInfo.flag}" alt="${this._country.country}" height="50px"> 
                    <h5>${this._country.country.toUpperCase()}</h5> 
                </div>
                <div class="card-body">
                    <table>
                        <tr>
                            <td>Country</td>
                            <td class="w-25 text-center"> : </td>
                            <td> ${this._country.country}</td>
                        </tr>
                        <tr>
                            <td>Population</td>
                            <td class="w-25 text-center"> : </td>
                            <td> ${this._country.population}</td>
                        </tr>
                        <tr>
                            <td>Continent</td>
                            <td class="w-25 text-center"> : </td>
                            <td> ${this._country.continent}</td>
                        </tr>
                        <tr>
                            <td>Cases</td>
                            <td class="w-25 text-center"> : </td>
                            <td> ${this._country.cases}</td>
                        </tr>
                        <tr>
                            <td>Active</td>
                            <td class="w-25 text-center"> : </td>
                            <td> ${this._country.active}</td>
                        </tr>
                        <tr>
                            <td>Recovered</td>
                            <td class="w-25 text-center"> : </td>
                            <td> ${this._country.recovered}</td>
                        </tr>
                        <tr>
                            <td>Deaths</td>
                            <td class="w-25 text-center"> : </td>
                            <td> ${this._country.deaths}</td>
                        </tr>
                    </table>
                </div>
            </article>`;
    }
}

customElements.define("country-item", CountryItem);