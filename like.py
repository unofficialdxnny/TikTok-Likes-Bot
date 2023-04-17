import time


fifthNum = 1

def clickAndArrow():
    global fifthNum

    element = driver.find_element_by_xpath(f"/html/body/div[2]/div[3]/div[2]/div[1]/div[{fifthNum}]/div/div[2]/div[2]/button[1]")

    element.click()

    element.send_keys(Keys.ARROW_DOWN)

    fifthNum += 1

    
    time.sleep(5)

    clickAndArrow()
    
    fifthNum = fifthNum+1



clickAndArrow()
