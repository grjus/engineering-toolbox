import logging as fatigue_logging

fatigue_logging.basicConfig(
    filename="fatigue.log",
    filemode="w",
    format="%(name)s - %(levelname)s - %(message)s",
)
