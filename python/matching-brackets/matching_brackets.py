"""Check brackets opened and closed"""

def is_paired(input_string):
    open = "{(["
    close = "})]"
    queue = []
    for caracter in input_string:
        if caracter in open:
            queue.append(caracter)
        elif caracter in close:
            if not queue or open[close.index(caracter)] != queue.pop():
                return False
    
    return not queue
