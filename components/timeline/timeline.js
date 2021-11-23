import React from "react";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const timeline = () => {
  return (
    <motion.div
      animate={{ y: 0 }}
      initial={{ y: -1500 }}
      transition={{ delay: 4, duration: 1 }}
    >
      <VerticalTimeline layout={"2-columns-right"} lineColor={"#E0E0E0"}>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#FF8A8A",
            color: "#fff",
            borderRadius: "30px",
            height: "3rem",
            width: "15rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          iconStyle={{
            background: "#FF8A8A",
            color: "#fff",
            width: "7px",
            height: "7px",
            outline: "7px solid #FF8A8A ",
            left: "17px",
            top: "17px",
          }}
        >
          <h3 className="vertical-timeline-element-title">Hello World</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#8A9CFF",
            color: "#fff",
            borderRadius: "30px",
            height: "3rem",
            width: "20rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          iconStyle={{
            background: "#8A9CFF",
            color: "#fff",
            width: "7px",
            height: "7px",
            outline: "7px solid #8A9CFF ",
            left: "17px",
            top: "17px",
          }}
        >
          <h3 className="vertical-timeline-element-title">Hello World</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#2F89CE",
            color: "#fff",
            borderRadius: "30px",
            height: "3rem",
            width: "20rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          iconStyle={{
            background: "#2F89CE",
            color: "#fff",
            width: "7px",
            height: "7px",
            outline: "7px solid #2F89CE",
            left: "17px",
            top: "17px",
          }}
        >
          <h3 className="vertical-timeline-element-title">Hello World</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#9147FF",
            color: "#fff",
            borderRadius: "30px",
            height: "3rem",
            width: "20rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          iconStyle={{
            background: "#9147FF",
            color: "#fff",
            width: "7px",
            height: "7px",
            outline: "7px solid #9147FF ",
            left: "17px",
            top: "17px",
          }}
        >
          <h3 className="vertical-timeline-element-title">Hello World</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#6ED2Ac",
            color: "#fff",
            borderRadius: "30px",
            height: "3rem",
            width: "20rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          iconStyle={{
            background: "#6ED2Ac",
            color: "#fff",
            width: "7px",
            height: "7px",
            outline: "7px solid #6ED2Ac",
            left: "17px",
            top: "17px",
          }}
        >
          <h3 className="vertical-timeline-element-title">Hello World</h3>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </motion.div>
  );
};

export default timeline;
