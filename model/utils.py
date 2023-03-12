import os
import email
import spacy

def read_email(eml_file):
  ''' Read .eml files 
  Input: Path to eml file
  Output: sender_id, subject, text body, company name, role name 
  '''
  with open(eml_file, "rb") as f:
    msg = email.message_from_binary_file(f)

  if msg.is_multipart():
      for part in msg.walk():
          if part.get_content_type() == "text/plain":
              # body = part.get_payload(decode=True).decode('utf-8')
              body = part.get_payload(decode=True).decode('cp1252')
  else:
      # body = msg.get_payload(decode=True).decode("utf-8")
      body = msg.get_payload(decode=True).decode('cp1252')
      
  cmpName = get_company_name_from_email_txt(body)

  roleName1 = get_role_name_from_txt(body)
  roleName2 = get_role_name_from_txt(msg['Subject'])

  if cmpName is not None:
    if roleName1 is not None:
      return msg['From'].split('<',1)[1].split('>')[0], msg['Subject'], body, cmpName, roleName1
    if roleName2 is not None:
      return msg['From'].split('<',1)[1].split('>')[0], msg['Subject'], body, cmpName, roleName2
    else:
      return msg['From'].split('<',1)[1].split('>')[0], msg['Subject'], body, cmpName, None

  else:
    if roleName1 is not None:
      return msg['From'].split('<',1)[1].split('>')[0], msg['Subject'], body, None, roleName1
    if roleName2 is not None:
      return msg['From'].split('<',1)[1].split('>')[0], msg['Subject'], body, None, roleName2
    else:
      return msg['From'].split('<',1)[1].split('>')[0], msg['Subject'], body, None, None

    
def get_role_name_from_txt(txt):
  nlp = spacy.load('en_core_web_sm')
  doc = nlp(txt)
  role = None
  for ent in doc.ents:
      # print(ent.label_,":", ent.text)
      if ent.label_ == 'JOB_ROLE' or ent.label_== 'POSITION' or ent.label_== 'TITLE' or \
      ent.label_== 'ROLE' or ent.label_ == "OCCUPATION" or ent.label_ == "ROLE_NAME" or ent.label_ == "EMPLOYMENT_TYPE" \
      or ent.label_=='JOB_CATEGORY' or ent.label_=='JOB_FUNCTION' or ent.label_=='JOB_LEVEL':
          
          role = ent.text
          break

  if role is not None:
    return role
    
  return None


def get_company_name_from_emailID(email):
  ''' Apply NER to extract organization entities'''
  if 'myworkday' in email:
    n = email.split('@myworkday',1)[0]
    return n
  elif 'workdayadmin' in email:
    n = email.split("workdayadmin@",1)[1].split('.').split('careeers')[0]
    return n
  else:
    nlp = spacy.load('en_core_web_sm')
    doc = nlp(email)
    company_name = None
    for ent in doc.ents:
        if ent.label_ == 'ORG':
            company_name = ent.text
            break
    if company_name is not None:
      return company_name


def get_company_name_from_email_txt(txt):
  nlp = spacy.load('en_core_web_sm')
  doc = nlp(txt)
  company_name = None
  for ent in doc.ents:
      if ent.label_ == 'ORG':
          company_name = ent.text
          break
  if company_name is not None:
    return company_name
  return None
