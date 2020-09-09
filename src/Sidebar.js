import React from "react";
import "./Sidebar.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { Avatar, IconButton } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { SearchOutlined } from "@material-ui/icons";
import SidebarChat from "./SidebarChat";

function sidebar() {
  return (
    <div className="sidebar">
      <div className="sideBar__header">
        <Avatar src="https://scontent-syd2-1.xx.fbcdn.net/v/t1.0-9/71030088_2765208913491550_2193304944684040192_o.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_ohc=BjzOqr8wXOQAX9tme4D&_nc_ht=scontent-syd2-1.xx&oh=65c0a6b8a378241bb0e99bb8c967e0ae&oe=5F79978D" />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input placeholder="Search or start a new chat" type="text" />
        </div>
      </div>
      <div className="sidebar__chat">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
}

export default sidebar;
