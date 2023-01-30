from flask import Flask,request
from flask_cors import CORS
from back.flask_sqlalchemy_simple.help.test import load_json, save_json

app = Flask(__name__)
CORS(app)

my_students=load_json()

@app.route("/add", methods=['POST'])
def add_student():
    data= request.get_json()
    
    my_students.append(data)
    save_json(my_students)
    return data

@app.route("/upd", methods=['POST'])
def upd_student():
    data= request.get_json()
    print(data["grades"])
    for stu in  my_students:
        if stu["name"] == data["name"]:
            print(stu["grades"])
            stu["grades"]= data["grades"]

    # my_students.append(data)
    save_json(my_students)
    return data


@app.route("/add_grade", methods=['POST'])
def add_grade():
    data= request.get_json()
    my_students.append(data)
    save_json(my_students)
    return my_students



@app.route("/clean")
def killthemall():
    save_json([])
    return load_json()

@app.route("/")
def start_site():
    return my_students

if __name__ == '__main__':
    app.run(debug=True)