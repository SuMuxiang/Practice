
var xmlHttpObj;

addEvent(window,"load",function(){
    var schoolId = 0;

    addEvent(id("signButton"),"click",function(){

        var signInput = id("signInput");

        if(signInput.value != "") {  // js Ajax
            var signName = encodeURIComponent(signInput.value);
            //var url = 'check.php?num=1&name=' + state + '&major=' + id('signSelect').value;
            var url = 'check.php?num=1&name=' + signName;

            if ( !xmlHttpObj ) {
                xmlHttpObj = getXmlHttp();
            }
            if ( !xmlHttpObj ) {
                return false;
            }

            xmlHttpObj.open('GET', url, true);
            xmlHttpObj.onreadystatechange = function() {
                if ( xmlHttpObj.readyState == 4 && xmlHttpObj.status == 200 ) {

                    var responseText = eval("("+ xmlHttpObj.responseText +")"); // 返回并编译 json
                    //var responseText = xmlHttpObj.responseText;

                    alert(responseText);

                    if( responseText.ok ) {
                        schoolId = responseText.student_id; // 后面验证需要

                        id("checkSchoolId").innerHTML = schoolId;
                        id("checkName").innerHTML = "你好 " + responseText.name;
                        id("signBack").style.display = "none";
                        id("checkBack").style.display = "block";
                    }
                    else {
                        signInput.style.borderColor = "red";
                        signInput.style.color = "red";
                        signInput.value = "没有找到 " + responseText.name;
                    }

                }
                else if ( xmlHttpObj.readyState == 4 && xmlHttpObj.status != 200 ) { // 若 php 页面被删除
                    alert('No');
                }
            };

            xmlHttpObj.send(null);
        }
        else{
            signInput.style.borderColor = "red";
        }
    });


    var checkInput = id("checkInput");
    addEvent(checkInput,"focus",function(){
        if( checkInput.value == '输入上面的学号以继续' ) {
            checkInput.value = "";
        }
    });
    addEvent(checkInput,"blur",function(){
        if( checkInput.value == '' ) {
            checkInput.value = "输入上面的学号以继续";
        }
    });


    addEvent(id("checkButton"),"click",function(){
        var checkInput = id("checkInput");
        if( checkInput.value != "输入上面的学号以继续" && checkInput.value != "" ) {
            if( checkInput.value == schoolId ) {
                // 走你
                alert("hello");
            }
            else {
                checkInput.style.borderColor = "red";
                checkInput.style.color = "red";
                checkInput.value = "输入上面的学号以继续";
            }
        }
        else {
            checkInput.style.borderColor = "red";
            checkInput.style.color = "red";
            checkInput.value = "输入上面的学号以继续";
        }
    });

});



























