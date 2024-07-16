import { NETFLIX_LOGO } from "../utils/constants";

const Logo = () => {
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black w-full z-10">
      <img src={NETFLIX_LOGO} alt="" className="w-40" />
    </div>
  );
};

export default Logo;
