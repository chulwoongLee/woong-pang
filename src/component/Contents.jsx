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
            <div style={{ height: 440, overflowY: "scroll" }}>
                {listStatus &&

                    <Swiper
                        style={{ height: 440, zIndex: 0 }}
                        slidesPerView={1}
                        pagination={true}
                    >
                        {listData.filter(data => data.code === props.pickItem)[0].data.map((dataList, index) => (
                            index < 20 &&
                            <SwiperSlide key={index} style={{ textAlign: "center" }}>
                                <Typography variant="body1" style={{fontWeight:"bold"}} align="center">{dataList.productName}</Typography>
                                <img src={dataList.productImage} style={{ width: 260, height: 260 }} />
                                <Typography variant="h6" style={{marginBottom:10}} align="center">{dataList.productPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</Typography>
                                <div style={{textAlign:"center"}}><Button variant="contained" style={{ width: "80%" }} fullWidth color="primary" onClick={() => { openCoupangPopup(dataList.productUrl); }}><Typography style={{fontSize:20}} align="center">구매하러가기</Typography></Button></div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                }
            </div>
        </Fragment>
    );
}
export default Main;