from src.model import db
from datetime import date

class Refund(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    value = db.Column(db.Float)
    date = db.Column(db.Date, nullable=False, default=date.today)
    reason = db.Column(db.String(1000))
    category = db.Column(db.String(100))
    employee_id = db.Column(db.Integer, db.ForeignKey('employee.id'), nullable = False)
    
    def __init__(self, value, date, reason, category, employee_id):
        if value <=0:
            raise ValueError('O valor deve ser maior que 0')
        
        if not category:
            raise ValueError('A categoria é obrigatória')
        
        self.value = value
        self.date = date
        self.reason = reason
        self.category = category
        self.employee_id = employee_id
        
        
    def to_dict(self):
        """Converte o objeto em um dicionário para ser usado em APIs."""
        return {
            "id": self.id,
            "value": self.value,
            "date": self.date.isoformat() if self.date else None,
            "reason": self.reason,
            "category": self.category,
            "employee_id": self.employee_id,
        }
        