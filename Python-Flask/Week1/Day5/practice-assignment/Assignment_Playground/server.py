from flask import Flask, render_template
app = Flask(__name__)



@app.route('/')
def index():
    return render_template("index.html")


@app.route('/play')
def test_1 ():
    return render_template("index.html",num=3,color="green")


@app.route('/play/<int:num>')
def test_2 (num):
    return render_template("index.html",num=num,color="green")

@app.route('/play/<int:num>/<string:color>')
def test_3 (num, color):
    return render_template("index.html",num=num,color=color)


if __name__=="__main__":
    app.run(debug=True)