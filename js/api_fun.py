import random
import string

x = 1

while x <= 1000:
    
    letters = string.ascii_letters
    ran = ''.join(random.choice(letters) for i in range(7))
    template_text = "function getApiKey" + str(x) + "() {console.log(\"AIzaSy12B" + str(ran) + "\");}"
    x += 1
    print(template_text)