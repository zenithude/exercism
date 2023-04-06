"""Parse and evaluate simple math word problems returning the answer as an integer."""

VALID_OPERATIONS = {
    "plus": "__add__", 
    "minus": "__sub__", 
    "multiplied by": "__mul__", 
    "divided by": "__truediv__"
}

def answer(question):
    question = question.removeprefix("What is").removesuffix("?").strip()
    if not question: raise ValueError("syntax error")
    if question.isdigit(): return int(question)

    found_op = False
    for name, op in VALID_OPERATIONS.items():
        if name in question:
            question = question.replace(name, op)
            found_op = True
    if not found_op: raise ValueError("unknown operation")

    ret = question.split()
    while len(ret) > 1:
        try:
            x, op, y, *tail = ret
            if op not in VALID_OPERATIONS.values(): raise ValueError("syntax error")
            ret = [int(x).__getattribute__(op)(int(y)), *tail]
        except:
            raise ValueError("syntax error")
    return ret[0]