import { Fragment } from "react";
import "../styles/CvRender.css";

export default function CvRender({
  generalInfo,
  educationArray,
  experienceArray,
}) {
  return (
    <section className="cvContainer">
      <h1 className="userName">{generalInfo.name}</h1>
      <div className="contactBox ">
        <p>
          Email: {generalInfo.email} | Contact: {generalInfo.phone}{" "}
        </p>
      </div>

      <h2 className="userInfoHeading"> EDUCATION</h2>
      <article>
        <div className="spaceBtwBox">
          <h3 className="userTitles">University</h3>
          <h3 className="userTitles">Graduation</h3>
        </div>

        {educationArray.map((element) => {
          return (
            <div className="spaceBtwBox " key={element.key + "cv"}>
              <p className="userInfo">
                <i>{element.major}</i>
              </p>
              <p>
                <i>{`${element.to}`}</i>
              </p>
            </div>
          );
        })}
      </article>

      <h2 className="userInfoHeading"> Professional Experience</h2>
      <article>
        <div className="spaceBtwBox">
          <h3>Company</h3>
          <h3>Position</h3>
        </div>
        {experienceArray.map((element) => {
          return (
            <Fragment key={element.key + "cvElements"}>
              <div class="companyInfo">
                <h3 className="userInfo">{element.company}</h3>
                <p>
                  <i>{element.position}</i>
                </p>
              </div>
              <ul className="workResponsoList">
                {element.responsibilities.map((element) => (
                  <li>{element}</li>
                ))}
              </ul>
            </Fragment>
          );
        })}
      </article>
    </section>
  );
}
