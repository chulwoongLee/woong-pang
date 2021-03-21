import React, { Fragment, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import { Typography } from "@material-ui/core";
import "./styles.css";
const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    //clipPath: "circle(30px at 40px 40px)",
    clipPath: "circle(1px at 1px 1px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

const Example = () => {
  const [isOpen, toggleOpen] = useState(false);
  useEffect(() => {
    document.body.style.background = '#F6F6F6';
  }, []);
  return (
    <Fragment>
      <motion.nav
        style={{ zIndex: isOpen ? 9999 : 1 }}
        initial={false}
        animate={isOpen ? "open" : "closed"}
      >
        <motion.div style={{position:"absolute",width:"300px",background:"#fff"}} className={"background"} variants={sidebar} />
        <MenuToggle toggle={() => { toggleOpen(!isOpen); }} />
        <Navigation/>

      </motion.nav>
      <div style={{marginTop:70}}>
        <Typography variant="h6" align="center">카테고리1 → 상품명</Typography>
      </div>
      <div style={{ height: 400, overflowY: "scroll",display:"flex",flexWrap:"wrap" }}>
        <iframe src="https://coupa.ng/bTV4nQ" title="쿠팡제공페이지" style={{ zIndex: isOpen ? 1 : 9999,backgroundColor:"#FFFFFF",margin:15,width:300 }} width="100%" height="240" frameborder="0" scrolling="no" referrerpolicy="unsafe-url"></iframe>
        <iframe src="https://coupa.ng/bTWAxY" title="쿠팡제공페이지" style={{ zIndex: isOpen ? 1 : 9999,backgroundColor:"#FFFFFF",margin:15,width:300 }} width="100%" height="240" frameborder="0" scrolling="no" referrerpolicy="unsafe-url"></iframe>
      </div>
    </Fragment>

  );
};
export default Example;
