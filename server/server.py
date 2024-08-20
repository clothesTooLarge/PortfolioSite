from flask import Flask, jsonify
from flask_cors import CORS


app = Flask(__name__)
cors = CORS(app)
@app.route("/api/home", methods=['GET'])
def return_home():
    return jsonify({
        'message': "WELCOME"
    })

@app.route("/api/art", methods=['GET'])
def return_art():
    return jsonify({
        'message': "ART"
    })

@app.route("/api/contact", methods=['GET'])
def return_contact():
    return jsonify({
        'message': "CONTACT US"
    })

@app.route("/api/about", methods=['GET'])
def return_about():
    return jsonify({
        'message': "ClothesTooLarge is a practicing artist, indie game developer, and software engineer based in the United States. They have a proficiency in Photoshop, Clip Studio Paint, and Aesprite for art and using Unity for game development. They post updates and images of their work ocassionally on YouTube and Twitter."
    })

@app.route("/api/dev", methods=['GET'])
def return_dev():
    return jsonify({
        'message': "For Dev Use Only",

    })

if __name__ == "__main__":
    app.run(debug=True, port=8080)