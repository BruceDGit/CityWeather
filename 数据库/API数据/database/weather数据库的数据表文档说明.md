

# weather数据库的数据表文档说明

## 数据表字段说明

realtime_weather  实时天气表字段说明：

| 字段名      | 类型        | 说明                                     | 样例数据   |
| ----------- | ----------- | ---------------------------------------- | ---------- |
| id          | int         | 序号，主键，唯一标识                     | 1          |
| province    | varchar(20) | 省份，省级单位                           | 天津       |
| city        | varchar(20) | 城市，市级单位                           | 天津       |
| district    | varchar(20) | 区域，区级单位                           | 和平       |
| temperature | int         | 温度，用数字来表示                       | -1         |
| weather     | varchar(20) | 天气                                     | 晴         |
| t_date      | date        | 日期，以YYYY-DD-MM的格式显示             | 2019-11-25 |
| get_week    | varchar(10) | 星期，用数字1~7来表示，例如：1代表星期一 | 1          |
| time        | time        | 当前时间，以HH:MM:SS的格式显示           | 09:16:00   |

today_weather  今日天气表字段说明：

| 字段名          | 类型        | 说明                                     | 样例数据   |
| --------------- | ----------- | ---------------------------------------- | ---------- |
| id              | int         | 序号，主键，唯一标识                     | 1          |
| province        | varchar(20) | 省份，省级单位                           | 天津       |
| city            | varchar(20) | 城市，市级单位                           | 天津       |
| district        | varchar(20) | 区域，区级单位                           | 和平       |
| t_date          | date        | 日期，以YYYY-DD-MM的格式显示             | 2019-11-25 |
| get_week        | int         | 星期，用数字1~7来表示，例如：1代表星期一 | 1          |
| temperature_max | int         | 最高气温，用数字表示                     | 5          |
| temperature_min | int         | 最低气温，用数字表示                     | -2         |
| weather         | varchar(20) | 天气                                     | 晴         |
| wind_direct     | varchar(20) | 风向                                     | 东南风     |
| wind_strength   | varchar(20) | 风力                                     | 1-2        |

weather_lifeindex  生活指数表字段说明：

| 字段名         | 类型         | 说明                         | 样例数据   |
| -------------- | ------------ | ---------------------------- | ---------- |
| id             | int          | 序号，主键，唯一标识         | 1          |
| province       | varchar(20)  | 省份，省级单位               | 天津       |
| city           | varchar(20)  | 城市，市级单位               | 天津       |
| district       | varchar(20)  | 区域，区级单位               | 和平       |
| t_date         | date         | 日期，以YYYY-DD-MM的格式显示 | 2019-11-25 |
| dressing_index | varchar(100) | 穿衣指数                     | 较冷       |
| uv_index       | varchar(100) | 紫外线指数                   | 中等       |
| carwash_index  | varchar(100) | 洗车指数                     | 适宜       |
| pm_index       | varchar(100) | 空气污染指数                 | 中         |