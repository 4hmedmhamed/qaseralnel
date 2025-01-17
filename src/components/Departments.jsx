import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Container } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Nursing = "/assit/Our_advantages/Nursing.jpg";
const children = "/assit/Our_advantages/children.jpg";
const painkiller = "/assit/Our_advantages/painkiller.jpg";
const Anesthetist = "/assit/Our_advantages/Anesthetist.jpg";
const sterilization = "/assit/Our_advantages/sterilization.jpg";
const clinck = "/assit/Our_advantages/clinck.jpg";
const Dangers = "/assit/Our_advantages/Dangers.jpg";
const anlises = "/assit/Our_advantages/anlises.jpg";
const how = "/assit/Our_advantages/how.jpg";
const hear = "/assit/Our_advantages/hear.jpg";
const sonar = "/assit/Our_advantages/sonar.jpg";
const frist = "/assit/Our_advantages/artical.jpg";
const visit = "/assit/Our_advantages/visit.jpg";
const tawabel = "/assit/Our_advantages/tawabel.jpg";
const Departments = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 6000,
    cssEase: "linear",
  };

  return (
    <>
      <div>
        <Container>
          <br></br>
          <br></br>
          <br></br>
          <h5 className="text-center fs-2 mt-3 title-advantages">مميزاتنا</h5>
          <div className="row border-bottom py-2">
            <div className="col-md-4 ">
              <div className="tabell mt-3 text-center  ">
                <div className="row">
                  <div className=" col-3">
                    <div className=" m-2 tabell2">
                      <img
                        src={Nursing}
                        style={{
                          width: "100%",
                          borderRadius: "50%",
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-8">
                    <p className="fs-5 mt-2 m-2 mt-4  text-advantages">
                      يوجد استاف تمريضي على أعلى مستوى
                    </p>
                  </div>
                </div>
              </div>

              <div className="tabell1 mt-3 d-flex justify-content-center text-center">
                <div className="row">
                  <div className=" col-3">
                    <div className="tabell2 m-2">
                      <img
                        src={children}
                        height={100}
                        style={{
                          width: "100%",
                          borderRadius: "50%",
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-8">
                    <p className="fs-5  m-4 mt-4  text-advantages">
                      نخبة من أفضل الأطباء.
                    </p>
                  </div>
                </div>
              </div>

              <div className="tabell mt-3 d-flex justify-content-center text-center">
                <div className="row">
                  <div className=" col-3">
                    <div className="tabell2 m-2">
                      <img
                        src={painkiller}
                        // height={100}
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: "50%",
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-8">
                    <p className="fs-5 m-4  text-advantages">
                      عيادة تسكين الألم والولادة بدون ألم
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="mt-2">
                {/* <Image
                src={frist}
                width={400}
                height={400}
                ></Image> */}
                <img
                  src={frist}
                  style={{
                    width: "100%",
                    borderRadius: "50%",
                  }}
                />
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="tabell mt-3 text-center  ">
                <div className="row">
                  <div className=" col-3">
                    <div className="tabell2 m-2">
                      <img
                        src={Anesthetist}
                        style={{
                          width: "100%",
                          borderRadius: "50%",
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-8">
                    <p className="fs-5  m-4 mt-4  text-advantages">
                      وجود أفضل أطباء تخدير
                    </p>
                  </div>
                </div>
              </div>

              <div className="tabell1 mt-3 d-flex justify-content-center text-center">
                <div className="row">
                  <div className=" col-3">
                    <div className="tabell2 m-2">
                      <img
                        src={sterilization}
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: "50%",
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-8">
                    <p className="fs-5  m-4  text-advantages">
                      التعقيم قبل العمليات وبعدها
                    </p>
                  </div>
                </div>
              </div>

              <div className="tabell mt-3 d-flex justify-content-center text-center">
                <div className="row">
                  <div className=" col-3">
                    <div className="tabell2 m-2">
                      <img
                        src={clinck}
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: "50%",
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-8">
                    <p className="fs-5 m-4  text-advantages">
                      معمل تحاليل شامل في المركز بأقل الأسعار
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>

          <div className="slider-container" style={{ background: "gray" }}>
            <Slider {...settings}>
              <div className="text-center m-2">
                <p className="border-bottom p-2  m-2 fs-5">Reham</p>
                <p>
                  اللهم بارك فعلا الجهاز تحفه ووفر علينا عمل اشاعه غاليه ربنا
                  يوفقك حضرتك يادكتور
                </p>
              </div>
              <div className="text-center m-2">
                <p className="border-bottom p-2  m-2 fs-5">Wasim</p>
                <p>
                  شطر وأفضل دكتور وقبل مايكون دكتور فهو انسان على خلق وانسان
                  رحيم عن تجربه بفضل الله
                </p>
              </div>
              <div className="text-center m-2">
                <p className="border-bottom p-2  m-2 fs-5">Reham</p>
                <p>
                  اللهم بارك فعلا الجهاز تحفه ووفر علينا عمل اشاعه غاليه ربنا
                  يوفقك حضرتك يادكتور
                </p>
              </div>
              <div className="text-center m-2">
                <p className="border-bottom p-2  m-2 fs-5">Marwa</p>
                <p>
                  ربنا يبارك فحضرتك يا دكتور من اشطر الدكاتره عن تجربه بالتوفيق
                  دايما أن شاء الله
                </p>
              </div>
              <div className="text-center m-2">
                <p className="border-bottom p-2  m-2 fs-5">Anwer</p>
                <p>ربنا يبارك فى حضرتك د هشام المحترم ويزيدك من فضله</p>
              </div>
            </Slider>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>

          <div>
            <p className="text-center text-primary fs-3">اخبار</p>
          </div>

          <div className="slider-container text-center">
            <Slider {...settings}>
              <div className="m-4">
                <img
                  src={Dangers}
                  style={{
                    width: "95%",
                    borderRadius: "10px",
                    margin: "10px",
                  }}
                />
                <Link to={"/Report_1"}>
                  <p className="text-primary">
                    إحذري العادات دي لأنها ممكن تسبب العقم ❎
                  </p>
                </Link>
              </div>
              <div className="m-4">
                <img
                  src={anlises}
                  style={{
                    width: "95%",
                    borderRadius: "10px",
                    margin: "10px",
                  }}
                />

                <Link to={"/Report_2"}>
                  <p className="text-primary">
                    {" "}
                    ايه هي أهم تحاليل فترة الحمل؟!
                  </p>
                </Link>
              </div>
              <div className="m-4">
                <img
                  src={sonar}
                  style={{
                    width: "95%",
                    borderRadius: "10px",
                    margin: "10px",
                  }}
                />
                <Link to={"/Report_3"}>
                  <p className="text-primary">
                    {" "}
                    ليه تعملي سونار خلال فترة حملك؟
                  </p>
                </Link>
              </div>
              <div className="m-4">
                <img
                  src={how}
                  style={{
                    width: "95%",
                    borderRadius: "10px",
                    margin: "10px",
                  }}
                />
                <Link to={"/Report_4"}>
                  <p className="text-primary">
                    {" "}
                    إزاي تحافظي على صحة ظهرك خلال الحمل؟!😎
                  </p>
                </Link>
              </div>
              <div className="m-4">
                <img
                  src={hear}
                  style={{
                    width: "95%",
                    borderRadius: "10px",
                    margin: "10px",
                  }}
                />
                <Link to={"/Report_5"}>
                  <p className="text-primary">
                    {" "}
                    لو شعرك بيقع خلال فترة حملك وجربتي طرق كتير لكن مش عارفة إيه
                    الحل؟ 🤔
                  </p>
                </Link>
              </div>
              <div className="m-4">
                <img
                  src={visit}
                  style={{
                    width: "95%",
                    borderRadius: "10px",
                    margin: "10px",
                  }}
                />
                <Link to={"/Report_6"}>
                  <p className="text-primary">
                    {" "}
                    ليه تعملي متابعة شهرية خلال حملك؟ ❤
                  </p>
                </Link>
              </div>
              <div className="m-4">
                <img
                  src={tawabel}
                  style={{
                    width: "95%",
                    borderRadius: "10px",
                    margin: "10px",
                  }}
                />
                <Link to={"/Report_7"}>
                  <p className="text-primary">
                    {" "}
                    هل أكل التوابل يسبب الإجهاض؟ 🤔
                  </p>
                </Link>
              </div>

              <div className="m-4">
                <img
                  src={tawabel}
                  style={{
                    width: "95%",
                    borderRadius: "10px",
                    margin: "10px",
                  }}
                />
                <Link to={"/Report_8"}>
                  <p className="text-primary">
                    {" "}
                    قبل الحقن المجهري، إيه اهم التحاليل اللي تعمليها؟ 🧐
                  </p>
                </Link>
              </div>
            </Slider>
          </div>
        </Container>
        <br></br>
      </div>
    </>
  );
};

export default Departments;
