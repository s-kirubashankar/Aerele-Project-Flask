from flask import Flask, render_template

app = Flask(__name__)

# Simulated initial cash balance
initial_cash_balance = 1000

@app.route('/')
def index():
    # Pass initial cash balance to the template
    return render_template('index.html', cash_balance=initial_cash_balance)

if __name__ == '__main__':
    app.run(debug=True)
