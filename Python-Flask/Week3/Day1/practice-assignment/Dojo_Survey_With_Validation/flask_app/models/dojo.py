from flask_app.config.mysqlconnection import connectToMySQL




class Dojo:
    db_name='dojo_survey_schema.dojos'
    def __init__(self,data):
        self.id = data['id']
        self.name = data['name']
        self.location = data['location']
        self.language = data['language']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        
    @classmethod
    def save(cls, data ):
        query = "INSERT INTO users (name , location , language ,language , created_at, updated_at ) VALUES ( %(first_name)s , %(location)s , %(language)s , %(language)s NOW() , NOW() );"

        return connectToMySQL('users_schema').query_db( query, data )

    @staticmethod
    def validate_dojo(dojoo):
        is_valid = True # we assume this is true
        if len(dojoo['name']) < 3:
            flash("Name must be at least 3 characters.")
            is_valid = False
        if len(dojoo['language']) < 1:
            flash("choose a language")
            is_valid = False
        # if int(burger['calories']) < 200:
        #     flash("Calories must be 200 or greater.")
            # is_valid = False
        if len(dojoo['location']) < 1:
            flash("choose a location.")
            is_valid = False
        if len(dojoo['location']) < 1:
            flash("choose a location.")
            is_valid = False
        if len(dojoo['comment']) < 5:
            flash("choose a location.")
            is_valid = False
        return is_valid