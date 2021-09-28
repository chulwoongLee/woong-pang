import React, { Fragment, useEffect, useState,useRef } from "react";
import { Typography, Button, DialogTitle, Dialog, DialogContent } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { listData } from "src/module/common";
import { useMediaQuery } from "react-responsive";
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
            <div ref={listRef} style={{ height:useMediaQuery({ maxHeight:800 })?window.innerHeight-150:window.innerHeight-150, display: "flex", flexWrap: "wrap", overflowY: "scroll", justifyContent: "center" }}>
                {listData.filter(data => data.code === props.pickItem)[0].data.map((dataList, index) => (
                    <div style={{ width: 140, height: 220, margin: 5 }} key={index}>
                        <img alt="" src={dataList.productImage} width="140" height="140" onClick={() => { setPickItem(dataList); }} />
                        {/*<input type="label" style={{width:"100%",height:40,backgroundColor:"rgba( 255, 255, 255, 0.5 )",borderWidth:0}} value={dataList.productName}/> */}
                        <Typography variant="body2" align="center" style={{width:"100%",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"}}>{dataList.productName}</Typography>
                        <Typography variant="body2" align="center" style={{marginTop:5}}>{dataList.productPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</Typography>
                    </div>
                ))}
            </div>
            <Dialog open={pickItem !== null}>
                <Close style={{ alignSelf: "flex-end" }} onClick={() => { setPickItem(null); }} />
                {pickItem !== null && <DialogTitle style={{ fontSize: 15 }}>{pickItem.productName}</DialogTitle>}
                {pickItem !== null &&
                    <DialogContent>
                        <img alt="" src={pickItem.productImage} title="물품이미지" style={{width:"100%"}}/>
                        <Typography variant="h6" style={{ marginBottom: 10 }} align="center">{pickItem.productPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</Typography>
                        <div style={{ textAlign: "center" }}><Button variant="contained" style={{ width: "90%" }} fullWidth color="primary" onClick={() => { openCoupangPopup(pickItem.productUrl); }}><Typography style={{ fontSize: 20 }} align="center">구매하러가기</Typography></Button></div>
                    </DialogContent>
                }
            </Dialog>
        </Fragment>
    );
}
export default Main;