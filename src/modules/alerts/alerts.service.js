class Alert {
    constructor(_type, _text) {
        this.type = _type || "info";
        this.text = _text || "default text";
    }
}

export default {
    alerts: [],

    /**
     * add alert
     * @param {object} alert 
     * @param {string} [alert.type=info] 
     * @param {string} alert.text text of alert 
     */
    addAlert(alert) {
        this.alerts.push(new Alert(alert.type, alert.text));
        // setTimeout(() => { this.alerts = [] }, 3000)
    },

    removeAlert(alert) {
        this.alerts.splice(this.alerts.indexOf(alert), 1);
    }
}