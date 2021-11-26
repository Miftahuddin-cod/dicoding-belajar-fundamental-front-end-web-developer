import "./country-search.js";
import "./country-item.js";

class CountryList extends HTMLElement {
    set countries(countries) {
        this._countries = countries;
        this.render();
    }

    render() {
        this.innerHTML = "";
        const countrySearchElement = document.createElement("country-search");
        this.appendChild(countrySearchElement);
        this._countries.forEach(country => {
            const countryItemElement = document.createElement("country-item");
            countryItemElement.country = country;
            this.appendChild(countryItemElement);
        })
    }
}

customElements.define("all-country-list", CountryList);