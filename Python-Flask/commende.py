#---------------- creation dossier 

ls
mkdir code_rev
cd Dojo_Survey_With_Validation/
pipenv install PyMySQL flask
touch server.py
mkdir flask_app
cd flask_app/
mkdir config controllers models static templates 
touch __init__.py
ls
cd config/
ls
touch mysqlconnection.py
cd..
cd controllers/
touch users.py
cd ..
cd models/
touch user.py
cd ..
cd static/
mkdir css js
cd ..
cd templates/
touch index.html
cd ..
cd ..
code .


#--------------------------------server.py-------------------------------------------
# from flask_app import app
# from flask_app.controllers import users

# if __name__ == "__main__":
#     app.run(debug=True) 

#---------------------flask_app/config/mysqlconnection.py-------------------

# # a cursor is the object we use to interact with the database
# import pymysql.cursors
# # this class will give us an instance of a connection to our database
# class MySQLConnection:
#     def __init__(self, db):
#         # change the user and password as needed
#         connection = pymysql.connect(host = 'localhost',
#                                     user = 'root', 
#                                     password = 'root', 
#                                     db = db,
#                                     charset = 'utf8mb4',
#                                     cursorclass = pymysql.cursors.DictCursor,
#                                     autocommit = True)
#         # establish the connection to the database
#         self.connection = connection
#     # the method to query the database
#     def query_db(self, query, data=None):
#         with self.connection.cursor() as cursor:
#             try:
#                 query = cursor.mogrify(query, data)
#                 print("Running Query:", query)
    
#                 cursor.execute(query, data)
#                 if query.lower().find("insert") >= 0:
#                     # INSERT queries will return the ID NUMBER of the row inserted
#                     self.connection.commit()
#                     return cursor.lastrowid
#                 elif query.lower().find("select") >= 0:
#                     # SELECT queries will return the data from the database as a LIST OF DICTIONARIES
#                     result = cursor.fetchall()
#                     return result
#                 else:
#                     # UPDATE and DELETE queries will return nothing
#                     self.connection.commit()
#             except Exception as e:
#                 # if the query fails the method will return FALSE
#                 print("Something went wrong", e)
#                 return False
#             finally:
#                 # close the connection
#                 self.connection.close() 
# # connectToMySQL receives the database we're using and uses it to create an instance of MySQLConnection
# def connectToMySQL(db):
#     return MySQLConnection(db)
# ----------------------------flask_app/controllers/____.py-----------------------
# from flask_app import app
# from flask import render_template, redirect, request, session
# from flask_app.models.___ import Class


# @app.route('/')
# def index():
#     return  render_template("index.html")

# ----------------------------flask_app/models/____.py-----------------------
# from flask_app.config.mysqlconnection import connectToMySQL

# exemple  :


# class User:
#     db_name='users_schema'
#     def __init__(self,data):
#         self.id = data['id']
#         self.first_name = data['first_name']
#         self.last_name = data['last_name']
#         self.email = data['email']
#         self.created_at = data['created_at']
#         self.updated_at = data['updated_at']
        
#     @classmethod
#     def save(cls, data ):
#         query = "INSERT INTO users ( first_name , last_name , email , created_at, updated_at ) VALUES ( %(first_name)s , %(last_name)s , %(email)s , NOW() , NOW() );"
#         # data is a dictionary that will be passed into the save method from server.py
#         return connectToMySQL('users_schema').query_db( query, data )
# ----------------------------models/__init__.py-----------------------
# from flask import Flask
# app = Flask(__name__)

# app.secret_key = 'this is my key'






