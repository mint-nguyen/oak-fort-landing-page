import { Stack } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import FilterCenterFocusOutlinedIcon from "@mui/icons-material/FilterCenterFocusOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Image from "next/image";

const MainHeaderNav = () => {
	return (
		<div className="p-5 pb-0">
			<Stack direction="column">
				<Stack direction="row" justifyContent="space-between">
					<Stack direction="row" spacing={2} alignItems="center">
						<Avatar
							alt="USA flag"
							src="usa-flag.png"
							sx={{ width: 14, height: 14 }}
						/>
						<p className="font-extralight text-grey text-xs">USA ($USD)</p>
						<Divider orientation="vertical" variant="middle" flexItem />
						<LocationOnOutlinedIcon sx={{ color: "grey" }} />
						<Divider orientation="vertical" variant="middle" flexItem />
						<p className="font-extralight text-grey text-xs">ORDER STATUS</p>
					</Stack>

					<Stack direction="row" spacing={2}>
						<FilterCenterFocusOutlinedIcon sx={{ color: "grey" }} />
						<Divider orientation="vertical" variant="middle" flexItem />
						<SearchOutlinedIcon sx={{ color: "grey" }} />
						<Divider orientation="vertical" variant="middle" flexItem />
						<PermIdentityOutlinedIcon sx={{ color: "grey" }} />
						<Divider orientation="vertical" variant="middle" flexItem />
						<ShoppingBagOutlinedIcon sx={{ color: "grey" }} />
					</Stack>
				</Stack>
				<Stack alignItems="center">
					<Image src="/oakfortlogo.png" width="170" alt="OF logo" height="40" />
				</Stack>
			</Stack>
		</div>
	);
};

export default MainHeaderNav;
