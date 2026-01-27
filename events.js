function createEvent() {
  try {
    if (!title.value || !date.value || !venue.value) {
      alert("Please fill in all event fields");
      return;
    }
    db.collection("events").add({
      title: title.value,
      date: date.value,
      venue: venue.value,
      createdAt: new Date()
    }).then(() => {
      title.value = '';
      date.value = '';
      venue.value = '';
      alert("Event created successfully");
    }).catch(error => {
      console.error('Error creating event:', error);
      alert("Error: " + error.message);
    });
  } catch (error) {
    console.error('Create event function error:', error);
  }
}

function loadEvents() {
  try {
    const eventsContainer = document.getElementById('events');
    if (!eventsContainer) {
      console.error('Events container not found');
      return;
    }
    db.collection("events").onSnapshot(snap => {
      eventsContainer.innerHTML = "";
      snap.forEach(doc => {
        eventsContainer.innerHTML += `
          <div class="event-item">
            <p><strong>${doc.data().title}</strong></p>
            <p>Date: ${doc.data().date}</p>
            <p>Venue: ${doc.data().venue}</p>
            <button onclick="generateQR('${doc.id}')">Generate QR</button>
          </div>`;
      });
    }, error => {
      console.error('Error loading events:', error);
    });
  } catch (error) {
    console.error('Load events function error:', error);
  }
}

// Load events when script is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadEvents);
} else {
  loadEvents();
}
