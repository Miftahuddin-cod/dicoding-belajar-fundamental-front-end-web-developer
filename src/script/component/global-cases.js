class GlobalCases extends HTMLElement {
    set globalCases(global) {
        this._global = global;
        this.render();
    }

    render() {
        this.innerHTML = `
                <div class="mb-5">
                    <div class="row">
                        <section class="col-lg-3 col-md-6 col-sm-12 mb-3">
                            <div class="card">
                                <div class="card-body">
                                    <h5 id="globalConfirmed" class="card-title display-5 text-danger">${this._global.cases}</h5>
                                    <p class="card-text">Confirmed</p>
                                </div>
                            </div>
                        </section>
                        <section class="col-lg-3 col-md-6 col-sm-12 mb-3">
                            <div class="card">
                                <div class="card-body">
                                    <h5 id="globalConfirmed" class="card-title display-5 text-warning">${this._global.active}</h5>
                                    <p class="card-text">Active</p>
                                </div>
                            </div>
                        </section>
                        <section class="col-lg-3 col-md-6 col-sm-12 mb-3">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title display-5 text-success">${this._global.recovered}</h5>
                                    <p class="card-text">Recovered</p>
                                </div>
                            </div>
                        </section>
                        <section class="col-lg-3 col-md-6 col-sm-12 mb-3">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title display-5 text-info">${this._global.deaths}</h5>
                                    <p class="card-text">Deaths</p>
                                </div>
                            </div>
                        </section>
                    </div>
                    <p class="lead">Data is updated every 10 minutes</p>
                </div>`
    }
}
customElements.define("global-cases", GlobalCases);