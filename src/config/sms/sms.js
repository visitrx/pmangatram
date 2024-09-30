import axios from "axios";


const sendSMS = async (number) => {
    const apiKey = process.env.FAST2SMS_API_KEY;
    const senderId = process.env.DLT_SENDER_ID;
    const messageTemplateId = process.env.FAST2SMS_MESSAGE_TEMPLATE_ID; // Approved template ID from Fast2SMS DLT

    // Construct the message dynamically
    // const message = `Your participation number is ${number}`;

    // Fast2SMS API URL
    const url = `https://www.fast2sms.com/dev/bulkV2?authorization=${apiKey}&route=dlt&sender_id=${senderId}&message=${messageTemplateId}&variables_values=${number}&flash=0&numbers=${number}`;

    try {
        const response = await axios.get(url);
        if (response.data.return) {
            console.log('SMS sent successfully:', response.data);
        } else {
            console.error('Error sending SMS:', response.data.message);
        }
    } catch (error) {
        console.error('Error occurred while sending SMS:', error.message);
    }
};

export default sendSMS