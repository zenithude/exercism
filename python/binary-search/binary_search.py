"""Binary search Value, on sorted list"""

def binary_search(search_list, first, last, value):
    if last >= first:
        middle_list = first  + (last - first) // 2
        if search_list[middle_list] == value:
            return middle_list
        elif search_list[middle_list] > value:
            return binary_search(search_list, first, middle_list - 1, value)
        else:
            return binary_search(search_list, middle_list + 1, last, value)
    else:
        return -1



def find(search_list, value):
    first = 0
    last = len(search_list) - 1
    value_is_in_search_list = binary_search(search_list, first, last, value)    
    if value_is_in_search_list != -1:
        return value_is_in_search_list
    else:
        raise ValueError("value not in array")
        