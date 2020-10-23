import React from 'react';
import styles from './SignInButtons.module.css';
import PropTypes from 'prop-types';
import GoogleButton from '../google-button/GoogleButton';
import FacebookButton from '../facebook-button/FacebookButton';
import GoogleLogin from 'react-google-login';
import { providers, signIn } from 'next-auth/client';
export default function SignInButtons({ providers }) {
  return (
    <div className={styles.div}>
      {Object.values(providers).map((provider) => {
        console.log(provider.name);
        return provider.name == 'Google' ? (
          <GoogleButton id={providers.id} />
        ) : (
          <FacebookButton id={providers.id} />
        );
      })}
    </div>
  );
}

SignInButtons.propTypes = {
  providers: PropTypes.object.isRequired,
};
