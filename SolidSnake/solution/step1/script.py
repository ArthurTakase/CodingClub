import json

def load_json(file_name):
    with open(file_name, 'r') as f:
        return json.load(f)

step1 = load_json("step1.json")
nbMove = 0

print(step1)

for i in range(len(step1) - 1):
    if step1[i] < step1[i + 1]:
        nbMove += 1

print(nbMove)