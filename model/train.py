import numpy as np
import pandas as pd 
import pickle
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.feature_extraction.text import TfidfVectorizer, TfidfTransformer
from sklearn.preprocessing import LabelEncoder
from sklearn.naive_bayes import MultinomialNB
from sklearn.model_selection import train_test_split
from sklearn.metrics import confusion_matrix
from sklearn.metrics import classification_report
from sklearn.model_selection import cross_val_score
import string
import matplotlib.pyplot as plt


df = pd.read_csv('Rejection Data - Sheet1.csv')

df.Email = df.Email.apply(lambda x: x.lower())
df.Email = df.Email.apply(lambda x: x.translate(str.maketrans('','', string.punctuation)))
df.Email = df.Email.apply(lambda x: x.translate(str.maketrans('','','1234567890')))
df.Email = df.Email.apply(lambda x: x.translate(str.maketrans('','','\n')))

# pull data into vectors to create collection of text/tokens
vectorizer = CountVectorizer()
x = vectorizer.fit_transform(df.Email)

encoder = LabelEncoder()
y = encoder.fit_transform(df.Status)

# split into train and test sets
x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.2)

# Shape of sets
print(f'X-Train shape:{x_train.shape}')
print(f'Y-Train shape:{y_train.shape}')
print(f'X-Test shape:{x_test.shape}')
print(f'Y-Test shape:{y_test.shape}')

nb = MultinomialNB()
nb.fit(x_train, y_train)

from sklearn.linear_model import LogisticRegression
from sklearn.multiclass import OneVsRestClassifier

# Init the classfifier
clf = OneVsRestClassifier(LogisticRegression())

# Fit classifier to training data
clf.fit(x_train, y_train)

# Print accuracy
print(f'Accuracy: {clf.score(x_test, y_test)}')

x_test_clv_pred = clf.predict(x_test)
confusion_matrix(y_test, x_test_clv_pred)
print(classification_report(y_test, x_test_clv_pred, target_names=encoder.classes_))

# save the model to disk
filename = 'finalized_model.sav'
pickle.dump(nb, open(filename, 'wb'))

