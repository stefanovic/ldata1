// Import the necessary Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZCQE8jDySL4TvynJ0k_9VrVAZRkzNGtQ",
  authDomain: "newagent-c66c8.firebaseapp.com",
  databaseURL: "https://newagent-c66c8.firebaseio.com",
  projectId: "newagent-c66c8",
  storageBucket: "newagent-c66c8.appspot.com",
  messagingSenderId: "204289130764",
  appId: "1:204289130764:web:5dd1a5f9541352e9128929"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

function readAndDisplayData() {
  try {
    const dataRef = ref(database, '/');
    onValue(dataRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        updateUI(data);
      } else {
        console.log('No data available');
      }
    });
  } catch (error) {
    console.error('Error reading data:', error);
  }
}

function updateUI(data) {
  const newsContainer = document.getElementById('news-container');
  newsContainer.innerHTML = '';

  async function loopThroughNews() {
    for (const [newsKey, newsData] of Object.entries(data)) {
      const newsDiv = document.createElement('div');
      newsDiv.className = 'news-item';
      newsDiv.innerHTML = `<strong>${newsKey}</strong>: ${newsData.content}<br>Link: <a href="${newsData.link}" target="_blank">${newsData.link}</a>`;
      newsContainer.appendChild(newsDiv);

      // Trigger reflow to apply the initial styles
      void newsDiv.offsetWidth;

      // Apply the fade-in animation
      newsDiv.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 2000 });

      // Wait for a short delay before starting the fade-out animation
      await new Promise(resolve => setTimeout(resolve, 10000));

      // Apply the fade-out animation
      newsDiv.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 2000 });

      // Wait for the fade-out animation to complete
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Remove the element after the transition
      newsContainer.removeChild(newsDiv);
    }

    // After looping through all news, restart the loop
    await loopThroughNews();
  }

  // Start the initial loop
  loopThroughNews();
}

readAndDisplayData();

