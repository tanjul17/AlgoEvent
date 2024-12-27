'use client'; // Ensure this file is treated as a client-side component

import { useState } from 'react';

export default function ChatBotIcon() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative">
      {/* Icon above the footer */}
      <div
        className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <i className="fas fa-comment-alt text-white text-3xl"></i> {/* Chat Icon */}
      </div>

      {/* Conditionally render the chatbot iframe when the icon is hovered */}
      {isHovered && (
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-full max-w-xl">
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/UF6PBsAeUiPI8C47mP390"
            className="w-full h-[700px] border-0"
            frameBorder="0"
            title="Chatbot"
          ></iframe>
        </div>
      )}
    </div>
  );
}
