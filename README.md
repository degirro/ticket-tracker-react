# Ticket Tracker React

![preview](https://i.imgur.com/upCzx5u.png)

This is the React project built from the ground up for the purpose of tracking tickets. To see the back-end project, see the [Ticket Tracker Nest repository](https://github.com/degirro/ticket-tracker-nest).

# Installation

Before you try to run this project locally, you must have both the React & NestJS project, as well as a SQL database. The project uses MySQL, but you can switch to another database like PostgreSQL very easily.

1. Clone this repository and install all dependencies.
2. Go to [Ticket Trackers Nest repository](https://github.com/degirro/ticket-tracker-nest) and follow all the instructions on setting up the backend.
3. Run the front-end project using the `start` script using either `npm`, `yarn`, etc.
4. Run the back-end project using the `start:dev` script using either `npm`, `yarn`, etc.
5. There is no landing page, the main routes are:
   - `/register` route to create an account
   - `/login` to login to the app
   - `/dashboard` is where all the workspaces will be displayed

# Additional Features Preview

Workspace page and user included in ticket notifications:
![preview](https://i.imgur.com/upCzx5u.png)

All user tickets:
![preview](https://i.imgur.com/KemYazk.png)

User added to workspace:
![preview](https://i.imgur.com/tYyzw1J.png)

# License

<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License</a>.

Under this license, you may not use this project for:

1. Commercial Purposes
2. Distributing this project after modifying it
3. You may not use this without appropriate attribution
