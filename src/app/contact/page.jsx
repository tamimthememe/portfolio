import Image from "next/image";
import { socials } from "../../../public/constants/constants";

const Contact = () => {
  return (
    <section className="w-full h-[100vh]">
      <div className="pt-24 max-md:pt-10 max-md:px-7 md:w-[60%] mx-auto">
        <h3 className="page-header">Contact</h3>
        <div className="mt-10 md:w-[80%] mx-auto">
          <a href="mailto:management.tamim@gmail.com">
            <div className="bg-black-100 p-2 rounded-lg">
              <p className="text-[16px] text-center text-gray-100">
                Email me here!
              </p>
            </div>
          </a>
          <a className="mt-5" href="tel:+97466929350">
            <div className="mt-5 bg-black-100 p-2 rounded-lg">
              <p className="text-[16px] text-center text-gray-100">Call me</p>
            </div>
          </a>
          <div className="my-4 flex items-center justify-center gap-2">
            <div className="w-[30%] bg-gray-100 h-[1px] rounded-full" />
            <p className="text-[12px] text-gray-100">or</p>
            <div className="w-[30%] bg-gray-100 h-[1px] rounded-full" />
          </div>
          {socials.map((item, index) => (
            <a target="_blank" key={index} className="mt-5" href={item.url}>
              <div className="mt-5 bg-black-100 p-2 rounded-lg">
                <div className="flex items-center gap-2 justify-center">
                  <Image
                    src={item.icon}
                    width={25}
                    alt={`${item.title} icon`}
                  />
                  <p className="text-[16px] text-center text-gray-100">
                    {item.title}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
