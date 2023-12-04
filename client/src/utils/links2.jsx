import { TbUsersGroup } from "react-icons/tb";
import { TbUsersPlus } from "react-icons/tb";
import { RiUserSettingsLine } from "react-icons/ri";
import { MdOutlineAnnouncement } from "react-icons/md";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { TfiStatsUp } from "react-icons/tfi";

const links2 = [
  {
    text: "add member",
    path: ".",
    icon: <TbUsersPlus />,
  },
  {
    text: "all members",
    path: "all-members",
    icon: <TbUsersGroup />,
  },
  {
    text: "profile",
    path: "profile",
    icon: <RiUserSettingsLine />,
  },
  {
    text: "death announcement",
    path: "announcement",
    icon: <MdOutlineAnnouncement />,
  },
  {
    text: "stats",
    path: "stats",
    icon: <TfiStatsUp />,
  },
  {
    text: "admin",
    path: "admin",
    icon: <MdOutlineAdminPanelSettings />,
  },
];
export default links2;
