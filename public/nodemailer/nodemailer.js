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


/*output:
bong-yujin-ui-MacBook-Pro:Javascript bong-yujin$ node prac.js
{
  accepted: [ 'aso23456@gmail.com' ],
  rejected: [],
  envelopeTime: 77,
  messageTime: 94,
  messageSize: 305,
  response: '250 2.0.0 Ok: queued',
  envelope: { from: 'ybong@myseneca.ca', to: [ 'aso23456@gmail.com' ] },
  messageId: '<a76b2e47-e7b5-57c5-22c5-0060cf97ffa6@myseneca.ca>'
} */
