
    function temp24hShow(){
        option = {
            dataZoom: [{
                id: 'dataZoomX',
                type: 'slider',
                xAxisIndex: [0],
                filterMode: 'filter',
                show: false, 
                startValue: 0, 
                endValue: 7, 
                handleSize: 0 
            }, {
                zoomLock: true,
                type: 'inside',
                startValue: 0,
                endValue: 7
            }],

            xAxis: {
                type: 'category',
                data: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00',
                    '07:00', '08:00', '09:00', '10:00', '11:00', '12:00',
                    '13:00', '14:00', '15:00', '16:00', '17:00', '18:00',
                    '19:00', '20:00', '21:00', '22:00', '23:00', '24:00'],
                splitLine: { show: false },
                axisLine: {
                    lineStyle: {
                        color: 'white',
                    }
                },
            },

            yAxis: {
                type: 'value',
                splitNumber: 4, 
                axisTick: { 
                    show: true, 
                },
                axisLabel: { 
                    show: true,
                    textStyle: {
                        // color: '#e9ecee',
                    },
                    fontSize: 8,
                    margin: 5,
                },
                axisLine: { 
                    show: true,
                    lineStyle: { 
                        color: 'white',
                    },
                },
                splitLine: {　　
                    show: false,
                    lineStyle: {
                        type: 'dotted',
                        // color: ['#aaa', 'red'],   
                        color: '#4c4a74',
                    },
                },
            },



            series: [{
                data: [23, 32, 19, 34, 29, 33, 23, 32, 19, 34, 29, 33, 23, 32, 19, 34, 29, 33, 23, 32, 19, 34, 29, 33],
                type: 'line',
                itemStyle: {
                    normal: {
                        color: 'white', 
                        lineStyle: {
                            color: 'white',
                            // width: 1, 
                        },
                    },
                },
                label: { 
                    normal: {
                        show: true,
                        position: 'top',
                        distance: 2,
                        fontSize: 10, 
                        color: 'white', 
                        formatter: '{c0}℃' 
                    },
                },
            }]
        };

        var echartTempLine = echarts.init(document.getElementById("weather24-1"));
        echartTempLine.setOption(option);
    }
    temp24hShow();

    function wind24hShow(){
        option = {
            dataZoom: [{
                id: 'dataZoomX',
                type: 'slider',
                xAxisIndex: [0],
                filterMode: 'filter',
                show: false,  
                startValue: 0,  
                endValue: 7, 
                handleSize: 0  
            }, {
                zoomLock: true, 
                type: 'inside', 
                startValue: 0,
                endValue: 7
            }],

            xAxis: {
                type: 'category',
                data: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00',
                    '07:00', '08:00', '09:00', '10:00', '11:00', '12:00',
                    '13:00', '14:00', '15:00', '16:00', '17:00', '18:00',
                    '19:00', '20:00', '21:00', '22:00', '23:00', '24:00'],
                splitLine: { show: false },
                axisLine: {
                    lineStyle: {
                        color: 'white',
                    }
                },
            },

            yAxis: {
                type: 'value',
                splitNumber: 4, 
                axisTick: { 
                    show: true,
                },
                axisLabel: { 
                    show: true,
                    textStyle: {
                    },
                    fontSize: 8,
                    margin: 5,
                },
                axisLine: { 
                    show: true,
                    lineStyle: { 
                        color: 'white',
                    },
                },
                splitLine: {
                    show: false,
                    lineStyle: {
                        type: 'dotted',
                        color: '#4c4a74',
                    },
                },
            },
            lineStyle: {
                color: 'white',
            },

            series: [{
                data: [2, 2, 1, 5, 5, 6, 1, 2, 2, 5, 3, 6, 1, 5, 4, 5, 4, 5, 3, 1, 6, 6, 2, 1],
                type: 'line',
                itemStyle: {
                    normal: {
                        color: 'white', 
                        lineStyle: {
                            color: 'white',
                        },
                    },
                },
                label: { 
                    normal: {
                        show: true,
                        position: 'top',
                        distance: 2,
                        fontSize: 10,
                        color: 'white',
                        formatter: '{c0}级' 
                    },
                },
            }]
        };
        var echartWindLine = echarts.init(document.getElementById("weather24-2"));
        echartWindLine.setOption(option);
    }
    var tempLine = document.getElementById('weather24-1');
    var windLine = document.getElementById('weather24-2');
    var elem = document.querySelectorAll('.tempOrWind>li>a');
    elem[0].onclick = function(){
        elem[0].className = 'aSelected';
        elem[1].className = 'aUnselected';
        tempLine.style.display = 'block';
        windLine.style.display = 'none';
        temp24hShow();
    }
    elem[1].onclick = function(){
        elem[1].className = 'aSelected';
        elem[0].className = 'aUnselected';
        tempLine.style.display = 'none';
        windLine.style.display = 'block';
        wind24hShow();
    }

    
    function showWeatherNewsBanner() {
        var toggle = true;
        var time = null;
        var nexImg = 0;
        var bannerHeight = $(".weatherNewsBanner ul li img").eq(0).css("height");
        var imgLength = $(".weatherNewsBanner .banner ul li").length;
        var titleList = ['浙江湖州：南浔古镇游兴浓','国庆期间南宁市民观看最古老的烟花——“打铁花”','34辆地方彩车入驻奥林匹克公园 成为国庆热门打卡地'];
        var bannerTitle = $(".weatherNewsBanner .jumpBtn h6");
        $(".weatherNewsBanner").css("height", bannerHeight);
        jumpBtnClrChange(nexImg);

        $(document).ready(function () {
            time = setInterval(intervalImg, 3000);
        });

        function intervalImg() {
            if (nexImg < imgLength - 1) {
                nexImg++;
            } else {
                nexImg = 0;
            }
            $(".weatherNewsBanner .banner ul li").eq(nexImg).css("display", "block");
            $(".weatherNewsBanner .banner ul li").eq(nexImg).stop().animate({ "opacity": 1 }, 100);
            $(".weatherNewsBanner .banner ul li").eq(nexImg - 1).stop().animate({ "opacity": 0 }, 100, function () {
                $(".weatherNewsBanner .banner ul li").eq(nexImg - 1).css("display", "none");
            });
            jumpBtnClrChange(nexImg);
        }
        function jumpBtnClrChange(jumpImg) {
            $(".weatherNewsBanner .jumpBtn ul li").css("background-color", "#666");
            $(".weatherNewsBanner .jumpBtn ul li[jumpImg=" + jumpImg + "]").css("background-color", "#ff7e00");
            var text = titleList[jumpImg];
            bannerTitle.text(text);
        }

        $(".weatherNewsBanner .jumpBtn ul li").each(function () {
            $(this).click(function () {
                clearInterval(time);
                jumpImg = $(this).attr("jumpImg");
                if (jumpImg != nexImg) {
                    var after = $(".weatherNewsBanner .banner ul li").eq(jumpImg);
                    var befor = $(".weatherNewsBanner .banner ul li").eq(nexImg);
                    nexImg = jumpImg;
                    after.css("display", "block");
                    after.stop().animate({ "opacity": 1 }, 100);
                    befor.stop().animate({ "opacity": 0 }, 100, function () {
                        befor.css("display", "none");
                    });
                }
                jumpBtnClrChange(jumpImg);
                time = setInterval(intervalImg, 3000);
            });
        });
    };
    showWeatherNewsBanner();