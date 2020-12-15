var ec_chinaMap = echarts.init(document.getElementById('china-map'), "walden");

var ec_chinaMap_option = {
    title: {
        text: '现有确诊病例数，排除治愈、死亡',
        subtext: '',
        x: 'center'
    },
    tooltip: {
        trigger: 'item'
    },
    //左下小导航图标
    visualMap: {
        show: true,
        x: 'left',
        y: 'bottom',
        textStyle: {
            fontSize: 8,
        },
        splitList: [{ start: 1,end: 9 },
            {start: 10, end: 99 }, 
			{ start: 100, end: 999 },
            {  start: 1000, end: 9999 },
            { start: 10000 }],
        color: ['#8A3310', '#C64918', '#E55B25', '#F2AD92', '#F9DCD1']
    },
    //配置属性
    series: [{
        name: '累计确诊人数',
        type: 'map',
        mapType: 'china',
        roam: false, //拖动和缩放
        itemStyle: {
            normal: {
                borderWidth: .5, //区域边框宽度
                borderColor: '#009fe8', //区域边框颜色
                areaColor: "#ffefd5", //区域颜色
            },
            emphasis: { //鼠标滑过地图高亮的相关设置
                borderWidth: .5,
                borderColor: '#4b0082',
                areaColor: "#fff",
            }
        },
        label: {
            normal: {
                show: true, //省份名称
                fontSize: 8,
            },
            emphasis: {
                show: true,
                fontSize: 8,
            }
        },
        data:[] //mydata //数据
    }]
};

ec_chinaMap.setOption(ec_chinaMap_option)