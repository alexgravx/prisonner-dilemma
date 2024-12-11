import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ServerStatus = () => {
  const [isServerUp, setIsServerUp] = useState(true);

  const checkServerStatus = async () => {
    try {
      const response = await fetch(`https://${process.env.NEXT_PUBLIC_BACKEND_URL}:${process.env.NEXT_PUBLIC_BACKEND_PORT}/ping`);
      if (response.status === 200) {
        setIsServerUp(true);
      } else {
        setIsServerUp(false);
      }
    } catch (error) {
      setIsServerUp(false);
      console.log(error)
    }
  };

  useEffect(() => {
    // Check server status on component mount
    checkServerStatus();

    // Set up an interval to check the server status every 10 seconds
    const intervalId = setInterval(checkServerStatus, 20000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  if (!isServerUp) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        className="px-4 py-2 absolute bg-background/[0.2] backdrop-blur-sm dark:border-white/[0.2] border-[1px] rounded-3xl top-4 left-[50%] transform translate-x-[-50%] z-50"
      >
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-red-500" />
          <span className="text-sm text-red-500">Server is down</span>
        </div>
      </motion.div>
    );
  }
};

export default ServerStatus;
