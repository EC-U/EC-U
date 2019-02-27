import wechatsogou
import time
import os

wechats=wechatsogou.WechatSogouAPI ()
with open('gzh_info.txt','r') as fp:
    gzh_info = eval(fp.read())
for gzh in gzh_info:
     with open("gzh_id.txt",'a+') as fp:
        fp.write(gzh['wechat_id']+" ")


with open("gzh_id.txt","r") as fp:
    gzh_ids = fp.read().split()

for id in gzh_ids:
    history_info= wechats.get_gzh_article_by_history(id)
    gzh_name = history_info['gzh']['wechat_name']
    articles = history_info['article'] #这是一个列表，包含了每篇文章的信息
    os.mkdir(gzh_name)
    for article in articles:
            try:
                time.sleep(120)
                article_content = wechats.get_article_content(article['content_url'])
            except:
                pass
            html = article_content['content_html']
            img = article_content['content_img_list']
            title = article['title'].replace("|","")
            try:
                os.mkdir("./"+ gzh_name +'/'+ title )
            except:
                pass
            with open("./" + gzh_name + "/" + title + "/" + "html.txt","w",encoding="utf-8") as fp:
                fp.write(html)
            with open("./" + gzh_name + "/" + title + "/" + "img.txt","w",encoding="utf-8") as fp:
                fp.write(str(img))





