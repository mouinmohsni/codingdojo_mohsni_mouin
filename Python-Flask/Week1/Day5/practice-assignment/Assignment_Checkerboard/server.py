from distutils.log import debug
from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def index_1():
    
    return render_template("index.html",num_1=8,num_2=8,colo_1='green',colo_2='red')

@app.route('/4')
def index_2():
    
    return render_template("index.html",num_1=8,num_2=4,colo_1='green',colo_2='red')


@app.route('/<int:num_1>/<int:num_2>')
def index_3(num_1,num_2):
    
    return render_template("index.html",num_1=num_1,num_2=num_2,colo_1='green',colo_2='red')

@app.route('/<int:num_1>/<int:num_2>/<string:colo_1>/<string:colo_2>')

def index_4(num_1,num_2,colo_1,colo_2):
    return render_template("index.html",num_1=num_11,num_2=num_2,colo_1=colo_1,colo_2=colo_2)
















if __name__=="__main__":
    app.run(debug=True)
