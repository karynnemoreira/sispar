def generate_order_code():
    import random, string
    letter_and_digit = string.ascii_uppercase + string.digits
    random_letter_and_digit = [random.choice(letter_and_digit) for _ in range(10)]
    order_number = ''.join(random_letter_and_digit) 
    return order_number


from src.model.order import Order

def create_order_number(order_number):
    new_order = Order(order_number)
    return new_order