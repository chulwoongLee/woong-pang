import React, { Fragment, useEffect, useState,useRef } from "react";
import { Typography, Button, DialogTitle, Dialog, DialogContent } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { listData } from "src/module/common";
function Main(props) {
    const [pickItem, setPickItem] = useState(null);
    const listRef = useRef();
    useEffect(()=>{
        listRef.current.scrollTo(0,0);
    },[props.pickItem]);
    function openCoupangPopup(coupangUrl) {
        window.open(coupangUrl);
    }
    return (
        <Fragment>
            <div ref={listRef} style={{ height: "100%", display: "flex", flexWrap: "wrap", overflowY: "scroll", justifyContent: "center" }}>
                {listData.filter(data => data.code === props.pickItem)[0].data.map((dataList, index) => (
                    <div style={{ width: 120, height: 180, margin: 5 }} key={index}>
                        <img src={dataList.productImage}width="120"height="120" onClick={() => { setPickItem(dataList); }} />
                        <Typography variant="body2" align="center" style={{marginTop:5}}>{dataList.productPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</Typography>
                    </div>
                ))}
            </div>
            <Dialog open={pickItem !== null}>
                <Close style={{ alignSelf: "flex-end" }} onClick={() => { setPickItem(null); }} />
                {pickItem !== null && <DialogTitle style={{ fontSize: 15 }}>{pickItem.productName}</DialogTitle>}
                {pickItem !== null &&
                    <DialogContent>
                        <img src={pickItem.productImage} title="물품이미지" width="230"height="230" style={{width:"100%"}}/>
                        <Typography variant="h6" style={{ marginBottom: 10 }} align="center">{pickItem.productPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</Typography>
                        <div style={{ textAlign: "center" }}><Button variant="contained" style={{ width: "90%" }} fullWidth color="primary" onClick={() => { openCoupangPopup(pickItem.productUrl); }}><Typography style={{ fontSize: 20 }} align="center">구매하러가기</Typography></Button></div>
                    </DialogContent>
                }
            </Dialog>
        </Fragment>
    );
}
export default Main;