from src.contact.contact import send_email


class Contact:
    def __init__(self, payload):
        self.payload = payload.dict()
        self.message = self.payload["message"]
        self.email = self.payload["email"]
        self.subject = self.payload["subject"]

    def send(self):
        return send_email(self.message, self.email, self.subject)