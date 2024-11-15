import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.privateemail.com",
  port: 587,
  secure: false,
  auth: {
    user: import.meta.env.USER_PRIVATE_EMAIL,
    pass: import.meta.env.PASSWORD_PRIVATE_EMAIL,
  },
});

export const sendEmail = async (to: string, subject: string, text: string) => {
  try {
    await transporter.sendMail({
      from: import.meta.env.USER_PRIVATE_EMAIL,
      to,
      subject,
      text,
    });
  } catch (error) {
    console.error(error);
  }
};
