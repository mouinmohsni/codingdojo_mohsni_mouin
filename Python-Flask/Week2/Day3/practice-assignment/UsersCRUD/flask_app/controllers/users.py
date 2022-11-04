from flask_app import app
from flask import render_template, redirect, request, session
from flask_app.models.user import User

#-------------------------------------------go to new user
@app.route('/user/new')
def index():
    return  render_template("index.html")

#------------------------get info user
@app.route('/user/new', methods=['Post'] )
def index2():
    print(request.form)
    data = {
        "first_name": request.form["first_name"],
        "last_name" : request.form["last_name"],
        "email" : request.form["email"]
    }
    print(data)
    User.save(data)

    return  redirect('/user')

# ------------ go to diplayte and show all users
@app.route('/user')
def show():
    
    return  render_template('display.html', user_all=User.disp_all() )
#----------------------go back to  create new user
@app.route('/logout')
def ret():

    return  redirect('/user/new')
#----------------------------- get one user
@app.route('/show/<int:user_id>')
def detail_page(user_id):

    data = {'id': user_id}
    print(f"Data is {data}")
    user_all=User.get_one(data)
    print(f"user is {user_all}")

    return render_template("show_user.html",user_all=User.get_one(data))

#------------------------ delate youser and redirect to all users
@app.route('/delete/<int:user_id>')
def delete(user_id):
    data = {
        'id': user_id,
    }
    User.destroy(data)
    return redirect('/user')

#----------------------------------- edit
@app.route('/user/<int:user_id>/edit')
def edit_user(user_id):
    data = {'id': user_id}
    user_all=User.get_one(data)
    print(f"user is {user_all}")

    

    return render_template("edit_user.html",user_all=User.get_one(data))

@app.route('/user/<int:user_id>/editing' , methods=['Post'] )
def editing_user(user_id):
    data ={
        'id' : user_id,
        "first_name": request.form["first_name"],
        "last_name" : request.form["last_name"],
        "email" : request.form["email"]
    }
    User.update(data)
    return redirect('/user')













