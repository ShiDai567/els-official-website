"use strict";
/* JavaScript written by johnsonran.cn */
//
const version = "22w17d";
const LSPAge = parseInt(
	(new Date().getTime() - new Date("2020-01-28").getTime()) / 86400000
);
const consoleColor = "color: #70C000; ";
const consoleLineHeight = "line-height: 20px; ";
const consoleFontFamily =
	"font-family: 'Microsoft Yahei',PingFangSC-Regular,Helvetica,sans-serif,'等线'; ";
const consoleStyle1 = consoleColor + consoleFontFamily + consoleLineHeight;
const consoleStyle2 = consoleFontFamily + consoleLineHeight;
console.log(
	"\n%cEternal Light Star Web %cVersion " +
	version +
	"\n%c欢迎来到ELS官网控制台！\n%c _______    __         _______\n|    ___|  |  |       |    ___|\n|   |___   |  |       |   |___\n|    ___|  |  |       |____   |\n|   |___   |  |____    ____|  |\n|_______|  |_______|  |_______|\n\n%cELS官网已上线 %c" +
	LSPAge +
	"%c 天\n%c© 2020 Rhythm. All Rights Reserved.\n",
	consoleStyle1,
	consoleStyle2,
	consoleStyle1,
	consoleColor,
	consoleStyle1,
	consoleStyle2,
	consoleStyle1,
	consoleStyle2
);
const backend = "index.html";
const ua = navigator.userAgent.toLowerCase();
const isIpad = ua.indexOf("ipad") != -1;
const isIphone = !isIpad && ua.indexOf("iphone") != -1;
const isAndroid = ua.indexOf("android") != -1;
const isMobile = isIphone || isAndroid;
const isEdge = ua.indexOf("edge/") != -1;
const isSafari = ua.indexOf("safari/") != -1 && ua.indexOf("chrome/") == -1;
const ypoctonod = [window[atob("bG9jYXRpb24=")], "aHJlZg=="];
const localVersion = localStorage.getItem("localVersion");
const isNotFirstRun = !!localVersion;
let lastModified0 = "";
let username = "";
let birthday = "";
//
let thePopUp;
//
let popUpClosing = false;

//
let reduceMotion =
	isEdge || isSafari ? true : localStorage.getItem("reduceMotion") == "on";

function showAbout() {
	pVersion.innerText = version;
	if (!window.frmChangeLog) {
		window.frmChangeLog = document.createElement("iframe");
		frmChangeLog.id = "frmChangeLog";
		frmChangeLog.title = "更新日志";
		frmChangeLog.src = "changelog.html";
		changeLog.appendChild(frmChangeLog);
	}
	showPop(popAbout);
}

function showPop(thePopUp) {
	cover1.style.display = "block";
	thePopUp.style.display = "block";
	if (reduceMotion === false) {
		const btnClose = thePopUp.getElementsByClassName("btnClose")[0];
		if (btnClose && !btnClose.onmouseenter) {
			btnClose.onmouseenter = function () {
				if (reduceMotion === false) {
					//this.style.transform = "translate(8px,-6px) scale(1.1)";
					thePopUp = this.parentNode;
					thePopUp.style.transform = "rotate3d(1,1,0,5deg)";
				}
			};
			btnClose.onmouseleave = function () {
				if (reduceMotion === false) {
					//this.style.transform = "";
					if (popUpClosing == false) {
						thePopUp.style.transform = "none";
					}
				}
			};
		}
		setTimeout(() => {
			cover1.style.opacity = "1";
			thePopUp.style.opacity = "1";
			thePopUp.classList.add("showPop");
			setTimeout(() => {
				thePopUp.style.transform = "none";
				thePopUp.classList.remove("showPop");
			}, 350);
		}, 100);
	} else {
		cover1.style.opacity = "1";
		thePopUp.style.transition = "all 0s";
		thePopUp.style.transform = "none";
		thePopUp.style.transition = "all 0.25s";
		setTimeout(() => (thePopUp.style.opacity = "1"), 25);
	}
}

function closePop(obj) {
	popUpClosing = true;
	//obj.style.display="none";
	//thePopUp=obj.parentNode;
	cover1.style.opacity = "0";
	obj.style.opacity = "0";
	if (reduceMotion === false) {
		obj.style.transform = "rotate3d(1,1,0,20deg)";
	}
	setTimeout(() => {
		cover1.style.display = "none";
		obj.style.display = "none";
		if (reduceMotion === false) {
			obj.style.transform = "rotate3d(1,1,0,90deg)";
		}
		popUpClosing = false;
	}, 350);
}
//btnBrowse.onclick = () => {
//	inputImg.value = "";
//	inputImg.click();
//};
