from flask import Flask, render_template, redirect, url_for
from flask_cors import CORS

app = Flask(__name__)
CORS(app=app)

# Used to check whether user can access pages
authenticated = True

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/sign-up', methods=['GET', 'POST'])
def sign_up():
    return render_template('sign-up.html')

@app.route('/log-in', methods=['GET', 'POST'])
def log_in():
    # if authenticated:
    #     return redirect(url_for('dashboard'))
    # else:
        return render_template('log-in.html')

@app.route('/dashboard', methods=['GET', 'POST'])
def dashboard():
    # if authenticated:
        return render_template('dashboard.html', courses=["Biology", "Physics", "Math"])
    # else:
    #     return redirect(url_for('log_in'))

@app.route('/inbox', methods=['GET', 'POST'])
def inbox():
    return render_template('inbox.html', chats = ["Maria", "Joe", "Frank"])

if __name__ == '__main__':
    app.run(port="8000", debug=True)