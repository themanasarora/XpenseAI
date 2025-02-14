import requests

# The API endpoint
url = "http://127.0.0.1:8000/api/products/"

# Data to be sent
data = {
    "name": "xyz",
    "description": "Hello, World",
    "price":444,
    
}

# A POST request to the API
response = requests.post(url, json=data)

# Print the response
print(response.json())

if response.status_code == 200:
    try:
        data = response.json()
        print(data)
    except requests.exceptions.JSONDecodeError:
        print("Response is not in JSON format.")
else:
    print(f"Error: {response.status_code}, Response: {response.text}")

