import React, { useEffect } from 'react';
import styles from './index.module.css';
import TitleHeader from '../../components/title-header/TitleHeader';
import SignInButtons from '../../components/signin-components/signIn-buttons/SignInButtons';
import HeroBanner from '../../components/signin-components/herobanner/HeroBanner';
import { providers, useSession, signIn } from 'next-auth/client';
import Header from '../../components/header/Header';
import BreadCrumbs from '../../components/bread-crumbs/BreadCrumbs';

export default function index({ providers }) {
  return (
    <>
      <Header />
      <TitleHeader title="sign-in" />
      <BreadCrumbs
        path={[{ name: 'home', path: '/' }]}
        currentPage={{ name: 'sign-in' }}
      />
      <HeroBanner
        styless={{
          color: '#AE16B1',
          text: 'sign in',
        }}
      />
      <svg
        className={styles.svg}
        width="100%"
        height="100%"
        viewBox="0 0 220 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink">
        <g clipPath="url(#clip0)">
          <path
            d="M205.274 119.329c4.398-11.087 6.193-23.0349 5.246-34.9244-.947-11.8895-4.611-23.4031-10.708-33.654L75.2973 67.9912 194.622 43.1231c-7.259-9.4514-16.597-17.1054-27.289-22.3695a77.66783 77.66783 0 00-34.37-7.9871c-42.9694 0-77.8028 34.8334-77.8028 77.8027.0008 3.5513.2427 7.0984.7241 10.6168l149.3897 18.143zM60.3604 118.581c11.2457 29.127 39.5089 49.791 72.6026 49.791 31.053 0 57.853-18.195 70.332-44.504l-142.9346-5.287z"
            fill="#F2F2F2"
          />
          <path
            d="M201.372 145.641c0 30.575-45.08 55.359-100.686 55.359-29.8733 0-56.7076-7.152-75.1453-18.514-12.0305-7.411-20.48808-16.616-23.88091-26.789C.5648 152.458.00421 149.061 0 145.641c0-30.572 83.4381-168.4779 100.686-55.3558 17.248 113.1218 100.686 24.7838 100.686 55.3558z"
            fill="#FF3008"
          />
          <path
            opacity=".1"
            d="M150.724 165.717c0 11.289-35.652 20.443-79.6338 20.443-16.9396 0-32.6436-1.358-45.5497-3.674-12.0304-7.411-20.48801-16.616-23.88083-26.789 13.65363-6.221 39.63063-10.422 69.43053-10.422 43.9818 0 79.6338 9.153 79.6338 20.442z"
            fill="#000"
          />
          <path
            d="M93.2422 49.2781c-6.3111-10.6638-18.797-11.1607-18.797-11.1607s-12.1667-1.5559-19.9717 14.6851C47.1987 67.9404 37.1585 82.5564 52.8571 86.1l2.8357-8.8257 1.756 9.4828c2.2352.1608 4.4775.1991 6.7169.1148 16.8119-.5428 32.8227.1588 32.3072-5.874-.6853-8.0198 2.8418-21.4592-3.2307-31.7198zM51.9607 142.665c-.2341 1.164-.4073 2.347-.8051 3.466-.3949 1.11-1.0046 2.137-1.3657 3.259-1.151 3.577.4446 7.564 2.9931 10.325 2.21 2.384 5.0627 4.078 8.2139 4.877 2.299.578 4.6895.661 7.0588.742 6.5606.222 13.2901.421 19.5067-1.687a33.94783 33.94783 0 005.6673-2.575c.5703-.271 1.0727-.667 1.4705-1.158.4742-.675.5348-1.55.5307-2.375-.014-2.781-.5778-5.548-.4439-8.326.0741-1.539.3621-3.077.2204-4.611-.3215-3.479-3.0841-6.592-6.5001-7.326-1.7635-.379-3.5926-.172-5.388 0-4.6605.448-9.3408.657-14.0227.627-4.7836-.03-9.5378-.76-14.2976-.837-1.4076-.022-1.3792.412-1.8273 1.774a33.18473 33.18473 0 00-1.011 3.825z"
            fill="#2F2E41"
          />
          <path
            d="M65.5363 73.9897c-.2298 1.2037-.4783 2.4514-1.2017 3.4406-.8322 1.1381-2.1891 1.7884-3.0844 2.8775-1.3476 1.6394-1.425 3.9464-1.4305 6.0686-.0051 1.955.0346 4.0402 1.1248 5.663.7075 1.0532 1.7842 1.7916 2.8363 2.5007 4.0886 2.7553 8.5067 5.5599 13.4361 5.6509 2.0425.038 4.2325-.4898 5.5764-2.0283a8.36996 8.36996 0 001.3501-2.4087 31.98459 31.98459 0 002.2642-9.7374c.1123-1.5735.1015-3.1928-.431-4.6776-.5989-1.6697-1.8097-3.0435-2.61-4.6265a10.29909 10.29909 0 01-.9913-6.0947.65815.65815 0 00-.0348-.4417.64393.64393 0 00-.2399-.1696.64332.64332 0 00-.2903-.0453l-9.7744-.7036a21.25017 21.25017 0 01-2.7138-.3105c-.5269-.1071-1.9186-.8554-2.421-.6564-.93.3683-1.1741 4.7009-1.3648 5.699z"
            fill="#A0616A"
          />
          <path
            opacity=".1"
            d="M65.5363 74.2949c-.2298 1.2037-.4783 2.4514-1.2017 3.4406-.8322 1.138-2.1891 1.7883-3.0844 2.8775-1.3476 1.6394-1.425 3.9463-1.4305 6.0685-.0051 1.955.0346 4.0402 1.1248 5.663.7075 1.0532 1.7842 1.7916 2.8363 2.5007 4.0886 2.7553 8.5067 5.5598 13.4361 5.6508 2.0425.038 4.2325-.49 5.5764-2.0281a8.3718 8.3718 0 001.3501-2.4088 31.9839 31.9839 0 002.2642-9.7374c.1123-1.5734.1015-3.1928-.431-4.6776-.5989-1.6697-1.8097-3.0435-2.61-4.6265a10.29884 10.29884 0 01-.9913-6.0947.65815.65815 0 00-.0348-.4417.64506.64506 0 00-.2399-.1696.64462.64462 0 00-.2903-.0452l-9.7744-.7036a21.2862 21.2862 0 01-2.7138-.3105c-.5269-.1072-1.9186-.8555-2.421-.6565-.93.3683-1.1741 4.7009-1.3648 5.6991z"
            fill="#000"
          />
          <path
            d="M74.8836 75.3004c7.9198 0 14.3401-6.4203 14.3401-14.3401 0-7.9198-6.4203-14.3401-14.3401-14.3401-7.9199 0-14.3401 6.4203-14.3401 14.3401 0 7.9198 6.4202 14.3401 14.3401 14.3401z"
            fill="#A0616A"
          />
          <path
            d="M67.5474 93.0787c.7474.7812 1.5393 1.5547 2.5187 2.0127.9742.4555 2.0717.5689 3.1467.5991 2.5849.0727 5.3872-.4009 7.1854-2.2593 2.318-2.3956 2.2416-6.2594 4.0585-9.0542.1464-.2534.3462-.4718.5855-.6403.3048-.1659.6492-.2451.9958-.2289 2.2947-.0215 4.2936 1.4668 6.0976 2.8851.8082.6354 1.6364 1.2936 2.1462 2.1863.3567.696.601 1.4441.7238 2.2164.8952 4.3702 1.1852 8.8385 1.4729 13.2904.1589 2.458.3179 4.92.3061 7.384-.0389 8.117-1.9257 16.099-3.8019 23.997-.2418 1.017-.5726 2.155-1.4981 2.642a3.6737 3.6737 0 01-1.3071.319c-5.374.631-10.7592 1.263-16.1695 1.347-2.1113.032-4.2218-.019-6.3313-.154-.3632-.004-.7232-.067-1.0665-.186-.466-.223-.8665-.563-1.1628-.987-2.9265-3.688-3.0992-8.786-3.0805-13.494.0457-11.51.457-23.011 1.2337-34.5033.0642-.9485.0782-2.1005-.6053-2.8466 1.2306 1.9701 2.9423 3.7921 4.5521 5.4746z"
            fill="#D0CDE1"
          />
          <path
            d="M64.5099 76.5209c-.4843.8767-4.0551 3.0537-4.7444 3.7804-3.8517 4.0598-10.8814 3.9075-14.404 8.2559-1.2394 1.5299-1.8833 3.4522-2.3568 5.3633-.6698 2.703-1.0275 5.6508.0946 8.1995 1.0796 2.452 3.3523 4.148 4.8954 6.338 1.6942 2.405 2.456 5.326 3.186 8.176.5391 2.104 1.0826 4.261.8726 6.423-.2386 2.458-1.4282 4.709-2.1306 7.077-.7024 2.368-.8236 5.188.8004 7.049 1.1931 1.367 3.0645 1.909 4.8532 2.214 2.2831.389 4.6035.5 6.9173.602 2.0448.091 4.2987.108 5.8706-1.203 1.2403-1.034 1.7794-2.712 1.8492-4.326.0697-1.613-.2659-3.213-.4762-4.814-.218-1.66-.3018-3.334-.3719-5.007-.3144-7.505-.3574-15.015-.1287-22.53.0476-1.564.1054-3.1468-.228-4.6753-.4386-2.0103-1.525-3.8069-2.4316-5.6539-1.7994-3.6663-2.6503-7.2277-2.3722-11.3025.2746-4.0221 2.0286-7.0863.3051-3.9664zM84.6472 76.826c.7377.7582 3.2444 1.0081 4.1829 1.4964.862.4486 1.8159.683 2.7497.9521a35.68708 35.68708 0 019.6592 4.4334c.62.3623 1.167.8353 1.616 1.3953.525.7303.715 1.6417.893 2.5233.46 2.2762.922 4.5798.818 6.8996-.109 2.4624-.851 4.8472-1.587 7.1999l-2.749 8.79c-2.0524 6.561-4.1177 13.186-4.6952 20.037-.3194 3.796-.1774 7.618.4231 11.38.0604.378.111.812-.1387 1.102-.1812.179-.4195.289-.6733.31-1.327.208-2.6112-.469-3.8135-1.068-3.6748-1.828-7.5965-3.112-11.6415-3.809a27.05218 27.05218 0 003.6158-7.454c.4632-1.686.828-3.397 1.0925-5.126l1.279-7.397c.469-2.713.9388-5.432 1.0971-8.181.0967-1.03.0367-2.069-.178-3.081-.2449-.977-.7319-1.872-1.1681-2.779-2.1079-4.385-3.0969-9.3883-2.2676-14.182.363-2.0979 1.0683-4.1985.7742-6.3072-.2828-2.0273.0111-3.6029-.5091-5.6093-2.1357-8.2379-.1674-2.952 1.2205-1.5255z"
            fill="#575A89"
          />
          <path
            d="M45.3248 95.4895c-.9609 1.9942-2.5675 3.693-3.1143 5.8375a12.76316 12.76316 0 00-.2715 3.052c-.013 1.543-.0214 3.118.4526 4.588.3052.946.8017 1.818 1.1594 2.745.4986 1.296.7207 2.681.6521 4.068-.0965 1.921-.749 3.785-.8 5.708-.0802 3.023 1.3182 5.865 2.6827 8.565.3435-.851.8686-1.616 1.5387-2.243.67-.626 1.4689-1.098 2.3406-1.384.8717-.285 1.7952-.377 2.706-.268.9107.109 1.7867.416 2.5667.898.3599-.332.3984-.878.4125-1.368.1008-3.507.1981-7.015.2918-10.523.1477-5.425.2884-10.923-.9595-16.2043-.5635-2.3846-1.4402-4.7601-3.0475-6.6097-.8463-.974-3.7193-3.5393-5.1085-2.4482-.6248.4906-.4788 1.8262-.5778 2.5025a10.6158 10.6158 0 01-.924 3.0842zM104.848 89.743c.454 1.4153.481 2.9276.49 4.4141.019 3.0322-.021 6.0639-.12 9.0959-.051 1.551-.12 3.125-.591 4.604-.31.976-.789 1.891-1.11 2.864-.96 2.915-.435 6.076-.353 9.144.058.993-.027 1.989-.252 2.958-.507 1.901-1.869 3.438-2.82 5.161-.9025 1.637-1.4473 3.472-2.5257 4.998-1.0785 1.527-2.9453 2.737-4.7549 2.268-1.371-.355-2.3452-1.568-3.0191-2.814-1.4704-2.739-1.9733-5.894-1.4272-8.955.6765-3.723 2.8636-7.026 3.6523-10.727 1.0832-5.083-.563-10.328-.514-15.5245a7.5014 7.5014 0 01.3271-2.4064c.4137-1.187 1.3023-2.1349 2.1232-3.0869a38.98315 38.98315 0 002.8536-3.745c.5877-.8764 1.3858-3.1307 2.4277-3.3181 2.326-.4184 5.036 3.2727 5.613 5.0699z"
            fill="#575A89"
          />
          <path
            d="M33.2547 140.405a14.1912 14.1912 0 00-3.9374-.419c-1.3927.077-2.7532.45-3.9908 1.093-1.2376.644-2.324 1.543-3.1871 2.639a9.82962 9.82962 0 00-1.8183 3.717 9.82881 9.82881 0 00-.1272 4.136c.2739 1.493.8891 2.901 1.5602 4.263 1.0442 2.119 2.2965 4.233 4.2296 5.591 1.1308.795 2.4395 1.29 3.7328 1.777l10.181 3.836c1.4978.564 2.9958 1.128 4.5083 1.651 7.5991 2.627 15.5216 4.202 23.5475 4.682 2.4446.145 4.9263.186 7.3112-.371.566-.132 1.1697-.329 1.4973-.809.1941-.338.3085-.716.3346-1.105l.6265-4.386c.0882-.617.1731-1.267-.0533-1.849-.287-.737-1.0063-1.2-1.6922-1.594-6.6934-3.845-14.5086-5.965-20.1425-11.242-1.3263-1.242-2.4362-3.211-4.0477-4.054-1.8273-.957-3.9794-1.503-5.8682-2.385-4.1293-1.927-8.1891-4.142-12.6643-5.171z"
            fill="#2F2E41"
          />
          <path
            opacity=".1"
            d="M43.4193 146.318c3.5986 1.127 18.7918 8.939 21.396 11.667-.3491.126-12.1925-6.512-12.5478-6.618-3.2304-.97-6.4787-1.946-9.5464-3.364-.6172-.286-4.0093-1.627-3.8557-2.406.1734-.879 3.9151.52 4.5539.721z"
            fill="#000"
          />
          <path
            d="M88.3137 175.645c.2042.015.4069-.044.5704-.168a.8748.8748 0 00.1551-.31c.0306-.113.0385-.23.0233-.346l-.0168-5.975c-1.7182-.819-3.6401-1.081-5.5266-1.333l-8.802-1.177c.2023.027-1.3762 3.791-1.1342 4.294.4266.885 3.6866 1.67 4.6066 2.089 3.1984 1.453 6.5219 3.051 10.1242 2.926z"
            fill="#A0616A"
          />
          <path
            d="M60.6979 168.825c-1.6619.265-3.5168.499-4.5931 1.793-1.3648 1.64-.7838 4.086-.1327 6.118.0967.411.2909.793.5661 1.113.4444.439 1.1253.503 1.7482.542 1.5156.096 3.1285.172 4.4528-.572.6271-.352 1.1453-.866 1.7297-1.286.9765-.649 2.05-1.14 3.1803-1.454 2.0778-.653 4.2168-1.094 6.3838-1.315.8494-.087 1.7158-.142 2.5148-.443.7991-.301 1.5389-.898 1.7711-1.72.3067-1.086-.3244-2.193-.9296-3.145-.754-1.186-1.5528-2.435-2.677-3.309-1.6401-1.274-2.4513-.296-4.1034.52-3.1269 1.543-6.4678 2.608-9.911 3.158z"
            fill="#A0616A"
          />
          <path
            d="M56.3545 170.322l-10.5524-3.119c-1.2834-.379-2.5887-.762-3.927-.761-1.3382.001-2.7384.44-3.6063 1.459-.8182.96-1.0525 2.273-1.2564 3.518l-.4364 2.663c-.2218 1.354-.4439 2.733-.2443 4.09.1996 1.357.8923 2.713 2.0963 3.37 1.4603.796 3.25.407 4.8797.074a53.08 53.08 0 0110-1.072c1.263-.015 2.5878 0 3.7039-.591 1.3267-.703 2.1204-2.19 2.2569-3.685.2077-2.275-.5507-5.247-2.914-5.946zM92.4618 167.604c1.368-.24 2.5753-1.017 3.8861-1.476 1.845-.646 3.8441-.646 5.7991-.639.718.003 1.482.019 2.079.417.861.573 1.082 1.72 1.228 2.744.295 2.06.589 4.119.884 6.178.166 1.163.331 2.356.072 3.501s-1.04 2.248-2.176 2.544c-1.38.358-2.732-.523-4.035-1.102-3.2566-1.447-7.0419-1.077-10.4373-2.159-.6301-.201-1.305-.508-1.562-1.117-.1162-.343-.1576-.707-.1216-1.068.0582-1.986-.3607-4.697.2372-6.595.5377-1.707 2.6196-1.228 4.1465-1.228z"
            fill="#2F2E41"
          />
          <path
            d="M114.793 137.918c2.108-.529 4.294-.678 6.455-.441 1.726.19 3.504.67 4.764 1.865 1.533 1.454 2.026 3.702 2.067 5.815.067 4.208-1.328 8.309-3.949 11.602-.64.833-1.4 1.566-2.257 2.173-.924.579-1.909 1.053-2.937 1.416l-22.8005 8.993c-5.9982 2.366-12.0176 4.738-18.274 6.298-.1711.083-.3569.13-.5466.14-.1897.01-.3794-.019-.558-.083a1.42897 1.42897 0 01-.4818-.294 1.42487 1.42487 0 01-.33-.458c-1.9977-2.853-3.6736-5.919-4.9972-9.141-.0627-.076-.106-.167-.1262-.264a.61242.61242 0 01.0098-.292c.0267-.095.0759-.183.1436-.255a.61985.61985 0 01.245-.16l16.1267-9.266c1.1552-.664 2.3232-1.337 3.2824-2.261.697-.676 1.2677-1.47 1.6852-2.347.3343-.698.3655-2.345.7924-2.861.4181-.506 1.8482-.546 2.5087-.745.9315-.285 1.8437-.63 2.7311-1.032 3.6074-1.614 6.8194-3.959 10.2784-5.849 1.939-1.108 4.012-1.966 6.168-2.553z"
            fill="#2F2E41"
          />
          <path
            opacity=".1"
            d="M105.651 144.838c-2.771 2.081-6.3584 3.994-9.1044 6.129-.9372.729-16.5601 9.513-16.781 10.679 2.5619.432 18.8811-10.985 21.2164-12.124 2.334-1.139 4.404-2.746 6.455-4.34.523-.407 2.738-1.628 1.237-2.082-.845-.256-2.399 1.322-3.023 1.738z"
            fill="#000"
          />
          <path
            d="M86.5867 77.0275H62.2658c-.9881 0-1.9357.3925-2.6344 1.0912a3.72607 3.72607 0 00-1.0913 2.6344v1.3643h-.2642v3.0511h.2642v2.1358h-.2642v1.8306h.2642v22.5131c.0001.988.3926 1.935 1.0913 2.634.6987.699 1.6463 1.091 2.6344 1.091h24.3209c.9881 0 1.9357-.392 2.6344-1.091.6987-.699 1.0912-1.646 1.0912-2.634V80.7531c0-.9881-.3925-1.9357-1.0912-2.6344a3.72555 3.72555 0 00-2.6344-1.0912z"
            fill="#3F3D56"
          />
          <path
            d="M90.4521 48.2501l-12.3355-6.4615-17.0347 2.6435-3.5243 15.5661 8.7734-.3376 2.4509-5.7188v5.6247l4.0481-.1558 2.3497-9.1046 1.4683 9.6921 14.3915-.2937-.5874-11.4544z"
            fill="#2F2E41"
          />
          <path
            d="M48.5525 135.902c.6095.91 1.3236 1.8 2.3025 2.291 1.2233.613 2.7333.503 3.9582-.107 1.2144-.651 2.2085-1.647 2.8565-2.863 1.3406-2.368 1.6182-5.201 1.4509-7.916-.1672-2.715-.747-5.389-1.0037-8.098-.1865-1.969-.2017-3.949-.2167-5.927-.0031-.415.0035-.863.2491-1.198.2969-.406.8406-.518 1.3224-.661 2.7057-.804 4.5016-3.34 5.7892-5.852.8597-1.677 1.6073-3.51 1.4415-5.388-.1658-1.8769-1.5152-3.7683-3.3902-3.9598-1.5457-.1579-2.973.8239-4.0881 1.9061-2.8128 2.7467-4.6205 6.3597-5.1327 10.2577-.2448 1.909-.1747 3.87-.6939 5.723-1.1086 3.957-4.5772 6.383-6.3057 9.943-1.9047 3.924-.8535 8.378 1.4607 11.849zM99.5951 120.785a7.47189 7.47189 0 01-1.689 2.439c-.7202.692-1.5718 1.233-2.5045 1.59-1.1593.466-2.4381.544-3.6456.224a4.03393 4.03393 0 01-1.6144-.883 4.03644 4.03644 0 01-1.0561-1.506 6.4305 6.4305 0 01-.3008-1.794c-.1735-2.669-.1065-5.418.8628-7.91.3738-.962.8778-1.873 1.1729-2.861.3365-1.128.3902-2.317.4416-3.492l.3187-7.2808a4.73995 4.73995 0 00-.1082-1.5786c-.3178-1.0535-1.3024-1.7381-2.2058-2.3663-2.1817-1.5173-4.3377-3.2877-5.3949-5.7258-.3235-.746-.537-1.5753-.3727-2.3717.298-1.4457 1.757-2.3817 3.1991-2.697a7.15569 7.15569 0 012.8679-.0387 7.15538 7.15538 0 012.6527 1.0905 7.15515 7.15515 0 012.0114 2.0446 7.15572 7.15572 0 011.0471 2.6701c.1426.8217.1407 1.6609.2242 2.4907.1771 1.76.7359 3.4567 1.0854 5.1907.861 4.2713.4149 8.6873 1.2663 12.9573.7119 3.571 3.3968 5.901 1.7419 9.808z"
            fill="#A0616A"
          />
          <path
            d="M74.7518 93.4065c1.685 0 3.0511-1.3661 3.0511-3.0511 0-1.6851-1.3661-3.0511-3.0511-3.0511-1.6851 0-3.0511 1.366-3.0511 3.0511 0 1.685 1.366 3.0511 3.0511 3.0511z"
            fill="#D0CDE1"
          />
          <path
            d="M157.955 30c-3.353 0-6.631.9944-9.42 2.8575a16.95268 16.95268 0 00-6.244 7.6092c-1.284 3.0981-1.619 6.5072-.965 9.7962.654 3.289 2.269 6.3101 4.64 8.6813a16.95318 16.95318 0 008.681 4.6402c3.289.6543 6.698.3185 9.797-.9648a16.95536 16.95536 0 007.609-6.2447c1.863-2.7883 2.857-6.0664 2.857-9.4198 0-2.2266-.438-4.4313-1.29-6.4884a16.94743 16.94743 0 00-3.676-5.5007 16.94967 16.94967 0 00-5.5-3.6754c-2.058-.852-4.262-1.2906-6.489-1.2906zm5.346 10.2594h-2.17c-1.482 0-1.765.7009-1.765 1.7338v2.1951h3.53l-.462 3.4432h-3.068v9.3457h-3.935v-9.3457h-2.822v-3.4432h2.822v-2.5455c0-3.0497 2.115-4.7098 4.839-4.7098 1.304 0 2.705.0984 3.031.1414v3.185z"
            fill="#0E51FF"
          />
          <rect
            x="169.914"
            y="90"
            width="36.6207"
            height="36"
            rx="18"
            fill="url(#pattern0)"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <path fill="#fff" d="M0 0h219.891v201H0z" />
          </clipPath>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1">
            <use xlinkHref="#image0" transform="scale(.01695 .01724)" />
          </pattern>
          <image
            id="image0"
            width="59"
            height="58"
            xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4RD4RXhpZgAATU0AKgAAAAgABAE7AAIAAAAPAAAISodpAAQAAAABAAAIWpydAAEAAAAeAAAQ0uocAAcAAAgMAAAAPgAAAAAc6gAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG1vaGFtZWQgc2F1b29kAAAABZADAAIAAAAUAAAQqJAEAAIAAAAUAAAQvJKRAAIAAAADOTQAAJKSAAIAAAADOTQAAOocAAcAAAgMAAAInAAAAAAc6gAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIwMjA6MDk6MTQgMDI6MzY6MDMAMjAyMDowOToxNCAwMjozNjowMwAAAG0AbwBoAGEAbQBlAGQAIABzAGEAdQBvAG8AZAAAAP/hCyFodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvADw/eHBhY2tldCBiZWdpbj0n77u/JyBpZD0nVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkJz8+DQo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIj48cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPjxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSJ1dWlkOmZhZjViZGQ1LWJhM2QtMTFkYS1hZDMxLWQzM2Q3NTE4MmYxYiIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIi8+PHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9InV1aWQ6ZmFmNWJkZDUtYmEzZC0xMWRhLWFkMzEtZDMzZDc1MTgyZjFiIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iPjx4bXA6Q3JlYXRlRGF0ZT4yMDIwLTA5LTE0VDAyOjM2OjAzLjk0MjwveG1wOkNyZWF0ZURhdGU+PC9yZGY6RGVzY3JpcHRpb24+PHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9InV1aWQ6ZmFmNWJkZDUtYmEzZC0xMWRhLWFkMzEtZDMzZDc1MTgyZjFiIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iPjxkYzpjcmVhdG9yPjxyZGY6U2VxIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+PHJkZjpsaT5tb2hhbWVkIHNhdW9vZDwvcmRmOmxpPjwvcmRmOlNlcT4NCgkJCTwvZGM6Y3JlYXRvcj48L3JkZjpEZXNjcmlwdGlvbj48L3JkZjpSREY+PC94OnhtcG1ldGE+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw/eHBhY2tldCBlbmQ9J3cnPz7/2wBDAAcFBQYFBAcGBQYIBwcIChELCgkJChUPEAwRGBUaGRgVGBcbHichGx0lHRcYIi4iJSgpKywrGiAvMy8qMicqKyr/2wBDAQcICAoJChQLCxQqHBgcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKir/wAARCAA6ADsDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD6RoopryLFGXkYKqjJJOAKAHUV5x4i+KcdrM9tosXmupwZm+7+Vcm/xL8QtJkXMQHptP8AjXJPF0ou257lDI8XVjzWS9T3OivMvDXxRkuLuO01mDcZDtWWJe/05NemKwZQw6EZranVjUV4nn4rB1sJPlqoWiiitTjCuL+ItzevpX2HTmw0nMmDgkegrtK4zxNn+1znptGPyryM4xM8NhueG90j0MuS+sKT6anD+CvAx164kn1HdHawtgjoWPpXpi+CNAS38kWCFfU9fzq34eEI0aHyducfNj1rmviXPfQ2tibBpVJdt3lj6V6GWYWOIjBaJyV/wuXmmbV5TlNNpLZJmjpHgHSNI1Z76BS7H7iPyErqK8CfUtbjXdJcXKr6kYrpPh9qeoXXiVY57mSWPblgxr6CeSuhSlOMlZangSzaeKqJVLt7anrNFFFeMdgVxvxCtbxdL+3aeMtHxJgZIX1FdlTXRZEKSKGVhggjINY16MK8OSauhNz5WoOzfU8d8G+NW0O4eHUNz2spyT1Kn1r0dPGGhTQ+Z9tj2+jcH8q5nxB8Mo7md7jSJfLZjkxN0/OuWb4c+IA+BbxEeu//AOtWEXVpLlS0PEjPGYf3HHmRo+NvGlvrMP8AZ+mAiENl5CMbsdvpWr8LdIdEuNSlQqG+SPI6jrmoNE+Fr+as2szAAc+VHzn8a9Jt7eK1t0hgQJGgwFAxivapY+X1P6u42fc3w9GtOr7atoSUUUVxHqhRRRQAUUUUAFFFFABRRRQB/9k="
          />
        </defs>
      </svg>
      <h3 className={`${styles.h3} xtCapitalize xtBold xtBlack`}>
        Welcome , Sign In to Start Your Order.
      </h3>
      <SignInButtons providers={providers} />
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      providers: await providers(context),
    },
  };
}
