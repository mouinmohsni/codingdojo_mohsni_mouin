from flask import Flask, render_template, request, redirect
app = Flask(__name__)
# our index route will handle rendering our form
@app.route('/')
def index():
    return render_template("index.html")

#get information form the forme in the first page
@app.route('/users', methods=['POST'])
def create_user():
    print(" got post info")
    print(request.form)
    name = request.form['name']
    email = request.form['email']
    return redirect("/show") # redirect in show.html page with information form the index.html page

@app.route("/show")
def show_user():
    print("Showing the User Info From the Form")
    print(request.form)
    return render_template("show.html")












if __name__ == "__main__":
    app.run(debug=True)