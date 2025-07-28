from flask import Flask
import firebase_admin
from firebase_admin import credentials, firestore

app = Flask(__name__)

@app.route("/")
def home():
    return "Hello from Flask!"

if __name__ == "__main__":
    app.run(debug=True) 