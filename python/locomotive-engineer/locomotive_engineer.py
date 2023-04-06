"""Functions which helps the locomotive engineer to keep track of the train."""


def get_list_of_wagons(*args):
    """Return a list of wagons.

    :param: arbitrary number of wagons.
    :return: list - list of wagons.
    """
    list_of_wagon = list(args)
    return list_of_wagon


def fix_list_of_wagons(each_wagons_id, missing_wagons):
    """Fix the list of wagons.

    :parm each_wagons_id: list - the list of wagons.
    :parm missing_wagons: list - the list of missing wagons.
    :return: list - list of wagons.
    """
    list_of_wagon = []
    each_wagons_id.remove(1)
    each_wagons_id = each_wagons_id[2:] + each_wagons_id[0:2]
    list_of_wagon = 1, *missing_wagons, *each_wagons_id
    list_of_wagon = list(list_of_wagon)
    return list_of_wagon


def add_missing_stops(*args, **kwargs):
    """Add missing stops to route dict.

    :param route: dict - the dict of routing information.
    :param: arbitrary number of stops.
    :return: dict - updated route dictionary.
    """
    updated_route = args[0]
    updated_route["stops"] = []
    for value in kwargs.values():
        updated_route["stops"].append(value)
    return updated_route


def extend_route_information(route, more_route_information):
    """Extend route information with more_route_information.

    :param route: dict - the route information.
    :param more_route_information: dict -  extra route information.
    :return: dict - extended route information.
    """
    return {**route, **more_route_information}


def fix_wagon_depot(wagons_rows):
    """Fix the list of rows of wagons.

    :param wagons_rows: list[list[tuple]] - the list of rows of wagons.
    :return: list[list[tuple]] - list of rows of wagons.
    """
    wagon_depot = [[0] * len(wagons_rows[0]) for i in range(len(wagons_rows))]
    index = 0
    for line in wagons_rows:
        index_interne = 0
        for value in line:
            wagon_depot[index_interne][index] = value
            index_interne += 1
        index += 1
        
    return wagon_depot
