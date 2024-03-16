from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
import time
import os
import pandas as pd


def get_currency():
    driver=webdriver.Chrome()
    driver.get("https://www.bonbast.com")
    #maximize the window
    driver.maximize_window()
    All_items=[]
    iter=len(driver.find_elements(By.XPATH,'//tr'))

    for i in (driver.find_elements(By.XPATH,'//tr')):
        item=[]
        for k in (i.find_elements(By.XPATH,'.//td')):
            item.append(k.text)
        All_items.append(item)
    DF=pd.DataFrame(All_items)
    DF.columns=DF.iloc[0]
    DF=DF.iloc[1:]
    DF.to_csv('bonbast.csv',index=False)
    driver.quit()


def get_item_data_req(item_id):
    headers = {
        'authority': 'core.snapp.market',
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'en,en-US;q=0.9,de;q=0.8,sm;q=0.7,fa;q=0.6',
        'cache-control': 'no-cache',
        'origin': 'https://m.snapp.market',
        'pragma': 'no-cache',
        'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Linux"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    }

    params = {
        'platform': 'PWA',
    }

    response = requests.get('https://core.snapp.market/api/v1/vendors/p5r9nv/products/{}'.format(str(item_id)), params=params, headers=headers)
    return response

def get_item_data(item_id):
    response = get_item_data_req(item_id)
    DF=pd.DataFrame([json.loads(response.text)['product']])
    DF2=pd.DataFrame(json.loads(response.text)['related'])
    DF3=pd.concat([DF,DF2],ignore_index=True)
    return DF3



def get_snapp():
    ### Categories
    item_ids=[3532353,3668627,3582106,3543321,3667303]
    All_DFs=[]
    for _id in item_ids[:]:
        All_DFs.append(get_item_data(_id))
    pd.concat(All_DFs)[['title','pureTitle','subtitle','discounted_price','price']].to_csv('snapp.csv',index=False)
if __name__=='__main__':
    get_currency()
    get_snapp()
