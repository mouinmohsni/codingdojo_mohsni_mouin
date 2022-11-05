from flask_app.config.mysqlconnection import connectToMySQL

class User:
    db_name='users_shema'
    def __init__(self,data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']


        #-------------------------query for add youser
    @classmethod
    def save(cls, data ):
        query = "INSERT INTO users ( first_name , last_name , email , created_at, updated_at ) VALUES ( %(first_name)s , %(last_name)s , %(email)s , NOW() , NOW() );"
        # data is a dictionary that will be passed into the save method from server.py
        return connectToMySQL(User.db_name).query_db( query, data )


    #-----------------------query for select all users
    @classmethod
    def disp_all(cls) :
        query="SELECT * FROM users"
        all_users=  connectToMySQL(User.db_name).query_db(query)
        USERS = []
        # Iterate over the db results and create instances of friends with cls.
        for user in all_users:
            USERS.append( cls(user) )
        
        return USERS
        #--------------------- qurey for select one user
    @classmethod
    def get_one(cls,data):
        query = "SELECT * FROM users WHERE users.id = %(id)s;"
        user_from_db = connectToMySQL(User.db_name).query_db(query,data)
        print(user_from_db)
        return cls(user_from_db[0])
    
    #------------------ query for delete user
    @classmethod
    def destroy(cls,data):
        query = "DELETE FROM users WHERE id = %(id)s;"
        return connectToMySQL(User.db_name).query_db(query,data)
    
    #---------------------- query for update unser
    @classmethod
    def update(cls,data):
        query = "UPDATE users SET first_name=%(first_name)s, last_name=%(last_name)s, email=%(email)s,updated_at = NOW() WHERE id = %(id)s;"
        return connectToMySQL(User.db_name).query_db(query,data)




