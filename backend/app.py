

from flask import Flask, request, jsonify
import requests

app = Flask(__name__)


RESTAURANT_API_URL = 'https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D22.6461695%26lng%3D75.8163521%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING'

@app.route('/api/chatbot', methods=['POST'])
def chatbot():
    user_input = request.json['userInput']
    
   
    restaurants = fetch_restaurants(user_input)
    
   
    bot_response = process_restaurants(restaurants)
    
    return jsonify(bot_response)

def fetch_restaurants(user_input):
    try:
        
        response = requests.get(RESTAURANT_API_URL, params={'query': user_input})
        response.raise_for_status()  
        return response.json()
    except requests.exceptions.RequestException as e:
        print('Error fetching restaurant data:', e)
        return []

def process_restaurants(restaurants):
   
    if restaurants:
       
        return "Here are some restaurant suggestions based on your query: ..."
    else:
        return "I'm sorry, I couldn't find any restaurants matching your query."

if __name__ == '__main__':
    app.run(debug=True)
