from flask import Blueprint, jsonify,request, session
from src.model import db
from src.model.refund_model import Refund
from sqlalchemy.exc import SQLAlchemyError
from flask_cors import cross_origin
from flask_jwt_extended import jwt_required, get_jwt_identity

bp_refund = Blueprint('refund', __name__, url_prefix="/refunds")


@bp_refund.route('/new', methods=['POST',])
# @jwt_required()
def ask_refund():
    data_refund = request.get_json()

    # current_user = get_jwt_identity()
    print('*'*200)
    user_id = 1
    print('-'*100)
    print(user_id)
    print('-'*100)
    # if not employee_id:
    #     return jsonify({'error': 'Usuário não autenticado'}), 400
    
    new_refunds = []
    
    for data in data_refund:
        print('*' *100)
        print(data)
        print('*' *100)
        new_refund = Refund(
            colaborador=data['colaborador'],
            empresa=data['empresa'],
            tipo_reembolso=data['tipoReembolso'], 
            centro_custo=data['centroCusto'], 
            ordem_interna=data['ordemInterna'], 
            divisao=data['divisao'], 
            pep=data['pep'], 
            moeda=data['moeda'], 
            valor=int(data['valorFaturado']),
            data=data['data'],
            motivo=data['motivo'], 
            numero_prestacao_contas=data['nPrestacao'],
            employee_id=user_id)
        new_refunds.append(new_refund)
        
    try:
        db.session.bulk_save_objects(new_refunds)
        db.session.commit()
        return jsonify({'response':f'{len(new_refunds)} Pedidos de reembolso realizados com sucesso'}), 200
    except SQLAlchemyError as e:
        print(f'error: Unexpected database error {e}')
        return jsonify({'error': 'Error'}), 500
        
   


@bp_refund.route('/test')
@jwt_required()
def test_jwt():
    current = get_jwt_identity()
    return jsonify({'valid': True, 'id': current})
    
    
    
    
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