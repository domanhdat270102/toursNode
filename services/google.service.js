// const axios = require('axios');

// const oauthClient = require('../config/google');

// exports.getGoogleAuthUri = sourceUri =>
//   oauthClient.generateAuthUrl({
//     scope: [
//       'https://www.googleapis.com/auth/userinfo.profile',
//       'https://www.googleapis.com/auth/userinfo.email'
//     ],
//     state: JSON.stringify({ sourceUri })
//   });

// exports.getCredentialsByCode = async code => {
//   const { tokens } = await oauthClient.getToken(code);
//   return tokens;
// };

// exports.getGoogleUser = async accessToken => {
//   try {
//     const response = await axios.get(
//       `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${accessToken}`
//     );
//     console.log('response', response);
//     const googleUser = await response.data;
//     return googleUser;
//   } catch(err) {
//     console.log(err);
//   }
// };
