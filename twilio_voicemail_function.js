//  by Matthew Bordignon @Bordignon on twitter
//  Jan 2019
//
// Requires callback from TwiML. So it can send the email.
//

const SparkPost = require('sparkpost');

exports.handler = function(context, event, callback) {
    const callerID =  event.From;
    const recordURL = event.RecordingUrl;
    
    console.log("Caller ID    : " + callerID);
    console.log("Recording URL: " + recordURL);
    
    // subject & message of email to send
    const EmailSubject = 'Voicemail System.';
    const EmailBody = '<html><body><p>You have missed a call from: <B>' + callerID + '</B></P><P> Access the voicemail <A HREF=\"' + recordURL + '\">HERE</a></p><P> Thank you.</P></body></html>';   
    
    // get sparkpost API key, send email to/from, from environment variables
    const sp = new SparkPost(context.SPARKPOST_APIKEY);
    const sendEmailTo=context.sendEmailTo;
    const sendEmailFrom=context.sendEmailFrom;
    
    // send email
    sp.transmissions.send({
        options: {
            open_tracking: true,
            click_tracking: true,
      },
        content: {
          from: sendEmailFrom,
          subject: EmailSubject,
          html: EmailBody
        },
        recipients: [
          {address: sendEmailTo}
        ]
      })
      .then(data => {
        console.log('Woohoo! You just sent the email.');
        console.log(data);  
        callback(null, data);

      })
      .catch(err => {
        console.log('Whoops! Something went wrong');
        console.log(err);
        callback(null, err);
      });


};
