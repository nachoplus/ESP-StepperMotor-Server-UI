import axios from 'axios';
import steppersMock from './mock_responses/steppers';
import switchesMock from './mock_responses/steppers';

const API_URL = process.env.VUE_APP_REST_API_BASE_URL;
const mock = false;

export class ApiService {
    constructor() { }

    saveConfigurationToSpiffs() {
        const url = `${API_URL}/api/config/save`;
        return axios.get(url).then(response => response);
    }

    getConfiguredStepperMotors() {
        const url = `${API_URL}/api/steppers`;
        if (mock) {
            var p1 = new Promise(
                function (resolve) {
                    resolve(steppersMock.steppers);
                });
            return p1;
        } else {
            return axios.get(url).then(response => response.data.steppers);
        }

    }

    getConfiguredStepperMotor(id) {
        const url = `${API_URL}/api/steppers?id=${id}`;
        return axios.get(url).then(response => response.data);
    }

    addStepperMotor(stepPin, dirPin, enablePin,stepsPerRev, stepsPerMM, microsteppingDivisor, displayName, brakePin, brakePinActiveState, brakeEngageDelayMs, brakeReleaseDelayMs) {
        const url = `${API_URL}/api/steppers`;
        var params = {
            stepPin: stepPin,
            dirPin: dirPin,
            enablePin: enablePin,
            name: displayName,
            stepsPerRev: parseInt(stepsPerRev, 10),
            stepsPerMM: parseInt(stepsPerMM, 10),
            microsteppingDivisor: parseInt(microsteppingDivisor, 10),
            brakePin: parseInt(brakePin, 10),
            brakePinActiveState: parseInt(brakePinActiveState, 10),
            brakeEngageDelayMs: parseInt(brakeEngageDelayMs, 10),
            brakeReleaseDelayMs: parseInt(brakeReleaseDelayMs, 10)
        };
        return axios.post(url, params).then(response => response.data);
    }

    updateStepperMotor(id, stepPin, dirPin, enablePin,stepsPerRev, stepsPerMM, microsteppingDivisor, displayName, brakePin, brakePinActiveState, brakeEngageDelayMs, brakeReleaseDelayMs) {
        const url = `${API_URL}/api/steppers?id=${id}`;
        var params = {
            stepPin: stepPin,
            dirPin: dirPin,
            enablePin: enablePin,
            name: displayName,
            stepsPerRev: parseInt(stepsPerRev),
            stepsPerMM: parseInt(stepsPerMM),
            microsteppingDivisor: parseInt(microsteppingDivisor),
            brakePin: parseInt(brakePin),
            brakePinActiveState: parseInt(brakePinActiveState),
            brakeEngageDelayMs: parseInt(brakeEngageDelayMs),
            brakeReleaseDelayMs: parseInt(brakeReleaseDelayMs)
        };
        return axios.put(url, params).then(response => response.data);
    }

    moveStepper(stepperId, steps, speed, accel, unit) {
        const url = `${API_URL}/api/steppers/moveby?id=${stepperId}&value=${steps}&unit=${unit}&speed=${speed}&accel=${accel}&decel=${accel}`;
        return axios.post(url).then(response => response.data);
    }

    stopStepper(stepperId) {
        const url = `${API_URL}/api/steppers/stop?id=${stepperId}`;
        return axios.get(url).then(response => response.data);
    }

    triggerEmergencyStop() {
        const url = `${API_URL}/api/emergencystop/trigger`;
        return axios.get(url).then(response => response.data);
    }

    revokeEmergencyStop() {
        const url = `${API_URL}/api/emergencystop/revoke`;
        return axios.get(url).then(response => response.data);
    }

    deleteStepperMotor(stepperId) {
        const url = `${API_URL}/api/steppers?id=${stepperId}`;
        return axios.delete(url).then(response => response.data);
    }

    /**** POSITION SWITCH RELATED ENDPOINTS *******/
    addPositionSwitch(stepperId, ioPinNumber, positionName, switchPosition, switchType) {
        const url = `${API_URL}/api/switches`;
        var params = {
            stepperId: stepperId,
            ioPinNumber: ioPinNumber,
            positionName: positionName,
            switchPosition: switchPosition,
            switchType: switchType
        };
        return axios.post(url, params).then(response => response.data);
    }

    updatePositionSwitch(id, stepperId, ioPinNumber, positionName, switchPosition, switchType) {
        const url = `${API_URL}/api/switches?id=${id}`;
        var params = {
            stepperId: stepperId,
            ioPinNumber: ioPinNumber,
            positionName: positionName,
            switchPosition: switchPosition,
            switchType: switchType
        };
        return axios.put(url, params).then(response => response.data);
    }

    getConfiguredPositionSwitches() {
        const url = `${API_URL}/api/switches`;
        if (mock) {
            var p1 = new Promise(
                function (resolve) {
                    resolve(switchesMock.switches);
                });
            return p1;
        } else {
            return axios.get(url).then(response => response.data.switches);
        }
    }

    getConfiguredPositionSwitch(id) {
        const url = `${API_URL}/api/switches=${id}`;
        return axios.get(url).then(response => response.data);
    }

    deletePositionSwitch(id) {
        const url = `${API_URL}/api/switches?id=${id}`;
        return axios.delete(url).then(response => response.data);
    }

    /**** ROTARY ENCODER RELATED ENDPOINTS *******/
    addRotaryEncoder(stepperId, pinAiOPin, pinBiOPin, displayName, stepMultiplier) {
        const url = `${API_URL}/api/encoders`;
        var params = {
            stepperId: stepperId,
            pinA: pinAiOPin,
            pinB: pinBiOPin,
            displayName: displayName,
            stepMultiplier: stepMultiplier
        };
        return axios.post(url, params).then(response => response.data);
    }

    updateRotaryEncoder(id, stepperId, pinAiOPin, pinBiOPin, displayName, stepMultiplier) {
        const url = `${API_URL}/api/encoders?id=${id}`;
        var params = {
            stepperId: stepperId,
            pinA: pinAiOPin,
            pinB: pinBiOPin,
            displayName: displayName,
            stepMultiplier: stepMultiplier
        };
        return axios.put(url, params).then(response => response.data);
    }

    getConfiguredRotaryEncoders() {
        const url = `${API_URL}/api/encoders`;
        return axios.get(url).then(response => response.data.rotaryEncoders);
    }

    getConfiguredRotaryEncoder(id) {
        const url = `${API_URL}/api/encoders?id=${id}`;
        return axios.get(url).then(response => response.data);
    }

    deleteRotaryEncoder(id) {
        const url = `${API_URL}/api/encoders?id=${id}`;
        return axios.delete(url).then(response => response.data);
    }

    /**** OTHER ENDPOINTS *******/
    getServerStatus() {
        const url = `${API_URL}/api/status`;
        if (mock) {
            var p1 = new Promise(
                function (resolve) {
                    resolve(switchesMock.status);
                });
            return p1;
        } else {
            return axios({
                method: 'get',
                url: url,
                timeout: 2000
            }).then(response => response.data);
        }
    }

    getRestApiVersion() {
        return this.getServerStatus().then(response => response.version)
    }
}
