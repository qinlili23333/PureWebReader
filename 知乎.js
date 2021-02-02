// ==UserScript==
// @name        纯享阅读-知乎
// @namespace    https://qinlili.bid
// @version      0.1
// @description  让知乎指定内容全屏，减少干扰
// @author       琴梨梨
// @match        *://www.zhihu.com/*
// @icon         https://static.zhihu.com/heifetz/favicon.ico
// @grant        none
// @run-at        document-end
// ==/UserScript==

(function() {
    'use strict';
    var down = false;
    var up = false;
    var divForExec = document.body;
    document.onkeydown=function(e){
        var keyNum=window.event ? e.keyCode :e.which;
        if(keyNum==174){//VolDown
            down = true;
            check();
        }
        if(keyNum==175){//VolUp
            up = true;
            check();
        }
    }
    function check(){
        if(up && down){
            exec();
            up = false;
            down = false;
        }
    }
    function exec(){
        if(!document.location.pathname.indexOf("/pub/reader/")){
            divForExec=document.querySelector("#root > div > main > div > div > div.reader-container > div.reader-chapter-content.PubHTML.justify.collapse-fw");
            fs();
        };
        if(!document.location.pathname.indexOf("/market/paid_column/")||!document.location.pathname.indexOf("/market/literature/")||!document.location.pathname.indexOf("/market/paid_magazine/")){
            divForExec=document.querySelector("#app > div");
            fs();
        };
        if(document.location.pathname=="/"){
            divForExec=document.querySelector("#root > div > main > div > div > div.Topstory-mainColumn > div");
            fs();
        };
    }
    function fs(){
        divForExec.style.overflow="scroll";
        divForExec.requestFullscreen();
    }
})();
