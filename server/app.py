from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # 启用CORS以允许前端访问

@app.route('/api/test', methods=['GET'])
def test():
    return jsonify({
        'message': 'React+Vite+Zustand+Fetch+Python(Flask) Server',
        'status': 'success'
    })

if __name__ == '__main__':
    app.run(debug=True, port=5000) 