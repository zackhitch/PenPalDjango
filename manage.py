#!/usr/bin/env python
import os
import sys

if __name__ == "__main__":
<<<<<<< HEAD
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "djorg.settings")
=======
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "PenPalDjango.settings")
>>>>>>> a3bfc7dec52e6c975cc499a01cb316bbec0702e2
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)
