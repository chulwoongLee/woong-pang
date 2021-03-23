import React, { Fragment, useEffect } from "react";
import { Typography } from "@material-ui/core";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Pagination} from 'swiper';
import 'swiper/swiper-bundle.css';
function Main() {
    useEffect(()=>{
        SwiperCore.use([Pagination]);
    },[]);
    SwiperCore.use([Pagination]);
    return (
        <Fragment>
            <div style={{ height: 440, overflowY: "scroll" }}>
                <Swiper
                    style={{ height: 440,zIndex:0 }}
                    slidesPerView={1}
                    pagination={true}
                >
                    <SwiperSlide key={0} style={{textAlign:"center"}}>
                        <Typography variant="body1" align="center">탐사 소프트 100% 천연펄프 3겹 롤화장지 30m, 30롤, 1팩</Typography>
                        <img src="http://static.coupangcdn.com/image/product/image/vendoritem/2018/03/12/3205353792/48d92887-82e7-46f5-8704-89df99a23bde.jpg" style={{ width: 260, height: 260 }} />
                        <Typography variant="body1" align="center">15,600원</Typography>
                    </SwiperSlide>
                    <SwiperSlide key={1} style={{textAlign:"center"}}>
                        <Typography variant="body1" align="center">탐사 소프트 100% 천연펄프 3겹 롤화장지 30m, 30롤, 1팩</Typography>
                        <img src="http://static.coupangcdn.com/image/product/image/vendoritem/2018/03/12/3205353792/48d92887-82e7-46f5-8704-89df99a23bde.jpg" style={{ width: 260, height: 260 }} />
                        <Typography variant="body1" align="center">15,600원</Typography>
                    </SwiperSlide>
                    <SwiperSlide key={2} style={{textAlign:"center"}}>
                        <Typography variant="body1" align="center">탐사 소프트 100% 천연펄프 3겹 롤화장지 30m, 30롤, 1팩</Typography>
                        <img src="http://static.coupangcdn.com/image/product/image/vendoritem/2018/03/12/3205353792/48d92887-82e7-46f5-8704-89df99a23bde.jpg" style={{ width: 260, height: 260 }} />
                        <Typography variant="body1" align="center">15,600원</Typography>
                    </SwiperSlide>
                    <SwiperSlide key={3} style={{textAlign:"center"}}>
                        <Typography variant="body1" align="center">탐사 소프트 100% 천연펄프 3겹 롤화장지 30m, 30롤, 1팩</Typography>
                        <img src="http://static.coupangcdn.com/image/product/image/vendoritem/2018/03/12/3205353792/48d92887-82e7-46f5-8704-89df99a23bde.jpg" style={{ width: 260, height: 260 }} />
                        <Typography variant="body1" align="center">15,600원</Typography>
                    </SwiperSlide>
                    {/*props.paramData.map((dataList, index) => (
                        <SwiperSlide key={index}>
                        </SwiperSlide>
                    ))*/}
                </Swiper>
            </div>
        </Fragment>
    );
}
export default Main;