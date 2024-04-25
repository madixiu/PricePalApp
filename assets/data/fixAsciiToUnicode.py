import json

def fix_escape_sequences(s):
    return s.encode('ascii', 'backslashreplace').decode('unicode-escape')

# Read the JSON file and load its content
with open('Assetdata.json', 'r', encoding='utf-8') as file:
    json_content = file.read()

# Apply the fix_escape_sequences function to all string values in the JSON
fixed_json_content = json.dumps(json.loads(json_content), indent=2, ensure_ascii=False).replace('\\"', '"')
fixed_json_content = json.dumps(json.loads(fixed_json_content), indent=2, ensure_ascii=False).replace('\\"', '"')

print(fixed_json_content)
# Write the fixed content to a new JSON file
with open('Assetdata.json', 'w', encoding='utf-8') as file:
    file.write(fixed_json_content)
