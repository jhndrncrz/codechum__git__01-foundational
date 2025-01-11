# Pomofire

Pomofire is a productivity web application that combines a Pomodoro timer with a To-Do List. It helps users manage their tasks effectively while utilizing the Pomodoro technique to stay focused and avoid burnout.

## Features

- **Pomodoro Timer**: Customize focus and break durations to suit your workflow.
- **To-Do List**: Add, edit, delete, and mark tasks as completed.
- **User Authentication**: Secure login and signup powered by Supabase.
- **Data Persistence**: Save and sync tasks and settings across devices using Supabase as the backend.
- **Responsive Design**: Optimized for desktops, tablets, and mobile devices.

## Tech Stack

### Frontend
- Pure **HTML**, **CSS**, and **JavaScript** (no frameworks used).

### Backend
- **Supabase**: Provides Authentication and Database services.

### Hosting
- Any static hosting platform such as GitHub Pages, Vercel, or Netlify.

## Setup Instructions

### Prerequisites

1A Supabase account and a project set up.

### Steps

1. **Clone the Repository**:
    ```bash
    git clone <git repo>
    cd <cloned folder>
    ```

2. **Set Up Supabase**:
    - Create a new project in Supabase.
    - Set up the authentication system (email/password auth).
    - Create a database table for storing tasks with the structure specified in DATABASE.md.
    - Set up Row-Level Security (RLS) policies to ensure users can only access their own data.

3**Serve the App Locally (Optional)**:
    Use a live server to view the app in your browser, for example:
    ```bash
    npm run dev
    ```

5. **Deploy the App**:
    - Upload your project to GitHub and connect it to your preferred hosting platform.

## Usage

1. **Authentication**:
   - Sign up with your email and password.
   - Log in to access your saved tasks and settings.

2. **Pomodoro Timer**:
   - Start the timer to focus.
   - Automatically or manually switch between work and break sessions.

3. **To-Do List**:
   - Add new tasks with descriptive titles.
   - Mark tasks as completed or delete them when finished.
   - Sync tasks across devices.

## File Structure

```plaintext
pomofire/
├── index.html          # Main HTML file
├── styles/             # Global styles folder
│   └── style.css       # Main stylesheet
├── scripts/            # Global scripts folder
│   ├── app.js          # Core functionality
│   ├── pomodoro.js     # Pomodoro logic
│   ├── todo.js         # To-Do list logic
│   └── supabase.js     # Supabase integration
├── assets/             # Images and icons
├── pages/              # pages
└── README.md           # Project documentation
```

## Roadmap

- [ ] Implement basic task tracking features.
- [ ] Add support for customizable themes (light/dark mode).
- [ ] Implement analytics to track productivity.
- [ ] Introduce collaborative task-sharing features.

## Contributing

Contributions are welcome! If you find a bug or have a feature request, feel free to open an issue or submit a pull request.

## License

This project is currently not licensed under any license.

## Acknowledgments

- [Supabase](https://supabase.com/) for their incredible backend-as-a-service platform.
- The Pomodoro Technique for inspiring productivity.

---

Start staying productive with **Pomofire**! 🚀

## Note
This project is not intended for practical usage. This is primarily an experimental project for learning practical web development concepts. Do not use as for the time being. 