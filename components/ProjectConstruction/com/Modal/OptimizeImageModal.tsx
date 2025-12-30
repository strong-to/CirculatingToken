"use client";

import { px } from "@/utils/pxToRem";
import { useState } from "react";

interface CardData {
  icon?: string;
  title?: string;
  subtitle?: string;
  tags?: Array<{
    type?: "bordered" | "icon";
    text?: string;
    icon?: "lightning" | "clock" | "person" | "gvp";
  }>;
  modal?: {
    notSupportedMessage?: string;
    contactMessage?: string;
    taskInfoLabel?: string;
    taskInfoText?: string;
    actionButtons?: {
      leftButton?: string;
      rightButton?: string;
    };
  };
}

interface OptimizeImageModalProps {
  card?: CardData;
}

export default function OptimizeImageModal({ card }: OptimizeImageModalProps) {
  console.log('OptimizeImageModal card data:', card);
  const [skipHovered, setSkipHovered] = useState(false);
  const [submitHovered, setSubmitHovered] = useState(false);
  return (
    <div>
      <div
        className="flex items-center justify-start"
        style={{
          fontWeight: 300,
          fontSize: px(24),
          marginBottom: px(12),

          paddingTop: px(70),
          paddingLeft: px(30),
          lineHeight: px(26),
        }}
      >
         <div style={{width:px(20),height:px(20) , marginTop:px(-10),marginRight:px(10)  }}> 
        

         <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="20" height="20" rx="2" fill="black"/>
<path d="M8.85704 13.7143L5.42847 10.3153V9.39901L8.85704 6V7.00493L5.98865 9.85714L8.85704 12.7094V13.7143Z" fill="white"/>
<path d="M11.4284 13.7143L14.8569 10.3153V9.39901L11.4284 6V7.00493L14.2968 9.85714L11.4284 12.7094V13.7143Z" fill="white"/>
</svg>

        </div>
        <h2
          className="flex items-center justify-start"
          style={{
            marginLeft: px(10),
            color: "#000000",
            marginTop: px(3),
            fontSize:px(26),
            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
          }}
        >
         {card?.title}
        </h2>
      </div>
      <div
        style={{
          fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
          fontWeight: 300,
          fontSize: px(16),
          lineHeight: "150%",
          color: "#555555",
          paddingLeft: px(30),
          paddingRight: px(30),
          marginBottom: px(30),
        }}
      >
      {card?.subtitle}
      </div>
      <div className="w-full h-[1px] bg-[#000000]" /> 



      <div className=" w-full flex flex-col items-center justify-center" style={{marginTop:px(439),gap:px(20)}}>

        <div style={{height:px(20),
         fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
         fontWeight: 300,
         fontSize: px(20),
         color:'#555555'

        }}>{card?.modal?.notSupportedMessage}</div>
        <div style={{height:px(20),
         fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
         fontWeight: 300,
         fontSize: px(20),
         color:'#555555'}}>{card?.modal?.contactMessage}</div>
        <div style={{height:px(20),
         fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
         fontWeight: 300,
         fontSize: px(20),
         color:'#555555'}}>{card?.modal?.taskInfoLabel}</div>
        <div style={{height:px(20),
         fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
         fontWeight: 300,
         fontSize: px(20),
         color:'#555555'}}>
          {card?.modal?.taskInfoText}
          </div>




      </div>



{/* 按钮 */}
      <div className=" flex items-center justify-center" style={{marginTop:px(50),gap:px(20)}}>
          <button
            className=" flex items-center justify-center"
            style={{
              width:px(206),
              height: px(44),
              backgroundColor: skipHovered ? "#000000" : "transparent",
              border: "1px solid #000000",
              borderRadius: px(4),
              fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
              fontWeight: 300,
              fontSize: px(16),
              lineHeight: "100%",
              letterSpacing: "0%",
              color: skipHovered ? "#FFFFFF" : "#000000",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={() => setSkipHovered(true)}
            onMouseLeave={() => setSkipHovered(false)}
          >
            {card?.modal?.actionButtons?.leftButton}
          </button>
          <button
            className="flex items-center justify-center w-full"
            style={{
              width:px(206),
              height: px(44),
              backgroundColor: submitHovered ? "#000000" : "transparent",
              border: "1px solid #000000",
              borderRadius: px(4),
              fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
              fontWeight: 300,
              fontSize: px(16),
              lineHeight: "100%",
              letterSpacing: "0%",
              color: submitHovered ? "#FFFFFF" : "#000000",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={() => setSubmitHovered(true)}
            onMouseLeave={() => setSubmitHovered(false)}
          >
           {card?.modal?.actionButtons?.rightButton}
          </button>
        </div>

      




      
     

      {/* <div style={{height:px(44),paddingLeft:px(50),paddingRight:px(50),marginTop:px(50)}} className="flex items-center justify-center w-full">
 <button className="cursor-pointer w-full" style={{  height:px(44), backgroundColor:"#000000",borderRadius:px(4), color:"#ffffff",fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',fontWeight: 300,fontSize: px(16),lineHeight: "100%",letterSpacing: "0%"}}>
 Submit Compute Resource
 </button>
      

      </div> */}




    </div>
  );
}
