import { IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home"; 

export const LogoHeader = () => {
  return (
    <div className="flex items-center bg-green-700 text-white px-4 py-4">
      <IconButton className="text-white">
        <HomeIcon style={{ fontSize: 40 }} /> {/* Icon used as logo */}
      </IconButton>
      <h1 className="text-xl font-bold ml-2">My Product</h1>
    </div>
  );
};
