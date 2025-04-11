from src.model import db

class Employee(db.Model):
    
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(100))
    last_name = db.Column(db.String(100))
    cpf = db.Column(db.String(14))
    email = db.Column(db.String(100))
    password = db.Column(db.String(100))
    refunds = db.relationship('Refund', backref='owner', lazy=True)
    
    def __init__(self, name : str, last_name: str, cpf: str, email:str, password:str) -> None:
        self.name = name
        self.last_name = last_name
        self.cpf = cpf
        self.email = email
        self.password = password
        
    def to_dict(self) -> dict:
        return {
                "id": self.id,
                "name": self.name,
                "last_name": self.last_name,
                "email": self.email,
                "password": self.password
                }
        
    