from flask_app import app
from flask import render_template , request , redirect
#redirect, request, session
from flask_app.models.dojo import Dojos


# route page index / dojo_show.html all dojos / add dojo 
@app.route('/')
def index():
    all_dojos=Dojos.disp_all()
    return  render_template("dojo_show.html" , all_dojos=all_dojos)

#route fo add dojo
@app.route('/add_dojo', methods=['Post'] )
def add_dojo():
    data={
        "dojo_name" : request.form["dojo_name"],}
    Dojos.save(data)
    return redirect('/')

@app.route('/ninjas')
def ninjas():
    all_dojos=Dojos.disp_all()
    for dojo in all_dojos :
        print(dojo.id_dojos)
    
    return  render_template("new_ninja.html" , all_dojos=all_dojos)
