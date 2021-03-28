import React, { Fragment, useState, useEffect } from "react";
import { Zoom, Typography, TextField, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { Close, Menu, Search, SwapHoriz,ListAlt } from "@material-ui/icons";
import { listData } from "src/module/common";
function SearchArea(props) {
    const [findText, setFindText] = useState("");
    return (
        <Fragment>
            <div style={{overflowY:"hidden",height:"92%"}}>
                <div style={{ display: "flex" }}>
                    <TextField style={{ flexGrow: 1 }} value={findText} onChange={(e) => { setFindText(e.target.value); }} />
                    <Search fontSize="default" style={{ textAlign: "center" }} />
                </div>
                <div style={{ alignItems: "center", overflowY: "scroll", height: "92%" }}>
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
    useEffect(()=>{
        setTimeout(() => {
            setTabStatus(false);
        }, 200);
    },[props.pickItem]);
    return (
        <Fragment>
            <div style={{ width:"100%",height: 45, marginTop: 5, overflowY: "hidden" }}>
                <Zoom style={{ position: "absolute", width: 40, height: 40, zIndex: 2, textAlign: "center" }} in={tabStatus} onClick={() => { setTabStatus(!tabStatus); }}><div style={{ fontSize: 10, top: 15 }}><Close fontSize="small" /></div></Zoom>
                <Zoom style={{ position: "absolute", width: 40, height: 40, zIndex: 2, textAlign: "center" }} in={!tabStatus} onClick={() => { setTabStatus(!tabStatus); }}><div style={{ fontSize: 10, top: 15 }}><Menu fontSize="small" /></div></Zoom>
                <Typography variant="h6" align="center" style={{ position: "absolute", width: "95%", height: 40 }}>{listData.filter(data => data.code === props.pickItem)[0].type}</Typography>
                <Zoom style={{ position: "absolute", width: 40, height: 40, zIndex: 2, textAlign: "center",right:0 }} in={props.contentType === "list"} onClick={() => { props.setContentType("swipe"); }}><div style={{ fontSize: 10, top: 15 }}><SwapHoriz fontSize="small" /></div></Zoom>
                <Zoom style={{ position: "absolute", width: 40, height: 40, zIndex: 2, textAlign: "center",right:0 }} in={props.contentType === "swipe"} onClick={() => { props.setContentType("search"); }}><div style={{ fontSize: 10, top: 15 }}><Search fontSize="small" /></div></Zoom>
                <Zoom style={{ position: "absolute", width: 40, height: 40, zIndex: 2, textAlign: "center",right:0 }} in={props.contentType === "search"} onClick={() => { props.setContentType("list"); }}><div style={{ fontSize: 10, top: 15 }}><ListAlt fontSize="small" /></div></Zoom>
               
                <div style={tabStatus ? { position: "absolute", backgroundColor: "#FFFFFF", borderWidth: 0.5, borderColor: "#DDDDDD", borderStyle: "solid", width: 300, height: "95%", transition: "all 0.4s", zIndex: 1 } : { position: "absolute", backgroundColor: "#FFFFFF", borderWidth: 0.5, borderColor: "#DDDDDD", borderStyle: "solid", borderRadius: 24, width: 40, height: 40, transition: "all 0.4s", zIndex: 1 }}>
                    <div style={{ height: 40 }} />
                    {tabStatus && <SearchArea pickItem={props.pickItem} setPickItem={props.setPickItem} />}
                </div>
            </div>
        </Fragment>
    );
}
export default Main;