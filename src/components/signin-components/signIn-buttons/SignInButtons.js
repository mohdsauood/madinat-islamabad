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
        return provider.name == 'Google' ? (
          <div key={provider.name}>
            <GoogleButton id={provider.id} />
          </div>
        ) : (
          <div key={provider.namee}>
            <FacebookButton id={provider.id} />
          </div>
        );
      })}
    </div>
  );
}

SignInButtons.propTypes = {
  providers: PropTypes.object.isRequired,
};
