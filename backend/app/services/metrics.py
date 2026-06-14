def count_lines(file_path):
    try:
        with open(file_path, "r", encoding="utf-8") as file:
            return len(file.readlines())
    except:
        return 0