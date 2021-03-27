import os
import smtplib
from email.mime.text import MIMEText


def send_email(message, contact, subject):
    '''
    Sends email message to mail account
    '''

    USER = os.environ.get("WEB_APP_MAIL")
    PASSWORD = os.environ.get("WEB_APP_MAIL_PASS")

    msg = MIMEText(message)
    msg["Subject"] = f"EngineeringToolbox-{subject}"
    msg["From"] = USER
    msg["To"] = contact

    try:
        server = smtplib.SMTP_SSL("smtp.gmail.com", 465)
        server.ehlo()
        server.login(USER, PASSWORD)
        server.sendmail(contact, USER, msg.as_string())
        server.close()
        return True
    except Exception as e:
        raise e
