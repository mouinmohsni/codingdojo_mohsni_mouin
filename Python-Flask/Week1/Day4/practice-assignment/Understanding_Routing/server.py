
from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello ():
    return "Hello Word"

@app.route('/dojo')
def dojo ():
    return  "Dojo"

@app.route('/say/<name>')
def say_name(name):
    return f" hi {name.capitalize()} !"



@app.route('/repeat/<int:number>/<string:name>')
def repeat_35(name, number):
    return f" hi {name.capitalize()*number}\n !"










if __name__=="__main__":
    app.run(debug=True)


#     @app.route('/repeat/35/<string:name>')
# def repeat_35(name):
    
#     arr=""
#     for i in range (0,35):
#         arr+= name

#     return arr