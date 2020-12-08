var ec_top5_non_hubei = echarts.init(document.getElementById('top5-non-hubei'),"dark");
var ec_top5_non_hubei_option = {
	title : {
	    text : "非湖北地区城市确诊TOP5",
	    textStyle : {
	        color : 'white',
	    },
	    left : 'left'
	},
	  color: ['#3398DB'],
	    tooltip: {
	        trigger: 'axis',
	        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
	            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
	        }
	    },
    xAxis: {
        type: 'category',
        data: []
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [],
        type: 'bar',
		barMaxWidth:"60%"
    }]
};
ec_top5_non_hubei.setOption(ec_top5_non_hubei_option)