import csv
import json

# Open the CSV file
with open('bonbast.csv', 'r') as csv_file:

    # Read the CSV file
    csv_reader = csv.DictReader(csv_file)

    # Convert each row into a dictionary
    # and add to data
    data = []
    for row in csv_reader:
        data.append(dict(row))

# Open a JSON file for writing  
with open('Assetdata.json', 'w') as json_file:
    
    # Write the JSON data
    json.dump(data, json_file)
