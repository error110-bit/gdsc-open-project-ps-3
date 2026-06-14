def generate_summary(file_content):

    lines = len(file_content.splitlines())

    return f"This file contains approximately {lines} lines of code."