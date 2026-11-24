# tells the count of the unique letters in the sentence

seen = "" 
s = 'abcadddde'
for i in s:
  if i in seen:
    continue
  else :
    seen += i

  print(len(seen))
