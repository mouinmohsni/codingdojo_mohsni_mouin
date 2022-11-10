from flask_app.config.mysqlconnection import connectToMySQL

class Ninjas:
    db_name ="dojos_and_ninjas_schema"
    def __init__(self,data):
        self.id_ninja = data['id_ninja']
        self.first_name_ninja = data['first_name_ninja']
        self.last_name_ninja = data['last_name_ninja']
        self.age_ninja = data['age_ninja']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.dojo_id = data['dojo_id']

    #add ninja
    @classmethod
    def save(cls, data ):
        print(data)
        query = "INSERT INTO ninjas ( first_name_ninja , last_name_ninja, age_ninja , created_at, updated_at , dojo_id ) VALUES ( %(first_name_ninja)s , %(last_name_ninja)s , %(age_ninja)s , NOW() , NOW() ,%(dojo_id)s );"
        # data is a dictionary that will be passed into the save method from server.py
        return connectToMySQL(cls.db_name).query_db( query, data )

    @classmethod
    def select(cls, data):
            query = "SELECT * FROM ninjas LEFT JOIN dojos ON id_dojos = dojo_id where id_dojos= %(id_dojos)s;"
            all_ninjas=connectToMySQL(cls.db_name).query_db( query, data )
            return all_ninjas

