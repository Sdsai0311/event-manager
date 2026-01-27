# College Event Portal

A web-based event management system for colleges with QR code generation, user authentication, and certificate distribution.

## Features

- **User Authentication**: Login and registration for students and admins
- **Event Management**: Create and manage college events
- **QR Code Generation**: Generate QR codes for event attendance tracking
- **Event Registration**: Students can register for events
- **Certificate Generation**: Download participation certificates in PDF format
- **Responsive Design**: Works on desktop and mobile devices

## Project Structure

```
├── index.html          # Home page
├── login.html          # Login page
├── register.html       # User registration page
├── admin.html          # Admin dashboard
├── student.html        # Student dashboard
├── certificate.html    # Certificate download page
├── firebase.js         # Firebase configuration and initialization
├── auth.js             # Authentication functions
├── events.js           # Event management functions
├── attendance.js       # QR code generation functions
├── certificate.js      # Certificate generation functions
├── style.css           # Global styles
└── README.md          # Project documentation
```

## Setup Instructions

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Firebase account
- Internet connection

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Sdsai0311/event-manager.git
cd event-manager
```

2. Configure Firebase:
   - Create a Firebase project at https://console.firebase.google.com
   - Get your Firebase configuration
   - Update `firebase.js` with your Firebase credentials:
```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

3. Open `index.html` in your browser or serve it using a local server:
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (http-server)
npx http-server
```

4. Navigate to `http://localhost:8000` (or the configured port)

## Usage

### For Students

1. Register a new account on the registration page
2. Login with your credentials
3. View available events on the dashboard
4. Register for events
5. Download your participation certificate from the certificate page

### For Admins

1. Login with admin credentials
2. Access the admin dashboard
3. Create new events by filling in the event details
4. Generate QR codes for event attendance tracking
5. Monitor event registrations

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Firebase (Firestore, Authentication)
- **Libraries**:
  - QRCode.js - QR code generation
  - jsPDF - PDF certificate generation
  - Firebase SDK - Backend services

## Error Handling

The application includes comprehensive error handling:
- Input validation for all forms
- Try-catch blocks for critical functions
- User-friendly error messages
- Console logging for debugging

## Security Notes

- Keep your Firebase credentials secure
- Use environment variables for sensitive data in production
- Validate all user inputs
- Use Firebase security rules to protect your database

## Features in Detail

### QR Code Generation
- Generates unique QR codes for each event
- QR codes can be scanned for attendance tracking
- Automatic encoding of event IDs

### Certificate Generation
- Custom PDF certificates with student names
- Includes date and event information
- One-click download functionality

### Event Management
- Create events with title, date, and venue
- Real-time event listing
- Student registration tracking

## Troubleshooting

### Firebase Connection Issues
- Verify your Firebase configuration in `firebase.js`
- Check internet connection
- Ensure Firebase project is active

### QR Code Not Displaying
- Check that QRCode.js library is loaded
- Ensure container element exists with id "qrcode"
- Check browser console for errors

### Certificate Generation Fails
- Ensure jsPDF library is loaded
- Verify user is logged in
- Check Firebase connection

## Future Enhancements

- Email notifications for event updates
- Advanced analytics dashboard
- Event capacity management
- Attendance tracking with QR scanning
- Multiple certificate templates
- Bulk email certificate distribution
- Payment integration for paid events

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the MIT License.

## Support

For issues, questions, or suggestions, please create an issue in the repository or contact the development team.

---

**Last Updated**: January 27, 2026
**Version**: 1.0.0
