from utils import *
from train import *

def predict_reject(nb, email):
    category_names = {'reject':'reject','not_reject':'not-reject'}
    cod = nb.predict(vectorizer.transform([email]))
    return category_names[encoder.inverse_transform(cod)[0]]

def load_model(sav_file):
  with open(sav_file, 'rb') as f:
    model = pickle.load(f)
    return model

def get_all_info(file_eml):
  ''' Wrapper function for all'''
  id, subj, body, cmpName, role = read_email(file_eml)
  nbModel = load_model('finalized_model.sav')
  status = predict_reject(nbModel, body)
  # print(f"\n\nFrom\t: {id}\nSubject\t: {subj}\nCompany\t: {cmpName}\nRole\t: {role}\nStatus\t: {status}")
  return cmpName, role, status

if __name__=='__main__':
    # file_eml = "/content/Your Jardine Internship Programme application_ Reminder for the Online Assessment (Part A).eml"
    # file_eml = '/content/Application Update.eml'
    file_eml = '/content/Thank you for your interest in a career with us.eml'
    # file_eml = '/content/Millennium Internship Opportunity.eml'
    # file_eml = '/content/Re_ Ethlas Internship (Software Engineering) - Ethlas <hello@ethlas.com> - 2021-11-23 1212.eml'\
    print(get_all_info(file_eml))