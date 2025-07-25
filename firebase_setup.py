import firebase_admin
from firebase_admin import credentials, firestore

# Replace 'serviceAccountKey.json' with the path to your Firebase service account key file
cred = credentials.Certificate('serviceAccountKey.json')
print(cred)
firebase_admin.initialize_app(cred)
db = firestore.client()

# Example usage: add a document to a collection
def add_example_document():
    doc_ref = db.collection('examples').document('exampleDoc')
    doc_ref.set({
        'message': 'Hello from Firestore!'
    })

if __name__ == "__main__":
    add_example_document()
    print("Document added to Firestore.")
    