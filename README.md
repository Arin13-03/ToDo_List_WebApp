# ToDo_List_WebApp
This ToDo_List_WebApp project is a Website where users can store their ToDo's.
You can create, edit and delete your ToDo's. 

- Write your task and click on + button to **create**.
- Click on pencil button to **edit** your existing task.
- Click the checkbox to instantly **delete** your task.

Have a look at the Images:
## Images

![Dashboard Window](https://github.com/Arin13-03/Secrets_WebApp/assets/118659151/ba3c202b-efd6-4791-8302-f5b7a039224d)

Let's look at the requirements and simple steps to use it.

## Requirements:
1. VS Code in your local machine.
2. PostgreSQL installed (preferably pgAdmin).
3. node should be installed.

## Steps To use:
1. Clone it to your local machine.
2. Open CLI and change the directory where you have stored the project.
3. In CLI type:
   
 ```bash
 npm i
 ```

(as I have already put all the required dependencies).

4. Open pgAdmin and create a new database of any name you like.
5. Copy the code from **query.sql** and paste it into your query tool in pgAdmin. 
  > (Do check you are in your database root directory).
6. Type:

```bash
npm i nodemon
```

(for faster server restart on save).

7. At last start your server through:

    ```bash
    nodemon index.js
    ```
