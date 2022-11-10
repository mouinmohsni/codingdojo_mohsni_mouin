from flask_app import app
from flask import redirect, request , render_template
from flask_app.models.ninja import Ninjas
from flask_app.models.dojo import Dojos

@app.route('/add_ninja', methods=['Post'] )
def add_ninja():
    print(request.form)
    # data={
    #     "first_name_ninjadojo_name" : request.form["first_name_ninja"],
    #     "last_name_ninja" : request.form["last_name_ninja"],
    #     "age_ninja" : request.form["age_ninja"],
    #     "dojo_id" : request.form["all_dojos.id_dojo"],
    #     }
    
    # Ninjas.save(data)
    Ninjas.save(request.form)
    return redirect('/')


@app.route('/dojos/<int:id_dojos>')
def in_dojo(id_dojos):
    print("-"*20,id_dojos)
    data ={ 'id_dojos' :id_dojos}
    all_ninjas=Ninjas.select(data)
    return render_template ("dojos.html", all_ninjas=all_ninjas)