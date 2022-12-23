from random import choice
from string import ascii_letters
from transliterate import translit

@staticmethod
def get_password():
    return ''.join([choice(ascii_letters + "1234567890") for _ in range(7)])


def get_user_id(full_name):
    return translit(full_name, language_code='uk', reversed=True).replace(" ", "_").lower()


print(get_user_id("Зубенко Міхаїл Петрович"))