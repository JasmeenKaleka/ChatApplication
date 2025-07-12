💬 ChatApp – Real-Time Themed Chat Application
ChatApp is a modern, browser-based real-time messaging interface built using HTML, CSS, and JavaScript. It provides users with a seamless and user-friendly interface to log in, choose or create chat rooms, and exchange messages with markdown formatting.

🚀 Features
✅ Login Page with Theme Toggle

✅ Chat Room Selector with Dynamic Room Creation

✅ Real-Time Chat Interface (integrated with socket.io)

✅ Markdown Formatting: Bold, Italic, Links

✅ Custom Themes (Blue, Green, Pink, Yellow, Lavender)

✅ Font Size Selection

✅ Dark Mode Toggle 🌙

✅ Scrollable, Auto-Updating Chat View

📁 Project Structure
chatapp/
├── index.html        ← Login screen
├── chatlist.html     ← Room selection interface
├── chatroom.html     ← Main chat interface
└── README.md         ← You're here!
🖥️ How to Use
1. Login Page (index.html)
Enter a username to begin chatting.

Click Login to proceed to room selection.

Use the Theme Toggle (☀/🌙) to switch between light and dark modes.

The username is stored in sessionStorage.

2. Chat Room Selector (chatlist.html)
Choose an existing room (e.g., General, Gaming) or

Click ＋ to create a new room.

Select Font Size or toggle Dark Mode via the navigation bar.

The room name is saved in sessionStorage.

3. Chat Interface (chatroom.html)
Displays the current room and all sent messages.

Users can:

Type messages using the text box.

Press Enter to send (or Shift+Enter for a new line).

Use formatting tools:

B → bold text

I → italic text

🔗 → insert hyperlink [text](url)

Chatbox auto-scrolls with new messages.

Supports live markdown parsing and XSS protection.

Customize font size, background color theme, or toggle dark mode from the top navigation bar.

✨ Markdown Support
Syntax	Result
**text**	bold
*text*	italic
[text](https://link.com)	text

🔐 Session Control
If no username or room is found in sessionStorage, users are redirected to login.

No backend authentication is implemented — for demonstration purposes only.

🧪 Tech Stack
HTML5

CSS3 (Dark mode, responsive layout, themes)

JavaScript (Vanilla)

sessionStorage for session management

(Optional: socket.io used in chatroom.html for real-time updates)

📌 Notes
Make sure a Node.js server is running with Socket.io support if you wish to enable real-time chat.

This is a front-end project and may be connected with a backend (like Node.js + Express + Socket.io) for production use.

The socket.io CDN is already included in chatroom.html.

📱 Responsive Design
All pages are designed to be responsive and mobile-friendly. The layout adjusts for screen sizes using flex and grid systems.

🙌 Author & Purpose
This project was developed as part of an internship task submission to demonstrate front-end skills, session handling, user interaction, and chat formatting techniques.

