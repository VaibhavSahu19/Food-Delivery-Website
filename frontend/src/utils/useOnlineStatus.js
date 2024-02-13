import { useState, useEffect } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  //Check for online Status=> once the site is rendered thats why using useEffect.
  useEffect(() => {
    addEventListener("offline", () => {
      setOnlineStatus(false);
    });

    addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);

  //boolean Value
  return onlineStatus;
};

export default useOnlineStatus;
