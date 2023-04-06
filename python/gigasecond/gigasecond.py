"""Determine date and time one gigasecond after a certain date."""
from datetime import datetime, timedelta

GIGASECOND = timedelta(seconds=10**9)

def add(moment):
    return moment + GIGASECOND
