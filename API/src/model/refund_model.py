from src.model import db
from datetime import date

class Refund(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    employee = db.Column(db.String(255))
    company = db.Column(db.String(100))
    type_refund = db.Column(db.String(50))
    cost_center = db.Column(db.String(150))
    order_intern = db.Column(db.Integer)
    division = db.Column(db.Integer)
    pep = db.Column(db.Integer)
    coin = db.Column(db.Enum('BRL', 'USD', 'EUR'))
    value = db.Column(db.Float)
    date = db.Column(db.Date, nullable=False, default=date.today)
    reason = db.Column(db.String(1000))
    category = db.Column(db.String(100))
    status = db.Column(db.Enum('pendente', 'aprovado', 'negado'), default='pendente', nullable=True)
    employee_id = db.Column(db.Integer, db.ForeignKey('employee.id'), nullable = False)
    order_id = db.Column(db.Integer, db.ForeignKey('order.id'), nullable= False)
    
    
    def __init__(self, employee, company, type_refund, cost_center, order_intern, division, pep, coin, value, date, reason, category, status, emplooye_id, order_id):
        if value <=0:
            raise ValueError('O valor deve ser maior que 0')
        
        if not category:
            raise ValueError('A categoria é obrigatória')
        
        self.employee = employee
        self.company = company
        self.type_refund = type_refund
        self.cost_center = cost_center
        self.order_intern = order_intern
        self.division = division
        self.pep = pep
        self.coin = coin
        self.date = date
        self.reason = reason
        self.category = category
        self.status = status
        self.employee_id = emplooye_id
        self.order_id = order_id

        
        
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
        