import React, { useEffect } from 'react';
import styles from './index.module.css';
import TitleHeader from '../../components/title-header/TitleHeader';
import HeroBanner from '../../components/signin-components/herobanner/HeroBanner';
import Header from '../../components/header/Header';
import BreadCrumbs from '../../components/bread-crumbs/BreadCrumbs';
import Container from 'react-bootstrap/Container';
import Overlay from '../../components/overlay/Overlay';
import { NextSeo } from 'next-seo';
import AddressFooter from '../../components/about-us-page/address-footer/AddressFooter';
import Footer from '../../components/footer/Footer';
export default function index() {
  return (
    <>
      <NextSeo {...seo} />
      <Header />
      <Overlay />
      <BreadCrumbs
        path={[{ name: 'home', path: '/' }]}
        currentPage={{ name: 'privacy-policy' }}
      />
      <TitleHeader title="privacy policy" />

      <HeroBanner
        styless={{
          color: '#119F9F',
          text: 'privacy policy',
        }}
      />
      <Container className="mt-3 mb-3">
        <p className="mt-2">
          &bull; Your privacy is important to us. It is madinat islamabad's
          policy to respect your privacy regarding any information we may
          collect from you across our website, http://madinatislamabad.com
        </p>
        <p className="mt-2">
          {' '}
          &bull; We only ask for personal information when we truly need it to
          provide a service to you. We collect it by fair and lawful means, with
          your knowledge and consent. We also let you know why we’re collecting
          it and how it will be used.
        </p>
        <p className="mt-2">
          &bull; Any personal information provided by you is true, accurate,
          current and complete in all respects. Notify us immediately of any
          changes to your personal information by updating your member profile
          on the site or by contacting us. You agree not to impersonate any
          other person or entity or to use a false name or a name that you are
          not authorized to use.
        </p>
        <p className="mt-2">
          &bull; If you use madinatislamabad.com and its related applications,
          you are responsible for maintaining the confidentiality of your
          account . You agree to accept responsibility for all activities that
          occur under your account.
        </p>
        <p className="mt-2">
          &bull; madinatislamabad.com reserves the right to refuse service,
          terminate accounts, remove or edit content, or cancel orders in its
          sole discretion.
        </p>
        <p className="mt-2">
          &bull; All users who are minors in the jurisdiction in which they
          reside (generally under the age of 18) must have the permission of,
          and be directly supervised by, their parent or guardian to use
          madinatislamabad.com. If you are a minor, you must have your parent or
          guardian read and agree to this Agreement prior to you using the
          website
        </p>
        <div class="divider py-2 bg-light mt-2"></div>
        <h5 className="font-weight-bold mt-3">Information Collection</h5>
        <p className="mt-2">
          &bull; <strong>user information :</strong> we collect your first name
          , last name and email through your google account information .
        </p>
        <p className="mt-2">
          &bull;<strong> mobile number information :</strong> we collect your
          mobile number through a modal where you can enter your number before
          placing a order.
        </p>
        <p className="mt-2">
          &bull;<strong>location information:</strong>We may collect information
          about the precise location of your device when you consent to the
          collection of this information. We may also collect information about
          your approximate location each time you add your address .
        </p>
        <div class="divider py-2 bg-light mt-2"></div>
        <h5 className="font-weight-bold mt-3">Registration and Ordering</h5>
        <p className="mt-2">
          Before using certain portions of this Site or ordering food, you may
          be required to complete an online sign in using your gmail account.
          During sign in, we will collect certain personal information,
          including but not limited to your name, and email address , gender .
        </p>
        <p className="mt-2">
          In addition, We may also ask you for your address and mobile number
          before placing an ordering to contact you for delivering the food and
          locating your address.
        </p>
        <p className="mt-2">
          These kinds of personal information are used for billing purposes, to
          fulfill your orders, to communicate with you about your order and the
          Sites, and for internal marketing purposes.
        </p>
        <p className="mt-2">
          If We encounter a problem when processing your order, your personal
          information may be used to contact you.
        </p>
        <div class="divider py-2 bg-light mt-2"></div>
        <h5 className="font-weight-bold mt-3">Prohibited Uses</h5>
        <p className="mt-2">&bull; to submit false or misleading information</p>
        <p className="mt-2">
          &bull; attempt to impersonate another user or person
        </p>
        <p className="mt-2">
          &bull; to violate any international, federal, provincial or state
          regulations, rules, laws, or local ordinances
        </p>
        <p className="mt-2">&bull; for any obscene or immoral purpose</p>
        <p className="mt-2">
          &bull; to upload or transmit viruses or any other type of malicious
          code that will or may be used in any way that will affect the
          functionality or operation of the Service or of any related website,
          other websites, or the Internet
        </p>
        <p className="mt-2">&bull; for any unlawful purpose</p>
      </Container>
      <AddressFooter />
      <Footer />
    </>
  );
}

const seo = {
  title: 'Madinat Islamabad Sharjah | Privacy Policy',
};
