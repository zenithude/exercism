"""Flat iterable in one list."""

def flatten(iterable):
    flat = []
    for element in iterable:
        if type(element) is list or type(element) is tuple:
            flat.extend(flatten(element))
        elif element is not None:
            flat.append(element)
    return flat
