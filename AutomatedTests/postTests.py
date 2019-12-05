import requests
import unittest
import json

URL = 'http://127.0.0.1:8000/api'
ALLURL = URL + '/posts'
ONEURL = ALLURL + '/{}'

#Functions necessary for running tests in order 
def suiteFactory(*testcases):

    ln    = lambda f: getattr(tc, f).__code__.co_firstlineno
    lncmp = lambda a, b: ln(a) - ln(b)

    test_suite = unittest.TestSuite()
    for tc in testcases:
        test_suite.addTest(unittest.makeSuite(tc, sortUsing=lncmp))

    return test_suite

def caseFactory():

    from inspect import findsource

    g = globals().copy()

    cases = [
        g[obj] for obj in g
            if obj.startswith("Test")
            and issubclass(g[obj], unittest.TestCase)
    ]

    ordered_cases = sorted(cases, key=lambda f: findsource(f)[1])

    return ordered_cases

#Test suite
class Test_Posts(unittest.TestCase):
	# # @unittest.skip('Skip')('Skip')
	def test_get_all(self):
		re = requests.get(ALLURL)
		content = json.loads(re.content)
		self.assertEqual(re.status_code, 200)
		self.assertTrue(type(content) == type([]))
		self.assertTrue(type(content[0]) == type({}))
	
	## @unittest.skip('Skip')("Skipping to avoid multiple post creation, run only on new regression")
	# # @unittest.skip('Skip')('Skip')
	def test_make_post(self):
		jsonData = {
					'title': 'Automated Test Post', 
					'description' : 'a description',
					'start_date' : '2019-12-03T21:56:38.934Z',
					'end_date' : '2021-01-02T08:00:00.000Z',
					'address' : '010001010110100000001010'
					}
		re = requests.post(ALLURL, data=jsonData)
		self.assertEqual(re.status_code, 200)
		#We will check validity of this test by running next one
	
	# @unittest.skip('Skip')("Skipping for now")
	def test_get_single(self):
		re = requests.get(ALLURL)
		content = json.loads(re.content)
		postCount = len(content)
		lastID = content[postCount - 1]['id']

		re = requests.get(ONEURL.format(lastID))
		self.assertEqual(re.status_code, 200)
		content = json.loads(re.content)
		self.assertEqual(content['title'], 'Automated Test Post')

	def test_update(self):
		#Repeated code every time to get latest post, working on solution
		re = requests.get(ALLURL)
		content = json.loads(re.content)
		postCount = len(content)
		lastID = content[postCount - 1]['id']

		jsonData = {
					'title': 'Updated Automated Test Post', 
					}
		re = requests.put(ONEURL.format(lastID), data=jsonData)
		self.assertEqual(re.status_code, 200)

		re = requests.get(ONEURL.format(lastID))
		self.assertEqual(re.status_code, 200)
		content = json.loads(re.content)
		self.assertEqual(content['title'], 'Updated Automated Test Post')

	# # @unittest.skip('Skip')('Skip')
	def test_delete(self):
		#Repeated code every time to get latest post, working on solution
		re = requests.get(ALLURL)
		content = json.loads(re.content)
		postCount = len(content)
		lastID = content[postCount - 1]['id']

		re = requests.delete(ONEURL.format(lastID))
		self.assertEqual(re.status_code, 200)


if __name__ == '__main__':
	cases = suiteFactory(*caseFactory())
	runner = unittest.TextTestRunner(verbosity=2)
	runner.run(cases)