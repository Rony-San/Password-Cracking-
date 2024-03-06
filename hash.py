import hashlib

def hash_password(password):
    # Utilizamos SHA-256 para generar la hash de la contraseña
    hashed_password = hashlib.sha256(password.encode()).hexdigest()
    return hashed_password

def main():
    # Lee los nombres de usuario desde el archivo
    with open("usernames.txt", "r") as f:
        usernames = f.readlines()

    # Elimina los espacios en blanco al principio y al final de cada nombre de usuario
    usernames = [username.strip() for username in usernames]

    # Crea un archivo de texto para almacenar las contraseñas hasheadas
    with open("passwords.txt", "w") as f:
        for username in usernames:
            # Genera una contraseña hash basada en el nombre de usuario
            hashed_password = hash_password(username)
            # Escribe el nombre de usuario y su contraseña hash en el archivo
            f.write(f"{hashed_password}\n")

    print("Contraseñas hasheadas generadas con éxito en el archivo 'passwords.txt'.")

if __name__ == "__main__":
    main()
