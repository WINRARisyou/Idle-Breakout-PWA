if(!self.define){let e,a={};const l=(l,i)=>(l=new URL(l+".js",i).href,a[l]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=a,document.head.appendChild(e)}else e=l,importScripts(l),a()})).then((()=>{let e=a[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(i,d)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(a[r])return;let c={};const f=e=>l(e,r),n={module:{uri:r},exports:c,require:f};a[r]=Promise.all(i.map((e=>n[e]||f(e)))).then((e=>(d(...e),c)))}}define(["./workbox-74f734a4"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"html5game/builtinfonts/FONT_builtin.png",revision:"dc0fd0da392e48cb588c8f1b02e23312"},{url:"html5game/builtinfonts/FONT_builtin.yy",revision:"5f2852739ca5675cc15169b1d16fd928"},{url:"html5game/Idle Breakout_texture_0.png",revision:"a9b7bde2a99637331f221385c4c95f96"},{url:"html5game/Idle Breakout_texture_1.png",revision:"918fb0bbbe5cfa5341d5390552774fba"},{url:"html5game/Idle Breakout_texture_2.png",revision:"f16e55ba975f133d832c831c6b0246c0"},{url:"html5game/Idle Breakout_texture_3.png",revision:"94a3bcc899fccb7f37e8ea13f3b94e36"},{url:"html5game/Idle Breakout.js",revision:"faad326d2e64d8f78d5e2116dc504b8a"},{url:"html5game/particles/IDR_GIF1.png",revision:"e738829765917b9261323da01c2a74a1"},{url:"html5game/particles/IDR_GIF10.png",revision:"5f40510d36275fa6a9a6209a873dd9b8"},{url:"html5game/particles/IDR_GIF11.png",revision:"3790fdebc98e496fe76727e03cc828d7"},{url:"html5game/particles/IDR_GIF12.png",revision:"a5d58a8d4966dc34141d5f2dbaf4d99c"},{url:"html5game/particles/IDR_GIF13.png",revision:"239bd3132966ba8b217ce274f0666a2b"},{url:"html5game/particles/IDR_GIF14.png",revision:"0df04b27e7981018446c0a3b904a83b3"},{url:"html5game/particles/IDR_GIF15.png",revision:"748bf671b0660101296ae22daa6d85a3"},{url:"html5game/particles/IDR_GIF2.png",revision:"c485602b85f3b74e924c1a52da68c709"},{url:"html5game/particles/IDR_GIF3.png",revision:"619e5e57056e3ecdb81ff12406e81fff"},{url:"html5game/particles/IDR_GIF4.png",revision:"e738829765917b9261323da01c2a74a1"},{url:"html5game/particles/IDR_GIF5.png",revision:"fc0ef11898f12ad2bdda7b4b338dc1da"},{url:"html5game/particles/IDR_GIF6.png",revision:"4dd398b96798b2d265884ba2cd6831e6"},{url:"html5game/particles/IDR_GIF7.png",revision:"2e62a13fc3bc743c8dc266e8f77ed2e8"},{url:"html5game/particles/IDR_GIF8.png",revision:"c4ca2da9ee7b0c368d8d74687a91cff3"},{url:"html5game/particles/IDR_GIF9.png",revision:"c06514bc789e9cbbe985868ff32c4b78"},{url:"html5game/sound_0_alt.mp3",revision:"da702a8a0b74676d2160e5fbcf140d4f"},{url:"html5game/sound_0_alt.ogg",revision:"63d7ec925f42cb899f037266fa0f0b46"},{url:"html5game/sound_0.mp3",revision:"4f5e345ce8bc18b0a53859e66472ad50"},{url:"html5game/sound_0.ogg",revision:"3f0488c0accd754c57b505b1ef5f9594"},{url:"html5game/sound_1_alt.mp3",revision:"bcf8b0e216cb790827e754aafebea181"},{url:"html5game/sound_1_alt.ogg",revision:"f58eafd6245f114a2a17b8b98684c727"},{url:"html5game/sound_1.mp3",revision:"2b3fe1f1b16495352e152cdb8e044e27"},{url:"html5game/sound_1.ogg",revision:"598ccafa8e233a0d9325f89886703ca7"},{url:"html5game/sound_2_alt.mp3",revision:"5015d10f1641569a467b7fc29a71ed54"},{url:"html5game/sound_2_alt.ogg",revision:"db69763bf5ee8b668d2721bd351e6f32"},{url:"html5game/sound_2.mp3",revision:"a2e531d9c15f36796df5efce6f4fa629"},{url:"html5game/sound_2.ogg",revision:"86c3e47ca5bc347d020b1d8643bf797a"},{url:"html5game/sound_3_alt.mp3",revision:"d12c42dccecba6515b3cc50f5bffcf36"},{url:"html5game/sound_3_alt.ogg",revision:"a94764a2fd88c6fba9d211465680676f"},{url:"html5game/sound_3.mp3",revision:"e2d4275337655a918f3eac6b9949ede4"},{url:"html5game/sound_3.ogg",revision:"301f3902c5435c13a0d475e40cd0e775"},{url:"html5game/sound_4_alt.mp3",revision:"311c72853a7b78af6886cb66edea274b"},{url:"html5game/sound_4_alt.ogg",revision:"ac0be53f90dfef9767d83cb39f3b009a"},{url:"html5game/sound_4.mp3",revision:"48c64743705791b8eefd2daf8294d739"},{url:"html5game/sound_4.ogg",revision:"83b85bef115a8543ed4ffe1768f0f6e7"},{url:"html5game/sound_5_alt.mp3",revision:"02d13e5a0debcffe898dec66f3be2925"},{url:"html5game/sound_5_alt.ogg",revision:"ceaed9d4782ae78071469171a42a1b06"},{url:"html5game/sound_5.mp3",revision:"84e0490713b0f514a6143f043a672a76"},{url:"html5game/sound_5.ogg",revision:"0a1373fd9aeabf881426c33258b3be17"},{url:"html5game/sound_6_alt.mp3",revision:"d12c42dccecba6515b3cc50f5bffcf36"},{url:"html5game/sound_6_alt.ogg",revision:"a94764a2fd88c6fba9d211465680676f"},{url:"html5game/sound_6.mp3",revision:"018f13c7ef7ffce43f0300b7b97e2bc7"},{url:"html5game/sound_6.ogg",revision:"05b6c5dcd2520e2479fa33a14196cfac"},{url:"html5game/sound_click_alt.mp3",revision:"8f30cc84a5d32dbfa4cafc77a50b6b53"},{url:"html5game/sound_click_alt.ogg",revision:"6b41b75d7312b45bf04bd3b46aa65fa6"},{url:"html5game/sound_click.mp3",revision:"38f7aa7a8b781faaf2eb314bae7c5abd"},{url:"html5game/sound_click.ogg",revision:"d059a1835068a34069f9e0b7904108d5"},{url:"html5game/sound_demon_alt.mp3",revision:"6bfc5f3fc6dfb8d0b5af4ed05dafe280"},{url:"html5game/sound_demon_alt.ogg",revision:"a8d8d2008d997c107eb896e3161e2bde"},{url:"html5game/sound_demon.mp3",revision:"28c5a5f1bc96313f853d2b2d0b66e3cf"},{url:"html5game/sound_demon.ogg",revision:"13575b41ea60099c160d4a9f0eaee7c5"},{url:"html5game/sound_end_alt.mp3",revision:"c69a4ea4a5509214a93d5924d529d4b7"},{url:"html5game/sound_end_alt.ogg",revision:"39bc9e861e0bc29dd6c773bd599f7bdb"},{url:"html5game/sound_end.mp3",revision:"bdc2e8642ef160bb16068dafcc4ff6db"},{url:"html5game/sound_end.ogg",revision:"f6d3b97f3aea64848a1db99f2df47e08"},{url:"html5game/sound_laser_alt.mp3",revision:"117b0f1365140d7500d006162fe88cee"},{url:"html5game/sound_laser_alt.ogg",revision:"88667e03e79ed1fc1124af4c7c10374d"},{url:"html5game/sound_laser.mp3",revision:"c790a97a39276a874166b75d9e743792"},{url:"html5game/sound_laser.ogg",revision:"6d9ac3a891b13761acd308dd902f1a0d"},{url:"html5game/sound_scatter_alt.mp3",revision:"fce1569847ccaf1af71ba37a1bfc7c76"},{url:"html5game/sound_scatter_alt.ogg",revision:"3e44bfc0090c7036122a60504718f404"},{url:"html5game/sound_scatter.mp3",revision:"c6d48ae4e8404956155ad4b78492e560"},{url:"html5game/sound_scatter.ogg",revision:"712449c61c1b7f992a3ee160e932dbbb"},{url:"html5game/splash.png",revision:"20d5056f0e79e9b4c96c57428c6c1ab6"},{url:"html5game/tph_coolmathAds.js",revision:"7b2b306c817f7e501d4dc37a1ad57eb2"},{url:"html5game/vph_webtools.js",revision:"87b958169d5acf5794edb7c69b0226e3"},{url:"html5game/xph_poki.js",revision:"dfb2aecad7f99159a61479232ffbc236"},{url:"html5game/yph_kongAPIextension.js",revision:"4aa58e9c083c1c034ea94c395fbf9152"},{url:"img/32x32.png",revision:"fc53325552b5d33c4c54c80fd7a07239"},{url:"img/512x512.png",revision:"f1b4f4191a603a3c9f6372f65aab64c5"},{url:"img/favicon.ico",revision:"f1e323553fe1bd4cce5c3d47171a925d"},{url:"img/favicon.png",revision:"fcac0f5f3b55d334888509b1d3a7e9c2"},{url:"index.html",revision:"64b57331c358f73893ff024a67726f62"},{url:"jquery.min.js",revision:"cf2fbbf84281d9ecbffb4993203d543b"},{url:"manifest.json",revision:"52c21444f2bbf3c66f9217664eb77ca4"},{url:"options.ini",revision:"0374fe5c35eff07354d0675809c75ee9"},{url:"style.css",revision:"3b15a0811a5aebb5c6b2b863d3d773ea"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map