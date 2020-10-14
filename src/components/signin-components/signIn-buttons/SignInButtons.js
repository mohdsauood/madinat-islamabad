import React from 'react';
import styles from './SignInButtons.module.css';

const responseGoogle = (response) => {
  console.log(response);
};

import GoogleLogin from 'react-google-login';
export default function SignInButtons() {
  return (
    <div className={styles.div}>
      <button className={` ${styles.button} ${styles.fbButton}`}>
        <svg
          className={`${styles.button__svg} ${styles.fbSvg}`}
          width="100%"
          height="100%"
          viewBox="0 0 28 26"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M22.1667 0H5.83333C2.61217 0 0 2.36917 0 5.2907V20.1047C0 23.0262 2.61217 25.3953 5.83333 25.3953H22.1667C25.389 25.3953 28 23.0262 28 20.1047V5.2907C28 2.36917 25.389 0 22.1667 0ZM18.6667 7.40698H16.422C15.7045 7.40698 15.1667 7.67363 15.1667 8.34766V9.52326H18.6667L18.389 12.6977H15.1667V21.1628H11.6667V12.6977H9.33333V9.52326H11.6667V7.48845C11.6667 5.34889 12.908 4.23256 15.7045 4.23256H18.6667V7.40698Z" />
        </svg>

        <span
          className={`${styles.button__span} xtM xkarla xtBold xtCapitalize`}>
          sign in with facebook
        </span>
      </button>
      <GoogleLogin
        clientId="755686127439-5mjk9pbn9288b78o21ubpg56r77tp1vs.apps.googleusercontent.com"
        render={(renderProps) => (
          <button
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            className={` ${styles.button} ${styles.googleButton}`}>
            <svg
              className={`${styles.button__svg} ${styles.googleSvg}`}
              width="100%"
              height="100%"
              viewBox="0 0 256 262"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid">
              <path
                d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                fill="#4285F4"
              />
              <path
                d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                fill="#34A853"
              />
              <path
                d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                fill="#FBBC05"
              />
              <path
                d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                fill="#EB4335"
              />
            </svg>
            <span
              className={`${styles.button__span} xtM xkarla xtBold xtCapitalize`}>
              sign in with google
            </span>
          </button>
        )}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
}
