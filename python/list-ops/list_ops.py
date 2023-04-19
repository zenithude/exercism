def append(list1, list2):
    return [*list1, *list2]


def concat(lists):
    flat = []
    for element in lists:
        flat = [*flat, *element]
    return flat


def filter(function, list):
    filter_list = []
    for element in list:
        if function(element):
            filter_list.append(element)
    return filter_list


def length(list):
    return len(list)


def map(function, list):
    mapped = []
    for element in list:
        mapped.append(function(element))
    return mapped


def foldl(function, list, initial):
    accumulator = initial
    for element in list:
        accumulator = function(accumulator, element)
    return accumulator


def foldr(function, list, initial):
    accumulator = initial
    for i in range(length(list) - 1, -1, -1):
        accumulator = function(list[i], accumulator)
    print(accumulator)
    return accumulator


def reverse(list):
    return list[::-1]
