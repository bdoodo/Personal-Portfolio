parcelRequire=function(e){var r="function"==typeof parcelRequire&&parcelRequire,n="function"==typeof require&&require,i={};function u(e,u){if(e in i)return i[e];var t="function"==typeof parcelRequire&&parcelRequire;if(!u&&t)return t(e,!0);if(r)return r(e,!0);if(n&&"string"==typeof e)return n(e);var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}return u.register=function(e,r){i[e]=r},i=e(u),u.modules=i,u}(function (require) {const a=e=>new Promise(o=>setTimeout(o,e)),d=document.querySelector("#anim-1"),f=document.querySelector("#anim-2"),g=document.querySelector("#anim-3"),h=document.querySelector("#anim-4"),i=document.querySelector("#anim-5");let b=[d,f,g,h];async function j(){await a(1500);for(let e=0;e<b.length;e++)b[e].classList.add("fade-slide-right"),await a(300);i.classList.add("fade-in")}function k(){document.querySelectorAll(".hidden").forEach(function(e){e.getBoundingClientRect().top<.6*window.innerHeight&&!e.classList.contains("visible")&&e.classList.add("visible")})}window.addEventListener("DOMContentLoaded",function(){window.addEventListener("scroll",k)}),j();const l=document.querySelector("#nav-icon");async function m(){const e=document.querySelectorAll(".nav-item");for(let o=0;o<e.length;o++){let c=e[o];c.classList.contains("closed")?(c.classList.add("open"),c.classList.remove("closed"),await a(300)):(c.classList.add("closed"),c.classList.remove("open"),await a(300))}}l.addEventListener("click",m);return{"Focm":{}};});