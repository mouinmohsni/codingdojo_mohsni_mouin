from flask_app.config.mysqlconnection import connectToMySQL



class Dojos:
    db_name ="dojos_and_ninjas_schema"
    def __init__(self,data):
        self.id_dojos = data['id_dojos']
        self.name_dojo = data['name_dojo']
        self.created_at = data["created_at"]
        self.updated_at = data['updated_at']

        #add dojo 

    @classmethod
    def save(cls, data ):
        query = "INSERT INTO dojos ( name_dojo , created_at, updated_at ) VALUES ( %(dojo_name)s , NOW() , NOW() );"
        # data is a dictionary that will be passed into the save method from server.py
        return connectToMySQL(cls.db_name).query_db( query, data )

    # sellect all dojos

    @classmethod
    def disp_all(cls) :
        query="SELECT * FROM dojos"
        all_dojos=  connectToMySQL(cls.db_name).query_db(query)
        DOJOS = []
        # Iterate over the db results and create instances of friends with cls.
        for  dojo in all_dojos:
            DOJOS.append( cls(dojo) )
        
        return DOJOS
