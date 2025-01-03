"use client"
import Navbar from './Navbar';
import React, { useEffect , useState} from 'react';
import { InlineWidget } from 'react-calendly';

const Navbarin: React.FC = () => {
    const [showsCalendly, setShowsCalendly] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);

 console.log(showsCalendly , "SHOWS CALENDLY" , overlayVisible , "OVERLAYVISIBLE")
  // const handleButtonClicks = () => {
  //   setShowsCalendly(true);
  //   setOverlayVisible(true);
  // };

  const handleCalendlyClose = () => {
    setShowsCalendly(false);
    setOverlayVisible(false);
  };
    useEffect(() => {
        // The debounce function receives our function as a parameter
        const debounce = (fn: Function) => {
            // This holds the requestAnimationFrame reference, so we can cancel it if we wish
            let frame: number;
            // The debounce function returns a new function that can receive a variable number of arguments
            return (...params: any[]) => {
                // If the frame variable has been defined, clear it now, and queue for next frame
                if (frame) {
                    cancelAnimationFrame(frame);
                }
                // Queue our function call for the next frame
                frame = requestAnimationFrame(() => {
                    // Call our function and pass any params we received
                    fn(...params);
                });
            }
        };

        // Reads out the scroll position and stores it in the data attribute
        // so we can use it in our stylesheets
        const storeScroll = () => {
            document.documentElement.dataset.scroll = window.scrollY.toString();
        }

        // Listen for new scroll events, here we debounce our `storeScroll` function
        document.addEventListener('scroll', debounce(storeScroll), { passive: true });

        // Update scroll position for first time
        storeScroll();
    }, [])
    return (
        <>
            <Navbar setOverlayVisible={setOverlayVisible} setShowsCalendly={setShowsCalendly}/>
             {showsCalendly && (
                            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-md">
                              <div className="relative rounded-lg p-8 w-11/12 max-w-4xl my-8 max-h-screen bg-transparent">
                                <InlineWidget url="https://calendly.com/smartle/30min" />
                                <button
                                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-3xl text-white"
                                  onClick={handleCalendlyClose}
                                >
                                  &#10005;
                                </button>
                              </div>
                            </div>
                          )}
        </>
    );
}

export default Navbarin;
