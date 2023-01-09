import keras.models
import numpy as np
import cv2
import sys
import warnings
warnings.filterwarnings("ignore")

#f = open(r"C:\Users\GuestAccount\PycharmProjects\pythonProject1")
#f.close()
#model = pickle.load(open(r"C:\Users\GuestAccount\Downloads\drowsiness_model.pkl", 'r+b'))
#model = keras.models.load_model(r"C:\Users\GuestAccount\Downloads\my_modelh5\content\my_model.h5")
face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')
eye_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_eye.xml')

def plot_predict(img_path, model_path='my_model.h5'):
  img=cv2.imread(img_path)
  model = keras.models.load_model(model_path)
  img_gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
  faces = face_cascade.detectMultiScale(img_gray, 1.2, 5)
  eye_imgs = []
  for (x,y,w,h) in faces:
          #cv2.rectangle(img,(x,y),(x+w,y+h),(255,0,0),2)
          roi_gray = img_gray[y:y+h, x:x+w]
          eyes = eye_cascade.detectMultiScale(roi_gray)
          #print(len(eyes))
          for i, (ex, ey, ew, eh) in enumerate(eyes):
            crop_img = roi_gray[ey: ey + eh + 10, ex: ex + ew + 10]
            eye_imgs.append(crop_img)
            # The commented line below saves the eyes to a file
            #cv2.imwrite('/content/eye' + str(count) + '.jpg', crop_img)
            if i == 1:
              break
                #cv2.rectangle(roi_color, (ex, ey), (ex + ew, ey + eh), (0, 255, 0), 2)
  if eye_imgs == []:
    #print('no eyes found, predict 0')
    return 0
  else:
    preds = np.array([])
    for crop_img in eye_imgs:
      image_array = np.array(crop_img)
      image_array_resized = cv2.resize(image_array, dsize=(50,50))
      if image_array_resized.mean() < 50:
        #print('dark eyes')
        image_array_resized+=50
        image_array_resized = np.clip(image_array_resized, 0, 255)
      elif image_array_resized.mean() > 200:
        #print('bright eyes')
        image_array_resized-=50
        image_array_resized = np.clip(image_array_resized, 0, 255)
      #print(np.around(model.predict((image_array_resized+50).reshape(-1, 50, 50, 1)), decimals=3)[0][0])
      preds = np.append(preds, np.around(model.predict((image_array_resized+50).reshape(-1, 50, 50, 1)), decimals=3)[0][0])
      #cv2_imshow(image_array_resized.astype(int))
    idx = np.argmax(np.abs(preds - 0.5))
    best_pred = preds[idx]
    #print(f'final pred = {best_pred}')
    return best_pred

#r"C:\Users\GuestAccount\Downloads\pic2.jpg"
#r"C:\Users\GuestAccount\Downloads\my_modelh5\content\my_model.h5"

print(plot_predict(sys.argv[1], sys.argv[2]))