from flask import Flask
from flask import render_template
from flask import jsonify
import utils
import string

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/summary')
def get_summary_data():
	data = utils.get_summary_data()
	return jsonify({"confirm":int(data[0]),"suspect":int(data[1]),"heal":int(data[2]),"dead":int(data[3])})

@app.route('/chinaMap')
def get_chinaMap_data():
    res = []
    for tup in utils.get_chinaMap_data():
        res.append({"name":tup[0],"value":int(tup[1])})
    return jsonify({"data":res})

@app.route("/total")
def get_total_data():
    data = utils.get_total_data()
    day,confirm,suspect,heal,dead = [],[],[],[],[]
    for a,b,c,d,e in data[7:]:    #很多卫健委网站前7天都是没有数据的，所以把前7天砍掉了
        day.append(a.strftime("%m-%d")) #a是datatime类型
        confirm.append(b)
        suspect.append(c)
        heal.append(d)
        dead.append(e)
    return jsonify({"day":day,"confirm": confirm, "suspect": suspect, "heal": heal, "dead": dead})

@app.route("/newly")
def get_newly_data():
    data = utils.get_newly_data()
    day, confirm_add, suspect_add = [], [], []
    for a, b, c in data[7:]:
        day.append(a.strftime("%m-%d"))  # a是datatime类型
        confirm_add.append(b)
        suspect_add.append(c)
    return jsonify({"day": day, "confirm_add": confirm_add, "suspect_add": suspect_add})

@app.route("/top5NonHubei")
def get_top5_non_hubei_data():
    data = utils.get_top5_non_hubei_data()
    city = []
    confirm = []
    for k,v in data:
        city.append(k)
        confirm.append(int(v))
    return jsonify({"city": city, "confirm": confirm})

@app.route('/time')
def gettime():
	return utils.get_time()

if __name__ == '__main__':
    app.run()
