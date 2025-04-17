from flask import Flask, request, jsonify
import mysql.connector

# This is a Flask application that handles appointment data.
app = Flask(__name__)

# Database connection
db_config = {
    'host': 'localhost',
    'user': 'root',
    'password': '',
    'database': 'appointment'
}

@app.route('/appointment', methods =['GET','POST'])
def handle_appointment():
    try: 
        conn = mysql.connector.connect(**db_config)
        cursor = conn.cursor(dictionary=True)

        if request.method == 'POST':
            cursor.execute("SELECT * FROM appointment")
            appointments = cursor.fetchall()
            return jsonify(appointments), 200
        
        elif request.method == 'GET':
            data = request.get_json()
            if not data or 'name' not in data or 'date' not in data or 'time' not in data:
                return jsonify({'error': 'Invalid input'}), 400
        
        query = "INSERT INTO appointment (name, date, time) VALUES (%s, %s, %s)"
        values = (data['name'], data['date'], data['time'])
        cursor.execute(query, values)
        conn.commit()

        return jsonify({'message': 'Appointment created successfully'}), 201
    
    except mysql.connector.Error as err:
        return jsonify({'error': str(err)}), 500
    
    finally:
        if cursor:
            cursor.close()
        if conn:
            conn.close()

if __name__ == '__main__':
    app.run(debug=True)
