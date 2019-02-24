from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from PIL import Image
import time
from io import BytesIO
from lxml import etree



class KXB(object):
    def __init__(self,id,password):
        self.url = "https://portal1.ecnu.edu.cn/cas/login?service=http%3A%2F%2Fportal.ecnu.edu.cn%2Fneusoftcas.jsp"
        self.browser = webdriver.Chrome()
        self.wait = WebDriverWait(self.browser, 20)
        self.id = id
        self.password = password

    def open(self):
        """
        打开网页输入用户名密码
        :return None
        """

        self.browser.get(self.url)
        ID = self.wait.until(EC.presence_of_element_located((By.ID, "un")))
        password = self.wait.until(EC.presence_of_element_located((By.ID, "pd")))
        ID.send_keys(self.id)
        password.send_keys(self.password)
        self.code = self.browser.find_element_by_xpath('//*[@id="code"]')
        self.passIt = self.browser.find_element_by_xpath('//*[@id="index_login_btn"]/input')




    def get_screenshot(self):
        """
        获取网页截图
        ：return:截图对象
        """

        screenshot = self.browser.get_screenshot_as_png()
        screenshot = Image.open(BytesIO(screenshot))
        return screenshot

    def get_touclick_image(self, name='captcha.png'):
        """
        获取验证码图片
        ：return:图片对象
        """

        top, bottom, left, right = self.get_position()
        print('验证码位置', top, bottom, left, right)
        screenshot = self.get_screenshot()
        captcha = screenshot.crop((left, top, right, bottom))
        return captcha

    def get_position(self):
        """
        获取验证码位置
        :return:验证码位置元组
        """
        element = self.get_touclick_element()
        time.sleep(2)
        location=element.location
        size=element.size
        top,bottom,left,right=location['y'],location['y']+size["height"],location['x'],location['x']+size['width']
        return (top+300,bottom,600+left,500+right)

    def get_touclick_element(self):
        """
        获取验证码图片
        :return:图片对象
        """
        picture = self.wait.until(EC.presence_of_element_located((By.CLASS_NAME,"content_login_box")))
        return picture

    def getpass(self):
        imagecode = input("请输入：")
        self.code.send_keys(imagecode)
        self.passIt.click()

    def gothrough(self):
        self.browser.get("http://applicationnewjw.ecnu.edu.cn/eams/home.action")

        wdxx=self.wait.until(EC.presence_of_element_located((By.XPATH,"//*[@id='MLeft']/div/ul/li[2]/a/div")))
        wdxx.click()

        wdkb = self.wait.until(EC.presence_of_element_located((By.XPATH, "//*[@id='MLeft']/div/table[2]/tbody/tr[3]/td[1]/div[2]/a")))
        wdkb.click()

        wenzi=self.wait.until(EC.presence_of_element_located((By.XPATH,"//*[@id='manualArrangeCourseTable']")))
        #print(wenzi.text)
        with open("source.txt", "w",encoding="utf-8") as f:
            f.write(self.browser.page_source)

    '''def get_txt(self):
        page_source = self.gothrough()
        html = etree.HTML(page_source)
        result = etree.tostring(html).decode('utf-8')
        with open("source.txt","w") as f:
            f.write(result)
    '''














if __name__ == '__main__':
    id=input("请输入你的id")
    password=input("请输入你的密码")
    mykxb = KXB(id,password)
    mykxb.open()
    mykxb.get_touclick_image().show()
    mykxb.getpass()

    mykxb.gothrough()



