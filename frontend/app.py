from flask import Flask, render_template
from flask_cors import CORS

app = Flask(__name__)
CORS(app=app)


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/sign-up', methods=['GET', 'POST'])
def sign_up():
    return render_template('sign-up.html')

@app.route('/log-in', methods=['GET', 'POST'])
def log_in():
    return render_template('log-in.html')


if __name__ == '__main__':
    app.run(port="8000", debug=True)