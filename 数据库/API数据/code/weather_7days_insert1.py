#!/usr/bin/python3
#coding=utf-8
import time
from datetime import datetime
import requests
import json,pymysql

class GetForecastWeather(object):
    def __init__(self):
        self.url = 'https://api.heweather.net/s6/weather/forecast'
        self.db = pymysql.connect(
            host='localhost' ,
            port=3306 ,
            user='root' ,
            passwd='123456' ,
            db='weather' ,
            charset='utf8' ,
        )
        self.cursor = self.db.cursor()
    # 获取请求
    def get_html(self,url):
        params = {
            'location': '天津' ,
            'lang': 'zh-Hans' ,
            'unit': 'm' ,
            'key': '4dcf0ac571c64e45ad7767a44f692902'
        }
        html = requests.get(
            url=url , params=params
        ).content.decode('utf-8' , 'ignore')
        self.parse_html_json(html)
    # json解析
    def parse_html_json(self,html):
        data = json.loads(html)
        self.insert_data(data)
    def insert_data(self , weather_text):
        L = (
            (weather_text['HeWeather6'][0]['daily_forecast'][0]['cond_txt_d'] + '\n' + weather_text['HeWeather6'][0]['daily_forecast'][0]['tmp_min'] + '/' + weather_text['HeWeather6'][0]['daily_forecast'][0]['tmp_max'] + '℃' + '\n' +  weather_text['HeWeather6'][0]['daily_forecast'][0]['wind_dir'] + ' ' + weather_text['HeWeather6'][0]['daily_forecast'][0]['wind_sc'] + '级'),
            (weather_text['HeWeather6'][0]['daily_forecast'][1]['cond_txt_d'] + '\n' + weather_text['HeWeather6'][0]['daily_forecast'][1]['tmp_min'] + '/' + weather_text['HeWeather6'][0]['daily_forecast'][1]['tmp_max'] + '℃' + '\n' + weather_text['HeWeather6'][0]['daily_forecast'][1]['wind_dir'] + ' ' + weather_text['HeWeather6'][0]['daily_forecast'][1]['wind_sc'] + '级'),
            (weather_text['HeWeather6'][0]['daily_forecast'][2]['cond_txt_d'] + '\n' + weather_text['HeWeather6'][0]['daily_forecast'][1]['tmp_min'] + '/' + weather_text['HeWeather6'][0]['daily_forecast'][2]['tmp_max'] + '℃' + '\n' + weather_text['HeWeather6'][0]['daily_forecast'][2]['wind_dir'] + ' ' + weather_text['HeWeather6'][0]['daily_forecast'][2]['wind_sc'] + '级'),
            (weather_text['HeWeather6'][0]['daily_forecast'][3]['cond_txt_d'] + '\n' + weather_text['HeWeather6'][0]['daily_forecast'][1]['tmp_min'] + '/' + weather_text['HeWeather6'][0]['daily_forecast'][3]['tmp_max'] + '℃' + '\n' + weather_text['HeWeather6'][0]['daily_forecast'][3]['wind_dir'] + ' ' + weather_text['HeWeather6'][0]['daily_forecast'][3]['wind_sc'] + '级'),
            (weather_text['HeWeather6'][0]['daily_forecast'][4]['cond_txt_d'] + '\n' + weather_text['HeWeather6'][0]['daily_forecast'][1]['tmp_min'] + '/' + weather_text['HeWeather6'][0]['daily_forecast'][4]['tmp_max'] + '℃' + '\n' + weather_text['HeWeather6'][0]['daily_forecast'][4]['wind_dir'] + ' ' + weather_text['HeWeather6'][0]['daily_forecast'][4]['wind_sc'] + '级'),
            (weather_text['HeWeather6'][0]['daily_forecast'][5]['cond_txt_d'] + '\n' + weather_text['HeWeather6'][0]['daily_forecast'][1]['tmp_min'] + '/' + weather_text['HeWeather6'][0]['daily_forecast'][5]['tmp_max'] + '℃' + '\n' + weather_text['HeWeather6'][0]['daily_forecast'][5]['wind_dir'] + ' ' + weather_text['HeWeather6'][0]['daily_forecast'][5]['wind_sc'] + '级'),
            (weather_text['HeWeather6'][0]['daily_forecast'][6]['cond_txt_d'] + '\n' + weather_text['HeWeather6'][0]['daily_forecast'][2]['tmp_min'] + '/' + weather_text['HeWeather6'][0]['daily_forecast'][6]['tmp_max'] + '℃' + '\n' + weather_text['HeWeather6'][0]['daily_forecast'][6]['wind_dir'] + ' ' + weather_text['HeWeather6'][0]['daily_forecast'][6]['wind_sc'] + '级'),
            )
        ins = 'insert into future_weather1(day01,day02,day03,day04,day05,day06,day07) values(%s,%s,%s,%s,%s,%s,%s)'
        try:
            self.cursor.execute(ins,L)
            self.db.commit()
        except Exception as e:
            print(e)
            self.db.rollback()
    def run(self):
        self.get_html(self.url)
        self.cursor.close()
        self.db.close()
if __name__ == '__main__':
    try:
        api = GetForecastWeather()
        api.run()
        with open('/home/tarena/桌面/weather_program/log/weather_future_insert.log' , 'a') as f:
            f.write('insert succeed at {} \n'.format(datetime.now().strftime('%Y-%m-%d %H:%M:%S')))
    except Exception as e:
        with open('/home/tarena/桌面/weather_program/log/weather_future_insert.log' , 'a') as f:
            f.write('error:{} {} \n'.format(e , datetime.now().strftime('%Y-%m-%d %H:%M:%S')))