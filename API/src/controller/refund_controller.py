from flask import Blueprint, jsonify,request, session
from src.model import db
from src.model.refund_model import Refund
from sqlalchemy.exc import SQLAlchemyError

bp_refund = Blueprint('refund', __name__, url_prefix="/refunds")





def add_order_number(order_number:str):
    
    try:
        db.session.add(new_order)
        db.session.commit()
        return {'ok', 200}
    except:
        return {'Erro ao criar um número de order', 400}

@bp_refund.route('/new', methods=['POST',])
def ask_refund():
    data_refund = request.get_json()
    
    employee_id = session.get('employee_id')
    
    order_number = generate_order_code()
    
    
    
    if not employee_id:
        return jsonify({'error': 'Usuário não autenticado'}), 400

    new_refund = Refund(data_refund['employee'], data_refund['company'], data_refund['type_refund'], data_refund['cost_center'],  data_refund['order_intern'], data_refund['division'], data_refund['pep'],  data_refund['coin'],  data_refund['value'],  data_refund['date'],  data_refund['status'], data_refund['reason'], data_refund['category'], employee_id)
    
    try:
        db.session.add_all(new_refund)
        db.session.commit()
        return jsonify({'response':'Pedido de reembolso realizado'}), 200
    except SQLAlchemyError as e:
        print(f'error: Unexpected database error {e}')
        return jsonify({'error': 'Error'}), 500
    
    
@bp_refund.route('/all', methods=['GET'])
def get_refunds():
    employee_id = session.get('employee_id')
    
    try:
        refunds = db.session.execute(db.select(Refund).where(Refund.employee_id == employee_id)).scalar()
        print(employee_id)
        print(refunds)
        return refunds.to_dict()
    except SQLAlchemyError as e:
        print( f'{e}')
        return {'error': 'Some error in database query'}
    except Exception as e:
        print(f'{e}')
        return {'error': 'Something wrong'}