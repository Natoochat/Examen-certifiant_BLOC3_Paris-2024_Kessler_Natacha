import sqlite3
from flask import Flask, render_template, request, jsonify,Mail,Message
import regex as re
import secrets


app = Flask(__name__)

# Configuration de Flask-Mail (à remplacer par vos propres informations)
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = 'votre_email@gmail.com'
app.config['MAIL_PASSWORD'] = 'votre_mot_de_passe'
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True

mail = Mail(app)


# Fonction pour créer la base de données et la table si elles n'existent pas
def create_db():
    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE,
            password TEXT,
            email TEXT
        )
    ''')
    conn.commit()
    conn.close()

def validate_password(password):
    # Regex pour vérifier la complexité du mot de passe
    regex = r"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
    return re.search(regex, password)

def generate_token():
    return secrets.token_urlsafe(16)

@app.route('/')
def index():
    return render_template('form.html')

@app.route('/register', methods=['POST'])
def register():
    nom = request.form['nom']
    prenom = request.form['prenom']
    email = request.form['email']
    password = request.form['password']
    confirm_password = request.form['confirm_password']

    # Vérification de la correspondance des mots de passe et de leur complexité
    if password != confirm_password:
        # Afficher un message d'erreur
        return "Les mots de passe ne correspondent pas."
    elif not validate_password(password):
        # Afficher un message d'erreur
        return "Le mot de passe doit contenir au moins 8 caractères, une majuscule, un chiffre et un caractère spécial."
    token = generate_token()  # Fonction pour générer un token unique
    # Envoyer l'email de confirmation
    msg = Message('Confirmation d\'inscription', sender='votre_email@gmail.com', recipients=[email])
    msg.body = f"Votre inscription a été effectuée avec succès. Veuillez cliquer sur le lien suivant pour confirmer votre compte : http://votre_site/confirm/{token}"
    mail.send(msg)
    return jsonify({'success': True})





if __name__ == '__main__':
    create_db()
    app.run(debug=True)