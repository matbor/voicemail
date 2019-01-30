## Twilio Voicemail to Sparpost, Function and TwiML

This will email the URL to the recorded voicemail using Sparkpost.

### Requirements
+ Sparkpost API Key
+ Twilio account with valid number already assigned.


## Twilio:

1. Under Functions, Configure, add the following;

   - Environmental Variables:
	   ```
		sendEmailFrom 		<EMAIL ADDRESS FROM>
		sendEmailTo  		<EMAIL ADDRESS TO>
		SPARKPOST_APIKEY	<SPARKPOST API KEY>
		```

   - Dependencies:
	   `sparkpost   2.1.3`

   Add the function.  When added copy the URL under PATH, you will need this for the TwiML.

2. TwiML BINS.

   Add the Twiml code to a new TwiML Bin, paste the URL from the previous function to the TwiML.

3. Assign to a Number

   Under Programmable Voice, Numbers, manage your phone number.
   Voice & Fax, Accept incoming - Voice Calls and then configure it with your TwiML that you created in step 2.

Now call your number and see if it worked, have the function open and you will see the console.log output so you can trouble shoot if needed.