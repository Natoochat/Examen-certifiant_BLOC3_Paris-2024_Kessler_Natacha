import sqlite3
import html

conn = sqlite3.connect('billets.db')
cursor = conn.cursor()

cursor.execute("SELECT * FROM evenements")
evenements = cursor.fetchall()

evenements_html = ""
for evenement in evenements:
    evenements_html += f"<tr><td>{evenement[1]}</td><td>{evenement[2]}</td><td>{evenement[3]}</td><td>\
        <button onclick=\"acheter('{evenement[1]}', 'solo')\">Solo</button>\
        <button onclick=\"acheter('{evenement[1]}', 'duo')\">Duo</button>\
        <button onclick=\"acheter('{evenement[1]}', 'famille')\">Famille</button>\
    </td></tr>"

with open('index.html', 'r') as f:
    html_content = f.read()

html_content = html_content.replace('<tbody id="evenements"></tbody>', f'<tbody id="evenements">{evenements_html}</tbody>')

with open('index.html', 'w') as f:
    f.write(html_content)

conn.close()