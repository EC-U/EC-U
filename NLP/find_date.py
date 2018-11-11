import re
from spilt_from_file import split,info

t = split('ecnu_su.txt')
old = info(t)[3]
new = []
pattern_date = r'((\d{4}|\d{2})(-|/|.)\d{1,2}\3\d{1,2})|(\d{4}年\d{1,2}月\d{1,2}日)|(\d{1,2}月\d{1,2}日)|(\d{1,2}日)'
#pattern_date = re.compile(pattern_date)
pattern_time = '(([0-1]?[0-9])|([2][0-3])):([0-5]?[0-9])(:([0-5]?[0-9]))?|([1-24]\d时[0-60]\d分)|([1-24]\d时)'
pattern_time = pattern_time
#pattern_time = re.compile(pattern_time)
pattern_chn = '活动时间(.*)'
for i in old:
    x = re.search(pattern_chn,i)
    #print(d)
    #print(t)
    if x:
        d = re.search(pattern_date,i)
        t = re.search(pattern_time,i)
        print(d.group()+t.group())
