from flask_app import app
from flask import render_template, redirect, request, session
from flask import flash
from flask_app.models.user import User
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)


@app.route('/')
def index():
    return  render_template("index.html")
#------------------------------------------------------------------route to check an add  information in data base
@app.route('/add' , methods=['POST'] )
def add_user():
    print(request.form)
    if not User.validate_register(request.form):                # function validation to verifail all input
        print('************')
        return redirect('/')
    
    pw_hash = bcrypt.generate_password_hash(request.form['password'])
    print(pw_hash)
    
    data ={                                                    # put info form in data 
        "first_name": request.form['first_name'],
        "last_name": request.form['last_name'],
        "email": request.form['email'],
        "password": pw_hash,
        "conf_password": request.form['conf_password'],
    }
    id = User.save(data)                                        # insert in user data base
    session['user_id'] = id                                     # insert id user in session 

    return redirect('/dash')

#-------------------------------------------------------------------------route login
@app.route('/login', methods=['POST'])
def login():

    data = { "email" : request.form["email_login"] }
    user_in_db = User.get_one_by_email(data)
    print(request.form)
    print(f"*********" ,user_in_db.password)
    
    if not user_in_db:
        flash("Invalid Email")
        return redirect("/")
    if not bcrypt.check_password_hash(user_in_db.password,request.form['Password_login']):
        flash("Invalid Password")
        return redirect('/')
    session['user_id'] = user_in_db.id
    return redirect("/dash")


#-------------------------------------------------------------------------route to go  dashbord
@app.route('/dash')
def dash():

    if 'user_id' not in session:                                  #check if i in session or not
        return redirect('/logout')
    
    data ={'id': session['user_id']}                              # put user id to session in data 
    one_user = User.get_one_by_id(data)                           # get information of user by id 

    return  render_template("dashbord.html", one_user=one_user)

@app.route('/logout')
def logout():
    session.clear()
    return redirect('/')



































#     @app.route('/login', methods=['POST'])
# def login():

#     data = { "email" : request.form["email_login"] }
#     user_in_db = User.get_by_email(data)
#     # user is not registered in the db
#     if not user_in_db:
#         flash("Invalid Email/Password")
#         return redirect("/")
#     if not bcrypt.check_password_hash(user_in_db.password, request.form['Password_login']):
#         # if we get False after checking the password
#         flash("Invalid Email/Password")
#         return redirect('/')
#     # if the passwords matched, we set the user_id into session
#     session['user_id'] = user_in_db.id
#     # never render on a post!!!
#     return redirect("/dashboard")

