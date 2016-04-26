
function addEvent(obj, event, func) {

    if(obj.addEventListener) {
        obj.addEventListener(event,func,false);
    }
    else if(obj.attachEvent) {
        event = 'on' + event;
        obj.attachEvent(event,func);
    }
}

function id( x ) {
    if(typeof x == "string") {
        return document.getElementById(x);
    }
    return x;
}

function cls( x ) {
    if(typeof x == "string") {
        return document.getElementsByClassName(x);
    }
    return x;
}

function tag( x ) {
    if(typeof x == "string") {
        return document.getElementsByTagName(x);
    }
    return x;
}

function getXmlHttp() { // 获取 XMLHttpRequest 对象
    var xmlhttp = null;
    if(window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    }
    else {
        try {
            xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch(e) {
            try {
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch(e) {
                xmlhttp = null;
            }
        }
    }
    return xmlhttp;
}

function hasClass(obj, cls) {
    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'))
}




































