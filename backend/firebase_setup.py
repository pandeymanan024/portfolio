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

# add jd document to firebase db
def add_jd_document():
    doc_ref = db.collection('jd').document('jdDoc')
    doc_ref.set({
        'message': 'Graduate Student Course Assistant This position is for Stevens students currently enrolled. Must have a fulltime status. Bachelors Degree required. This is a part-time hourly position.'
    })

# add education options to firebase db
def add_education_options():
    education_options = ['Bachelors', 'Masters', 'Doctors', 'PhD']
    
    for option in education_options:
        doc_ref = db.collection('education_options').document(option.lower())
        doc_ref.set({
            'name': option,
            'value': option.lower()
        })
    
    print(f"Added {len(education_options)} education options to Firestore.")

if __name__ == "__main__":
    add_education_options()
    print("Education options added to Firestore.")
    