FROM python:3.7-slim

WORKDIR C:\Users\Natto\Desktop\Examen certifiant_BLOC3_Paris 2024_Kessler_Natacha\Examen-certifiant_BLOC3_Paris-2024_Kessler_Natacha\app.py

COPY requirements.txt requirements.txt

RUN pip install -r requirements.txt  

EXPOSE 5000