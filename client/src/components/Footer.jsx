import React from "react";
import { Phone, Mail, ChevronRight, Send } from "lucide-react";
import logo from "../assets/logo.svg";

const FooterColumn = ({ title, links }) => (
  <div className="mb-6 md:mb-0">
    <h3 className="text-gray-400 font-semibold mb-4">{title}</h3>
    <ul>
      {links.map((link, index) => (
        <li key={index} className="mb-2">
          <a href="#" className="text-white opacity-85 flex items-center">
            {link}
            <ChevronRight className="ml-1 h-4 w-4" />
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const ContactColumn = ({ title, contacts, logos }) => (
  <div className="mb-6 md:mb-0">
    <h3 className="text-gray-400 font-semibold mb-4">{title}</h3>
    <ul>
      {contacts.map((contact, index) => (
        <li key={index} className="mb-2">
          <a href="#" className="text-white opacity-85 flex items-center">
            <span className="mr-2">{logos[index]}</span>{" "}
            {contact}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default function Footer() {
  return (
    <footer className="bg-[#171717] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex flex-row justify-between md:flex-col">
              <img
                src={logo}
                alt="itel logo"
                className="mb-4 w-[56px] h-[38px]"
              />
              <div className="flex space-x-4 mb-6">
                <a href="#" className="text-blue-400 hover:text-white">
                  <svg
                    width="38"
                    height="38"
                    viewBox="0 0 38 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="38"
                      height="38"
                      rx="19"
                      fill="white"
                      fill-opacity="0.05"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.0501 15.9647H15.2305V26.2384H12.0501V15.9647ZM13.6408 10.8578C14.6578 10.8578 15.484 11.6873 15.484 12.7083C15.484 13.7303 14.6578 14.5601 13.6408 14.5601C13.3957 14.5648 13.1522 14.5204 12.9244 14.4294C12.6967 14.3385 12.4892 14.2029 12.3143 14.0305C12.1393 13.8582 12.0003 13.6525 11.9055 13.4256C11.8106 13.1987 11.7617 12.955 11.7617 12.7089C11.7617 12.4629 11.8106 12.2192 11.9055 11.9923C12.0003 11.7654 12.1393 11.5597 12.3143 11.3874C12.4892 11.215 12.6967 11.0794 12.9244 10.9885C13.1522 10.8975 13.3957 10.8531 13.6408 10.8578ZM17.2254 15.9644H20.2759V17.3683H20.3182C20.7429 16.5607 21.7803 15.7092 23.3274 15.7092C26.5478 15.7092 27.1427 17.8371 27.1427 20.6035V26.2384H23.9643V21.2422C23.9643 20.051 23.9425 18.5184 22.3118 18.5184C20.657 18.5184 20.4028 19.8161 20.4028 21.1563V26.2384H17.2251V15.9647L17.2254 15.9644Z"
                      fill="#117EB8"
                    />
                  </svg>
                </a>
                <a href="#" className="text-red-400 hover:text-white">
                  <svg
                    width="38"
                    height="38"
                    viewBox="0 0 38 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="38"
                      height="38"
                      rx="19"
                      fill="white"
                      fill-opacity="0.05"
                    />
                    <path
                      d="M23.9858 9.95117H14.0116C11.768 9.95117 9.94922 11.77 9.94922 14.0136V23.9877C9.94922 26.2313 11.768 28.0501 14.0116 28.0501H23.9858C26.2294 28.0501 28.0482 26.2313 28.0482 23.9877V14.0136C28.0482 11.77 26.2294 9.95117 23.9858 9.95117Z"
                      fill="url(#paint0_linear_11750_3630)"
                    />
                    <path
                      d="M16.2194 13.084H21.8617C21.987 13.1467 22.1751 13.1467 22.3005 13.2094C22.8507 13.2985 23.3651 13.5394 23.786 13.9048C24.2068 14.2703 24.5174 14.7459 24.6828 15.2782C24.7754 15.5849 24.8383 15.8998 24.8708 16.2185V21.7354C24.7812 22.4346 24.523 23.1015 24.1185 23.6788C23.7715 24.0809 23.3365 24.3975 22.8472 24.6041C22.3579 24.8106 21.8276 24.9016 21.2974 24.8699H16.5956C15.7565 24.9107 14.9315 24.6431 14.276 24.1176C13.8774 23.7733 13.5629 23.3423 13.3564 22.8577C13.15 22.373 13.0571 21.8476 13.0849 21.3216V16.9332C13.0745 16.6185 13.0955 16.3035 13.1476 15.9929C13.2109 15.3501 13.4751 14.7437 13.9028 14.2598C14.3305 13.7758 14.8998 13.439 15.5298 13.2971L16.2194 13.084ZM14.276 19.0397V21.4846C14.2493 21.796 14.2909 22.1094 14.3981 22.4029C14.5052 22.6965 14.6752 22.9631 14.8961 23.1841C15.1171 23.405 15.3837 23.575 15.6773 23.6821C15.9708 23.7893 16.2842 23.8309 16.5956 23.8042C18.2256 23.8669 19.8555 23.8669 21.4855 23.8042C22.9274 23.8042 23.7424 22.9265 23.8051 21.4846C23.8678 19.8546 23.8678 18.2247 23.8051 16.5947C23.8213 16.2858 23.7725 15.9769 23.6616 15.6882C23.5508 15.3994 23.3805 15.1371 23.1618 14.9184C22.9431 14.6997 22.6808 14.5294 22.392 14.4186C22.1033 14.3077 21.7944 14.2589 21.4855 14.2751C19.8555 14.2124 18.2256 14.2124 16.5956 14.2751C16.2842 14.2484 15.9708 14.29 15.6773 14.3972C15.3837 14.5043 15.1171 14.6743 14.8961 14.8952C14.6752 15.1162 14.5052 15.3828 14.3981 15.6764C14.2909 15.9699 14.2493 16.2833 14.276 16.5947V19.0397Z"
                      fill="white"
                    />
                    <path
                      d="M15.9941 19.066C15.9958 18.2518 16.32 17.4714 16.8957 16.8957C17.4714 16.32 18.2518 15.9958 19.066 15.9941C19.8757 16.0102 20.6478 16.339 21.2204 16.9116C21.7931 17.4843 22.1218 18.2563 22.1379 19.066C22.1362 19.8802 21.812 20.6606 21.2363 21.2363C20.6606 21.812 19.8802 22.1362 19.066 22.1379C18.2563 22.1218 17.4843 21.7931 16.9116 21.2204C16.339 20.6478 16.0102 19.8757 15.9941 19.066ZM19.066 17.1226C18.6852 17.1164 18.3113 17.224 17.9921 17.4317C17.6729 17.6394 17.423 17.9377 17.2744 18.2884C17.1258 18.639 17.0853 19.026 17.1581 19.3998C17.2308 19.7736 17.4136 20.1172 17.6829 20.3865C17.9522 20.6557 18.2957 20.8385 18.6695 20.9113C19.0433 20.984 19.4303 20.9435 19.781 20.7949C20.1316 20.6463 20.4299 20.3964 20.6376 20.0772C20.8453 19.758 20.9529 19.3841 20.9467 19.0033C20.9467 18.5045 20.7486 18.0261 20.3959 17.6734C20.0432 17.3207 19.5648 17.1226 19.066 17.1226Z"
                      fill="white"
                    />
                    <path
                      d="M21.4497 15.868C21.4462 15.7682 21.4632 15.6689 21.4998 15.576C21.5364 15.4831 21.5916 15.3988 21.6622 15.3282C21.7328 15.2577 21.8171 15.2024 21.91 15.1658C22.0028 15.1292 22.1022 15.1122 22.202 15.1157C22.3971 15.1289 22.5809 15.2124 22.7192 15.3507C22.8576 15.489 22.9411 15.6728 22.9543 15.868C22.9543 16.0675 22.875 16.2588 22.7339 16.3999C22.5928 16.541 22.4015 16.6203 22.202 16.6203C22.0024 16.6203 21.8111 16.541 21.67 16.3999C21.5289 16.2588 21.4497 16.0675 21.4497 15.868Z"
                      fill="white"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_11750_3630"
                        x1="8.7957"
                        y1="29.0532"
                        x2="30.1107"
                        y2="8.05163"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#FED576" />
                        <stop offset="0.26" stop-color="#F47133" />
                        <stop offset="0.61" stop-color="#BC3081" />
                        <stop offset="1" stop-color="#4C63D2" />
                      </linearGradient>
                    </defs>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    width="38"
                    height="38"
                    viewBox="0 0 38 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="38"
                      height="38"
                      rx="19"
                      fill="white"
                      fill-opacity="0.05"
                    />
                    <path
                      d="M28.9516 18.9993C28.9516 13.5027 24.4958 9.04688 18.9993 9.04688C13.5027 9.04688 9.04688 13.5027 9.04688 18.9993C9.04688 23.9668 12.6863 28.0841 17.4442 28.8307V21.8761H14.9172V18.9993H17.4442V16.8066C17.4442 14.3123 18.93 12.9345 21.2033 12.9345C22.2922 12.9345 23.4312 13.1289 23.4312 13.1289V15.5781H22.1762C20.9399 15.5781 20.5543 16.3453 20.5543 17.1324V18.9993H23.3145L22.8733 21.8761H20.5543V28.8307C25.3122 28.0841 28.9516 23.9668 28.9516 18.9993Z"
                      fill="#1877F2"
                    />
                    <path
                      d="M22.8733 21.8761L23.3145 18.9993H20.5543V17.1324C20.5543 16.3453 20.9399 15.5781 22.1762 15.5781H23.4312V13.1289C23.4312 13.1289 22.2922 12.9345 21.2033 12.9345C18.93 12.9345 17.4442 14.3123 17.4442 16.8066V18.9993H14.9172V21.8761H17.4442V28.8307C18.4746 28.992 19.5239 28.992 20.5543 28.8307V21.8761H22.8733Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-2 opacity-50">
                Subscribe
              </h3>
              <form className="flex border border-neutral-400 rounded-lg">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className=" text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring- flex-grow"
                />
                <button
                  type="submit"
                  className="text-white px-4 py-2 rounded-r-md focus:outline-none focus:ring-2 "
                >
                  <Send className="h-6 w-6" />
                </button>
              </form>
              <p className="text-sm mt-2">
                Join our newsletter to stay up to date on features and releases
              </p>
            </div>
          </div>
          <FooterColumn
            title="Products"
            links={[
              "Smart phones",
              "Feature phones",
              "Smart TV",
              "Smart Gadgets",
              "Home Care",
              "Personal Care",
            ]}
          />
          <FooterColumn
            title="Support"
            links={[
              "Exchange offer",
              "Screen replacement",
              "Service Centre",
              "100 days promise",
              "FAQs",
              "E-waste management",
            ]}
          />

          <div className="flex flex-col">
            <FooterColumn title="Media" links={["News", "Blog"]} />
            <FooterColumn
              title="About itel"
              links={["About itel", "About us", "Investor quick links"]}
            />
          </div>

          <ContactColumn
            title="Contact"
            contacts={["+91-120-6650888", "info.in@transsion.com"]}
            logos={[<Phone className />, <Mail />]}
          />
        </div>
        <div className="mt-12 pt-8  bg-[#171717] text-sm hidden md:flex justify-center text-gray-400 h-[50px] ">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <p>© 2024 itel, All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <a href="#" className="mr-4 hover:text-white">
                Privacy policy
              </a>
              <a href="#" className="hover:text-white">
                Terms of service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
