const Xendit = require("xendit-node");
const x = new Xendit({
    secretKey: "xnd_development_P4qDfOss0OCpl8RtKrROHjaQYNCk9dN5lSfk+R1l9Wbe+rSiCwZ3jw=="
});

const { Invoice } = x;
const invoice = new Invoice({});

class XenditInvoice {
    static createInvoice(externalID, amount, customer) {
        return invoice.createInvoice({
        externalID: externalID,
        amount,
        successRedirectURL: "http://localhost:3000/xendit/success",
        payerEmail: customer.email,
        });
    }
    static expireInvoice(invoiceID) {
        return invoice.expireInvoice({ invoiceID })
    }
    static getInvoice(invoiceID) {
        return invoice.getInvoice({ invoiceID })
    }
}
module.exports = XenditInvoice