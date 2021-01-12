import React from 'react'
import girl0 from '../img/0.png';
import girl1 from '../img/1.png';
import girl2 from '../img/2.png';
import girl3 from '../img/3.png';
import girl4 from '../img/4.png';
import girl5 from '../img/5.png';
import girl6 from '../img/6.png';
import girl7 from '../img/7.png';
import girl8 from '../img/8.png';
import girl9 from '../img/9.png';
import girl10 from '../img/10.png';
import girl11 from '../img/11.png';
import girl12 from '../img/12.png';
import girl13 from '../img/13.png';
import girl14 from '../img/14.png';
import girl15 from '../img/15.png';
import girl16 from '../img/16.png';
import girl17 from '../img/17.png';
import girl18 from '../img/18.png';
import girl19 from '../img/19.png';
import girl20 from '../img/20.png';
import girl21 from '../img/21.png';
import girl22 from '../img/22.png';
import girl23 from '../img/23.png';
import girl24 from '../img/24.png';
import girl25 from '../img/25.png';
import girl26 from '../img/26.png';
import girl27 from '../img/27.png';
import girl28 from '../img/28.png';
import girl29 from '../img/29.png';
import girl30 from '../img/30.png';
import girl31 from '../img/31.png';
import girl32 from '../img/32.png';
import girl33 from '../img/33.png';
import girl34 from '../img/34.png';
import girl35 from '../img/35.png';
import girl36 from '../img/36.png';
import girl37 from '../img/37.png';
import girl38 from '../img/38.png';
import girl39 from '../img/39.png';
import girl40 from '../img/40.png';
import girl41 from '../img/41.png';
import girl42 from '../img/42.png';
import girl43 from '../img/43.png';
import girl44 from '../img/44.png';
import girl45 from '../img/45.png';
import girl46 from '../img/46.png';
import girl47 from '../img/47.png';
import girl48 from '../img/48.png';
import girl49 from '../img/49.png';
import girl50 from '../img/50.png';

function girl(props) {
let girls = [girl0,girl1,girl2,girl3,girl4,girl5,girl6,girl7,girl8,girl9,girl10,girl11,girl12,girl13,girl14,girl15,girl16,girl17,girl18,girl19,girl20,girl21,girl22,girl23,girl24,girl25,girl26,girl27,girl28,girl29,girl30,girl31,girl32,girl33,girl34,girl35,girl36,girl37,girl38,girl39,girl40,girl41,girl42,girl43,girl44,girl45,girl46,girl47,girl48,girl49,girl50] 
let girl = girls[props.num ];
    return (
        <>
            {/* <img src={girls[this.num]}/> */}
            <img className="icon" src={girl} height={props.size+'px'} width={props.size+'px'}/>
        </>
    )
}

export default girl
