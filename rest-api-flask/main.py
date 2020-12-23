from flask import Flask, request
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS

app = Flask(__name__)
api = Api(app)
CORS(app)


selectedDevices = []
devices = ["device1", "device2", "device3"]

class ConnectedDevices(Resource):
    #Use it when needed to parse params with messages and types
    parser = reqparse.RequestParser()

    def get(self):
        return {'devices': devices}, 200 if devices else 404


class SelectedDevices(Resource):
    # Use it when needed to parse params with messages and types
    parser = reqparse.RequestParser()

    def get(self):
        return {'selectedDevices': selectedDevices}, 200 if selectedDevices else 404

    def post(self):
        global selectedDevices
        data = request.get_json()
        selectedDevices = data['selectedDevices']
        return 201


api.add_resource(ConnectedDevices, "/devices/connected")
api.add_resource(SelectedDevices, "/devices/selected")

if __name__ == "__main__":
    app.run(debug=True)
