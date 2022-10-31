from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = 'this is my key'
@app.route('/')
def index():
    return render_template("index.html")

@app.route('/user_info', methods=['POST'])
def create_user():
    session['user_name'] = request.form['user_name']
    session['user_select_1']= request.form['select_1']
    session['user_select_2']= request.form['select_2']
    session['user_comments']= request.form['comments']
    return redirect("/results") 

@app.route('/results' )
def info_user():
    
    return render_template("/results.html") 

@app.route('/rese', methods=['POST'])
def reset():
    session.clear()

    return redirect("/")






if __name__ == "__main__":
    app.run(debug=True)