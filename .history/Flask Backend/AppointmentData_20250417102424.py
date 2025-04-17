from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/appointment', methods =['GET','POST'])
def handle_data():
    if request.method == 'GET':
        data = {'name':'',
                'date':'',
                'time':'',
                }
        return jsonify(data)
        

if app == None:
    app = Flask(__name__)

