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
        
    @classmethod
    def save(cls, data ):
        query = "INSERT INTO users ( first_name , last_name , email , created_at, updated_at ) VALUES ( %(first_name)s , %(last_name)s , %(email)s , NOW() , NOW() );"
        # data is a dictionary that will be passed into the save method from server.py
        return connectToMySQL(User.db_name).query_db( query, data )
    
    @classmethod
    def disp_all(cls) :
        query="SELECT * FROM users"
        all_users=  connectToMySQL(User.db_name).query_db(query)
        USERS = []
        # Iterate over the db results and create instances of friends with cls.
        for user in all_users:
            USERS.append( cls(user) )
        
        return USERS
        



