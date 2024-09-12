import Link from "next/link";
import Image from "next/image";
import One from "@/public/images/team/sajid.jpg";
import Two from "@/public/images/team/fayyaz.jpg";
import Three from "@/public/images/team/team-image-3.jpg";
import Four from "@/public/images/team/haseeb.jpeg";
import Five from "@/public/images/team/team-image5.jpg";
import Six from "@/public/images/team/team-image6.jpg";

const TeamItems = () => {
  return (
    <section className="team-area pt-120 pb-120" id="team-two">
      <div className="container">
        <div className="row g-4">
          <div
            className="col-xl-4 col-lg-6 col-md-6 "
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="1500"
          >
            <div className="team__item">
              <div className="image">
                <Image src={One} alt="Image" priority />
              </div>
              <div className="team__content">
                <h4>
                  <Link className="text-white" href="team-details">
                    Sajid Ali
                  </Link>
                </h4>
                <span className="text-white">CTO</span>
              </div>
              <div className="team__share">
                <ul>
                  <li>
                    <Link href="/">
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                  </li>
                </ul>
                <button>
                  <i className="fa-sharp fa-light fa-share-nodes"></i>
                </button>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 "
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1500"
          >
            <div className="team__item">
              <div className="image">
                <Image src={Two} alt="Image" priority />
              </div>
              <div className="team__content">
                <h4>
                  <Link className="text-white" href="team-details">
                   Fayyaz Ahmed
                  </Link>
                </h4>
                <span className="text-white">CEO</span>
              </div>
              <div className="team__share">
                <ul>
                  <li>
                    <Link href="/">
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                  </li>
                </ul>
                <button>
                  <i className="fa-sharp fa-light fa-share-nodes"></i>
                </button>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 "
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1500"
          >
            <div className="team__item">
              <div className="image">
                <Image src={Three} alt="Image" priority />
              </div>
              <div className="team__content">
                <h4>
                  <Link className="text-white" href="team-details">
                    Bisma Fayyaz
                  </Link>
                </h4>
                <span className="text-white">UI/UX Designer</span>
              </div>
              <div className="team__share">
                <ul>
                  <li>
                    <Link href="/">
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                  </li>
                </ul>
                <button>
                  <i className="fa-sharp fa-light fa-share-nodes"></i>
                </button>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 "
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1500"
          >
            <div className="team__item">
              <div className="image">
                <Image src={Four} alt="Image" priority />
              </div>
              <div className="team__content">
                <h4>
                  <Link className="text-white" href="team-details">
                    Haseeb Yousaf
                  </Link>
                </h4>
                <span className="text-white">AI/ML Engineer</span>
              </div>
              <div className="team__share">
                <ul>
                  <li>
                    <Link href="/">
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                  </li>
                </ul>
                <button>
                  <i className="fa-sharp fa-light fa-share-nodes"></i>
                </button>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 "
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1500"
          >
            <div className="team__item">
              <div className="image">
                <Image src={Five} alt="Image" priority />
              </div>
              <div className="team__content">
                <h4>
                  <Link className="text-white" href="team-details">
                    Prince Sagor
                  </Link>
                </h4>
                <span className="text-white">Programmer</span>
              </div>
              <div className="team__share">
                <ul>
                  <li>
                    <Link href="/">
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                  </li>
                </ul>
                <button>
                  <i className="fa-sharp fa-light fa-share-nodes"></i>
                </button>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 "
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1500"
          >
            <div className="team__item">
              <div className="image">
                <Image src={Six} alt="Image" priority />
              </div>
              <div className="team__content">
                <h4>
                  <Link className="text-white" href="team-details">
                    Mohmmad Arif
                  </Link>
                </h4>
                <span className="text-white">Marketing Manager</span>
              </div>
              <div className="team__share">
                <ul>
                  <li>
                    <Link href="/">
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                  </li>
                </ul>
                <button>
                  <i className="fa-sharp fa-light fa-share-nodes"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamItems;
