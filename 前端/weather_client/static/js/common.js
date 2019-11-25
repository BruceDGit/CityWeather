// 获取用户定位信息，并将结果保存到本地存储
function getLocation(params_dict) {
    // params_dict: {myfunc:fun_name, params: params}
    var get_url = "http://127.0.0.1:8000/api/v1/user_ip"
    $.ajax({
        // 请求方式
        type: "get",
        // url
        url: get_url,

        //***************  test code begin ***************
        beforeSend: function (request) {
            // 查询ip之前，todo 迁移至sucess下
            var result_ip = {
                'code': 200,
                'user_ip': '192.255.255.255'
            }
            var query_set = result_ip.user_ip
            query_url = 'http://127.0.0.1:8000/api/v1/location/' + query_set
            $.ajax({
                type: "get",
                url: query_url,
                beforeSend: function (request) {
                    // 发送之前
                    result_location = {
                        'code': 200,
                        'location': '天津,天津,和平'
                    }
                    // $location_list = result_location.location.split(',');
                    localStorage.setItem('location', result_location.location);
                    params_dict.myfunc(params_dict.params)
                }
            })
        },
        //***************  test code end ***************

        success: function (result) {
            if (200 == result.code) {
                // 成功获取响应内容
                // var result = {
                // 	'code': 200,
                // 	'user_ip': '192.255.255.255'
                // }
                var query_set = result.user_ip
                query_url = 'http://127.0.0.1:8000/api/v1/location/' + query_set
                // 根据IP获取用户定位
                $.ajax({
                    type: "get",
                    url: query_url,
                    success: function (result_location) {
                        if (200 == result_location.code) {
                            // 成功获取响应内容
                            // result_location = {
                            // 	'code': 200,
                            // 	'location': '天津,天津,和平'
                            // }
                            // $location_list = result_location.location.split(',');
                            localStorage.setItem('location', result_location.location);
                            params_dict.myfunc(params_dict.params)
                        }
                    }
                })
            } else {
                alert(result.error)
            }
        }
    })
}