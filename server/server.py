from flask import Flask, jsonify
from flask_cors import CORS


app = Flask(__name__)
cors = CORS(app)
@app.route("/api/home", methods=['GET'])
def return_home():
    return jsonify({
        'message': "Welcome"
    })

@app.route("/api/art", methods=['GET'])
def return_art():
    return jsonify({
        'message': "Art"
    })

@app.route("/api/contact", methods=['GET'])
def return_contact():
    return jsonify({
        'message': "Contact Us"
    })

@app.route("/api/about", methods=['GET'])
def return_about():
    return jsonify({
        'message': "About Us"
    })

@app.route("/api/dev", methods=['GET'])
def return_dev():
    return jsonify({
        'message': "For Dev Use Only"
    })

if __name__ == "__main__":
    app.run(debug=True, port=8080)