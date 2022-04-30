#!/usr/bin/env python3

import requests

def testUrl(id_test):
    url = "https://arthurtakase.github.io/CodingClub/GagnantGagnant/terminal/" + id_test + ".html"
    r = requests.get(url)
    if r.status_code == 200:
        return True
    return False

def bruteForce():
    # Votre code ici
    return 0

bruteForce()