import { useEffect } from "react";

const useClickOutside = (ref, onActionAfterOutside) => {
  useEffect(() => {
    const handleOutSideClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        onActionAfterOutside();
      }
    };
    window.addEventListener("mousedown", handleOutSideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [ref, onActionAfterOutside]);
};

export default useClickOutside;
