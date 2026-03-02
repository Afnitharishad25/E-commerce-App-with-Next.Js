import Link from "next/link";


export default function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-4 mt-5">
      <div className="container text-md-left">
        <div className="row text-md-left">

          {/* Company Info */}
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 fw-bold text-warning">
              Trendora
            </h5>
            <p>
              Your one-stop online store for quality products at affordable
              prices. Fast delivery and secure payments guaranteed.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 fw-bold text-warning">
              Shop
            </h5>
            <p><Link href="/products" className="text-light text-decoration-none">All Products</Link></p>
            <p><a href="/categories" className="text-light text-decoration-none">Categories</a></p>
            <p><a href="/deals" className="text-light text-decoration-none">Deals</a></p>
            <p><Link href="/cart" className="text-light text-decoration-none">Cart</Link></p>
          </div>

          {/* Customer Service */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 fw-bold text-warning">
              Support
            </h5>
            <p><Link href="/about" className="text-light text-decoration-none">About Us</Link></p>
            <p><Link href="/contact" className="text-light text-decoration-none">Contact</Link></p>
            <p><a href="/faq" className="text-light text-decoration-none">FAQ</a></p>
            <p><a href="/returns" className="text-light text-decoration-none">Returns</a></p>
          </div>

          {/* Newsletter */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 fw-bold text-warning">
              Newsletter
            </h5>
            <form>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                />
                <button className="btn btn-warning" type="submit">
                  Subscribe
                </button>
              </div>
            </form>

            {/* Social Icons */}
            <div className="mt-3">
              <a href="#" className="text-light me-3 fs-5">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-light me-3 fs-5">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="text-light me-3 fs-5">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="text-light fs-5">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

        </div>

        <hr className="mb-4" />

        <div className="row align-items-center">
          <div className="col-md-7 col-lg-8">
            <p className="text-center text-md-start">
              © {new Date().getFullYear()} Trendora. All Rights Reserved.
            </p>
          </div>

          <div className="col-md-5 col-lg-4">
            <div className="text-center text-md-end">
              <img
                src="/payment.png"
                alt="Payment Methods"
                style={{ maxWidth: "200px" }}
              />
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
