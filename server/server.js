const express = require("express");
const cors = require("cors");
const nodemailer=require("nodemailer");

const port = 5000;

const app = express();
app.use(express.json());

const corsOptions = {
    origin : 'http://localhost:3000',
    credentials:true
}
app.use(cors(corsOptions));

app.post('/api/mushroom/sendmail',async (req, res)=>{
    const {mailbody, mailsubject} = req.body;
    console.log('🌵'+mailbody  + '🥙' + mailsubject);
    
    // create transporter object with smtp server details
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: '[etherial username]',  // read project notes in server folder
            pass: '[etherial password]'
        }
    });
    
    // send email
    const result = await transporter.sendMail({
        from: 'from_address@example.com',
        to: 'to_address@example.com',
        subject: mailsubject,
        //text: mailbody
        html: '<h4>this is a test mail. </h4> <p> 🍈 '+ mailbody + '</p>'
    });
    console.log(result);

    res.status(200).json({msg:'mail sent'});
    
});

app.listen(port);