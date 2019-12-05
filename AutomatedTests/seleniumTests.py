from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time
import unittest
import requests


class FFFTests(unittest.TestCase):
	def setUp(self):
		self.driver = webdriver.Chrome(executable_path='/Users/bhavdeep/Downloads/chromedriver')

	
	def test_register(self):
		#Creates user through UI, logs in through API request to verify
		driver = self.driver
		driver.get("http://localhost:3000")
		#Find and make sure register button exists, if so, click
		reg_button = driver.find_element_by_xpath('/html/body/div/div/div[2]/div/div/div[3]/button')
		self.assertTrue(reg_button != None)
		reg_button.click()
		#Find email input field, if exists, add email
		email_input = driver.find_element_by_xpath('/html/body/div[2]/div[3]/div/div[1]/div[1]/div/input')
		self.assertTrue(email_input != None)
		email_input.send_keys("seleniumTester@sjsu.edu")
		#Same as email for username field
		name_input = driver.find_element_by_xpath('/html/body/div[2]/div[3]/div/div[1]/div[2]/div/input')
		self.assertTrue(name_input != None)
		name_input.send_keys("seleniumTester")
		#Same as username and email for Password field
		password_input = driver.find_element_by_xpath('/html/body/div[2]/div[3]/div/div[1]/div[3]/div/input')
		self.assertTrue(password_input != None)
		password_input.send_keys("T3st")
		#Sleep so that tester can verify fields in 2 seconds
		time.sleep(2)
		#Find and click submit button, escape to quit popup
		submit_button = driver.find_element_by_xpath('/html/body/div[2]/div[3]/div/div[2]/button')
		self.assertTrue(submit_button != None)
		submit_button.click()
		submit_button.send_keys(Keys.ESCAPE)
		#Close window since not required
		driver.close()

		#Log in through API to check for user creation since UI won't let us know
		data = {"email" : "seleniumTester@sjsu.edu", "password": "T3st"}
		header = {"Content-Type" : "application/json"}
		re = requests.post('http://127.0.0.1:8000/api/auth/login', data=data)
		self.assertEqual(re.status_code, 200)

	def test_posts(self):
		driver = self.driver
		driver.get("http://localhost:3000")
		#Find and make sure "Make A Post Button" exists, if so, click it
		make_button = driver.find_element_by_xpath('/html/body/div/div/div[2]/div/div/div[2]/button')
		self.assertTrue(make_button != None)
		make_button.click()

		#Find and input the resteraunt
		resteraunt_input = driver.find_element_by_xpath('/html/body/div[2]/div[3]/div/div[1]/div[1]/div/input')
		self.assertTrue(resteraunt_input != None)
		resteraunt = "Automated resteraunt"
		resteraunt_input.send_keys(resteraunt)

		#Find and input the location
		location_input = driver.find_element_by_xpath('/html/body/div[2]/div[3]/div/div[1]/div[2]/div/input')
		self.assertTrue(location_input != None)
		location = "Automated Location"
		location_input.send_keys(location)

		#Find and edit end date, skipping start date for brevity
		end_date = driver.find_element_by_xpath('/html/body/div[2]/div[3]/div/div[1]/div[3]/div[2]/div/input')
		self.assertTrue(end_date != None)
		#Must remove prewritten value before adding our custom one
		for i in range(8):
			end_date.send_keys(Keys.BACKSPACE)
		end_date.send_keys("01022021")
		
		#Find and input the deal
		deal_input = driver.find_element_by_xpath('/html/body/div[2]/div[3]/div/div[1]/div[4]/div/textarea')
		self.assertTrue(deal_input != None)
		deal = "Automated Testing Deal, 10'%' off Selenium Pro"
		deal_input.send_keys(deal)

		#Find and click submit button
		submit_button = driver.find_element_by_xpath('/html/body/div[2]/div[3]/div/div[2]/button')
		self.assertTrue(submit_button != None)		
		
		#sleep to verify input 
		time.sleep(2) 
		
		submit_button.click()
		submit_button.send_keys(Keys.ESCAPE)

		driver.refresh()
		time.sleep(1)
		card_resteraunt = driver.find_element_by_xpath('/html/body/div/div/div[1]/div/div/ul/div[1]/div[1]/p[2]')
		self.assertEqual(card_resteraunt.text, resteraunt)

		card_deal = driver.find_element_by_xpath('/html/body/div/div/div[1]/div/div/ul/div[1]/div[1]/h2')
		self.assertEqual(card_deal.text, deal)

		driver.close()

if __name__ == "__main__":
	unittest.main()
