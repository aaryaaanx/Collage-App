import React from "react";

const HomePage = () => {
  return (
    <div>
      <div className="container">
        <div className="row g-3">
          <h1>Home </h1>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div id="carouselExample" class="carousel slide">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src="https://media.licdn.com/dms/image/C511BAQHblzoNiPBGdw/company-background_10000/0/1584238544086/sree_buddha_college_of_engineering_cover?e=2147483647&v=beta&t=jhGxUOzcurLtu9ihBoKSNsiv5QdIJjK8eyZzc70vN8U"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://sbce.ac.in/wp-content/themes/sbce/images/buddha.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://sbce.ac.in/wp-content/uploads/2017/05/1438065971_lib1.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          <div className="col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-3 col-xxl-3">
            <div class="card">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxW0vxekzrOGprKjsb4vNqawbj24TQJbOlNkQ-gnbvTA&s"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <p class="card-text">
                  Sree Buddha College of Engineering, Pattoor
                </p>
              </div>
            </div>
          </div>

          <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <p>
              Sree Buddha College of Engineering, nestled in the serene locale
              of Pattoor, is a beacon of technical education in Kerala, India.
              Established with a vision to impart quality engineering education,
              the college stands tall as a testament to innovation, excellence,
              and academic integrity. The campus itself is a harmonious blend of
              modern infrastructure and natural beauty, providing students with
              an inspiring environment conducive to learning and personal
              growth. Spread across acres of lush greenery, the college offers
              state-of-the-art facilities, including well-equipped laboratories,
              spacious classrooms, and advanced research centers. At Sree Buddha
              College of Engineering, academic rigor is complemented by a
              holistic approach to education. The faculty comprises
              distinguished scholars and industry experts who are committed to
              nurturing the intellectual curiosity and professional development
              of students. Through interactive teaching methods and mentorship,
              they empower students to explore their passions, think critically,
              and excel in their chosen fields. Beyond academics, the college
              fosters a vibrant campus life enriched with cultural events,
              sports activities, and community engagement initiatives. Students
              are encouraged to participate in clubs and societies, allowing
              them to develop leadership skills, forge lifelong friendships, and
              make meaningful contributions to society. With a focus on
              innovation and entrepreneurship, Sree Buddha College of
              Engineering instills in its students the values of creativity,
              adaptability, and ethical leadership. 
            </p>
          </div>

          <div className="col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-3 col-xxl-3">
            <div class="card">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxW0vxekzrOGprKjsb4vNqawbj24TQJbOlNkQ-gnbvTA&s"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <p class="card-text">
                  Sree Buddha College of Engineering, Pattoor
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
