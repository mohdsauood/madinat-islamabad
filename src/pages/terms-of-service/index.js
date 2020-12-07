import React from 'react';
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
        currentPage={{ name: 'terms-of-service' }}
      />
      <TitleHeader title="terms of service" />

      <HeroBanner
        styless={{
          color: 'rgb(174, 22, 177)',
          text: 'terms of service',
        }}
      />
      <Container className="mt-3 mb-3">
        <h5 className="font-weight-bold mt-3">1. Terms</h5>
        <p className="mt-2">
          By accessing the website at http://madinatislamabad.com, you are
          agreeing to be bound by these terms of service, all applicable laws
          and regulations, and agree that you are responsible for compliance
          with any applicable local laws. If you do not agree with any of these
          terms, you are prohibited from using or accessing this site. The
          materials contained in this website are protected by applicable
          copyright and trademark law.
        </p>
        <div class="divider py-2 bg-light mt-2"></div>

        <h5 className="font-weight-bold mt-3">2. Use License</h5>
        <p className="mt-2">
          Permission is granted to temporarily download one copy of the
          materials (information or software) on madinat islamabad's website for
          personal, non-commercial transitory viewing only. This is the grant of
          a license, not a transfer of title, and under this license you may
          not: modify or copy the materials; use the materials for any
          commercial purpose, or for any public display (commercial or
          non-commercial); attempt to decompile or reverse engineer any software
          contained on madinat islamabad's website; remove any copyright or
          other proprietary notations from the materials; or transfer the
          materials to another person or "mirror" the materials on any other
          server.
          <br />
          This license shall automatically terminate if you violate any of these
          restrictions and may be terminated by madinat islamabad at any time.
          Upon terminating your viewing of these materials or upon the
          termination of this license, you must destroy any downloaded materials
          in your possession whether in electronic or printed format.
        </p>
        <div class="divider py-2 bg-light mt-2"></div>
        <h5 className="font-weight-bold mt-3">3. Disclaimer</h5>
        <p className="mt-2">
          The materials on madinat islamabad's website are provided on an 'as
          is' basis. madinat islamabad makes no warranties, expressed or
          implied, and hereby disclaims and negates all other warranties
          including, without limitation, implied warranties or conditions of
          merchantability, fitness for a particular purpose, or non-infringement
          of intellectual property or other violation of rights. Further,
          madinat islamabad does not warrant or make any representations
          concerning the accuracy, likely results, or reliability of the use of
          the materials on its website or otherwise relating to such materials
          or on any sites linked to this site.
        </p>
        <div class="divider py-2 bg-light mt-2"></div>
        <h5 className="font-weight-bold mt-3">4. Limitations</h5>
        <p className="mt-2">
          In no event shall madinat islamabad or its suppliers be liable for any
          damages (including, without limitation, damages for loss of data or
          profit, or due to business interruption) arising out of the use or
          inability to use the materials on madinat islamabad's website, even if
          madinat islamabad or a madinat islamabad authorized representative has
          been notified orally or in writing of the possibility of such damage.
          Because some jurisdictions do not allow limitations on implied
          warranties, or limitations of liability for consequential or
          incidental damages, these limitations may not apply to you.
        </p>
        <div class="divider py-2 bg-light mt-2"></div>
        <h5 className="font-weight-bold mt-3">5.Accuracy of materials</h5>
        <p className="mt-2">
          The materials appearing on madinat islamabad's website could include
          technical, typographical, or photographic errors. madinat islamabad
          does not warrant that any of the materials on its website are
          accurate, complete or current. madinat islamabad may make changes to
          the materials contained on its website at any time without notice.
          However madinat islamabad does not make any commitment to update the
          materials
        </p>
        <div class="divider py-2 bg-light mt-2"></div>
        <h5 className="font-weight-bold mt-3">6. Links</h5>
        <p className="mt-2">
          madinat islamabad has not reviewed all of the sites linked to its
          website and is not responsible for the contents of any such linked
          site. The inclusion of any link does not imply endorsement by madinat
          islamabad of the site. Use of any such linked website is at the user's
          own risk.
        </p>
        <div class="divider py-2 bg-light mt-2"></div>
        <h5 className="font-weight-bold mt-3">7. Modifications</h5>
        <p className="mt-2">
          madinat islamabad may revise these terms of service for its website at
          any time without notice. By using this website you are agreeing to be
          bound by the then current version of these terms of service.
        </p>
        <div class="divider py-2 bg-light mt-2"></div>
        <h5 className="font-weight-bold mt-3">8. Governing Law</h5>
        <p className="mt-2">
          These terms and conditions are governed by and construed in accordance
          with the laws of sharjah(UAE) and you irrevocably submit to the
          exclusive jurisdiction of the courts in that State or location.
        </p>
        <div class="divider py-2 bg-light mt-2"></div>
      </Container>
      <AddressFooter />
      <Footer />
    </>
  );
}

const seo = {
  title: 'Madinat Islamabad Sharjah | Terms Of Service',
};
