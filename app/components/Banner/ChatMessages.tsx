import React, { useState, useEffect } from "react";

type Message = {
  id: number;
  type: "bot" | "user";
  content: string;
  images?: string[];
  actions?: { label: string; onClick: () => void }[];
};

const ChatMessages = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true); // State to control skeleton loading

  const chatData: Message[] = [
    { id: 1, type: "bot", content: "Welcome! How can I help you today?" },
    { id: 2, type: "user", content: "Hello, please recommend a men's casual crew neck sweater for me?" },
    {
      id: 3,
      type: "bot",
      content: "Sure, here are suitable options found for you:",
      images: ["/images/sweater1.jpg", "/images/sweater1.jpg"],
      actions: [
        { label: "Ask about it", onClick: () => alert("You clicked 'Ask about it'") },
        { label: "See more like it", onClick: () => alert("You clicked 'See more like it'") },
      ],
    },
    { id: 4, type: "user", content: "I'm interested in the Phoenix crew neck sweater." },
    {
      id: 5,
      type: "bot",
      content:
        "The Phoenix Crewneck Sweater is available in various sizes and colors, perfect for autumn and winter.",
      images: ["/images/sweater1.jpg", "/images/sweater1.jpg"],
      actions: [
        { label: "Ask about it", onClick: () => alert("You clicked 'Ask about it'") },
        { label: "See more like it", onClick: () => alert("You clicked 'See more like it'") },
      ],
    },
    { id: 6, type: "bot", content: "What size and color would you like?" },
    { id: 7, type: "user", content: "I'm an XL and would like it in dark blue or camel, please." },
  ];

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // Hide skeleton loader after 1 second
    }, 1000);
  }, []);

  useEffect(() => {
    if (currentIndex < chatData.length) {
      const timer = setTimeout(() => {
        setMessages((prevMessages) => [...prevMessages, chatData[currentIndex]]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 1500); // 1.5s delay for each chat bubble
      return () => clearTimeout(timer);
    }
  }, [currentIndex, chatData]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        maxHeight: "400px",
        overflowY: "auto",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <style>
        {`
          ::-webkit-scrollbar {
            display: none;
          }
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .skeleton {
            background: #e0e0e0;
            border-radius: 8px;
            animation: shimmer 1.5s infinite linear;
          }
          @keyframes shimmer {
            0% { background-position: -200px 0; }
            100% { background-position: 200px 0; }
          }
        `}
      </style>

      {/* Display skeleton loading if still loading */}
      {isLoading ? (
        <div className="skeleton" style={{ height: "20px", width: "80%", margin: "10px auto" }}></div>
      ) : (
        messages.map((message) => (
          <div
            key={message.id}
            style={{
              display: "flex",
              flexDirection: message.type === "bot" ? "row" : "row-reverse",
              alignItems: "flex-start",
              margin: "10px 0",
              animation: "fadeInUp 0.6s ease-in-out",
            }}
          >
            {message.type === "bot" && (
              <div
                style={{
                  marginRight: "10px",
                  borderRadius: "50%",
                  width: "30px",
                  height: "30px",
                  overflow: "hidden",
                }}
              >
                <img
                  src="/images/chatbot.jpg"
                  alt="Chatbot"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            )}
            <div
              style={{
                maxWidth: "90%",
                padding: "12px",
                borderRadius: "12px",
                fontFamily: message.type === "bot"
                  ? "Urbanist, sans-serif"
                  : "Urbanist, sans-serif",
                background: message.type === "bot"
                  ? "transparent" // No background for bot
                  : "linear-gradient(to right, #e6f7ff, #cce7ff)", // User bubble gradient
                border: message.type === "bot" ? "1px solid green" : "none", // Green border for bot
                color: message.type === "bot" ? "black" : "inherit", // Bot text black
                fontSize: message.type === "user" ? "14px" : "12px", // Increased user text size
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Subtle shadow
                wordWrap: "break-word",
                animation: "fadeInUp 0.4s ease-in-out", // Smooth fade-in animation
              }}
            >
              <div>{message.content}</div>
              {message.images && (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
                    gap: "15px",
                    marginTop: "10px",
                  }}
                >
                  {message.images.map((img, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "space-between",
                        borderRadius: "8px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Modern shadow
                        overflow: "hidden",
                        backgroundColor: "#fff",
                        transition: "transform 0.3s, box-shadow 0.3s", // Hover effect
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.transform = "scale(1.05)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.transform = "scale(1)")
                      }
                    >
                      <img
                        src={img}
                        alt={`content-${idx}`}
                        style={{
                          width: "100%",
                          height: "120px",
                          objectFit: "cover",
                        }}
                      />

                      {/* Action buttons below each image */}
                      {message.actions && (
                        <div
                          style={{
                            display: "flex",
                            // flexDirection: "column",
                            gap: "8px",
                            marginTop: "10px",
                            marginBottom: "10px",
                          }}
                        >
                          {message.actions.map((action, index) => (
                            <button
                              key={index}
                              onClick={action.onClick}
                              style={{
                                display:"flex",
                                fontSize: "10px",
                                padding: "8px",
                                border: "none",
                                borderRadius: "20px",
                                background: "#286955",
                                color: "#fff",
                                cursor: "pointer",
                                transition: "transform 0.3s, background-color 0.3s",
                                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                              }}
                              onMouseEnter={(e) =>
                                (e.currentTarget.style.background = "linear-gradient(to left, #286955, #234238);")
                              }
                              onMouseLeave={(e) =>
                                (e.currentTarget.style.background =
                                  "linear-gradient(to left, #286955, #234238);")
                              }
                            >
                              {action.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ChatMessages;
