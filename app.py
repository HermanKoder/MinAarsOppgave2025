from flask import Flask, render_template, request, session, redirect  
import mysql.connector

app = Flask(__name__)
app.secret_key = "superSecretMangoKey"


def get_db_connection():
    connection = mysql.connector.connect(
        host="10.2.4.30",
        user="mangoUser",
        password="mangoUser123",
        database="mangoDB"
    )
    return connection

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/game")
def game():
    return render_template("game.html")


@app.route("/register")
def register():
    return render_template("register.html")

@app.route("/registerRegister", methods=['POST'])
def registerRegister():
    input1 = request.form['userReg']
    input2 = request.form['passwordReg']
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("INSERT INTO users (navn, passord) VALUES (%s, %s)", (input1, input2))
    conn.commit()
    conn.close()
    return render_template('login.html')

@app.route("/login")
def login():
    return render_template("login.html")

@app.route("/loginUser", methods=['POST'])
def loginUser():
    if request.method == 'POST':
        loginName = request.form['userLogin']
        loginPassword = request.form['passwordLogin']
        conn = get_db_connection()
        cursor = conn.cursor(dictionary=True)
        cursor.execute("SELECT * FROM users WHERE navn = %s AND passord = %s", (loginName, loginPassword))
        user = cursor.fetchone()
        if user:
            session['user_id'] = user['id']
            session['username'] = user['navn']
            cursor.execute("SELECT * FROM mangoScore WHERE user_id = %s", (user['id'],))
            score_entry = cursor.fetchone()
            if not score_entry:
                cursor.execute("INSERT INTO mangoScore (mangos, user_id) VALUES (%s, %s)", (0, user['id']))
                conn.commit()
            conn.close()
            return redirect('/game')
        else:
            conn.close()
            return render_template('login.html', error="Invalid credentials")

if __name__ == "__main__":
    app.run(debug=True)
