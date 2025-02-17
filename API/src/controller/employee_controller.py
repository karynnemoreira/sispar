from flask import Blueprint,request,jsonify, session
from src.model import db
from src.model.employee_model import Employee
from src.security.cript import hash_pwd, check_pwd
from sqlalchemy.exc import SQLAlchemyError


bp_employee = Blueprint('employee', __name__, url_prefix='/employee')


@bp_employee.route('/register', methods=['POST',])
def register_employee():
    data_new_employee = request.get_json()
    new_employe = Employee(data_new_employee['name'],data_new_employee['last_name'],data_new_employee['cpf'],data_new_employee['email'], hash_pwd(data_new_employee['password']))
    try:
        db.session.add(new_employe)
        db.session.commit()
        return jsonify({"response":"Colaborador cadastrado com sucesso"}, 200)
    except:
        return jsonify({"response":"Erro ao cadastrar funcionário"}, 400)
    
        
@bp_employee.route('/login', methods=['POST',])
def login():
    
    try:
        data_login = request.get_json()
        email = data_login.get('email')
        password = data_login.get('password')
        
        if not email or not password:
            return jsonify({'error': "Email e senha são obrigatórios"}), 400
        
        employee = db.session.execute(
            db.select(Employee).where(Employee.email == data_login['email'])
            ).scalar()    
        employee = employee.to_dict()
        
        if not employee:
            return jsonify({'error': 'Usuário não encontrado'}), 404
            

        if data_login['email'] == employee['email'] and check_pwd(data_login['password'], employee['password']):
            # Armazena o id em uma sessão
            session['employee_id'] = employee['id'] 
            return jsonify({'response': 'Login realizado com sucesso'}), 200
        
    except SQLAlchemyError as e:
        print(f'Database error {e}')
        return jsonify({'error': 'Internal Error'}), 500
        
    except Exception as e:
        print(f'Unexpected Error: {e}')
        print(employee)
        return jsonify({'error': 'Internal server Error'}), 500