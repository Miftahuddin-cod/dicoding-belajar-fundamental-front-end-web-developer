class AllCountryTable extends HTMLElement {
    set allCountryTable(all) {
        this._all = all;
        this.render();
    }

    render() {
        this.allValue = "";
        this._all.forEach((All, index) => {
            this.allValue += `
            <tr>
                <td>${index+1}</td>
                <td><img src="${All.countryInfo.flag}" width='20px'> ${All.country}</td>
                <td>${All.cases}</td>
                <td>${All.active}</td>
                <td>${All.recovered}</td>
                <td>${All.deaths}</td>
            </tr>`
        });
        this.innerHTML = `
                <div class="card mb-5">
                    <div class="card-header">
                        <h5>Cases By Country</h5>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered table-hover table-dark">
                                <thead>
                                    <tr>
                                        <th class="bg-dark">No.</th>
                                        <th class="bg-dark">Country</th>
                                        <th class="bg-danger">Confirmed</th>
                                        <th class="bg-warning">Active</th>
                                        <th class="bg-success">Recovered</th>
                                        <th class="bg-info">Deaths</th>
                                    </tr>
                                    <tr></tr>
                                </thead>
                                <tbody>
                                    ${this.allValue}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
        `;
    }
}

customElements.define("all-country-table", AllCountryTable);