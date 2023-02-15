import React from 'react';
import styles from './HomePage.module.scss';

import promo from '../../assets/images/home/promo.png';
import interv1 from '../../assets/images/home/interv_1.png';
import interv2 from '../../assets/images/home/interv_2.png';
import interv3 from '../../assets/images/home/interv_3.png';
import every from '../../assets/images/home/every.png';

export const HomePage = () => {
  return (
    <main className={styles.container}>
      <section className={styles.promo}>
        <div className={styles.promo__container}>
          <div className={styles['promo__text-block']}>
            <h1 className={styles.promo__header}>
              Looking to aim higher… achieve better??
            </h1>
            <p className={styles.promo__descr}>
              Success Gateway Learning centre is a tuition provider based in
              Harrow, which aims to draw out the inert abilities and skills of
              students, help them realise their potential and give that extra
              support to achieve success.
            </p>
          </div>
          <img src={promo} alt="learning_center" />
        </div>
      </section>
      <section className={styles.intervention}>
        <h2 className={styles.intervention__header}>Intervention does help!</h2>
        <p className={styles.intervention_descr}>
          Our tutoring service provides that academic intervention which
          students need to achieve their targets levels at schools therefore
          assisting them to perform better in their studies.
        </p>
        <div className={styles.intervention__wrap}>
          <img src={interv1} alt="kids" />
          <img
            src={interv2}
            alt="man"
            className={styles.intervention__img_bottom}
          />
          <img src={interv3} alt="students" />
        </div>
      </section>
      <section className={styles.journey}>
        <h2 className={styles.journey__header}>Let’s go on a journey</h2>
        <div className={styles.journey__wrap}>
          <div></div>
          <p className={styles.journey__descr}>
            Learning journey at our Success Gateway is intensive with
            comprehensive course plans, effective teaching methodologies and
            activity-based learning which is tailor-made for each student.
            Besides, it also has fun activities such as quizzes, subject-based
            competitions and mind games to enhance the mental and social
            potential of the child.
          </p>
        </div>
      </section>

      <section className={styles.every}>
        <h2 className={styles.every__header}>Every little support helps!</h2>
        <div className={styles.every__wrap}>
          <div className={styles.every__descr}>
            <p>
              At our learning centre, we possess genuine interest in not only
              giving academic support to students but also in building their
              confidence to develop cognitive, psychological and social
              abilities.
            </p>
            <hr className={styles.every__separate} />
            <p>
              By this approach, we strongly believe that students will be
              prepared to integrate well into this fast-growing, highly
              competitive and advanced global society.
            </p>
          </div>

          <img src={every} alt="support" />
        </div>
      </section>
    </main>
  );
};
