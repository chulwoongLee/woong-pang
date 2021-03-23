import React, { Fragment, useEffect } from "react";
import Test from "./test/Test";
import Menu from "./Menu";
import Contents from "./Contents";
import { Container, Typography } from "@material-ui/core";
export default function Main() {
    useEffect(()=>{
        document.body.style.background = '#F6F6F6';
    },[]);
    return (
        <Fragment>
            <Container maxWidth="sm">
                <Menu />
                <Contents/>
                <footer style={{ marginTop: 15 }}>
                    <Typography variant="body2" align="center">※쿠팡 파트너스 활동을 통한 일정액의<br />수수료를 제공받을 수 있습니다.</Typography>
                </footer>
            </Container>
        </Fragment>
    );
}