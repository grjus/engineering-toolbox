from typing import List, Union
from pydantic import BaseModel, validator, EmailStr


class ContactFormPayload(BaseModel):
    message: str
    subject: str
    email: EmailStr

    @validator("message")
    def message_val(cls, message):
        if len(message) > 1000:
            raise ValueError("Message length is limited to 1000 chars")
        return message

    @validator("subject")
    def subject_val(cls, subject):
        if len(subject) > 100:
            raise ValueError("Subject length is limited to 100 chars")
        return subject
