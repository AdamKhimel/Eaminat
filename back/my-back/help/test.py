import json
JSON_FILE="sample.json"

def save_json(dictionary):
    json_object = json.dumps(dictionary, indent=4)
    with open(JSON_FILE, "w") as outfile:
        outfile.write(json_object)

def load_json():
    with open(JSON_FILE, 'r') as openfile:
        json_lst = json.load(openfile)
    if (type(json_lst)) == list:
        return json_lst
    return []
    
# my_students= load_json()
# my_students.append({"name":"waga","email":"ba@ga.com","grades":[]})

# for stu in my_students:
#     if(len(stu["grades"])):
#         print(stu["grades"])
# save_json(my_students)
# print(load_json())

