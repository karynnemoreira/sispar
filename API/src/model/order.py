from src.app import db

class Order(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    order_number = db.Column(db.Integer)
    
    
    def __init__(self, order_number: str):
        self.order_number = order_number
        
    