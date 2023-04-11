function Resume () {
    return (
    <>
        <svg xmlns="http://www.w3.org/2000/svg" style={{display: 'none'}}>
            <symbol id="check2" viewBox="0 0 16 16">
                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"></path>
            </symbol>
            <symbol id="circle-half" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"></path>
            </symbol>
            <symbol id="moon-stars-fill" viewBox="0 0 16 16">
                <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"></path>
                <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"></path>
            </symbol>
            <symbol id="sun-fill" viewBox="0 0 16 16">
                <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"></path>
            </symbol>
        </svg>

        <div className="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle">
            <button className="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center" id="bd-theme" type="button" aria-expanded="false" data-bs-toggle="dropdown" aria-label="Toggle theme (light)">
                <svg className="bi my-1 theme-icon-active" width="1em" height="1em"><use href="#sun-fill"></use></svg>
                <span className="visually-hidden" id="bd-theme-text">Toggle theme</span>
            </button>
            <ul className="dropdown-menu dropdown-menu-end shadow" aria-labelledby="bd-theme-text">
                <li>
                    <button type="button" className="dropdown-item d-flex align-items-center active" data-bs-theme-value="light" aria-pressed="true">
                        <svg className="bi me-2 opacity-50 theme-icon" width="1em" height="1em"><use href="#sun-fill"></use></svg>
                        Light
                        <svg className="bi ms-auto d-none" width="1em" height="1em"><use href="#check2"></use></svg>
                    </button>
                </li>
                <li>
                    <button type="button" className="dropdown-item d-flex align-items-center" data-bs-theme-value="dark" aria-pressed="false">
                        <svg className="bi me-2 opacity-50 theme-icon" width="1em" height="1em"><use href="#moon-stars-fill"></use></svg>
                        Dark
                        <svg className="bi ms-auto d-none" width="1em" height="1em"><use href="#check2"></use></svg>
                    </button>
                </li>
                <li>
                    <button type="button" className="dropdown-item d-flex align-items-center" data-bs-theme-value="auto" aria-pressed="false">
                        <svg className="bi me-2 opacity-50 theme-icon" width="1em" height="1em"><use href="#circle-half"></use></svg>
                        Auto
                        <svg className="bi ms-auto d-none" width="1em" height="1em"><use href="#check2"></use></svg>
                    </button>
                </li>
            </ul>
        </div>


        <header className="site-header sticky-top py-1">
            <nav className="container d-flex flex-column flex-md-row justify-content-between">
                <a className="py-2" href="#" aria-label="Product">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="d-block mx-auto" role="img" viewBox="0 0 24 24"><title>Product</title><circle cx="12" cy="12" r="10"></circle><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"></path></svg>
                </a>
                <a className="py-2 d-none d-md-inline-block" href="#">Tour</a>
                <a className="py-2 d-none d-md-inline-block" href="#">Product</a>
                <a className="py-2 d-none d-md-inline-block" href="#">Features</a>
                <a className="py-2 d-none d-md-inline-block" href="#">Enterprise</a>
                <a className="py-2 d-none d-md-inline-block" href="#">Support</a>
                <a className="py-2 d-none d-md-inline-block" href="#">Pricing</a>
                <a className="py-2 d-none d-md-inline-block" href="#">Cart</a>
            </nav>
        </header>

        <main>
            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
                <div className="col-md-5 p-lg-5 mx-auto my-5">
                    <h1 className="display-4 fw-normal">Punny headline</h1>
                    <p className="lead fw-normal">And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple’s marketing pages.</p>
                    <a className="btn btn-outline-secondary" href="#">Coming soon</a>
                </div>
                <div className="product-device shadow-sm d-none d-md-block"></div>
                <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
            </div>

            <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
                <div className="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                    <div className="my-3 py-3">
                        <h2 className="display-5">Another headline</h2>
                        <p className="lead">And an even wittier subheading.</p>
                    </div>
                    <div className="bg-body-tertiary shadow-sm mx-auto" style={{width: '80%', height: 300, borderRadius: '21px 21px 0 0'}}></div>
                </div>
                <div className="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                    <div className="my-3 p-3">
                        <h2 className="display-5">Another headline</h2>
                        <p className="lead">And an even wittier subheading.</p>
                    </div>
                    <div className="bg-dark shadow-sm mx-auto" style={{width: '80%', height: 300, borderRadius: '21px 21px 0 0'}}></div>
                </div>
            </div>

            <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
                <div className="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                    <div className="my-3 p-3">
                        <h2 className="display-5">Another headline</h2>
                        <p className="lead">And an even wittier subheading.</p>
                    </div>
                    <div className="bg-dark shadow-sm mx-auto" style={{width: '80%', height: 300, borderRadius: '21px 21px 0 0'}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       ></div>
                </div>
                <div className="text-bg-primary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                    <div className="my-3 py-3">
                        <h2 className="display-5">Another headline</h2>
                        <p className="lead">And an even wittier subheading.</p>
                    </div>
                    <div className="bg-body-tertiary shadow-sm mx-auto" style={{width: '80%', height: 300, borderRadius: '21px 21px 0 0'}}></div>
                </div>
            </div>

            <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
                <div className="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                    <div className="my-3 p-3">
                        <h2 className="display-5">Another headline</h2>
                        <p className="lead">And an even wittier subheading.</p>
                    </div>
                    <div className="bg-body shadow-sm mx-auto" style={{width: '80%', height: 300, borderRadius: '21px 21px 0 0'}}></div>
                </div>
                <div className="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                    <div className="my-3 py-3">
                        <h2 className="display-5">Another headline</h2>
                        <p className="lead">And an even wittier subheading.</p>
                    </div>
                    <div className="bg-body shadow-sm mx-auto" style={{width: '80%', height: 300, borderRadius: '21px 21px 0 0'}}></div>
                </div>
            </div>

            <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
                <div className="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                    <div className="my-3 p-3">
                        <h2 className="display-5">Another headline</h2>
                        <p className="lead">And an even wittier subheading.</p>
                    </div>
                        <div className="bg-body shadow-sm mx-auto" style={{ width: '80%', height: 300, borderRadius: '21px 21px 0 0' }}></div>
                </div>
                <div className="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                    <div className="my-3 py-3">
                        <h2 className="display-5">Another headline</h2>
                        <p className="lead">And an even wittier subheading.</p>
                    </div>
                        <div className="bg-body shadow-sm mx-auto" style={{ width: '80%', height: 300, borderRadius: '21px 21px 0 0' }}></div>
                </div>
            </div>
        </main>

        <footer className="container py-5">
            <div className="row">
                <div className="col-12 col-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="d-block mb-2" role="img" viewBox="0 0 24 24"><title>Product</title><circle cx="12" cy="12" r="10"></circle><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"></path></svg>
                    <small className="d-block mb-3 text-body-secondary">© 2017–2023</small>
                </div>
                <div className="col-6 col-md">
                    <h5>Features</h5>
                    <ul className="list-unstyled text-small">
                        <li><a className="link-secondary" href="#">Cool stuff</a></li>
                        <li><a className="link-secondary" href="#">Random feature</a></li>
                        <li><a className="link-secondary" href="#">Team feature</a></li>
                        <li><a className="link-secondary" href="#">Stuff for developers</a></li>
                        <li><a className="link-secondary" href="#">Another one</a></li>
                        <li><a className="link-secondary" href="#">Last time</a></li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h5>Resources</h5>
                    <ul className="list-unstyled text-small">
                        <li><a className="link-secondary" href="#">Resource name</a></li>
                        <li><a className="link-secondary" href="#">Resource</a></li>
                        <li><a className="link-secondary" href="#">Another resource</a></li>
                        <li><a className="link-secondary" href="#">Final resource</a></li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h5>Resources</h5>
                    <ul className="list-unstyled text-small">
                        <li><a className="link-secondary" href="#">Business</a></li>
                        <li><a className="link-secondary" href="#">Education</a></li>
                        <li><a className="link-secondary" href="#">Government</a></li>
                        <li><a className="link-secondary" href="#">Gaming</a></li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h5>About</h5>
                    <ul className="list-unstyled text-small">
                        <li><a className="link-secondary" href="#">Team</a></li>
                        <li><a className="link-secondary" href="#">Locations</a></li>
                        <li><a className="link-secondary" href="#">Privacy</a></li>
                        <li><a className="link-secondary" href="#">Terms</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    </>
    )
}

export default Resume;