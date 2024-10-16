// import React from 'react';

// const MultiLanguageSupport = () => {
//   return (
//     <section className="h-[739px] w-[1248px]">
//       <div className="absolute inset-0  flex items-center">

//         <div className="ml-16 max-w-[400px]">
//           <h2 className="text-desktop/h2 mb-4">Multi-Language Support</h2>
//           <p className="text-desktop/body/1 mb-6">Use your device in any language you prefer</p>
//           <p className="text-desktop/body/2/regular text-grey/grey/4">
//             15 Languages Supported: English, Hindi, Gujarati, Tamil, Telugu, Punjabi, Assamese, Bengali, Kannada, Malayalam, Kashmiri, Urdu, Nepali, Marathi, Oriya.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };



// export default MultiLanguageSupport;













import React from 'react';

const MultiLanguageSupport = () => {
  return (
    <section className="w-[400px]">
      <div className="flex items-center">

        <div className="text-left relative ">
          <h2 className="text-desktop/h2 mb-4">Multi-Language Support</h2>
          <p className="text-desktop/body/1 mb-6">
            Use your device in any language you prefer
          </p>
          <p className="text-desktop/body/2/regular text-grey/grey/4">
            15 Languages Supported: English, Hindi, Gujarati, Tamil, Telugu, Punjabi, Assamese, Bengali, Kannada, Malayalam, Kashmiri, Urdu, Nepali, Marathi, Oriya.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MultiLanguageSupport;
