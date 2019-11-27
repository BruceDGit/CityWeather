表名: **w_city_7d_forecast**

表中文名: 城市天气_7天预测数据表

| **字段**        | **描述**                     | **类型** | **长度** | **示例值**       |
| --------------- | ---------------------------- | -------- | -------- | ---------------- |
| **id**          | **唯一标识，自增**           | int      |          | 1                |
| cid             | 地区／城市ID                 | varchar  | 16       | CN101080402      |
| **location**    | **地区／城市名称**           | varchar  | 64       | 武清             |
| **parent_city** | **该地区／城市的上级城市**   | varchar  | 64       | 天津             |
| **admin_area**  | **该地区／城市所属行政区域** | varchar  | 64       | 天津             |
| **cnty**        | **该地区／城市所属国家名称** | varchar  | 64       | 中国             |
| update_loc      | 更新时间（东8区）            | datetime |          | 2017-10-25 12:34 |
| **date**        | **预报日期**                 | date     |          | 2013-12-30       |
| sr              | 日出时间                     | varchar  | 8        | 07:36            |
| ss              | 日落时间                     | varchar  | 8        | 16:58            |
| mr              | 月升时间                     | varchar  | 8        | 04:47            |
| ms              | 月落时间                     | varchar  | 8        | 14:59            |
| **tmp_max**     | **最高温度**                 | varchar  | 4        | 4                |
| **tmp_min**     | **最低温度**                 | varchar  | 4        | -5               |
| cond_code_d     | 白天天气状况代码             | varchar  | 16       | 100              |
| cond_code_n     | 夜间天气状况代码             | varchar  | 16       | 100              |
| **cond_txt_d**  | **白天天气状况描述**         | varchar  | 64       | 晴               |
| cond_txt_n      | 晚间天气状况描述             | varchar  | 64       | 晴               |
| wind_deg        | 风向360角度                  | varchar  | 8        | 310              |
| **wind_dir**    | **风向**                     | varchar  | 32       | 西北风           |
| **wind_sc**     | **风力**                     | varchar  | 8        | 1-2              |
| wind_spd        | 风速，公里/小时              | int      |          | 14               |
| hum             | 相对湿度                     | int      |          | 37               |
| pcpn            | 降水量                       | int      |          | 0                |
| pop             | 降水概率                     | int      |          | 0                |
| pres            | 大气压强                     | int      |          | 1018             |
| uv_index        | 紫外线强度指数               | int      |          | 3                |
| vis             | 能见度，单位：公里           | int      |          | 10               |



**注释：**本数据每小时更新一次，主键id自动增长，可根据所属国家【cnty】+所属行政区域【admin_area】+上级城市【parent_city】+当前地区/城市名【location】+预报日期【date】+最大id 获取目标地区在目标日期的最新预测数据。

