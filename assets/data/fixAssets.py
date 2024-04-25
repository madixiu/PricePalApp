import json

# json_data_string = "[...]"
with open('/home/madix/Desktop/PricePal/assets/data/Assetdata.json') as f:
    data = json.load(f)
# Your JSON data here
# Create a dictionary with translations (English to Persian)
currency_translations = {
    "US Dollar": "دالر امریکا",
    "Euro": "یورو",
    "British Pound": "پوند انگلیس",
    "Swiss Franc": "فرانک سوئیس",
    "Canadian Dollar": "دالر کانادا",
    "Australian Dollar": "دالر آسترالیا",
    "Swedish Krona": "کرون سوئد",
    "Norwegian Krone": "کرون نروژ",
    "Russian Ruble": "روبل روسیه",
    "Thai Baht": "بات تایلند",
    "Singapore Dollar": "دالر سینگاپور",
    "Hong Kong Dollar": "دالر هانگ کنگ",
    "Azerbaijani Manat": "مانت آذربایجان",
    "Armenian Dram": "درام آرمنستان",
    "Danish Krone": "کرون دانمارک",
    "UAE Dirham": "درهم امارات",
    "Japanese Yen": "ین ژاپن",
    "Turkish Lira": "لیره ترکیه",
    "Chinese Yuan": "یوان چین",
    "KSA Riyal": "ریال عربستان سعودی",
    "Indian Rupee": "روپیه هند",
    "Ringgit": "رینگیت مالیزیا",
    "Afghan Afghani": "افغانی افغانستان",
    "Kuwaiti Dinar": "دینار کویت",
    "Iraqi Dinar": "دینار عراق",
    "Bahraini Dinar": "دینار بحرین",
    "Omani Rial": "ریال عمان",
    "Qatari Riyal": "ریال قطر"
}

# Load the JSON data
# data = json.loads(json_data_string)

# Add the translated values to each item in the JSON data
for item in data:
    if item["Currency"] in currency_translations:
        item["PersianName"] = currency_translations[item["Currency"]]

# Convert the updated data back to JSON
updated_json_data = json.dumps(data, indent=2)
# save the json file
with open('Assetdata.json', 'w') as outfile:
    outfile.write(updated_json_data)
print(updated_json_data)
