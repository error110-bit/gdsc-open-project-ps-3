import hashlib

def get_file_hash(file_path):

    with open(file_path, "rb") as file:
        content = file.read()

    return hashlib.md5(content).hexdigest()
