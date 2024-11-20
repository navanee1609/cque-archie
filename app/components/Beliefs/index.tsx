const Beliefs = () => {
  return (
    <div className="mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 rounded-3xl">
      {/* <div
        className="grid grid-cols-1 my-12 lg:grid-cols-2 bg-belief gradient-card dr-shadow pt-12 px-10 sm:px-24 pb-12 md:pb-12 rounded-3xl"
        style={{ marginBottom: "-2.5rem" }}
      >
        <div>
          <h3
            style={{ fontSize: "2.5rem" }}
            className="text-3xl sm:text-65xl font-bold  leading-snug mb-5 text-center sm:text-start"
          >
            AI chat Pro-Actively engage visitors
          </h3>
          <h5
            className="text-2xl pt-2 mb-5 text-center sm:text-start"
            style={{ fontSize: "1.3rem" }}
          >
            Our Proactive Chat engages visitors differently depending on their
            behaviour in your store.
          </h5>
        </div>

        <div>
          <img src="/images/chat-screen.webp" className="max-w-full h-50 " />
        </div>
      </div> */}
      <div
        className="bg-build1 pt-12 px-10 sm:px-24 pb-24 md:pb-70 rounded-3xl"
        style={{marginBottom:"-2rem" , backgroundColor:"#f5e2e4"}}
      >
        <h2 className="text-lg font-normal text-blue tracking-widest mb-5 text-center sm:text-start">
          ENGAGE VISITORS
        </h2>
        <h3 className="text-4xl sm:text-65xl font-bold text-black leading-snug mb-5 text-center sm:text-start">
          <span className="text-blue"> AI chat </span> Pro-Actively engage
          visitors
        </h3>
        <h5 className="bluish pt-2 mb-5 text-center sm:text-start text-xl">
          Our Proactive Chat engages visitors differently depending on their
          behaviour in your store.
        </h5>
        {/* <div className="text-center sm:text-start">
            <button className="text-xl py-5 px-14 mt-5 font-semibold text-white rounded-full bg-blue border border-blue hover:bg-hoblue">
              Learn more
            </button>
          </div> */}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 my-16 mx-5 gap-5">
        {/* COLUMN-1 */}

        {/* <div className="bg-belief gradient-card dr-shadow pt-12 px-10 sm:px-15 pb-12 md:pb-12 rounded-3xl">
          <h3
            style={{ fontSize: "2.5rem" }}
            className="text-3xl sm:text-65xl font-bold  leading-snug mb-5 text-center sm:text-start"
          >
            Be their friend, not a textbook
          </h3>
          <h5
            className="text-2xl pt-2 mb-5 text-center sm:text-start"
            style={{ fontSize: "1.3rem" }}
          >
            No matter where or how they speak, Smartle AI adapts to your
            business, breaking the language barrier with its conversational AI
          </h5>
          <img
            src="/images/textbook-screen.webp"
            className="max-w-full" style={{height:"30%", marginTop:"5rem"}}
          />
        </div> */}
        <div className="bg-darkblue bg-beliefs pt-12 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl">
          <h2 className="text-lg font-normal text-white tracking-widest mb-5 text-center sm:text-start">
            BE THEIR FRIEND
          </h2>
          <h3 className="text-4xl sm:text-65xl font-bold text-white leading-snug mb-5 text-center sm:text-start">
            Be their Friend{" "}
            <span className="text-grey"> , not a textbook.</span>
          </h3>
          <h5 className="text-offwhite pt-2 mb-5 text-center sm:text-start text-xl">
            No matter where or how they speak, Smartle AI adapts to your
            business, breaking the language barrier with its conversational AI
          </h5>
          {/* <div className="text-center sm:text-start">
            <button className="text-xl py-5 px-14 mt-5 font-semibold text-white rounded-full bg-blue border border-blue hover:bg-hoblue">
              Get Started
            </button>
          </div> */}
        </div>

        {/* COLUMN-2 */}

        {/* <div
          style={{ height: "auto" }}
          className="bg-build gradient-card dr-shadow pt-12 px-10 sm:px-15 pb-12 md:pb-12 rounded-3xl"
        >
          <h3
            style={{ fontSize: "2.5rem" }}
            className="text-3xl sm:text-65xl font-bold  leading-snug mb-5 text-center sm:text-start"
          >
            Train your AI assistance to suit your needs
          </h3>
          <h5
            className="pt-2 mb-5 text-center sm:text-start"
            style={{ fontSize: "1.3rem" }}
          >
            Every chat is an opportunity for Smartle AI to learn something new
            and with each response, it gets better at understanding what you
            need. The longer you use Smartle AI, the better it becomes at
            helping you make sales with its conversational AI for e-commerce
          </h5>
          <img src="/images/train-ai.webp" className="max-w-full" style={{height:"30%"}} />
        </div> */}

        <div className="bg-build pt-12 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl">
          <h2 className="text-lg font-normal text-blue tracking-widest mb-5 text-center sm:text-start">
            TRAIN
          </h2>
          <h3 className="text-4xl sm:text-65xl font-bold text-black leading-snug mb-5 text-center sm:text-start">
            <span className="text-blue">Train</span> your AI assistance to suit
            your needs
          </h3>
          <h5 className="bluish pt-2 mb-5 text-center sm:text-start text-xl">
            Every chat is an opportunity for Smartle AI to learn something new
            and with each response, it gets better at understanding what you
            need. The longer you use Smartle AI, the better it becomes at
            helping you make sales with its conversational AI for e-commerce
          </h5>
          {/* <div className="text-center sm:text-start">
            <button className="text-xl py-5 px-14 mt-5 font-semibold text-white rounded-full bg-blue border border-blue hover:bg-hoblue">
              Learn more
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Beliefs;
