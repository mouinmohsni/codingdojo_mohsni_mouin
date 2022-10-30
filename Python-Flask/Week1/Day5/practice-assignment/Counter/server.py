from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)

app.secret_key = 'this is my key'

# @app.route('/')
# def index():
#     return redirect("/")


@app.route('/')
def nb_user():
    if "counter" not in session :
        session['counter'] = 1
    else:
        session['counter'] = session['counter'] +1
    return  render_template("counter.html")

@app.route('/counter')
def nb_user_2():
    if "counter" not in session :
        session['counter'] = 1
    else:
        session['counter'] = session['counter'] +1
    return  render_template("counter.html")

@app.route('/res', methods=['POST'])
def reset():
    session.clear()

    return redirect("/")

# @app.route('/numbe')
# def nb_add():
#     return  


if __name__ == "__main__":
    app.run(debug=True)