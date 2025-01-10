from flask import Flask
from src.controller.employee_controller import bp_employee
from src.controller.refund_controller import bp_refund
from src.model import db
from flask_migrate import Migrate
from config import Config
import os

def create_app():
    app = Flask(__name__)
    
    app.register_blueprint(bp_employee)
    app.register_blueprint(bp_refund)
    app.secret_key = os.environ.get('SECRET_KEY')
    
    app.config.from_object(Config)
    migrate = Migrate()
    
    db.init_app(app)
    migrate.init_app(app, db)
    
    return app