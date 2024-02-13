

import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [userInput, setUserInput] = useState('');
  const [botResponse, setBotResponse] = useState('');

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const sendMessage = async () => {
    try {
      const response = await axios.post('/api/chatbot', { userInput });
      setBotResponse(response.data);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div>
      <div>
        <input type="text" value={userInput} onChange={handleInputChange} />
        <button onClick={sendMessage}>Send</button>
      </div>
      <div>{botResponse}</div>
    </div>
  );
};

export default Chatbot;
