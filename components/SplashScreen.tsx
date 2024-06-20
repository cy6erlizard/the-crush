import { useEffect, useState } from "react";
import classNames from "classnames";

interface SplashScreenProps {
  onHide: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onHide }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      const hideTimer = setTimeout(() => {
        onHide();
      }, 1000); // Length of the fade-out animation

      return () => clearTimeout(hideTimer);
    }, 1500);

    return () => clearTimeout(timer);
  }, [onHide]);

  return (
    <div className={classNames("fixed inset-0 flex items-center justify-center bg-background transition-opacity", fadeOut && "opacity-0")}>
      <div className="flex flex-col items-center justify-center">
        <div className="mb-8">
          <img src="/public/img/logo.png" alt="Logo" className="w-24 h-24" />
        </div>
        <div className="text-xl text-primary-text">Loading...</div>
      </div>
    </div>
  );
};

export default SplashScreen;
