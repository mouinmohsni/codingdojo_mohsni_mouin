from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def hello_world():
    return render_template('index.html')

@app.route('/home')
def home ():
    return render_template('index.html', phrase="hello", times=5)

@app.route('/home/<name>')
def home_2 (name):
    
    return 

@app.route('/hello/<name>') # for a route '/hello/____' anything after '/hello/' gets passed as a variable 'name'
def hello(name):
    print(name)
    return "Hello, " + name





if __name__=="__main__":
    app.run(debug=True)