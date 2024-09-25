import { useState, useEffect } from "react";

const useProfile = () => {
  const profile = ([profile, setProfile] = useState(null));
  useEffect(() => {}, []);
  return profile;
};

export default useProfile;
