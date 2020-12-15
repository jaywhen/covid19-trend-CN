function gettime() {
    $.ajax({
        url: "/time",
                    timeout: 10000, //超时时间为10秒；
                    success: function(data) {
                        $("#time").html(data)
                    },
                    error: function(xhr, type, errorThrown) {
                    }
                });
}

function get_summary_data() {
    $.ajax({
        url: "/summary",
        success: function(data) {
            $(".num h1").eq(0).text(data.confirm);
            $(".num h1").eq(1).text(data.suspect);
            $(".num h1").eq(2).text(data.heal);
            $(".num h1").eq(3).text(data.dead);
        },
        error: function(xhr, type, errorThrown) {
        }
    })
}

function get_chinaMap_data() {
    $.ajax({
        url:"/chinaMap",
        success: function(data) {
            ec_chinaMap_option.series[0].data=data.data
            ec_chinaMap.setOption(ec_chinaMap_option)
        },
        error: function(xhr, type, errorThrown) {
        }
    })
}

function get_total_data() {
    $.ajax({
        url:"/total",
        success: function(data) {
            ec_total_Option.xAxis[0].data=data.day
            ec_total_Option.series[0].data=data.confirm
            ec_total_Option.series[1].data=data.suspect
            ec_total_Option.series[2].data=data.heal
            ec_total_Option.series[3].data=data.dead
            ec_total.setOption(ec_total_Option)
        },
        error: function(xhr, type, errorThrown) {

        }
    })
}

function get_newly_data() {
    $.ajax({
        url:"/newly",
        success: function(data) {
            ec_newly_Option.xAxis[0].data=data.day
            ec_newly_Option.series[0].data=data.confirm_add
            ec_newly_Option.series[1].data=data.suspect_add
            ec_newly.setOption(ec_newly_Option)
        },
        error: function(xhr, type, errorThrown) {
        }
    })
}

function get_top5_non_hubei_data() {
    $.ajax({
        url: "/top5NonHubei",
        success: function (data) {
            ec_top5_non_hubei_option.xAxis.data=data.city;
            ec_top5_non_hubei_option.series[0].data=data.confirm;
            ec_top5_non_hubei.setOption(ec_top5_non_hubei_option);
        }
    })
}


gettime()
get_summary_data()
get_chinaMap_data()
get_total_data()
get_newly_data()
get_top5_non_hubei_data()

setInterval(gettime,1000)
setInterval(get_summary_data,1000*10)
setInterval(get_chinaMap_data,10000*10)
setInterval(get_total_data,10000*10)
setInterval(get_newly_data,10000*10)
setInterval(get_top5_non_hubei_data,10000*10)