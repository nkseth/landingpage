import * as React from "react";
import Switch from "@mui/material/Switch";
import { FaTelegramPlane, FaTwitch, FaDiscord } from "react-icons/fa";
import { styles } from "./supportedstyles";

const label = { inputProps: { "aria-label": "Switch demo" } };

const supPlatforms = () => {
  const platformData = [
    {
      row1: [
        {
          icon: FaTelegramPlane,
          name: "Telegram",
          color: "#2f89ce",
        },
        {
          icon: FaTwitch,
          name: "Twitch",
          color: "#9147ff",
        },
        {
          icon: FaDiscord,
          name: "Discord",
          color: "#8a9cff",
        },
        {
          icon: FaTelegramPlane,
          name: "API <Code/>",
          color: "#2f89ce",
        },
        {
          icon: FaTelegramPlane,
          name: "Zapier",
          color: "#FF4A00",
        },
        {
          icon: FaTelegramPlane,
          name: "Minicraft",
          color: "#43816a",
        },
      ],
    },
    {
      row1: [
        {
          icon: FaTelegramPlane,
          name: "Telegram",
          color: "#2f89ce",
        },
        {
          icon: FaTwitch,
          name: "Twitch",
          color: "#9147ff",
        },
        {
          icon: FaDiscord,
          name: "Discord",
          color: "#8a9cff",
        },
        {
          icon: FaTelegramPlane,
          name: "API <Code/>",
          color: "#2f89ce",
        },
        {
          icon: FaTelegramPlane,
          name: "Zapier",
          color: "#FF4A00",
        },
        {
          icon: FaTelegramPlane,
          name: "Minicraft",
          color: "#43816a",
        },
      ],
    },
    {
      row1: [
        {
          icon: FaTelegramPlane,
          name: "Telegram",
          color: "#2f89ce",
        },
        {
          icon: FaTwitch,
          name: "Twitch",
          color: "#9147ff",
        },
        {
          icon: FaDiscord,
          name: "Discord",
          color: "#8a9cff",
        },
        {
          icon: FaTelegramPlane,
          name: "API <Code/>",
          color: "#2f89ce",
        },
        {
          icon: FaTelegramPlane,
          name: "Zapier",
          color: "#FF4A00",
        },
        {
          icon: FaTelegramPlane,
          name: "Minicraft",
          color: "#43816a",
        },
      ],
    },
  ];
  return (
    <>
      {platformData.map((item, index) => {
        return (
          <div className="supPlatforms-container" style={styles.supPlatforms}>
            {item.row1.map((item, index) => {
              return (
                <div className="platform-container" style={styles.platform}>
                  <div className="switch-container" style={styles.switch}>
                    <Switch {...label} defaultChecked size="small" />
                  </div>
                  <div
                    className="platform-content-container"
                    style={styles.platformContent}
                  >
                    <div
                      className="platform-logo-container"
                      style={{
                        width: "3rem",
                        height: "3rem",
                        backgroundColor: `${item.color}`,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "10px",
                        marginRight: "5px",
                      }}
                    >
                      <item.icon style={styles.icon} />
                    </div>
                    <div
                      className="platform-name-container"
                      style={styles.platformName}
                    >
                      <p>
                        on <br /> {item.name}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
            ;
          </div>
        );
      })}
    </>
  );
};

export default supPlatforms;
