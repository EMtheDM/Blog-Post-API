# Back-End-API:
  Backend API for Hatchways.
  
### Summary:
 - This application contains the results of a backend-challenge from Hatchways.
 - The challenge is entirely focused on the backend and uses an external API. Because of this, I have not used my own databases.
 - tests are found in test/test-page.js

### Requirements:

```
Node 16.14.0
Nodemon 2.0.15
```

### Steps to Operate
- In the terminal and within the project directory run `npm install`
- This server will run on `PORT=3001`
- Run `npm run start` to start the server, which will be at `localhost:3001`
- Ping result will be found at localhost:3001/api/ping
- Posts result will be found at localhost:3001/api/posts/:tags/:sortBy?/:direction?
- For example you main insert http://localhost:3001/api/posts/history,tech/likes/desc to get a result.
Or simply http://localhost:3001/api/posts/history,tech
- Run `npm run test` to see the passing tests in the terminal
- I used Insomnia to verify routes were working properly.