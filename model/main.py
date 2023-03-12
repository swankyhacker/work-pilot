from model import get_all_info
import json

file_eml = 'dummy_emails/Application Update.eml'
cmpName, role, status = get_all_info(file_eml)
dictJson = {'company': cmpName, 'role':role, 'status':status}
out_file = open("userdata.json", "w")
json.dump(dictJson, out_file, indent = 6)
out_file.close()