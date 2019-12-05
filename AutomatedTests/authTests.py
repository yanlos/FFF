import unittest2
import requests
import json

class TestAuth(unittest2.TestCase):
	
	@unittest2.skip("Don't want to be registering again and again")
	def test_registration(self):
		#Tests Registration of a new user to the server, saves token
		sampleData = {'name' : 'automatedTestUser', 'email' : 'automatedTestUser@sjsu.edu', 'password' : 'someThing'}
		res = requests.post('http://127.0.0.1:8000/api/auth/register', data=sampleData)
		self.assertEqual(res.status_code, 200)

		header = res.headers
		token = json.loads(res.content)['token']

		#Check for login
		header['Authorization'] = "Bearer {}".format(token)
		res = requests.get('http://127.0.0.1:8000/api/auth/me', headers=header)
		self.assertEqual(res.status_code, 200)
	
	@unittest2.skip("Skipping for now")
	def test_login(self): 
		#Tests Login functionality
		sampleData = {'email' : 'automatedTestUser@sjsu.edu', 'password' : 'someThing'}
		res = requests.post('http://127.0.0.1:8000/api/auth/login', data=sampleData)
		header = res.headers
		
		self.assertEqual(res.status_code, 200)

		token = json.loads(res.content)['token']
		header['Authorization'] = "Bearer {}".format(token)

		res = requests.get('http://127.0.0.1:8000/api/auth/me', headers=header)
		self.assertEqual(res.status_code, 200)

	
	def test_user(self):
		#Login as a user and assert all attributes are equal
		USERNAME = "automatedTestUser"
		EMAIL = "automatedTestUser@sjsu.edu"
		sampleData = {'email' : EMAIL, 'password' : 'someThing'}
		res = requests.post('http://127.0.0.1:8000/api/auth/login', data=sampleData)
		header = res.headers

		token = json.loads(res.content)['token']
		self.assertEqual(res.status_code, 200)

		header['Authorization'] = "Bearer {}".format(token)
		res = requests.get('http://127.0.0.1:8000/api/auth/me', headers=header)
		returnedData = json.loads(res.content)['user']

		self.assertEqual(returnedData['name'], USERNAME)
		self.assertEqual(returnedData['email'], EMAIL)

	def test_logout(self):
		sampleData = {'email' : 'automatedTestUser@sjsu.edu', 'password' : 'someThing'}
		res = requests.post('http://127.0.0.1:8000/api/auth/login', data=sampleData)
		header = res.headers

		token = json.loads(res.content)['token']
		self.assertEqual(res.status_code, 200)

		header['Authorization'] = "Bearer {}".format(token)
		res = requests.get('http://127.0.0.1:8000/api/auth/logout', headers=header)
		self.assertEqual(res.status_code, 200)

		self.assertEqual(json.loads(res.content)['message'], "Successfully logged out")

if __name__ == '__main__':
	unittest2.main()