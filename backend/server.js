const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;
const nodemailer = require('nodemailer');
const multer = require('multer');
const Imap = require('imap');
const { simpleParser } = require('mailparser');
const dotenv = require('dotenv');

dotenv.config();
app.use(cors({
    methods: 'GET, POST',
    credentials: true, 
  }));
app.use(express.json()); 
app.use(express.urlencoded({ extended: true}));

const upload = multer();
const SENDER_EMAIL = process.env.SENDER_EMAIL;
const SENDER_PASSWORD = process.env.SENDER_PASSWORD;
const smptpServer = 'smtp.titan.email';
const imapServer = 'imap.titan.email';
const smtpPort = 465;
const imapPort = 993;

const transporter = nodemailer.createTransport({
    host: smptpServer,
    port: smtpPort,
    secure: true,
    auth: {
        user: SENDER_EMAIL,
        pass: SENDER_PASSWORD
        }
    });
const imap = new Imap({
    user: SENDER_EMAIL,
    password: SENDER_PASSWORD,
    host: imapServer,
    port: imapPort,
    tls: true
    });

imap.connect();

imap.once('ready', () => {
    imap.openBox('INBOX', false, (err, box) => {
        if (err) {
            console.log(err);
            }
        else {
            imap.search(['UNSEEN'], (err, results) => {
                if (err) {
                    console.log(err);
                    }
                else {
                    results.forEach((result) => {
                        const f = imap.fetch(result, { bodies: '' });
                        f.on('message', (msg) => {
                            msg.on('body', (stream, info) => {
                                simpleParser(stream, (err, mail) => {
                                    if (err) {
                                        console.log(err);
                                        }
                                    else {
                                        console.log(mail);
                                        }
                                    });
                                });
                            });
                        });
                    }
                });
            }
        });
    });

    app.post('/send-email',upload.none(), (req, res) => {   
        const { name, email, phone, requirements } = req.body;
        if (!name || !email || !phone) {
            return res.status(400).json({ message: `Name, email or phone is missing` });
        }
        else{
        const mailOptions = {
            from: SENDER_EMAIL,
            to: email, 
            subject: 'Form Submitted- Thank you for contacting us',
            text: ` Hi ${name}, \n\nThank you for contacting us. We will get back to you shortly. \n\nRegards, \nTeam Precise Assignments \n Here are your details of the submission: \n Name: ${name} \n Email: ${email} \n Phone: ${phone} \n Requirements: ${requirements}`,
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
                return res.status(500).send(error.toString());
            } else {
                console.log('Email sent: ' + info.response);
                res.send('Email sent successfully');
            }
        });
        }
        console.log(name, email, phone, requirements);
    });
    
app.get('/', (req, res) => {
    
    res.json({ message: 'Precise Assignments-Backend Server' });
    }
);

app.listen(port, () => {

    console.log(`Server running `);
    }
);