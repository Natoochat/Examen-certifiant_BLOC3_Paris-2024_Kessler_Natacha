from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('login.html')

@app.route('/login', methods=['POST'])
def login():
    username = request.form['username']
    password = request.form['password']  


    # Ici, vous vérifieriez les informations de connexion dans une base de données
    # Par exemple :
    if username == 'admin' and password == 'password':
        return 'Connexion réussie !'
    else:
        return 'Nom d\'utilisateur ou mot de passe incorrect.'

if __name__ == '__main__':
    app.run(debug=True)