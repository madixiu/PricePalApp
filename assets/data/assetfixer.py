import json
with open('url.json') as f:
    urls = json.load(f)

url = ''
for item in urls:
    for key in list(item.keys()):
        if key != 'Code':
            del item[key]
    item['ImageUrl'] = "../assets/flags/"+ item['Code']+".png"
# print(urls)

Codes = ['USD', 'EUR', 'GBP', 'CHF', 'CAD', 'AUD', 'SEK', 'NOK', 'RUB', 'THB', 'SGD', 'HKD', 'AZN', 'AMD', 'DKK', 'AED', 'JPY', 'TRY', 'CNY', 'SAR', 'INR', 'MYR', 'AFN', 'KWD', 'IQD', 'BHD', 'OMR', 'QAR']
bundledImages = {

}

for item in Codes:
    bundledImages[item] = "../assets/flags/"+ item+".png"

print(bundledImages)

final = {'USD': '../assets/flags/USD.png', 'EUR': '../assets/flags/EUR.png', 'GBP': '../assets/flags/GBP.png', 'CHF': '../assets/flags/CHF.png', 'CAD': '../assets/flags/CAD.png', 'AUD': '../assets/flags/AUD.png', 'SEK': '../assets/flags/SEK.png', 'NOK': '../assets/flags/NOK.png', 'RUB': '../assets/flags/RUB.png', 'THB': '../assets/flags/THB.png', 'SGD': '../assets/flags/SGD.png', 'HKD': '../assets/flags/HKD.png', 'AZN': '../assets/flags/AZN.png', 'AMD': '../assets/flags/AMD.png', 'DKK': '../assets/flags/DKK.png', 'AED': '../assets/flags/AED.png', 'JPY': '../assets/flags/JPY.png', 'TRY': '../assets/flags/TRY.png', 'CNY': '../assets/flags/CNY.png', 'SAR': '../assets/flags/SAR.png', 'INR': '../assets/flags/INR.png', 'MYR': '../assets/flags/MYR.png', 'AFN': '../assets/flags/AFN.png', 'KWD': '../assets/flags/KWD.png', 'IQD': '../assets/flags/IQD.png', 'BHD': '../assets/flags/BHD.png', 'OMR': '../assets/flags/OMR.png', 'QAR': '../assets/flags/QAR.png'}