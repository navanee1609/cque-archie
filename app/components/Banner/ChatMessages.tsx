import React, { useState, useEffect, useRef } from "react";

type Message = {
  id: number;
  type: "bot" | "user";
  content: string;
  images?: string[];
  actions?: { label: string; onClick: () => void }[];
  listItems?: string[]; // Added this to handle list items (fabric details)
};

const ChatMessages = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [showInitialText, setShowInitialText] = useState(true);

  const chatData: Message[] = [
    { id: 1, type: "bot", content: "Welcome! How can I help you today?" },
    { id: 2, type: "user", content: "Hello, please recommend a men’s casual crew neck sweater for me" },
    {
      id: 3,
      type: "bot",
      content: "Sure, here are suitable options found for you:",
      images: ["/images/crew-neck-pic-1.png"],
      actions: [
        { label: "Ask about it", onClick: () => alert("You clicked 'Ask about it'") },
        { label: "See more like it", onClick: () => alert("You clicked 'See more like it'") },
      ],
    },
    { id: 4, type: "user", content: "I'm interested in the Phoenix crew neck sweater." },
    {
      id: 5,
      type: "bot",
      content: "The Phoenix Crewneck Sweater is available in various colors, perfect for autumn and winter.",
      images: ["/images/phoenix.png"],
      actions: [
        { label: "Ask about it", onClick: () => alert("You clicked 'Ask about it'") },
        { label: "See more like it", onClick: () => alert("You clicked 'See more like it'") },
      ],
    },
    { id: 6, type: "bot", content: "What size and color would you like?" },
    { id: 7, type: "user", content: "I'm an XL and would like it in dark blue or camel, please." },
    {
      id: 8,
      type: "bot",
      content: "Certainly, here you are dark blue and camel Phoenix Crewneck sweater.",
      images: ["/images/Blue-Crewneck.png"],
    },
    { id: 9, type: "user", content: "What fabric is this sweater made of?" },
    {
      id: 10,
      type: "bot",
      content: "Your selection of sweaters are elegantly designed and made of either silk cashmere, pure cashmere",
      listItems: [
        "Jumper with classic crew neckline",
        "100% A-grade two-ply cashmere",
        "Ribbed neckline, cuffs and hem",
        "Circa 250 grams",
        "Gauge 12 knit",
      ],
    },
    { id: 11, type: "user", content: "Amazing, thanks." },
    { id: 12, type: "bot", content: "You're welcome!" },
    {
      id: 13,
      type: "bot",
      content: "Phoenix camel cashmere sweaters can be styled with:",
      images: ["/images/phoenix-style.png"],
    },
    { id: 14, type: "user", content: "Thank you, that really helps a lot" },
    { id: 15, type: "bot", content: "You’re welcome. If you have any more questions, feel free to ask!" },
  ];

  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      setShowInitialText(false);
    }, 1500);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    if (currentIndex < chatData.length) {
      const timer = setTimeout(() => {
        setMessages((prevMessages) => [...prevMessages, chatData[currentIndex]]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 1400);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, chatData]);

  // Scroll to bottom whenever new messages are added
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div
      ref={chatContainerRef}
      style={{
        display: "flex",
        flexDirection: "column",
        maxHeight: "400px",
        overflowY: "auto",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      {showInitialText && (
        <div
          style={{
            padding: "20px",
            background: "#f3f3f3",
            borderRadius: "12px",
            fontSize: "16px",
            textAlign: "center",
            fontWeight: "500",
            marginBottom: "15px",
          }}
        >
          CQUE AI: AI Shopping Assistant that answers 97% of queries, personalises shopping, and drives conversions!
        </div>
      )}

      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100px",
          }}
        >
          <div className="loader"></div>
        </div>
      ) : (
        messages.map((message) => (
          <div
            key={message.id}
            style={{
              display: "flex",
              flexDirection: message.type === "bot" ? "row" : "row-reverse",
              alignItems: "flex-start",
              margin: "10px 0",
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

            {message.type === "user" && (
              <div
                style={{
                  marginLeft: "10px",
                  borderRadius: "50%",
                  width: "30px",
                  height: "30px",
                }}
              >
               <img
                  src="/images/user.png"
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
                maxWidth: "80%",
                padding: "12px",
                borderRadius: "12px",
                fontFamily: "Urbanist, sans-serif",
                background: message.type === "bot" ? "transparent" : "linear-gradient(to right, #e6f7ff, #cce7ff)",
                border: message.type === "bot" ? "1px solid green" : "none",
                color: message.type === "bot" ? "black" : "inherit",
                fontSize: "14px",
                fontWeight: "500",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                wordWrap: "break-word",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div>{message.content}</div>
              {message.listItems && (
                <ul style={{ marginTop: "10px", paddingLeft: "10px" }}>
                  {message.listItems.map((item, idx) => (
                    <li key={idx} style={{ fontSize: "14px", fontWeight: "400", listStyle: "inside" }}>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
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
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                        overflow: "hidden",
                        backgroundColor: "#fff",
                        transition: "transform 0.3s, box-shadow 0.3s",
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
                    </div>
                  ))}
                </div>
              )}
              {message.actions && (
                <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                  {message.actions.map((action, idx) => (
                    <button
                      key={idx}
                      onClick={action.onClick}
                      style={{
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
                    >
                      {action.label}
                    </button>
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
