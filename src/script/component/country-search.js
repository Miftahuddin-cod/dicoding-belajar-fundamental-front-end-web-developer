class CountrySearch extends HTMLElement {
    connectedCallback() {
        this.classList.add('col-sm-12', 'mb-3');
        this.render();
    }

    render() {
        this.innerHTML = `
                <div class="card">
                    <div class="card-body">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <div class="input-group-text"><i class="fa fa-search"></i></div>
                            </div>
                            <input id="countrySearch" class="form-control" type="text" name="countrySearch" placeholder="Search Country Name">
                        </div>
                    </div>
                </div>`
    }
}

customElements.define("country-search", CountrySearch);