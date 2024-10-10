FROM python:3.7-slim

WORDIR /app

COPY requirements.txt

requirements.txt
RUN pip install -r requirements.txt  

EXPOSE 5000