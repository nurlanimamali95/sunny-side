"use client";

import { motion } from "framer-motion";

const ContactForm = () => {
  const whatsappNumber = "+31627623727";
  const callNumber = "+31 627 623 727";

  return (
    <motion.section
      id="contact"
      className="flex flex-col items-center justify-center my-[10rem] bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full max-w-md space-y-8">
        <motion.h2
          className="font-bold text-2xl my-[7rem] text-center"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contact Us
        </motion.h2>

        <motion.p
          className="mt-2 text-center text-2xl text-nowrap text-gray-600"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We’re available on WhatsApp and by phone!
        </motion.p>

        <div className="mt-8 space-y-6">
          <div className="flex justify-center">
            <motion.a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex w-fit justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white group overflow-hidden"
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute inset-0 bg-mid-yellow translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"></span>
              <span className="relative z-10 ">Contact us on WhatsApp</span>
            </motion.a>
          </div>

          <motion.p
            className="text-center mt-4 text-lg text-nowrap"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Or call us at{" "}
            <a
              href={`tel:${callNumber}`}
              className="text-blue-500 underline"
            >
              {callNumber}
            </a>
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactForm;
