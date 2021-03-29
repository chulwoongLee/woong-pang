import React, { Fragment, useEffect, useState } from "react";
import Menu from "./Menu";
import Contents from "./Contents";
import Contents2 from "./Contents2";
import {listData} from "src/module/common";
import { Container, Typography } from "@material-ui/core";
export default function Main() {
    const [pickItem, setPickItem] = useState("1001");
    const [contentType, setContentType] = useState("list");
    useEffect(() => {
        document.body.style.background = '#F6F6F6';
        document.body.style.overscrollBehavior = "contain";
    }, []);

    return (
        <Fragment>
            <Container maxWidth="sm" style={{ height: "100%"}}>
            <iframe src="https://coupa.ng/bUB1hN"style={{backgroundColor:"#FFFFFF"}} title="쿠팡검색" width="100%" height="44" frameborder="0" scrolling="no" referrerpolicy="unsafe-url"></iframe>
                <Menu pickItem={pickItem} setPickItem={setPickItem} contentType={contentType} setContentType={setContentType} />
                <div style={{ height: 426 }}>
                    {contentType === "list" && <Contents2 pickItem={pickItem} />}
                    {contentType === "swipe" && <Contents pickItem={pickItem} />}
                    {contentType === "search" && <div style={{ width: "100%", height: "100%", display: "flex", backgroundColor: "#FFFFFF" }}><iframe style={{ alignSelf: "center" }} src="https://coupa.ng/bUqyTS" title="쿠팡검색" width="100%" height="75" frameborder="0" scrolling="no" referrerpolicy="unsafe-url"></iframe></div>}

                </div>
                <footer style={{ marginTop: 15, marginBottom: 5, position: "absolute", width: "95%", bottom: 0,textAlign:"center" }}>
                    <Typography variant="caption"style={{ fontWeight: "bold", fontSize: 10}}>※ 쿠팡 파트너스 활동을 통한 일정액의 수수료를 제공받을 수 있습니다.<br />Copyright © 이철웅 ytooktoo2@nate.com(개발문의)</Typography>
                </footer>
            </Container>
        </Fragment>
    );
}