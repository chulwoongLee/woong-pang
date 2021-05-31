import React, { Fragment, useState, useEffect } from "react";
import { Zoom, Typography, TextField, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { Close, Menu, Search, SwapHoriz, ListAlt } from "@material-ui/icons";
import { listData } from "src/module/common";
import coupangGoldEvent from "src/img/coupangGoldEvent.jpeg";
function SearchArea(props) {
    const [findText, setFindText] = useState("");
    return (
        <Fragment>
            <a href="https://coupa.ng/bUNN9t" target="_blank" referrerpolicy="unsafe-url"><img src={coupangGoldEvent} width="100%" /></a>
            <div style={{ overflowY: "hidden", height: "85%" }}>
                <div style={{ display: "flex" }}>
                    <TextField style={{ flexGrow: 1 }} label="카테고리를 입력하여 주십시오" value={findText} onChange={(e) => { setFindText(e.target.value); }} />
                    <Search fontSize="default" style={{ alignSelf:"center" }} />
                </div>
                <div style={{ alignItems: "center", overflowY: "scroll", height: "85%" }}>
                    <List component="div" disablePadding>
                        {listData.map((dataList, index) => (
                            (findText === "" || dataList.type.indexOf(findText) > -1) && <ListItem button key={index} onClick={() => { props.setPickItem(dataList.code); }}>
                                <ListItemText style={{ color: dataList.code === props.pickItem && "#F50057" }} primary={dataList.type} />
                            </ListItem>
                        ))}
                    </List>
                </div>

            </div>
        </Fragment>
    );
}
function Main(props) {
    const [tabStatus, setTabStatus] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setTabStatus(false);
        }, 200);
    }, [props.pickItem]);
    return (
        <Fragment>
            <div style={{ width: "100%", height: 45, marginTop: 5, display: "flex", overflowY: "hidden" }}>
                <div style={{width:40}}>
                    <Zoom style={{ position: "absolute", width: 40, height: 40, zIndex: 2, textAlign: "center" }} in={tabStatus} onClick={() => { setTabStatus(!tabStatus); }}><div style={{ fontSize: 10, top: 62 }}><Close fontSize="small" /></div></Zoom>
                    <Zoom style={{ position: "absolute", width: 40, height: 40, zIndex: 2, textAlign: "center" }} in={!tabStatus} onClick={() => { setTabStatus(!tabStatus); }}><div style={{ fontSize: 10, top: 62 }}><Menu fontSize="small" /></div></Zoom>
                </div>
                <Typography variant="h6" align="center" style={{ flexGrow: 1, maxWidth: "600px", height: 40 }}>{listData.filter(data => data.code === props.pickItem)[0].type}</Typography>
                <div style={{width:40}}>
                    <Zoom style={{ position: "absolute", width: 40, height: 40, zIndex: 2, textAlign: "center" }} in={props.contentType === "list"} onClick={() => { props.setContentType("swipe"); }}><div style={{ fontSize: 10, top: 62 }}><SwapHoriz fontSize="small" /></div></Zoom>
                    <Zoom style={{ position: "absolute", width: 40, height: 40, zIndex: 2, textAlign: "center" }} in={props.contentType === "swipe"} onClick={() => { props.setContentType("list"); }}><div style={{ fontSize: 10, top: 62 }}><ListAlt fontSize="small" /></div></Zoom>

                </div>
                <div style={tabStatus ? { position: "absolute", backgroundColor: "#FFFFFF", borderWidth: 0.5, borderColor: "#DDDDDD", borderStyle: "solid", width: 300, height: "85%", transition: "all 0.4s", zIndex: 1 } : { position: "absolute", backgroundColor: "#FFFFFF", borderWidth: 0.5, borderColor: "#DDDDDD", borderStyle: "solid", borderRadius: 24, width: 40, height: 40, transition: "all 0.4s", zIndex: 1 }}>
                    <div style={{ height: 40 }} />
                    {tabStatus && <SearchArea pickItem={props.pickItem} setPickItem={props.setPickItem} />}
                </div>
            </div>
        </Fragment>
    );
}
export default Main;