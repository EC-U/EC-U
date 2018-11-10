# _*_ coding:utf-8 _*_
import re


def split(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        source = f.read()
    result = re.split('标题：', source)
    del result[0]
    return result


def info(result):
    for i in result:
        i = i.strip()
    title = []
    url = []
    time = []
    content = []
    for s in result:
        title.append(re.match('(.*)', s).group())
        url.append(re.search('\n网址: (.*).', s).group(1))
        time.append(re.search('\n发表时间: (.*)', s).group(1))
        content.append(re.search('发表时间:.*\n([\s\S]*)', s).group(1))
    return title, url, time, content


if __name__ == '__main__':
    t = split('ecnu_su.txt')
    print(info(t)[3][0])
