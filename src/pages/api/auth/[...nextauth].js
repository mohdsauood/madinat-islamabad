import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const callbacks = {};

callbacks.signIn = async function signIn(user) {};
const options = {
  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_LOGIN_CLIENT_ID,
      clientSecret: process.env.GOOGLE_LOGIN_CLIENT_SECRET,
    }),
    // Providers.Facebokok({
    //   clientId: process.env.FACEBOOK_LOGIN_CLIENT_ID,
    //   clientSecret: process.env.FACEBOOK_LOGIN_CLIENT_SECRET,
    // }),
    // ...add more providers here
  ],

  pages: {
    signIn: '/sign-in',
  },
  session: {
    jwt: true,
  },
  jtw: {
    secret: process.env.JWT_SECRET,
  },
  callbacks,

  // A database is optional, but required to persist accounts in a database
  //database: process.env.DATABASE_URL,
};

export default (req, res) => NextAuth(req, res, options);
