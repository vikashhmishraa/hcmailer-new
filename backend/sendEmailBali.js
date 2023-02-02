const Axios = require("axios");
const router = require("express").Router();
const fs = require('fs');
const sendEmail = require('./sendEmail');


router.post("/send", async (req, res, next) => {
   

    const {sent_from,subject, send_to ,reply_to,bcc} = req.body;
    
    msg = 'Sikkim DMC';
  
    console.log(req.body, "req body");
  
  
    // const sent_from = "dev.holidayscrowd@gmail.com";
 
    // const subject = "Booking Confirmation";
    const message = `<!-- Free to use, HTML email template designed & built by FullSphere. Learn more about us at www.fullsphere.co.uk -->

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
    
    <head>
    
      <!--[if gte mso 9]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG/>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
      <![endif]-->
    
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="x-apple-disable-message-reformatting">
      <!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
    
        <!-- Your title goes here -->
        <title>Sikkim DMC</title>
        <!-- End title -->
    
        <!-- Start stylesheet -->
        <style type="text/css">
          a,a[href],a:hover, a:link, a:visited {
            /* This is the link colour */
            text-decoration: none!important;
            color: #0000EE;
          }
          .link {
            text-decoration: underline!important;
          }
          p, p:visited {
            /* Fallback paragraph style */
            font-size:15px;
            line-height:24px;
            font-family:'Helvetica', Arial, sans-serif;
            font-weight:300;
            text-decoration:none;
            color: #000000;
          }
          h1 {
            /* Fallback heading style */
            font-size:22px;
            line-height:24px;
            font-family:'Helvetica', Arial, sans-serif;
            font-weight:normal;
            text-decoration:none;
            color: #000000;
          }
          .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td {line-height: 100%;}
          .ExternalClass {width: 100%;}
        </style>
        <!-- End stylesheet -->
    
    </head>
    
      <!-- You can change background colour here -->
      <body style="text-align: center; margin: 0; padding-top: 10px; padding-bottom: 10px; padding-left: 0; padding-right: 0; -webkit-text-size-adjust: 100%;background-color: #f2f4f6; color: #000000" align="center">
      
      <!-- Fallback force center content -->
      <div style="text-align: center;">
    
        <!-- Email not displaying correctly -->
        <table align="center" style="text-align: center; vertical-align: middle; width: 600px; max-width: 600px;" width="600">
          <tbody>
            <tr>
              <td style="width: 596px; vertical-align: middle;" width="596">
    
                
    
              </td>
            </tr>
          </tbody>
        </table>
        <!-- Email not displaying correctly -->
        
        <!-- Start container for logo -->
        <table align="center" style="text-align: center; vertical-align: top; width: 600px; max-width: 600px; background-color: #ffffff;" width="600">
          <tbody>
            <tr>
              <td style="width: 596px; vertical-align: top; padding-left: 0; padding-right: 0; padding-top: 15px; padding-bottom: 15px;" width="596">
    
                <!-- Your logo is here -->
                <img style="width: 180px; max-width: 180px; height: 85px; max-height: 85px; text-align: center; color: #ffffff;" alt="Logo" src="https://holidayscrowdbackend.s3.ap-south-1.amazonaws.com/Screenshot%202023-01-25%20at%209.12.33%20PM.png" align="center" width="180" height="85">
    
              </td>
            </tr>
          </tbody>
        </table>
        <!-- End container for logo -->
    
        <!-- Hero image -->
        <img style="width: 600px; max-width: 600px; height: 650px; max-height: 1350px; text-align: center;" alt="Hero image" src="https://holidayscrowdbackend.s3.ap-south-1.amazonaws.com/Amazing%20sikkimdmc.jpg" align="center" width="600" height="350">
        <!-- Hero image -->
    
        <!-- Start single column section -->
        <table align="center" style="text-align: center; vertical-align: top; width: 600px; max-width: 600px; background-color: #ffffff;" width="600">
            <tbody>
              <tr>
                <td style="width: 596px; vertical-align: top; padding-left: 30px; padding-right: 30px; padding-top: 30px; padding-bottom: 40px;" width="596">
    
                  <h1 style="font-size: 20px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 600; text-decoration: none; color: #000000;">About Sikkim DMC</h1>
    
                  <p style="font-size: 15px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 400; text-decoration: none; color: #919293;">Sikkim DMC is a Leading B2B Travel Agent & Tour Operator for Darjeeling, Sikkim, Assam, Meghalaya, Arunachal Pradesh covering Entire Northeastern State of India, As well as Nepal and Bhutan.</p>              
    
                  
    
                  <!-- Start button (You can change the background colour by the hex code below) -->
                  <a href="https://sikkimdmc.com/" target="_blank" style="background-color: #000000; font-size: 15px; margin-top:20px; line-height: 22px; font-family: 'Helvetica', Arial, sans-serif; font-weight: normal; text-decoration: none; padding: 12px 15px; color: #ffffff; border-radius: 5px; display: inline-block; mso-padding-alt: 0;">
                     
    
                      <span style="mso-text-raise: 15pt; margin-top:10px;  color: #ffffff;">Send your Query</span>
                      <!--[if mso]>
                      <i style="letter-spacing: 25px; mso-font-width: -100%;">&nbsp;</i>
                    <![endif]-->
                  </a>
                  <!-- End button here -->
    
                </td>
              </tr>
            </tbody>
          </table>
          <!-- End single column section -->
          
                    
                    
                  
                             
            
          
    
       
          <!-- End image -->
    
          <!-- Start footer -->
          <table align="center" style="text-align: center; vertical-align: top; width: 600px; max-width: 600px; background-color: #000000;" width="600">
            <tbody>
              <tr>
                <td style="width: 596px; vertical-align: top; padding-left: 30px; padding-right: 30px; padding-top: 30px; padding-bottom: 30px;" width="596">
    
                  <!-- Your inverted logo is here -->
                   <p style="font-size: 13px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 400; text-decoration: none; color: #ffffff;">
                    Phone: 099992 12811  Email: b2b@sikkimdmc.com
                  </p>
                  <p style="font-size: 13px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 400; text-decoration: none; color: #ffffff;">
                    P 36, Pema Rinchen Building 5th Mile Tadong, New VIP Colony, Gangtok, Sikkim 737102
                  </p>
                  
                  <p><div class="p-4 d-flex justify-content-center align-items-center ;">

                                <a style= "text-decoration:none;
  font-size: 15px; font-family: 'Helvetica', Arial, sans-serif;
  margin: 0px 10px ; margin-top:10px;color:white; border: 1px solid white; border-radius:5px;  background:black; font-weight:300; padding:5px; " href="https://m.facebook.com/sikkimdmc" class=";" data-toggle="tooltip" data-placement="top" title="" data-original-title="Open Source Project">Facebook</a>
                                
                                <a 
                                   style= "text-decoration:none;
  font-size: 15px; font-family: 'Helvetica', Arial, sans-serif;
  margin: 0px 10px ; margin-top:10px; color:white; background:black; border: 1px solid white; border-radius:5px; padding:5px; font-weight:300;" href="https://www.youtube.com/@sikkimdmc" class="" data-toggle="tooltip" data-placement="top" title="" data-original-title="">YouTube</a>
                                <a 
                                   style= "text-decoration:none;
  font-size: 15px; font-family: 'Helvetica', Arial, sans-serif;
  margin: 0px 10px ; margin-top:10px;color:white; background:black; border: 1px solid white; font-weight:300; border-radius:5px; padding:5px; " href="https://www.instagram.com/sikkim.dmc/" class="" data-toggle="tooltip" data-placement="top" title="" data-original-title="Follow on Instagram">Instagram</a>
                                


                            </div></p>
                </td>
              </tr>
            </tbody>
          </table>

     
       
      
      </div>
    
      </body>
    
    </html>`

     await sendEmail(subject, message, send_to, sent_from, reply_to, bcc);

return res.status(200).json({message:"send succesfully"});

})


module.exports = router;
