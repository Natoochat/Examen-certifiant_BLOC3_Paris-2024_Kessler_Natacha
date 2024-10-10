from flask import Flask, render_template, request
import sqlite3

app = Flask(__name__)

# Connexion à la base de données SQLite
conn = sqlite3.connect('users.db')
c = conn.cursor()

# Création de la table utilisateurs (si elle n'existe pas)
c.execute('''CREATE TABLE IF NOT EXISTS users
            (id INTEGER PRIMARY KEY AUTOINCREMENT,  

            username text,
            password text)''')
conn.commit()

@app.route('/', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']  

        
        # Vérification des informations de login dans la base de données
        c.execute("SELECT * FROM users WHERE username=? AND password=?", (username, password))
        user = c.fetchone()
        
        if user:
            # Connexion réussie
            return 'Vous êtes connecté !'
        else:
            # Connexion échouée
            return 'Nom d\'utilisateur ou mot de passe incorrect.'
    else:
        return render_template('login.html')
def index():
    if 'username' in session:
        return render_template('index.html', is_logged_in=True)
    else:
        return render_template('index.html', is_logged_in=False)

if __name__ == '__main__':
    app.run(debug=True)