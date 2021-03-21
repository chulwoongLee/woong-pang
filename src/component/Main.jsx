import React, { Fragment } from "react";
import Menu from "./Menu";
import Test from "./test/Test";
import { Container, Typography } from "@material-ui/core";
export default function Main() {
    return (
        <Fragment>
            <Container maxWidth="md">
            <Test />
                <footer>
                    <Typography variant="body2" align="center">{"※쿠팡 파트너스 활동을 통한 일정액의\n수수료를 제공받을 수 있습니다."}</Typography>
                </footer>
            </Container>
        </Fragment>
    );
}