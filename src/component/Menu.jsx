import React, { Fragment, useState, useEffect } from "react";
import { Zoom, Typography, TextField } from "@material-ui/core";
import { Close, Menu, Search } from "@material-ui/icons";
function SearchArea() {
    return (
        <Fragment>
            <div style={{ display: "flex", alignItems: "center" }}>
                <TextField style={{ flexGrow: 1 }} />
                <Search fontSize="default" style={{ textAlign: "center" }} />
            </div>
        </Fragment>
    );
}
function Main() {
    const [test, setTest] = useState(false);

    return (
        <Fragment>
            <div style={{ height: 45, marginTop: 5 }}>
                <Zoom style={{ position: "absolute", width: 40, height: 40, zIndex: 2 }} in={test} onClick={() => { setTest(!test); }}><Close fontSize="small" /></Zoom>
                <Zoom style={{ position: "absolute", width: 40, height: 40, zIndex: 2 }} in={!test} onClick={() => { setTest(!test); }}><Menu fontSize="small" /></Zoom>
                <div style={test ? { position: "absolute", backgroundColor: "#FFFFFF", borderWidth: 0.5, borderColor: "#DDDDDD", borderStyle: "solid", width: 280, height: "95%", transition: "all 0.4s", zIndex: 1 } : { position: "absolute", backgroundColor: "#FFFFFF", borderWidth: 0.5, borderColor: "#DDDDDD", borderStyle: "solid", borderRadius: 24, width: 40, height: 40, transition: "all 0.4s", zIndex: 1 }}>
                    <div style={{ height: 40 }} />
                    {test && <SearchArea />}
                </div>
            </div>
            <Typography variant="h6" align="center">카테고리1</Typography>
        </Fragment>
    );
}
export default Main;