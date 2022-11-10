from flask_app import app
from flask import render_template, redirect, request, session
from flask_app.models.dojo import 
from flask_app.models.dojo import Dojo

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/')
def verif_dojo():
    
