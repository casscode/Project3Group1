from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy
app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///dev.db"
db = SQLAlchemy(app)

class CrashLocation(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    latitude = db.Column(db.Float, nullable=False)
    longitude = db.Column(db.Float, nullable=False)

class Crashes(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.Date, nullable=False)
    aboard = db.Column(db.Integer, nullable=False)
    fatalities = db.Column(db.Integer, nullable=False)

class Car(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    year = db.Column(db.Integer, nullable=False)
    fatalities = db.Column(db.Integer, nullable=False)

@app.get("/main")
def main_get():
    total_fatalities = db.session.query(db.func.extract("year", Crashes.date), db.func.sum(Crashes.fatalities), db.func.avg(Crashes.fatalities/Crashes.aboard)).group_by(db.func.extract("year", Crashes.date)).all()
    years = []
    fatalities = []
    rates = []
    for year, f, rate in total_fatalities: 
        years.append(year)
        fatalities.append(f)
        rates.append(rate)
    return render_template("totalvspercent.html", years=years, fatalities=fatalities, rates=rates)

@app.get("/map")
def mapget():
    crashes = []
    crashlocations = CrashLocation.query.all()
    for location in crashlocations:
        crashes.append({"location":[location.latitude, location.longitude]})
    return render_template("map.html", crashes=crashes)