import React, { Fragment, useEffect, useState } from "react";
import { Typography, Button } from "@material-ui/core";
import { listData } from "src/module/common";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
SwiperCore.use([Pagination]);
function Main(props) {
    const [listStatus, setListStatus] = useState(false);
    useEffect(() => {
        setListStatus(false);
        setTimeout(() => {
            setListStatus(true);
        }, 200);
    }, [props.pickItem]);
    function openCoupangPopup(coupangUrl) {
        window.open(coupangUrl);
    }
    return (
        <Fragment>
            <div style={{ overflowY: "scroll" }}>
                {listStatus &&

                    <Swiper
                        style={{ minHeight:426, zIndex: 0 }}
                        slidesPerView={1}
                        pagination={true}
                    >
                        {listData.filter(data => data.code === props.pickItem)[0].data.map((dataList, index) => (
                            index < 20 &&
                            <SwiperSlide key={index} style={{ textAlign: "center" }}>
                                <Typography variant="body1" style={{fontWeight:"bold",marginLeft:15,marginRight:15,height:50}} align="center">{dataList.productName}</Typography>
                                <img alt="" src={dataList.productImage}width="260"height="260" />
                                <Typography variant="h6" style={{marginBottom:5,fontSize:18}} align="center">{dataList.productPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</Typography>
                                <div style={{textAlign:"center"}}><Button variant="contained" style={{ width: "80%" }} fullWidth color="primary" onClick={() => { openCoupangPopup(dataList.productUrl); }}><Typography style={{fontSize:18}} align="center">구매하러가기</Typography></Button></div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                }
            </div>
        </Fragment>
    );
}
export default Main;