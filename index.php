<?php
session_start();

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>

    <link href="css/index.css" type="text/css" rel="stylesheet">
    <script src="js/jquery-2.1.1.min.js" type="text/javascript"></script>
    <script src="js/support.js" type="text/javascript"></script>
    <script src="js/index.js" type="text/javascript"></script>
</head>
<body>

<!--<div id="headerBack" class="contentBackClass">
    <h1 class="headerTitle marginBottom">成都职业技术学院软件分院计算机应用技术专业<br>(数字建模方向)人才培养方案调查问卷</h1>
    <p class="headerP">亲爱的同学：</p>
    <p class="headerP pIndent">你好！为了解计算机应用技术专业（数字建模方向）课程设置的情况以及教学改革中存在的问题，进一步提高教学和人才培养质量，我们特制作了该问卷调查表。希望通过此问卷了解你对我院计算机应用技术专业课程设置及相关改革的想法。你所提供的信息对本专业人才培养和教学改革将提供重要的参考。请你根据实际情况和真实想法填写问卷。</p>
    <p class="headerP pIndent">最后，衷心感谢你对母校的帮助和与支持！</p>
    <p class="headerP pRight">成都职业技术学院软件分院</p>
    <p class="headerP pRight">计算机应用技术专业</p>
    <p class="headerP pRight">2016 年 4 月 6 日</p>
</div>-->


<form id="bodyContentBack" class="contentBackClass">

    <div id="bodyContent">



        <div class="radioBack" id="radioBack_1">
            <p class="radioTitle">1.你的毕业年份：</p> <!-- 单选 -->
            <p class="radioP">
                <input class="radioInput"  id="radioInputYear_1" type="radio" name="year" value="2015"><label for="radioInputYear_1">2015</label>
                <input class="radioInput"  id="radioInputYear_2" type="radio" name="year" value="2014"><label for="radioInputYear_2">2014</label>
                <input class="radioInput"  id="radioInputYear_3" type="radio" name="year" value="2013"><label for="radioInputYear_3">2013</label>
                <input class="radioInput"  id="radioInputYear_4" type="radio" name="year" value="2012"><label for="radioInputYear_4">2012</label>
            </p>
        </div>



        <div class="radioBack" id="radioBack_2">
            <p class="radioTitle">2.你的入学类型：</p> <!-- 单选 -->
            <p class="radioP">
                <input class="radioInput"  id="radioInputType_1" type="radio" name="Type" value="普通高中"><label for="radioInputType_1">普通高中</label>
                <input class="radioInput"  id="radioInputType_2" type="radio" name="Type" value="单独招生"><label for="radioInputType_2">单独招生</label>
                <input class="radioInput"  id="radioInputType_3" type="radio" name="Type" value="五年一贯制"><label for="radioInputType_3">五年一贯制</label>
            </p>
        </div>



        <div class="radioBack" id="radioBack_3">
            <p class="radioTitle">3.你在工作期间，多大程度应用了你在学校学习的东西：</p> <!-- 单选 -->
            <p class="radioP">
                <input class="radioInput"  id="radioInputWhile_1" type="radio" name="While" value="基本上能"><label for="radioInputWhile_1">基本上能</label>
                <input class="radioInput"  id="radioInputWhile_2" type="radio" name="While" value="偶尔"><label for="radioInputWhile_2">偶尔</label>
                <input class="radioInput"  id="radioInputWhile_3" type="radio" name="While" value="经常"><label for="radioInputWhile_3">经常</label>
                <input class="radioInput"  id="radioInputWhile_4" type="radio" name="While" value="很大程度"><label for="radioInputWhile_4">很大程度</label>
            </p>
        </div>


    </div>

    <div id="submitBack">
        <p>
            <input id="lastOne"  class="submitInput" type="button" value="上一个">
            <input id="nextOne" class="submitInput" type="button" value="下一个">
        </p>
    </div>

</form>

<input id="check" class="submitInput" type="button" value="检查">


</body>
</html>