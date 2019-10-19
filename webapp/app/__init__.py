from flask import Flask

#initialize app
app = Flask(__name__, instance_relative_config=True)

# Load the views
from app import views

# Load the Config File
app.config.from_object('config')
