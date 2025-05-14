from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

@app.route('/')
def home():
    return 'Chatbot is running!'
@app.route('/chat', methods=['POST'])
def chat():
    user_message = request.json['message']

    # Add your chatbot logic here to process the user's message and generate a response.
    # For simplicity, let's just echo the user's message.
    bot_response = f"You said: {user_message}"

    # Communicate with Python backend
    backend_response = backend_process(user_message)

    return jsonify({'message': bot_response, 'backend_response': backend_response})

def backend_process(user_message):
    # Replace the API key with your own OpenWeatherMap API key
    api_key = 'YOUR_OPENWEATHERMAP_API_KEY'
    base_url = 'http://api.openweathermap.org/data/2.5/weather'

    # Make a request to OpenWeatherMap API
    params = {'q': user_message, 'appid': api_key}
    response = requests.get(base_url, params=params)
    data = response.json()

    # Extract relevant information from the API response
    if response.status_code == 200:
        temperature = data['main']['temp']
        description = data['weather'][0]['description']
        return f"The weather in {user_message} is {description} with a temperature of {temperature}°C."
    else:
        return f"Unable to retrieve weather information for {user_message}."

if __name__ == '__main__':
    app.run(debug=True)

