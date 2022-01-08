/* This program uses AWS SES to send emails to listed email addresses. */
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

emailAddresses = [
"abhiitbhu@gmail.com", 
"blackowl53@mail.mggkanu.com",
"blackowl53@mggkanu.com",
"bluepeacock47@mggkanu.com",
"brownelephant58@stockfotoage.com",
"goldenunicorn67@mggkanu.com",
"imagedcn@mggkanu.com",
"italianturkey76@mail.stockfotoage.com",
"italianturkey76@stockfotoage.com",
"orangetiger65@stockfotoage.com",
"pinkpony44@stockfotoage.com",
"purplerabbit66@stockfotoage.com",
"redeagle35@mggkanu.com",
"tooya22@mggkanu.com",
"whitedove54@mggkanu.com"
]

// Push next messages to Nodemailer
emailAddresses.forEach(email_addr => {
        transporter.once('idle', () => {
        if (transporter.isIdle()) {
        // then send some mail
        transporter.sendMail(
        {
            from: "info@mygingergarlickitchen.com",
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


