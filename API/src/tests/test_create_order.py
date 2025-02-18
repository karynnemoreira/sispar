
from src.model.order import Order


def new_order():
    order = Order('3X45TUMN01')
    return order

def test_create_order():
    order = new_order()
    assert isinstance(order, Order)
    