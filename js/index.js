
var inputNum = 1;
var xmlHttpObj;

addEvent(window,'load',function(){


    id("radioBack_" +  1).style.display = "block";
    var radioCurrent = id("radioBack_" +  1);  // 初始第一个问题

    var result = new Array(3);
    for(var j = 0;j < result.length; j++ ) {
        result[j] = "";
    }


    addEvent(id("lastOne"),"click",function(){

        inputNum -= 1;
        result[inputNum] = ""; // 清理已提交的答案
        radioCurrent.style.display = "none";
        radioCurrent = id("radioBack_" + inputNum);
        radioCurrent.style.display = "block";
        if( inputNum == 1 ){
            id("lastOne").style.display = "none";
        }
        if( inputNum < cls("radioBack").length ) {
            id("nextOne").style.display = "inline-block";
        }

    });
    addEvent(id("nextOne"),"click",function(){

        var radioInput = radioCurrent.getElementsByClassName("radioInput");
        var notEmpty = true;
        var Num_9 = 0; // 检查第九题是否填满 7 个

        for(var i = 0; i < radioInput.length; i++ ) {

            if( radioInput[i] == undefined ){ // 15 题
                break;
            }

            if( radioInput[i].checked ) {
                result[inputNum - 1] += radioInput[i].value + "#";
                notEmpty = false;
                if( inputNum == 9 ) {
                    Num_9++
                }
            }
        }

        if( inputNum == 9 && Num_9 < 7 ){ // 检查第九题是否填满 7 个
            notEmpty = true;
        }

        if( hasClass(radioCurrent,"hasText") ) {
            var radioText = radioCurrent.getElementsByClassName("inputOther")[0];
            var value = radioText.value;
            if( value != "其他" && value != "如果有需要增设的课程请写出" && value != "" ) {
                result[inputNum - 1] += value + "#";
                notEmpty = false;
            }
        }

        if( hasClass(radioCurrent,"hasArea") ){
            var radioTextArea = radioCurrent.getElementsByClassName("radioInput")[0];
            var valueArea = radioTextArea.value;
            if( valueArea != "" ) {
                result[inputNum - 1] += valueArea + "#";
                notEmpty = false;
            }
        }
        if( notEmpty ) {
            //alert("你好像没有填写。");
            radioCurrent.style.color = "red";
        }
        else {

            inputNum++;
            radioCurrent.style.display = "none";

            if( inputNum == 4  ) {

                id("nextOne").style.display = "none";
                id("lastOne").style.display = "none";

                for(var k = 0; k < result.length; k++ ) { // 去掉 #
                    result[k] = result[k].substring(0,result[k].length - 1);
                }


                //var url = 'check.php?num=2&value=' + result.join("*");
                var url = "check.php";
                var qry = "num=2&value=" + result.join("*");
                alert(qry);

                if ( !xmlHttpObj ) {
                    xmlHttpObj = getXmlHttp();
                }
                if ( !xmlHttpObj ) {
                    return false;
                }
                xmlHttpObj.open('POST', url, true);
                xmlHttpObj.onreadystatechange = function() {
                    if ( xmlHttpObj.readyState == 4 && xmlHttpObj.status == 200 ) {
                        alert(xmlHttpObj.responseText);
                    }
                    /*var responseText = xmlHttpObj.responseText;
                    alert(responseText);*/
                };
                xmlHttpObj.setRequestHeader("Content-type","application/x-www-form-urlencoded");
                xmlHttpObj.send(qry);
            }

            radioCurrent = id("radioBack_" + inputNum);
            radioCurrent.style.display = "block";
            if( inputNum > 1 ){
                id("lastOne").style.display = "inline-block";
            }
        }
        if( inputNum > cls("radioBack").length ) {
            id("nextOne").style.display = "none";
            id("lastOne").style.display = "none";
        }

        if( inputNum == 3 ) {
            id("nextOne").value = "完成";
        }




    });


    addEvent(id("check"),"click",function(){


        for(var k = 0; k < result.length; k++ ) {
            result[k] = result[k].substring(0,result[k].length - 1);
        }
    });
});

/*function lastOne( num ) {
    num -= 1;
    if( num == 1 ){
        id("lastOne").style.display = "none";
    }
}*/












































































