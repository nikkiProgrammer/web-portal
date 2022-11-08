# Instructions to run the web portal application

## Front-end
- Open the VS Code terminal.
- Go to the directory of the web portal: `cd my-web-portal` 
- Install the node package manager: `npm install` 
- To load the web portal application: `ng serve` 
- Go to browser and enter in the url: `localhost:4200`

## Back-end
- Open a second terminal in the VS Code.
- Go to the back-end directory of the portal: `cd portal-backend`
- Add the .env file in the root directory.
- Inside the .env file add the secret: `JWT_SECRET="secret text here"`, `MONGOURI="mongodb uri to connect your database"` and `PORT="8080"`
- Install the node package manager: `npm install`
- To run the backend of the web portal: `npm run dev` 

