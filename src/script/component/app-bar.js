class AppBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
                <div class="container">
                    <a class="navbar-brand">INFO<span>COVID19</span></a>
                    <button class="navbar-toggler" data-target="#my-nav" data-toggle="collapse" aria-controls="my-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div id="my-nav" class="collapse navbar-collapse">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#casesByCountry">Cases By Country</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><i class="fas fa-envelope"></i> Contact</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><i class="fab fa-instagram"></i> Instagram</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><i class="fab fa-facebook-square"></i> Facebook</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>`
    }
}

customElements.define("app-bar", AppBar);