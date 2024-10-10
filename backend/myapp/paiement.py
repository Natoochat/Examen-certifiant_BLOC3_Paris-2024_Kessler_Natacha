import sqlite3
from flask import Flask, render_template, request,url_for,redirect

app = Flask(__name__)

# Créer la base de données (si elle n'existe pas)
conn = sqlite3.connect('paiements.db')
c = conn.cursor()
c.execute('''CREATE TABLE IF NOT EXISTS paiements
            (id INTEGER PRIMARY KEY AUTOINCREMENT,
                numero TEXT,
                expiration TEXT,
                cvc TEXT)''')
conn.commit()
conn.close()


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/payer', methods=['POST'])
def payer():
    numero = request.form['numero']
    expiration = request.form['expiration']
    cvc = request.form['cvc']

    # Ici, vous ajouteriez la logique de validation et de traitement du paiement
    # Par exemple, vérifier la syntaxe des informations de la carte,
    # communiquer avec un processeur de paiement simulé, etc.

    # Pour l'exemple, nous allons simplement stocker les informations dans la base de données
    conn = sqlite3.connect('paiements.db')
    c = conn.cursor()
    c.execute("INSERT INTO paiements (numero, expiration, cvc) VALUES (?, ?, ?)",
            (numero, expiration, cvc))
    conn.commit()
    conn.close()

    return redirect(url_for('confirmation'))

if __name__ == '__main__':
    app.run(debug=True)