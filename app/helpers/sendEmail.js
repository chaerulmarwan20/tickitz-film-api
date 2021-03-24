const nodemailer = require("nodemailer");
const host = process.env.HOST;
const port = process.env.PORT;
const link = `http://${host}:${port}`;

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const send = (destination, token, type) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (type === "verify") {
        const info = await transporter.sendMail({
          from: "chaerulmarwanjr7@gmail.com",
          to: destination,
          subject: "Account Verification",
          html: `Click this link to verify your account : <a href="${link}/v1/users/auth/verify/?email=${destination}&token=${token}">Activate</a>`,
        });
        resolve(info);
      } else if (type === "forgot") {
        const info = await transporter.sendMail({
          from: "chaerulmarwanjr7@gmail.com",
          to: destination,
          subject: "Reset Password",
          html: `Click this link to reset your password : <a href="${link}/v1/users/auth/reset-password/?email=${destination}&token=${token}">Reset Password</a>`,
        });
        resolve(info);
      }
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  send,
};
