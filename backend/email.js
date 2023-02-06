import dotenv from "dotenv";
import { createTransport } from "nodemailer";

dotenv.config();
const transport = {
    host: "mortalsoul.23net.hu",
    port: 2525,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
};
const transporter = createTransport(transport);

export async function sendMail(data) {
    const { subject, name, email, message } = data;
    const mail = {
        from: `"WEB – kvlk.hu" "${email}"`,
        to: "kovalikadam00@gmail.com",
        subject: subject,
        replyTo: email,
        html: ` <html><body>
        ${name} <br/>
        ${message}
        </body>
        </html> `,
    };
    console.log(mail);

    transporter.verify((error) => {
        if (error) {
            console.log(error);
        } else {
            console.log("Email elküldve");
        }
    });
    await transporter.sendMail(mail);
}
