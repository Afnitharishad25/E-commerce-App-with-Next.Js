
"use client"

export default function Carousel() {
  return (
    <div className='container-fluid px-0'>
      <div id="Carouselbanner" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
          {/* Indicators */}
        <div className="carousel-indicators">
          <button data-bs-target="#Carouselbanner" data-bs-slide-to="0" className="active"></button>
          <button data-bs-target="#Carouselbanner" data-bs-slide-to="1"></button>
          <button data-bs-target="#Carouselbanner" data-bs-slide-to="2"></button>
          <button data-bs-target="#Carouselbanner" data-bs-slide-to="3"></button>
        </div>

         {/* Slides */}
        <div className="carousel-inner">

            <div className="carousel-item active">
             <img src='/banner/banner1.webp' className="d-block w-100 carousel-img" alt="Banner 1" />
            </div>

            <div className="carousel-item">
              <img src='/banner/banner2.webp' className="d-block w-100 carousel-img" alt="Banner 2" />
            </div>

            <div className="carousel-item">
               <img src='/banner/banner3.webp' className="d-block w-100 carousel-img" alt="Banner 3" />
            </div>

            <div className="carousel-item">
               <img src='/banner/banner4.webp' className="d-block w-100 carousel-img" alt="Banner 3" />
            </div>

        </div>
        
         {/* Controls */}
        <button className="carousel-control-prev" data-bs-target="#Carouselbanner" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button className="carousel-control-next" data-bs-target="#Carouselbanner" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>

      </div>

    </div>
  )
}
