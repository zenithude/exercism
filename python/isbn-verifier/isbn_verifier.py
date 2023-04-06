def is_valid(isbn):
    print(isbn)
    isbn = list(isbn.replace('-', ''))
    if len(isbn) != 10:
        return False
    
    if isbn[-1] == 'X':
        isbn[-1] = '10'
    
    if not all([num.isdigit() for num in isbn]):
        return False

    return sum([int(num)*factor for num, factor in zip(isbn, range(10, 0, -1))]) % 11 == 0
