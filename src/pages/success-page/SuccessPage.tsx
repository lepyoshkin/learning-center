import React from 'react';
import {ContactForm} from '../../components/contact-form/ContactForm';
import styles from './SuccessPage.module.scss';

export const SuccessPage = () => {
  return (
    <main className={styles['success-page']}>
      <div className={styles['success-page__stories']}></div>
      <ContactForm />
    </main>
  );
};
