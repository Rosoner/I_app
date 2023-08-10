# I_app
Movies library - Usage

- Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

- This is REST service, created for educational purposes. A compiled bundle should be available with every exercise's resources. To execute it, run the included start.bat file, or manually open a command prompt and run `node server.js`.

- Note that changes to the data will not be persisted! All operations happen in memory and will be wiped when the service is restarted.

- Supported requests are GET, POST, PUT, PATCH, DELETE

- Authentication
        test user: peter@abv.bg /
        password: 123456

- Register
Create a new user by sending a POST request to /users/register with properties email and password. You can add any other property that you need, like username, avatar, etc. The service automatically creates a session and returns an authorization token, that can be used for requests.

- Login
Login by sending a POST request with email and password to /users/login. The service will respond with an object, containing a standard string token, that can be used for requests.

- Logout
Send an authorized GET request to /users/logout. 

- Get User Details
Send an authorized GET request to /users/me. The service will return the record of the user, associated with the passed-in session token.

