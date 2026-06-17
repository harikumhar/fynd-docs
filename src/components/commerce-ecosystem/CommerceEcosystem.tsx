
type EcosystemCourse = {
  title: string;
  description: string;
  iconSrc: string;
};

const ecosystemCourses: EcosystemCourse[] = [
  {
    title: 'Fynd Commerce essential',
    description: 'Take this course to take the fundamentals of Fynd Commerce',
    iconSrc: 'https://cdn.pixelbin.io/v2/nameless-waterfall-bf6e98/original/Fynd_one/Doc_Images/042_69a54c1627ef20e6e3f6895b_Commerce.png',
  },
  {
    title: 'Extension development',
    description: 'Learn about extensions on Fynd platform and how to build them',
    iconSrc:
      'https://cdn.pixelbin.io/v2/nameless-waterfall-bf6e98/original/Fynd_one/Doc_Images/044_69a54c16e52a6ee832861dc1_Extensions.png',
  },
  {
    title: 'Theme development',
    description: 'Learn to craft themes that transform the online shopping experience',
    iconSrc: 'https://cdn.pixelbin.io/v2/nameless-waterfall-bf6e98/original/Fynd_one/Doc_Images/043_69a54c166cacbdd277d09dc3_Themes.png',
  },
];

export function CommerceEcosystem() {
  return (
    <section className="commerce-ecosystem" aria-labelledby="commerce-ecosystem-title">
      <div className="commerce-ecosystem__page-padding">
        <div className="fds__container">
          <div className="commerce-ecosystem__content">
            <div className="commerce-ecosystem__header">
              <h2 className="commerce-ecosystem__title" id="commerce-ecosystem-title">
                Understand Fynd Platform Ecosystem
              </h2>
              <p className="commerce-ecosystem__description">
                Explore courses to level up your Fynd Platform skills and earn credentials
              </p>
            </div>

            <div className="commerce-ecosystem__cards">
              {ecosystemCourses.map((course) => (
                <article className="commerce-ecosystem__card" key={course.title}>
                  <img className="commerce-ecosystem__icon" src={course.iconSrc} alt="" loading="lazy" />
                  <h3 className="commerce-ecosystem__card-title">{course.title}</h3>
                  <p className="commerce-ecosystem__card-description">{course.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
