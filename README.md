# Storefront Backend Project
###
1. You need to install dependencies of project by using `npm i` 
2. Please do the migration by using `db-migration up` , it will help you create 3 tables that used in project.
3. To see the testing , please run `npm run test` and review the out put of testing.
4. To run the application, please try with `npm run watch` will start the dev and use postman to test endpoints.
5. PORT that backend running is on localhost:3000 and db is localhost:5432
6. I do not have handler folder , all the handlers for routes are in the models folders.
7. folder middle has the authenticate method to check the token.
###
I have add one middleware for checking token in the folder middleware
# Environment variable are : 
POSTGRES_HOST=127.0.0.1
POSTGRES_DB=udacity
POSTGRES_USER=udacityuser
POSTGRES_PASSWORD=admin123
POSTGRES_DB_TEST=fantasy_worlds

BCRYPT_PASSWORD = udacity-bcrypt
SALT_ROUND= 5

SECRET_TOKEN = helloUdacity!
ENV = dev
