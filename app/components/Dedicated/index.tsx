import Image from "next/image";

const Dedicated = () => {
  return (
    <div className="relative">
      <Image
        src="/images/dedicated/spiral.svg"
        height={272}
        width={486}
        alt="spiral-design"
        className="absolute left-0 hidden lg:block -z-10"
      />

      <div className="mx-auto max-w-7xl px-4 my-12 sm:py-20 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 my-16">
          {/* COLUMN-1 */}
          <div style={{margin:"auto 0"}}>
            <Image
              src="/images/nestlee.png"
              alt="man-icon"
              width={416}
              height={530}
              className="mx-auto md:mx-0"
            />
          </div>

          {/* COLUMN-2 */}
          <div className="relative">
            <Image
              src="images/dedicated/comma.svg"
              alt="comma-image"
              width={200}
              height={106}
              className="absolute comma-pos hidden lg:block"
            />
            <h2 className="text-4xl lg:text-65xl pt-4 font-bold sm:leading-tight mt-5 text-center lg:text-start">
              What our customers say about us{" "}
            </h2>
            <p className="font-medium text-lightblack text-2xl mt-5 text-center lg:text-start">
              Smartle's AI assistant revolutionized the way the patient
              interacts with our application and also stepped the game up in
              collecting medical data easily. Its adaptive learning benefits
              address the pain points of patients with diverse chronic
              conditions.In summary, Smartle AI has significantly enhanced our
              ability to provide personalized care, making it an indispensable
              tool for our practice..
            </p>
            <p className="text-2xl font-semibold mt-12 lg:ml-32  text-center lg:text-start">
              {" "}
              - Nestle health & science
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dedicated;
