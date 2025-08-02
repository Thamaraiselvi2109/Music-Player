Part 1: UI Design & Functionality (40 minutes)
Requirements:

Layout:

The page should have a navbar at the top with the following links: "Home", "Library", "Settings".
Below the navbar, create a music player interface that includes the following elements:

Album Art (a circular placeholder for an album cover).
Song Title and Artist Name displayed clearly.
A progress bar showing the current playtime and total duration of the song.
Play/Pause Button that toggles the music state.
Next and Previous buttons to navigate through songs.
Below the controls, there should be a volume slider and a shuffle button to toggle between shuffled play order.
Interactivity:

Clicking the Play/Pause Button should toggle between playing and pausing the audio.
Clicking the Next and Previous buttons should switch to the next or previous song in a hardcoded song list.
Clicking the Shuffle button should randomize the song order.
Implement a dark mode toggle that affects the background and text colors across the page.
Design:

The design should follow modern design principles: clean typography, intuitive spacing, and clear visual hierarchy.
The progress bar should visually indicate the song's progress. It should update in real time as the song plays.
Ensure that the play/pause buttons and other controls are large enough for touch-friendly interaction.
Data:

Use mock data for the songs. Each song can have:

Song title (e.g., "Song Title")
Artist name (e.g., "Artist Name")
Duration (e.g., "3:30" or "180 seconds")
An album cover (use an image URL or placeholder)
You can use a simple array of objects to represent the playlist.
Part 2: Code Quality & Structure (20 minutes)
Requirements:

Component Structure:

Break the UI into reusable components (e.g., Navbar, PlayerControls, ProgressBar, SongCard, etc.).
Each component should have a clear and single responsibility.
The app should have a clean and logical component hierarchy, with the player being a central component that holds the state.
State Management:

Use React hooks for managing state (e.g., useState, useEffect, etc.).
Manage the state for:

Current song (title, artist, duration, etc.)
Play/Pause state
Volume state
Shuffle state
Progress bar state (current time and total time)
Ensure smooth transitions between songs when Next or Previous are clicked.
Styling:

Use CSS-in-JS (styled-components, Emotion, or any preferred library) to style your components.
Layout should be flexible, using flexbox or grid. Avoid hardcoded pixel values—use relative units like rem or em.
Responsiveness:

The layout should adapt to different screen sizes (e.g., switch to a mobile-friendly version on smaller screens).
Ensure that controls (play/pause buttons, progress bar) are appropriately sized for mobile.
Bonus (Optional):
Animations:

Add smooth transitions or animations when switching between songs (e.g., fade-in/fade-out effect for song titles or album art).
State Persistence:

Implement a way to persist the current song and playback state (e.g., use localStorage to save the current song and playback position).
Song Duration:

Display the current playback time (e.g., "1:30") and total song duration next to the progress bar.
Submission Guidelines:
Code: Submit your code via GitHub or a similar code sharing platform.