import emailjs from 'emailjs-com';
import {USER_ID} from '@/config-global'

// Replace 'your_user_id' with your actual EmailJS User ID
// const USER_ID = 'eOuUtCZwAoRYQO0SO';

// Initialize EmailJS SDK
if (USER_ID) {
  emailjs.init(USER_ID);
} else {
  console.log("EMAIL JS USER_ID not found");
}


export const sendEmail = async (templateId: string, templateParams: any) => {
  try {
    // Call the EmailJS SDK to send the email using the provided templateId and templateParams
    await emailjs.send('service_bf59u0j', templateId, templateParams);
  } catch (error) {
    throw new Error('Error sending email: ' + error);
  }
};
