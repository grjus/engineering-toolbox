import logging

logging.basicConfig(
    filename="../fatLog.log",
    level=logging.ERROR,
    format="%(asctime)s:%(name)s:%(message)s",
)


def error(message):
    logging.error(message)