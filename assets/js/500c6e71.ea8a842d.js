"use strict";(self.webpackChunkdocumetations=self.webpackChunkdocumetations||[]).push([[2108],{2345:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=i(4848),n=i(8453);const s={sidebar_position:5},d="WebRTC Guide",a={id:"web-rtc-guide",title:"WebRTC Guide",description:"WebRTC allows for real-time communication and media streaming directly between browsers. This guide will show you how to implement video streaming using the Reactjs Media video player, where the video source is a MediaStream object.",source:"@site/reactjs-media/web-rtc-guide.mdx",sourceDirName:".",slug:"/web-rtc-guide",permalink:"/open-ug/reactjs-media/web-rtc-guide",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"defaultSidebar",previous:{title:"Building a Custom Player",permalink:"/open-ug/reactjs-media/building-custom-player"},next:{title:"API Reference",permalink:"/open-ug/reactjs-media/api"}},o={},c=[{value:"What is WebRTC?",id:"what-is-webrtc",level:2},{value:"Setting Up Video Streaming",id:"setting-up-video-streaming",level:3},{value:"Quick Start Example",id:"quick-start-example",level:3},{value:"Sample Code:",id:"sample-code",level:4},{value:"Props Overview for WebRTC",id:"props-overview-for-webrtc",level:3},{value:"Event Handlers for MediaStream",id:"event-handlers-for-mediastream",level:3},{value:"Conclusion",id:"conclusion",level:3}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"webrtc-guide",children:"WebRTC Guide"}),"\n",(0,r.jsxs)(t.p,{children:["WebRTC allows for real-time communication and media streaming directly between browsers. This guide will show you how to implement video streaming using the ",(0,r.jsx)(t.strong,{children:"Reactjs Media"})," video player, where the video source is a ",(0,r.jsx)(t.strong,{children:"MediaStream"})," object."]}),"\n",(0,r.jsx)(t.h2,{id:"what-is-webrtc",children:"What is WebRTC?"}),"\n",(0,r.jsx)(t.p,{children:"WebRTC (Web Real-Time Communication) is a technology that allows audio, video, and data to be shared between peers without the need for plugins or intermediary servers. It\u2019s commonly used in video conferencing, file sharing, and media streaming applications."}),"\n",(0,r.jsx)(t.h3,{id:"setting-up-video-streaming",children:"Setting Up Video Streaming"}),"\n",(0,r.jsxs)(t.p,{children:["In this example, we\u2019ll use WebRTC to capture a live media stream (from a webcam or any other media input) and display it using the ",(0,r.jsx)(t.strong,{children:"Reactjs Media"})," video player component. The key difference is that instead of passing a file path to the ",(0,r.jsx)(t.code,{children:"src"})," prop, you will pass a ",(0,r.jsx)(t.strong,{children:"MediaStream"})," object."]}),"\n",(0,r.jsx)(t.h3,{id:"quick-start-example",children:"Quick Start Example"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:"Get access to the user's media (e.g., webcam):"})}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["We use the ",(0,r.jsx)(t.code,{children:"navigator.mediaDevices.getUserMedia()"})," API to access the camera and microphone."]}),"\n",(0,r.jsxs)(t.ol,{start:"2",children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:"Pass the MediaStream to the Video Player:"})}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Instead of a traditional video file URL, the ",(0,r.jsx)(t.code,{children:"src"})," value will be the ",(0,r.jsx)(t.strong,{children:"MediaStream"})," object obtained from the user's device."]}),"\n",(0,r.jsx)(t.h4,{id:"sample-code",children:"Sample Code:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:'import React, { useEffect, useState } from "react";\nimport { Video } from "reactjs-media";\n\nconst WebRTCVideoPlayer = () => {\n  const [mediaStream, setMediaStream] = useState(null);\n\n  useEffect(() => {\n    // Request access to the user\'s webcam\n    navigator.mediaDevices\n      .getUserMedia({ video: true, audio: true })\n      .then((stream) => {\n        setMediaStream(stream);  // Set the MediaStream object to state\n      })\n      .catch((error) => {\n        console.error("Error accessing media devices.", error);\n      });\n  }, []);\n\n  return (\n    <div>\n      {mediaStream && (\n        <Video\n          src={mediaStream}  // MediaStream object as the source\n          controls={true}\n          height={500}\n          width={800}\n          autoPlay={true}\n          muted={true}  // Mute by default to avoid feedback loops\n        />\n      )}\n    </div>\n  );\n};\n\nexport default WebRTCVideoPlayer;\n'})}),"\n",(0,r.jsx)(t.h3,{id:"props-overview-for-webrtc",children:"Props Overview for WebRTC"}),"\n",(0,r.jsxs)(t.p,{children:["You can use the same set of props as with the standard video player, but with the ",(0,r.jsx)(t.code,{children:"src"})," being a ",(0,r.jsx)(t.strong,{children:"MediaStream"})," object."]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"Prop"})}),(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"Type"})}),(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"Description"})})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"src"})}),(0,r.jsx)(t.td,{children:"MediaStream"}),(0,r.jsx)(t.td,{children:"The live media stream object obtained from the user\u2019s device."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"controls"})}),(0,r.jsx)(t.td,{children:"boolean"}),(0,r.jsxs)(t.td,{children:["Displays video controls like play/pause and volume (set to ",(0,r.jsx)(t.code,{children:"true"})," by default)."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"height"})}),(0,r.jsx)(t.td,{children:"number"}),(0,r.jsx)(t.td,{children:"Sets the height of the video player."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"width"})}),(0,r.jsx)(t.td,{children:"number"}),(0,r.jsx)(t.td,{children:"Sets the width of the video player."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"autoPlay"})}),(0,r.jsx)(t.td,{children:"boolean"}),(0,r.jsx)(t.td,{children:"Automatically plays the stream when it is available."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"muted"})}),(0,r.jsx)(t.td,{children:"boolean"}),(0,r.jsx)(t.td,{children:"Mutes the video by default (helps avoid audio feedback when using microphones)."})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"event-handlers-for-mediastream",children:"Event Handlers for MediaStream"}),"\n",(0,r.jsx)(t.p,{children:"In addition to attributes, you can handle various video events like play, pause, and errors, just as you would with a static video file."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"Event"})}),(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"Description"})})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"onPlay"})}),(0,r.jsx)(t.td,{children:"Triggered when the video stream starts playing."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"onPause"})}),(0,r.jsx)(t.td,{children:"Triggered when the video stream is paused."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"onEnded"})}),(0,r.jsx)(t.td,{children:"Triggered when the media stream ends (for instance, if the user stops sharing)."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"onVolumeChange"})}),(0,r.jsx)(t.td,{children:"Triggered when the volume is adjusted."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"onError"})}),(0,r.jsx)(t.td,{children:"Triggered if there\u2019s an error loading or streaming the media."})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"conclusion",children:"Conclusion"}),"\n",(0,r.jsxs)(t.p,{children:["This guide demonstrates how to use ",(0,r.jsx)(t.strong,{children:"WebRTC"})," to capture and stream live media directly within a React application. By leveraging the ",(0,r.jsx)(t.strong,{children:"Reactjs Media"})," player, you can display live streams with minimal configuration. Simply pass a ",(0,r.jsx)(t.strong,{children:"MediaStream"})," object as the ",(0,r.jsx)(t.code,{children:"src"})," and customize the player as needed!"]}),"\n",(0,r.jsx)(t.p,{children:"Feel free to extend this example with additional WebRTC features like peer-to-peer connections, audio-only streaming, or screen sharing."}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://www.digitalocean.com/?refcode=ad96e8b378d5&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge",children:(0,r.jsx)(t.img,{src:"https://web-platforms.sfo2.cdn.digitaloceanspaces.com/WWW/Badge%201.svg",alt:"DigitalOcean Referral Badge"})})})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>d,x:()=>a});var r=i(6540);const n={},s=r.createContext(n);function d(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);