import Logo from '../assets/logo.png';

export const LogoHeader = () => {
  return (
    <div className="flex items-center text-white px-4 py-4 justify-center">
      <div className="h-14 w-14">
        <img src={Logo} alt="logo" />
      </div>
    </div>
  );
};
