import requests

r = requests.get('https://ualib-orion.herokuapp.com/api/v1/library/categories/')

print(r.text)