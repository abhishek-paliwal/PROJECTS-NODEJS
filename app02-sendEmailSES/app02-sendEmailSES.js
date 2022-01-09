/* This program uses AWS SES to send emails to listed email addresses. */
/********************************************************************/
/********************************************************************/
let nodemailer = require("nodemailer");
let aws = require("@aws-sdk/client-ses");
let { defaultProvider } = require("@aws-sdk/credential-provider-node");
const { EventEmitter } = require("nodemailer/lib/mailer");

const ses = new aws.SES({
  apiVersion: "2010-12-01",
  region: "us-east-1",
  defaultProvider,
});

// create Nodemailer SES transporter
let transporter = nodemailer.createTransport({
    SES: { ses, aws },
    sendingRate: 50 // max 50 messages/second
});

/********************************************************************/
// Read email addresses from env variables
const testEmails =  process.env.AWS_TEST_EMAILID ; 
const emailAddresses = testEmails.split(',');
const sendFromEMailId = process.env.AWS_SEND_FROM_EMAILID ;

// Push next messages to Nodemailer
emailAddresses.forEach(email_addr => {
        transporter.once('idle', () => {
        if (transporter.isIdle()) {
        // then send some mail
        transporter.sendMail(
        {
            from: sendFromEMailId ,
            to: email_addr,
            subject: "SES test msg to " + email_addr ,
            text: "This is a test message sent from NodeJS to " +  email_addr ,
            ses: {
            // optional extra arguments for SendRawEmail
            Tags: [
                {
                Name: "tag_name",
                Value: "tag_value",
                },
            ],
            },
        },
        (err, info) => {
            console.log('*****************************');
            console.log(info.envelope);
            console.log('SUCCESS => ' + info.messageId);
            }
        );    
    }
    });
});
/********************************************************************/

