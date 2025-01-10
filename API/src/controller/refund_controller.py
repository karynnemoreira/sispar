from flask import Blueprint, jsonify,request, session
from src.model import db
from src.model.refund_model import Refund
from sqlalchemy.exc import SQLAlchemyError

bp_refund = Blueprint('refund', __name__, url_prefix="/refunds")

@bp_refund.route('/new', methods=['POST',])
def aks_refund():
    data_refund = request.get_json()
    
    employee_id = session.get('employee_id')
    
    if not employee_id:
        return jsonify({'error': 'Usuário não autenticado'}), 400

    
    new_refund = Refund(data_refund['value'], data_refund['date'], data_refund['reason'], data_refund['category'], employee_id)
    
    try:
        db.session.add(new_refund)
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