(this.webpackJsonpabdiresul=this.webpackJsonpabdiresul||[]).push([[0],{54:function(e,t,a){e.exports=a(70)},67:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(19),i=a.n(r),c=a(30),l=a(31),m=a(37),s=a(36),u=a(23),p=a(18),d=a(97),g=a(107),b=a(108),h=a(48),f=a.n(h),E=a(72),v=a(106),y=(a(59),a(21)),O=a(38),j=a(20),x=a(15),k=a(99),w=a(100),S=a(109),A=Object(d.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},gridList:{width:"80%"}}}));function C(e){e.match;var t=A(),a=Object(n.useState)([]),r=Object(u.a)(a,2),i=r[0],c=r[1],l=Object(n.useState)(!0),m=Object(u.a)(l,2),s=m[0],p=m[1],d=Object(n.useState)(""),g=Object(u.a)(d,2),b=g[0];g[1];return Object(n.useEffect)((function(){console.log("Icerde"),fetch("https://pixabay.com/api/?key=16006455-f87c228e04c6de5a2495bf300&q=".concat(b,"&image_type=photo&pretty=true")).then((function(e){return e.json()})).then((function(e){c(e.hits),p(!1)})).catch((function(e){return console.log(e)}))}),[b]),o.a.createElement(k.a,null,!s&&0===i.length&&o.a.createElement("h1",null,"No Images Found"),o.a.createElement("div",{className:t.root},o.a.createElement(w.a,{className:t.gridList,cols:3},i.map((function(e){return o.a.createElement(S.a,{key:e.id},o.a.createElement("img",{src:e.webformatURL,alt:e.tags}))})))))}var N=a(101),z=a(110),B=a(102),L=a(104),q=a(103),T=Object(d.a)((function(e){var t;return{root:{height:"100%",display:"flex",flexDirection:"column",borderRadius:15},media:{height:140},grid:{display:"flex"},cardContent:{display:"flex",flexDirection:"column",flexGrow:1},image:(t={position:"relative",height:200,borderRadius:15},Object(p.a)(t,e.breakpoints.down("xs"),{width:"100% !important",height:140}),Object(p.a)(t,"&:hover, &$focusVisible",{zIndex:1,"& $imageBackdrop":{opacity:.15},"& $imageMarked":{opacity:0},"& $imageTitle":{fontSize:25}}),t),focusVisible:{},imageButton:{position:"absolute",left:0,right:0,top:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center",color:e.palette.common.white},imageSrc:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundSize:"cover",backgroundPosition:"center 40%",borderRadius:15},imageBackdrop:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:e.palette.common.black,opacity:.4,transition:e.transitions.create("opacity")},imageTitle:{position:"relative",transition:e.transitions.create("fontSize"),padding:"".concat(e.spacing(2),"px ").concat(e.spacing(4),"px ").concat(e.spacing(1)+6,"px")}}}));function I(e){var t=T(),a=e.album;return o.a.createElement(N.a,{item:!0,xs:12,sm:6,md:4},o.a.createElement(z.a,{className:t.root},o.a.createElement(B.a,{component:j.b,to:"/photo/".concat(a.title)},o.a.createElement(q.a,{className:t.image,title:a.title},o.a.createElement("span",{className:t.imageSrc,style:{backgroundImage:"url(".concat(a.img,")")}}),o.a.createElement("span",{className:t.imageBackdrop}),o.a.createElement("span",{className:t.imageButton},o.a.createElement(E.a,{component:"span",variant:"subtitle1",color:"inherit",className:t.imageTitle},a.title))),o.a.createElement(L.a,{className:t.cardContent},o.a.createElement(E.a,{variant:"body2",color:"textSecondary",component:"p"},a.description),o.a.createElement(E.a,{variant:"body2",color:"primary",align:"right",style:{marginTop:7}},"100 views")))))}var M=Object(d.a)((function(e){return{root:Object(p.a)({justifyContent:"center",width:"80%",margin:"auto",overflowX:"auto"},e.breakpoints.down("xs"),{width:"95%"}),header:{fontSize:30},container:{}}})),F=[{title:"Ashgabat",img:"https://1.bp.blogspot.com/-KOzmmj2YBtU/XTRhkwi8s3I/AAAAAAAAh8s/maLMA0OMF2sjHJGfWqve7pAS4nwzQi0ewCKgBGAs/s640/Ashgabat-Walking-Tour-98.jpg",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam nam omnis facere quasi fugiat delectus iure. Voluptatibus dolorem voluptas vero laudantium quidem, sint hic deleniti assumenda eum consectetur impedit! Maiores.",year:2020},{title:"Istanbul",img:"https://pix10.agoda.net/geo/city/14932/1_14932_02.jpg?s=1920x822",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam nam omnis facere quasi fugiat delectus iure. Voluptatibus dolorem voluptas vero laudantium quidem, sint hic deleniti assumenda eum consectetur impedit! Maiores.",year:2020},{title:"Belgrad",img:"https://www.turizmgunlugu.com/wp-content/uploads/2018/10/belgrad-696x412.jpg",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam nam omnis facere quasi fugiat delectus iure. Voluptatibus dolorem voluptas vero laudantium quidem, sint hic deleniti assumenda eum consectetur impedit! Maiores.",year:2020}];function W(e){var t=M();return o.a.createElement("div",null,o.a.createElement(E.a,{align:"center",className:t.header}," ALBUMS "),o.a.createElement(N.a,{container:!0,spacing:4,className:t.root},F.map((function(e){return o.a.createElement(I,{album:e})}))))}var P=a(105);function R(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(P.a,null),o.a.createElement(k.a,{maxWidth:"sm"},o.a.createElement("h5",null,"Portfolio"),o.a.createElement(E.a,{component:"div",style:{backgroundColor:"#cfe8fc",height:"100vh"}})))}function H(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(P.a,null),o.a.createElement(k.a,{maxWidth:"sm"},o.a.createElement("h5",null,"Blog"),o.a.createElement(E.a,{component:"div",style:{backgroundColor:"#cfe8fc",height:"100vh"}})))}function G(){return o.a.createElement(E.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",o.a.createElement(v.a,{color:"inherit",href:"#"},"abdirasul.com")," ",(new Date).getFullYear(),".")}var V=Object(d.a)((function(e){return{footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6,0)}}}));function D(){var e=V();return o.a.createElement("footer",{className:e.footer},o.a.createElement(k.a,{maxWidth:"lg"},o.a.createElement(E.a,{variant:"h6",align:"center",gutterBottom:!0},"Abdyrasul Oraznyyazov"),o.a.createElement(E.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p"},"Istanbul - Turkey"),o.a.createElement(G,null)))}var Q=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(P.a,null),o.a.createElement(k.a,{maxWidth:"sm"},o.a.createElement("h5",null,"Home"),o.a.createElement(E.a,{component:"div",style:{backgroundColor:"#cfe8fc",height:"100vh"}})))}}]),a}(n.Component),$=(a(67),Object(d.a)((function(e){return{toolbar:{borderBottom:"1px solid ".concat(e.palette.divider)},toolbarTitle:{flex:1,fontFamily:"Dancing Script",fontSize:35},toolbarSecondary:Object(p.a)({justifyContent:"space-between",overflowX:"auto",width:"80%",margin:"auto",marginBottom:20},e.breakpoints.down("xs"),{width:"100%",margin:0,padding:0}),toolbarLink:{padding:e.spacing(1),flexShrink:0,"&:hover":{color:e.palette.secondary.main}},selectedPage:{padding:e.spacing(1),flexShrink:0,borderBottom:"2px solid ".concat(e.palette.secondary.main),"&:hover":{color:e.palette.secondary.main}}}})));function J(e){var t=Object(n.useState)("HOME"),a=Object(u.a)(t,2),r=a[0],i=a[1],c=$();return o.a.createElement(j.a,null,o.a.createElement(o.a.Fragment,null,o.a.createElement(g.a,{className:c.toolbar},o.a.createElement("a",{href:"https://www.instagram.com/abdiresul/"},o.a.createElement(O.a,{icon:y.b,size:"lg"})),o.a.createElement("a",{href:"https://www.linkedin.com/in/abdyrasul-oraznyyazov-245933121/"},o.a.createElement(O.a,{icon:y.c,size:"lg"})),o.a.createElement("a",{href:"#"},o.a.createElement(O.a,{icon:y.a,size:"lg"})),o.a.createElement(E.a,{component:"h2",variant:"h6",color:"inherit",align:"center",noWrap:!0,className:c.toolbarTitle},"Abdyrasul"),o.a.createElement(b.a,null,o.a.createElement(f.a,null))),o.a.createElement(g.a,{component:"nav",variant:"dense",className:c.toolbarSecondary},[{name:"HOME",url:"/"},{name:"PHOTOGRAPHY",url:"/photo"},{name:"BLOG",url:"/blogs"},{name:"PORTFOLIO",url:"/portfolio"}].map((function(e){return o.a.createElement(v.a,{component:j.b,to:e.url,color:"inherit",noWrap:!0,key:e.name,variant:"button",href:"#",underline:"none",onClick:function(){i(e.name)},className:r===e.name?c.selectedPage:c.toolbarLink},e.name)}))),o.a.createElement(x.c,null,o.a.createElement(x.a,{path:"/",exact:!0,component:Q}),o.a.createElement(x.a,{path:"/photo",exact:!0,component:W}),o.a.createElement(x.a,{path:"/blogs",component:H}),o.a.createElement(x.a,{path:"/portfolio",component:R}),o.a.createElement(x.a,{path:"/photo/:id",component:C}))))}var U=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(J,null),o.a.createElement(D,null))}}]),a}(o.a.Component);i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(U,null)),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.262edea1.chunk.js.map