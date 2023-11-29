const admin = require('firebase-admin');
const serviceAccount = require('./articumate-firebase-adminsdk-iqjjd-39bfc63c4d.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

async function addclient(clientData) {
  
  try {

    // Check if a client with the same name already exists
    const clientsRef = db.collection('client');
    const existingclients = await clientsRef.where('name', '==', clientData.name).get();

    if (!existingclients.empty) {
      console.log('A client with this name already exists.');
      return; // Skip adding the new client
    }

    // Add the new client
    const result = await clientsRef.add(clientData);
    console.log('Client added with ID:', result.id);

  } catch (error) {
    console.error('Error adding client:', error);
  }
}

const sampleClient1 = {
  name: "Jonas Amundsen",
  age: 8,
  goals: ["Reduce lisp", "Erradicate stutter", "Improve overall pronounciation of other sounds"],
  impairments: [
    {
      description: "Lisp (“s”, “z”)",
      skillLevel: 2
    },
    {
      description: "Stutter",
      skillLevel: 4
    }
  ]
};

const sampleClient2 = {
  name: "Thea Halvorsen",
  age: 5,
  goals: ["", ""],
  impairments: [
    {
      description: "",
      skillLevel: 2
    },
    {
      description: "",
      skillLevel: 4
    }
  ]
};

addclient(sampleClient1);
addclient(sampleClient2);