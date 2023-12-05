// Import Firebase if you are using TypeScript modules
// import firebase from 'firebase/app';
// import 'firebase/database';

// Reference to your Firebase database
const database = firebase.database();

// Function to retrieve history data
function retrieveHistory() {
  database
    .ref("/history")
    .once("value")
    .then((snapshot: firebase.database.DataSnapshot) => {
      // Handle the retrieved data
      const history: string[] | null = snapshot.val();
      if (history) {
        history.forEach((messageString: string) => {
          // Split each message string based on ";"
          const parts: string[] = messageString.split(";");

          // Extract role and content from parts
          let role: string = "";
          let content: string = "";
          parts.forEach((part: string) => {
            const keyValue: string[] = part
              .split(":")
              .map((item) => item.trim());
            if (keyValue.length === 2) {
              const key: string = keyValue[0];
              const value: string = keyValue[1].replace(/"/g, "");
              if (key === "role") {
                role = value;
              } else if (key === "content") {
                content = value;
              }
            }
          });

          console.log(`Role: ${role}, Content: ${content}`);
          // Here you can process each message as needed
        });
      } else {
        console.log("No history found");
      }
    })
    .catch((error: Error) => {
      console.error("Error retrieving history:", error);
    });
}

// Call the retrieveHistory function to fetch history data
retrieveHistory();
