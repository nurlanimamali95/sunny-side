'use client'

import { motion } from "framer-motion";

const ContactForm = () => {
  const whatsappNumber = "123456789";
  const callNumber = "+987654321";

  return (
    <motion.section
      className="flex flex-col items-center justify-center mt-[10rem] bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
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
          className="mt-2 text-center text-sm text-gray-600"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We’re available on WhatsApp and by phone!
        </motion.p>

        <div className="mt-8 space-y-6">
          <motion.a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact us on WhatsApp
          </motion.a>

          <motion.a
            href={`tel:${callNumber}`}
            className="flex w-full justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Call us
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactForm;
