import React, { Fragment, useEffect, useState } from "react";
import Menu from "./Menu";
import Contents from "./Contents";
import Contents2 from "./Contents2";
import { Container, Typography } from "@material-ui/core";
export default function Main() {
    const [pickItem, setPickItem] = useState("1001");
    const [contentType, setContentType] = useState("swipe");
    useEffect(() => {
        document.body.style.background = '#F6F6F6';
        document.body.style.overscrollBehavior = "contain";
    }, []);

    return (
        <Fragment>
            <Container maxWidth="sm">
                <Menu pickItem={pickItem} setPickItem={setPickItem} contentType={contentType} setContentType={setContentType} />
                {contentType === "swipe" && <Contents pickItem={pickItem} />}
                {contentType === "list" && <Contents2 pickItem={pickItem} />}
                {contentType === "search" && <div style={{width:"100%",height:440,display:"flex",backgroundColor:"#FFFFFF"}}><iframe style={{alignSelf:"center"}} src="https://coupa.ng/bUqyTS"title="쿠팡검색" width="100%" height="75" frameborder="0" scrolling="no" referrerpolicy="unsafe-url"></iframe></div>}
                <footer style={{ marginTop: 15}}>
                    <Typography variant="body2" align="center">※쿠팡 파트너스 활동을 통한 일정액의<br />수수료를 제공받을 수 있습니다.</Typography>
                </footer>
            </Container>
        </Fragment>
    );
}