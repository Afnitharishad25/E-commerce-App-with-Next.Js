function Contact() {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-8 mx-auto">
          <h2 className="fw-bold text-center mb-4">Contact Us</h2>

          <p className="text-center text-muted mb-4">
            Have questions or need assistance? We’re here to help.  
            Feel free to reach out to us using the details below.
          </p>

          <div className="row g-4">
            <div className="col-md-4 text-center">
              <div className="card h-100 p-3">
                <div className="fs-1">📍</div>
                <h6 className="mt-2">Address</h6>
                <p className="text-muted">
                  Sshoop, Dubai, UAE
                </p>
              </div>
            </div>

            <div className="col-md-4 text-center">
              <div className="card h-100 p-3">
                <div className="fs-1">📧</div>
                <h6 className="mt-2">Email</h6>
                <p className="text-muted">
                  support@Sshoop.com
                </p>
              </div>
            </div>

            <div className="col-md-4 text-center">
              <div className="card h-100 p-3">
                <div className="fs-1">📞</div>
                <h6 className="mt-2">Phone</h6>
                <p className="text-muted">
                  +971 50 123 4567
                </p>
              </div>
            </div>
          </div>

          <hr className="my-5" />

          <h5 className="mb-3">Send Us a Message</h5>

          <form>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" placeholder="Enter your name" />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="Enter your email" />
            </div>

            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea className="form-control"  placeholder="Enter your message"></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}

export default Contact;