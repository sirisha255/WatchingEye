"use strict"

var layer1 = document.getElementById("layer1");
var layer2 = document.getElementById("layer2");
var layer3 = document.getElementById("layer3");

var layer2offsetHeight= 0;
var layer2offsetWidth = 0;
var layer3offsetHeight= 0;
var layer3offsetWidth = 0;

var siteWidth =
window.innerWidth ||
document.documentElement.clientWidth ||
document.body.clientWidth;

var siteHeight =
window.innerHeight ||
document.documentElement.clientHeight ||
document.body.clientHeight;

var layer1Height = siteHeight - 20;
var layer1Width = siteWidth - 20;
layer1.style.height = layer1Height + "px";
layer1.style.width = layer1Width + "px";

var layer2Height = layer1Height * 0.75;
var layer2Width = layer1Width * 0.75;
layer2.style.height = layer2Height + "px";
layer2.style.width = layer2Width + "px";
layer2offsetHeight = layer1Height - layer2Height;
layer2offsetWidth = layer1Width - layer2Width;

var layer3Height = layer2Height * 0.25;
var layer3Width = layer2Width * 0.25;
layer3.style.height = layer3Height + "px";
layer3.style.width = layer3Width + "px";
layer3offsetHeight = layer2Height - layer3Height;
layer3offsetWidth = layer2Width - layer3Width;

window.addEventListener("mousemove", function(event){
    let mouseXoffset =  event.clientX / siteWidth;
    let mouseYoffset = event.clientY / siteHeight;

    layer2.style.marginLeft = 20 + (layer2offsetWidth - 40) * mouseXoffset + "px";
    layer2.style.marginTop = 20 + (layer2offsetHeight - 40) * mouseYoffset + "px";

    layer3.style.marginLeft = 30 + (layer3offsetWidth - 60) * mouseXoffset + "px";
    layer3.style.marginTop = 30 + (layer3offsetHeight - 60) * mouseYoffset + "px";
})