# Flask-rest-api-angular-ui

## Requirements
* NodeJS should be installed on the system
* Angular should be installed on the system
For successful launch of the app install pm2 package globally with this line: `npm install -g pm2`
##
Task was accomplished with help of Angular, Express, NodeJS, PM2, Flask
##
Programming language used: TypeScript, Python
##
* To start, clone repo to your machine
##
# How to launch UI:
* Navigate to `flask-rest-api-angular-ui` folder
* There you will find launcher.sh script
* Launch it with bash and give some time to build all app and serve it
* Navigate to http://localhost:5001 to open UI application
* UI app is being served by simple server developed for this purpose. Professional solution is preferred like NGINX.
* To kill PM2 processes and sto serving UI run `pm2 delete all`
##
In case pm2 and launch.sh script would fail for any reason. All apps can be launched in dev mode
* IMPORTANT: All three processes should be launched in different terminal windows
* For client app: navigate to client_ui folder and run command `npm install` and then `ng serve`
* Navigate to http://localhost:4200 to open UI application
* To stop app from running just close terminal window or kill processes. 
##
# How to launch API:
* Navigate to `flask-rest-api-angular-ui/rest-api-flask` folder
* Run `python main.py` It will launch API and will serve it on port `5000`

