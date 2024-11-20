"use client";
import { useState } from "react";
import { InlineWidget } from "react-calendly";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rjgkhjvxkvkcrqamlrns.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJqZ2toanZ4a3ZrY3JxYW1scm5zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE5NzI4MDQsImV4cCI6MjAyNzU0ODgwNH0.6gjvj2IYDuvvaCV0UDwZkVg51LJ7rvLx-CKT-ROpNqk"
const supabase = createClient(supabaseUrl, supabaseKey);

const Contactus = () => {
  const [showsCalendly, setShowsCalendly] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [textArea, setTextArea] = useState('');
  const [errors, setErrors] = useState({});

  const handleButtonClicks = () => {
    setShowsCalendly(true);
    setOverlayVisible(true);
  };

  const handleCalendlyClose = () => {
    setShowsCalendly(false);
    setOverlayVisible(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formErrors = {};

    if (!firstName) formErrors.firstName = 'This is a required field';
    if (!email) formErrors.email = 'This is a required field';
    if (!textArea) formErrors.textArea = 'This is a required field';

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      const { data, error } = await supabase.from('contactus').insert([
        {
          'First Name': firstName,
          Email: email,
          'About Site': textArea,
          'Last Name': lastName,
          'Phone Number': phoneNumber,
        },
      ]);

      if (error) {
        console.error('Error inserting data:', error.message);
      } else {
        // Clear the form
        setFirstName('');
        setLastName('');
        setPhoneNumber('');
        setEmail('');
        setTextArea('');
        setErrors({});

        // Optional: Send email or other actions
        fetch('https://rjgkhjvxkvkcrqamlrns.supabase.co/functions/v1/resend', {
          mode: 'no-cors',
        });
      }
    }
  };

  return (
    <>
      <div className="container mx-auto sm:px-4 ptb-120">
        <div
          className="flex flex-wrap justify-center ptb-120 bg-cover items-center"
          style={{ background: "url(images/roi-banner.webp)" }}
        >
          <div className="lg:w-3/4 pr-4 pl-4 text-center">
            <h1 className="fs-48 txt-blk fw-600" style={{ fontSize: 80 }}>
              Get in touch!
            </h1>
            <p className="text-center my-2">
              Drop us a message and sit back for the magic to happen
            </p>
            <div className="flex items-center justify-center">
              <button
                className="inline-block text-center select-none border font-normal whitespace-no-wrap rounded py-3 px-3 leading-normal no-underline btn-dark-blue btn-rounded"
                onClick={handleButtonClicks}
              >
                Try CQUE AI
              </button>
              {showsCalendly && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                  <div className="relative rounded-lg p-8 w-11/12 max-w-4xl my-8 bg-transparent">
                    <button
                      className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl text-white"
                      onClick={handleCalendlyClose}
                    >
                      &#10005; {/* X button */}
                    </button>
                    <InlineWidget url="https://calendly.com/prabhu-m-spritle/smartle-ai-demo?month=2024-03" />
                  </div>
                </div>
              )}
              {overlayVisible && (
                <div
                  className="fixed inset-0 z-40"
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  }}
                  onClick={handleCalendlyClose}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:flex lg:space-x-4">
        <div className="lg:w-3/5 mb-4 lg:mb-0">
          <div
            className="py-5 px-5 rounded-lg shadow-lg h-full"
            style={{ boxShadow: "0px 16px 48px 0px #D9D9D9" }}
          >
            <h1 className="text-center font-semibold text-3xl py-3">Contact us</h1>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-wrap justify-between mb-3 space-y-4 lg:space-y-0">
                <div className="w-full lg:w-2/5">
                  <label htmlFor="FirstName" className="mb-2 block">
                    First Name *
                  </label>
                  <input
                    className="rounded-lg border w-full p-2"
                    style={{ borderColor: "lightgrey" }}
                    type="text"
                    id="FirstName"
                    name="name"
                    placeholder="First name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <p className="text-red-500 text-xs mt-1" id="FirstNameErr">{errors.firstName}</p>
                </div>
                <div className="w-full lg:w-2/5">
                  <label htmlFor="LastName" className="mb-2 block">
                    Last Name
                  </label>
                  <input
                    className="rounded-lg border w-full p-2"
                    style={{ borderColor: "lightgrey" }}
                    type="text"
                    id="LastName"
                    name="name"
                    placeholder="Last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex flex-wrap justify-between mb-4 space-y-4 lg:space-y-0">
                <div className="w-full lg:w-2/5">
                  <label htmlFor="Email" className="mb-2 block">
                    Email*
                  </label>
                  <input
                    className="rounded-lg border w-full p-2 block"
                    style={{ borderColor: "lightgrey" }}
                    type="email"
                    id="Email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <p className="text-red-500 text-xs mt-1" id="EmailErr">{errors.email}</p>
                </div>
                <div className="w-full lg:w-2/5">
                  <label htmlFor="PhoneNumber" className="mb-2 block">
                    Phone Number
                  </label>
                  <input
                    className="rounded-lg border w-full p-2"
                    style={{ borderColor: "lightgrey" }}
                    type="tel"
                    id="PhoneNumber"
                    name="phone"
                    placeholder="Phone number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="text-area" className="mb-2 block">
                  Tell us a little about your site*
                </label>
                <textarea
                  className="rounded-lg border border-gray-300 w-full p-2 block resize-y"
                  id="text-area"
                  placeholder="Write your message"
                  style={{ height: "170px", borderColor: 'lightgrey' }}
                  value={textArea}
                  onChange={(e) => setTextArea(e.target.value)}
                ></textarea>
                <p className="text-red-500 text-xs mt-1" id="TextAreaErr">{errors.textArea}</p>
              </div>

              <button
                className="text-white font-bold py-3 px-4 rounded-3xl w-full"
                id="submit"
                style={{ background: '#286955' }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>

  <div className="lg:w-2/5 lg:pl-4 py-2 lg:py-0 flex flex-col justify-center">
    <div>
      <h6 className="font-bold">Want to get on a quick call? Ring us at</h6>
      <div className="py-1">
      <div className="py-3" style={{paddingLeft:"5%"}}>
        <p className="flex items-center mb-2">
          <i className="fas fa-phone mr-2" style={{color:'#286955'}}></i>
          <span className="font-bold">Ohio, USA:</span>&nbsp;+1 614 664 7677
        </p>
        <p className="flex items-center mb-2">
          <i className="fas fa-phone mr-2" style={{color:'#286955'}}></i>
          <span className="font-bold" mb-1>Singapore:</span>&nbsp;+65 6652 5475
        </p>
        <p className="flex items-center mb-0">
          <i className="fas fa-phone mr-2" style={{color:'#286955'}}></i>
          <span className="font-bold mb-1">Chennai, India:</span>&nbsp;+91 44 4784 3003
        </p>
      </div>

      </div>
    </div>

    <div>
      <h6 className="font-bold">Want to visit us? Here are the Google Maps directions</h6>
      <div className="py-3 flex flex-col space-y-2">
      <div className="py-3 flex flex-col space-y-2 mb-2" style={{paddingLeft:"5%"}}>
        <a
          className="flex items-center" style={{color:'#286955'}}
          href="https://www.google.com/maps/place/Spritle+software+LLC/@40.0044937,-83.1532564,17z/data=!3m1!4b1!4m6!3m5!1s0x8838978530ed0737:0xaa95bab488bbf005!8m2!3d40.0044937!4d-83.1532564!16s%2Fg%2F11rnntvpmb?entry=ttu"
        >
          <i className="fas fa-flag mr-2"></i>
          <span className="font-bold">Ohio, USA</span>
        </a>
        <a
          className="flex items-center" style={{color:'#286955'}}
          href="https://www.google.co.in/maps/place/Spritle+Software/@1.3325619,103.8915719,17z/data=!3m1!5s0x31da19f66c9058fd:0x8871b496b404d2ba!4m6!3m5!1s0x31da1703646cca73:0xee6ab222437d335a!8m2!3d1.332946!4d103.8939974!16s%2Fg%2F11ffltwqh1?entry=ttu"
        >
          <i className="fas fa-flag mr-2"></i>
          <span className="font-bold">Singapore</span>
        </a>
        <a
          className="flex items-centere" style={{color:'#286955'}}
          href="https://www.google.com/maps/place/Spritle+Software/@13.0670529,80.1766501,17z/data=!3m1!4b1!4m6!3m5!1s0x3a5263d902a72203:0xa64bbcae249c5436!8m2!3d13.0670529!4d80.1766501!16s%2Fg%2F1tfv3k9g?entry=ttu"
        >
          <i className="fas fa-flag  mr-2" style={{color:'#286955'}}></i>

          <span className="font-bold">Chennai, India</span>
        </a>
      </div>
      </div>
    </div>

    <div className="py-1">
      <h6 className="flex items-center">
        <i className="fas fa-suitcase mr-2" style={{color:'#286955'}}></i>
        For Jobs enquiries, email us at&nbsp;<a href="mailto:jobs@spritle.com">jobs@spritle.com</a>
      </h6>
      <h6 className="flex items-center mt-2">
        <i className="fas fa-circle-info mr-2" style={{color:'#286955'}}></i>
        <span>For General enquiries, email us at <a href="mailto:info@spritle.com">info@spritle.com</a></span>
      </h6>
    </div>
  </div>
</div>


      <div className="container mx-auto sm:px-4 ptb-60">
        <div
          className="flex flex-wrap   justify-center  "
          style={{ boxShadow: "0px 16px 48px 0px #D9D9D9", borderRadius: 10 }}
        >
          <div className="lg:w-1/2 pr-4 pl-4 p-12">
            <h3 className="mb-3 txt-blk fs-40 fw-600 text-center">
              Still Not Sure?
            </h3>
            <p className="txt-blk fs-18 text-center">
              Let us show you a quick DEMO tailored to your store. You’ll be
              impressed.
            </p>
            <div className="flex items-center justify-center">
            <button
                className="inline-block text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline btn-dark-blue btn-rounded"
                onClick={handleButtonClicks}
            >
                Schedule Demo
            </button>
            {showsCalendly && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="relative rounded-lg p-8 w-11/12 max-w-4xl my-8 bg-transparent">
                        <button
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl text-white"
                            onClick={handleCalendlyClose}
                        >
                            &#10005; {/* X button */}
                        </button>
                        <InlineWidget url="https://calendly.com/prabhu-m-spritle/smartle-ai-demo?month=2024-03" />
                    </div>
                </div>
            )}
            {overlayVisible && (
                <div
                    className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40"
                    onClick={handleCalendlyClose}
                />
            )}
        </div>
          </div>
          <div
            className="lg:w-1/2 pr-4 pl-4 hidden lg:block"
            style={{
              background: "url(images/still-not-sure.webp)",
              borderRadius: 10,
              backgroundSize: "cover",
            }}
          />
        </div>
      </div>
     
    </>
  );
};

export default Contactus;
