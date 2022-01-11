const nodemailer = require('nodemailer');
const email = {
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "191a21e05c9569",
        pass: "a0acf3ef26416e"
    }
}

const send = async (option) => {
    nodemailer
        .createTransport(email)
        .sendMail(option, (error, info) => {
            if (error) {
                console.olog(error);
            } else {
                console.log(info);
                return info.response;
            }
        });
};

let email_data = {
    from: 'ybong@myseneca.ca',
    to: 'aso23456@gmail.com',
    subject: 'Test',
    text: 'Success'
}

send(email_data);
