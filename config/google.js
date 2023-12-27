// const passport = require('passport');
// const jwt = require('jsonwebtoken');
// const GoogleStrategy = require('passport-google-oauth2').Strategy;
// const User = require('./../models/userModel'); // Thay thế đường dẫn với đường dẫn thật của model người dùng

// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//       callbackURL: process.env.GOOGLE_REDIRECT_URI,
//       passReqToCallback: true
//     },
//     async function(accessToken, refreshToken, profile, done) {
//       try {
//         // Kiểm tra xem người dùng đã tồn tại trong cơ sở dữ liệu hay chưa
//         let user = await User.findOne({ 'google.id': profile.id });

//         if (!user) {
//           // Nếu người dùng không tồn tại, tạo mới một người dùng
//           user = await User.create({
//             google: {
//               id: profile.id,
//               email: profile.emails[0].value
//               // Các thông tin khác mà bạn muốn lưu
//             }
//           });
//         }

//         // Gọi done với user để Passport biết rằng xác thực thành công
//         return done(null, user);
//       } catch (error) {
//         // Xử lý lỗi nếu có
//         return done(error, null);
//       }
//     }
//   )
// );

// passport.serializeUser((user, done) => {
//   done(null, user.id); // Serialize chỉ cần lưu user.id vào session
// });

// passport.deserializeUser(async (id, done, req, res) => {
//   try {
//     const user = await User.findById(id);
//     const token = jwt.sign({ id }, process.env.JWT_SECRET, {
//       expiresIn: process.env.JWT_EXPIRES_IN
//     });
//     const cookieOptions = {
//       expires: new Date(
//         Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
//       ),
//       httpOnly: true,
//       secured: req.secured || req.headers['x-forwarded-proto'] === 'https'
//     };
  
//     res.cookie('jwt', token, cookieOptions);
//     console.log(user);
//     done(null, user);
//   } catch (error) {
//     done(error, null);
//   }
// });
