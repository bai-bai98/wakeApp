import numpy as np
import cv2


face_cascade = cv2.CascadeClassifier('./haarcascade_frontalface_default.xml')
eye_cascade = cv2.CascadeClassifier('./haarcascade_eye_tree_eyeglasses.xml')

try:
    img = cv2.imread('./images/myFile.png')
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    faces = face_cascade.detectMultiScale(gray, 1.3, 5)
    if(len(faces) == 1):
        for (x,y,w,h) in faces:
            roi_gray = gray[y:y+h, x:x+w]
            roi_color = img[y:y+h, x:x+w]
            eyes = eye_cascade.detectMultiScale(roi_gray)
            if(len(eyes) > 0):
                print(1)
            else:
                print(0)
    else:
        print(0)
except:
    print(-1)
    

