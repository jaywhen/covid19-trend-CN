import os
from dotenv import load_dotenv
load_dotenv(verbose=True)

HOST = os.getenv('HOST')
USER = os.getenv('PRO_USER')
PASSWORD = os.getenv('PASSWORD')
DB = os.getenv('DB')


