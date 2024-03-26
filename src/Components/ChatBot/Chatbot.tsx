// 'use client'; 

// const SimpleChatbot = () => {
//   // TODO: remove this component from other pages
//   return (
//     <></>
//   );
// };

// export default SimpleChatbot;

'use client'; 
import React, { useRef, useState } from 'react';
import ChatBot from 'react-simple-chatbot';
import { FaCommentAlt, FaWhatsapp } from 'react-icons/fa';
import { ThemeProvider } from 'styled-components';
import {phoneNumber} from '@/config-global'

const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#077B83',
  headerFontColor: '#fff',
  headerFontSize: '18px',
  botBubbleColor: '#077B83',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const SimpleChatbot = () => {
  const [name, setName] = useState('');
  const chatbotRef = useRef(null);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const handleUserInput = ({ step }:any) => {
    if (step?.id === 'get-name') {
      // Save user's name to the state
      setName(step.value);
    }
  };

  const handleChatbotToggle = () => {
    setIsChatbotOpen((prev) => !prev);
  };

  const handleChatbotClose = () => {
    setIsChatbotOpen(false);
  };

  const handleWhatsappChat = () => {
    // Phone number to open the chat with
  // const phoneNumber = '1234567890'; // Replace this with the actual phone number

  // Constructing the WhatsApp API URL
  const whatsappURL = `https://wa.me/${phoneNumber}`;

  // Opening the WhatsApp chat in a new window/tab
  window.open(whatsappURL, '_blank');
  }

  return (
    // <div>
    //   {isChatbotOpen ? (
    //     <ThemeProvider theme={theme}>
    //     <ChatBot
    //       headerTitle="Shehan"
    //       steps={[
    //         {
    //           id: 'greeting',
    //           message: 'Hello! I am Shehan. What is your name?',
    //           trigger: 'get-name',
    //         },
    //         {
    //           id: 'get-name',
    //           user: true,
    //           trigger: 'display-name',
    //         },
    //         {
    //           id: 'display-name',
    //           message: `Nice to meet you,{previousValue}! How can I assist you with your trip to Sri Lanka?`,
    //           trigger: 'options-list',
    //         },
    //         {
    //           id: 'options-list',
    //           options: [
    //             { value: 1, label: 'Places to visit in Sri Lanka', trigger: 'places-to-visit' },
    //             { value: 2, label: 'Best time to visit Sri Lanka', trigger: 'best-time-to-visit' },
    //             { value: 3, label: 'Popular Sri Lankan dishes', trigger: 'popular-dishes' },
    //           ],
    //         },  
    //         {
    //           id: 'places-to-visit',
    //           message: 'Sri Lanka is filled with amazing places to explore! Some must-visit destinations include Sigiriya, Kandy, Galle, and Ella. Are you interested in any specific location?',
    //           trigger: 'location-response',
    //         },
    //         {
    //           id: 'best-time-to-visit',
    //           message: 'The best time to visit Sri Lanka is generally from December to March when the weather is dry and sunny. However, it depends on the region you plan to visit. Do you have a preferred travel time?',
    //           trigger: 'response',
    //         },
    //         {
    //           id: 'popular-dishes',
    //           message: 'Sri Lankan cuisine is delicious! Some popular dishes include rice and curry, hoppers, kottu, and seafood specialties like fish ambul thiyal. Are you interested in trying any specific Sri Lankan dish?',
    //           trigger: 'response',
    //         },  
    //         {
    //           id: 'location-response',
    //           user: true,
    //           trigger: 'handle-location-response',
    //         },
    //         {
    //           id: 'handle-location-response',
    //           options: [
    //             { value: 'Sigiriya', label: 'Sigiriya', trigger: 'sigiriya-info' },
    //             { value: 'Kandy', label: 'Kandy', trigger: 'kandy-info' },
    //             { value: 'Galle', label: 'Galle', trigger: 'galle-info' },
    //             { value: 'Ella', label: 'Ella', trigger: 'ella-info' },
    //             { value: 'other-location', label: 'Other location', trigger: 'other-location' },
    //           ],
    //         },
    //         {
    //           id: 'sigiriya-info',
    //           message: 'Sigiriya is famous for its ancient rock fortress, offering stunning views from the top. Would you like to know more about Sigiriya?',
    //           trigger: 'response',
    //         },
    //         {
    //           id: 'kandy-info',
    //           message: 'Kandy is known for its sacred Buddhist sites, including the Temple of the Tooth and the Royal Botanical Gardens. Would you like to know more about Kandy?',
    //           trigger: 'response',
    //         },
    //         {
    //           id: 'galle-info',
    //           message: 'Galle is a charming coastal city with a Dutch colonial heritage. Its attractions include Galle Fort and beautiful beaches. Would you like to know more about Galle?',
    //           trigger: 'response',
    //         },
    //         {
    //           id: 'ella-info',
    //           message: 'Ella is a picturesque hill station surrounded by tea plantations and offering great hiking opportunities. Would you like to know more about Ella?',
    //           trigger: 'response',
    //         },
    //         {
    //           id: 'other-location',
    //           message: 'Please specify which location in Sri Lanka you are interested in, and I would be happy to provide more information!',
    //           trigger: 'response',
    //         },
    //         {
    //           id: 'user-input',
    //           user: true,
    //           trigger: 'response',
    //         },
    //         {
    //           id: 'response',
    //           message: 'Thank you for your input. Have a great day!',
    //           end: true,
    //         },
    //       ]}
    //       handleEnd={handleUserInput}
    //       ref={chatbotRef}
    //       floating={true}
    //       opened={true}
    //       style={{
    //         fontFamily: 'Verdana, Geneva, sans-serif',
    //         background: '#f0f0f0',
    //         color: '#333',
    //         borderRadius: '10px',
    //         boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    //         zIndex: 9999,
    //       }}
    //     />
    //     </ThemeProvider>
    //   ) : (
    //     <div
    //       style={{
    //         position: 'fixed',
    //         bottom: '40px',
    //         right: '40px',
    //         background: '#25D366',
    //         color: '#fff',
    //         borderRadius: '50%',
    //         fontSize: '24px',
    //         width: '80px',
    //         height: '80px',
    //         display: 'flex',
    //         justifyContent: 'center',
    //         alignItems: 'center',
    //         cursor: 'pointer',
    //         zIndex: 9999,
    //         boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    //       }}
    //       onClick={handleChatbotToggle}
    //     >
    //       {/* <FaCommentAlt size={24} /> */}
    //       <FaWhatsapp size={66}/>
    //     </div>
    //   )}
    //   {isChatbotOpen && (
    //     <div
    //       style={{
    //         position: 'fixed',
    //         top: 0,
    //         left: 0,
    //         right: 0,
    //         bottom: 0,
    //         zIndex: 9998,
    //       }}
    //       onClick={handleChatbotClose}
    //     ></div>
    //   )}
    // </div>

    <div
          style={{
            position: 'fixed',
            bottom: '40px',
            right: '40px',
            background: '#25D366',
            color: '#fff',
            borderRadius: '50%',
            fontSize: '24px',
            width: '70px',
            height: '70px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            zIndex: 9999,
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
          }}
          onClick={handleWhatsappChat}
        >
          {/* <FaCommentAlt size={24} /> */}
          <FaWhatsapp size={48}/>
        </div>
  );
};

export default SimpleChatbot;
