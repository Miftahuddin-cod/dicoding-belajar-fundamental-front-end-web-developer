class AppFooter extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <p>Made With <i class="fa fa-heart text-danger"></i> <b>INFO<span>COVID19</span></b></p>
            <p>copyright &copy; 2020 Miftahuddin</p>
        `
    }
}

customElements.define("app-footer", AppFooter);