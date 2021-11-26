import '../component/global-cases.js';
import '../component/all-country-table.js';
import '../component/country-list.js';

function main() {
    const baseUrl = "https://corona.lmao.ninja/v2";
    const globalCasesElement = document.querySelector("global-cases");
    const allCountryTableElement = document.querySelector("all-country-table");
    const allCountryListElement = document.querySelector("all-country-list");

    const getGlobalCases = async() => {
        try {
            const response = await fetch(`${baseUrl}/all`);
            const responseJson = await response.json();
            if (responseJson.error) {
                showResponseMessage(responseJson.message);
            } else {
                renderGlobalCases(responseJson);
            }
        } catch (error) {
            showResponseMessage(error);
        }
    }

    const getAllCountry = async() => {
        try {
            const response = await fetch(`${baseUrl}/countries?sort=cases`);
            const responseJson = await response.json();
            if (responseJson.error) {
                showResponseMessage(responseJson.message);
            } else {
                renderAllCountryTable(responseJson);
                renderAllCountryList(responseJson);
            }
        } catch (error) {
            showResponseMessage(error);
        }
    }


    const renderGlobalCases = results => {
        globalCasesElement.globalCases = results;
    };

    const renderAllCountryTable = results => {
        allCountryTableElement.allCountryTable = results;
    };

    const renderAllCountryList = results => {
        allCountryListElement.countries = results;
    };

    const showResponseMessage = message => {
        console.log(message);
    }

    const searchCountry = () => {
        const input = document.getElementById('countrySearch');
        input.addEventListener('keyup', () => {
            const filter = input.value.toUpperCase();
            const coutryList = allCountryListElement.getElementsByTagName('country-item');

            for (let i = 0; i < coutryList.length; i++) {
                const h5 = coutryList[i].getElementsByTagName("h5")[0];
                let txtValue = h5.textContent || h5.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    coutryList[i].style.display = "";
                } else {
                    coutryList[i].style.display = "none";
                }
            }
        })
    }

    document.addEventListener("DOMContentLoaded", async() => {
        await getGlobalCases();
        await getAllCountry();
        await searchCountry();
    });
}

export default main;