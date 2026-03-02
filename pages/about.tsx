import React from 'react'

function About() {
  return (
    <div>
       <div className="container my-5">
      <div className="row">
        <div className="col-md-10 mx-auto">
          <h2 className="fw-bold mb-3 bg-info  p-3">About Us</h2>

          <p className=" text-muted">
            Welcome to <strong>Sshoop</strong>, your one-stop destination for
            quality products at affordable prices. We aim to provide a smoothand
            enjoyable online shopping experience for our customers.
          </p>

          <p className="text-muted ">
            At <strong>Sshoop</strong> , we offer a wide range of products
            including electronics, fashion, home essentials, and more. We focus
            on providing a clean user interface, smooth navigation, and a
            responsive design that works seamlessly across devices.
          </p>
        </div>
      </div>
      

      <div className="row">
        <div className="col-md-10 mx-auto">
          <h4 className="fw-bold mb-3 text-center p-3">Our Features</h4>
      </div></div>

      <div className="row g-4">
        
        <div className="col-md-4">
          <div className="card h-100 text-center p-3">
            <div className="fs-1">🛒</div>
            <h5 className="mt-2">Seamless Shopping</h5>
            <p className="text-muted">
              To provide a smooth, intuitive, and user-friendly online shopping
              experience for all users.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 text-center p-3">
            <div className="fs-1">📦</div>
            <h5 className="mt-2">Quality Products</h5>
            <p className="text-muted">
              To offer a wide range of high-quality products at affordable and
              competitive prices.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 text-center p-3">
            <div className="fs-1">⚡</div>
            <h5 className="mt-2">High Performance</h5>
            <p className="text-muted">
              To build a fast, responsive, and reliable application using modern
              web technologies.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 text-center p-3">
            <div className="fs-1">📱</div>
            <h5 className="mt-2">Responsive Design</h5>
            <p className="text-muted">
              To ensure the application works seamlessly across mobile, tablet,
              and desktop devices.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 text-center p-3">
            <div className="fs-1">🔒</div>
            <h5 className="mt-2">Reliability & Security</h5>
            <p className="text-muted">
              To maintain a secure and dependable platform that users can trust.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 text-center p-3">
            <div className="fs-1">🚀</div>
            <h5 className="mt-2">Continuous Improvement</h5>
            <p className="text-muted">
              To continuously enhance features and performance based on user
              feedback and learning.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About
