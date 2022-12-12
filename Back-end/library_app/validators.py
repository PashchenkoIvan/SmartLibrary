from rest_framework import status
from rest_framework.exceptions import ValidationError


def status_validator(book_status, visitor):
    if book_status in ("R", "B"):
        if visitor is not None:
            return True
        raise ValidationError({
            "error": f'When the status is {"Reading" if book_status == "R" else "Booked"} the user must be specified'}, 
                            code=status.HTTP_400_BAD_REQUEST)