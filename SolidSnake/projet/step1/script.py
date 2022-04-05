import json

def load_json(file_name):
    with open(file_name, 'r') as f:
        return json.load(f)

step1 = load_json("step1.json")