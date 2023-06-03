import { Link } from "preact-router"
import Logo from "../../public/manifest-icon-512.maskable.png"

function Landing() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary bg-primary">
        <div class="container-fluid">
          <a class="navbar-brand fw-bold text-white" href="#">Prudoo List</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav text-end">
              <li class="nav-item">
                <button type="button" class="btn text-white">
                  <i class="bi bi-lamp-fill"></i>
                </button>
              </li>
              <li className="nav-item">
                <Link href="/app" className="btn btn-outline-light ms-2">Start Writing</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="d-flex justify-content-center align-items-center flex-column text-center shadow-sm" style={{height: "512px"}}>
        <h1 className="fw-bold text-primary display-3">Write Todo List Locally</h1>
        <Link href='/app' className="btn btn-lg btn-success">Start Writing</Link>
      </main>

      <div className="container">
        <section className="row row-cols-1 row-cols-md-2 g-2 align-items-center shadow-sm" style={{height: "512px"}}>
          <div className="col text-center">
            <img src={Logo} alt="Logo" height={300} width={300} />
          </div>
          <div className="col text-center text-md-start">
            <h1 className="fw-bold text-primary">What is Prudoo List?</h1>
            <p><span className="fw-bold text-primary">Prudoo List</span> is a Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis itaque similique et laboriosam amet magni excepturi iusto autem soluta sapiente!</p>
          </div>
        </section>
        <section className="row align-items-center" style={{height: "512px"}}>
          <div className="col text-center">
            <h1>Curious about the source code?</h1>
            <a href="https://github.com/faizbyp/prudoo-list" target='_blank' className="btn btn-primary"><i class="bi bi-github me-2"></i>See the repo</a>
          </div>
        </section>
      </div>

      <footer className="text-center text-white bg-primary py-3">
        <p className="m-0">made with 💖 by <a href="https://www.linkedin.com/in/faizbyp/" className="text-white" target='_blank'>faizbyp</a></p>
      </footer>
    </>
  )
}
export default Landing