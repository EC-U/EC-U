import wechatsogou
import time
gzh_info=[]
wechats=wechatsogou.WechatSogouAPI ()
for iter_page in range(10):
    gzh_info_1 = wechats.search_gzh("华东师范大学",page=iter_page+1)
    time.sleep(60)
    gzh_info_2 = wechats.search_gzh("ecnu",page=iter_page+1)
    gzh_info.extend(gzh_info_1 + gzh_info_2)
    if iter_page != 9:
        time.sleep(120)
"""
:return:a list which contains dictionary 
the dictionary contains:
such as:
'open_id': 'oIWsFtyyo-F6eOtoOnFINEQNkF3s',
  'profile_url': 'http://mp.weixin.qq.com/profile?src=3&timestamp=1551271399&ver=1&signature=iE9bsszMvPh10jww3n*X-taOHqA2w4GkMeTwkGxv4UfxXdHDNpznQ8F88iunKrTASuE7RPpL40vXycVT75u0TA==',
  'headimage': '//img01.sogoucdn.com/app/a/100520090/oIWsFtyyo-F6eOtoOnFINEQNkF3s',
  'wechat_name': '华东师范大学',
  'wechat_id': 'ECNUers',
  'qrcode': 'http://mp.weixin.qq.com/rr?src=3&timestamp=1551271399&ver=1&signature=L2845b-rWRZzkQ6xK-NQTOI6Gzvf90SBfdunGSUBwvuDOvgdlVzV7Eyfz9u-quwTqwNyUXHesjOfOQL7WM1*WRN91vDnZBEs9bAVWMgJViA=',
  'introduction': '欢迎关注华东师范大学校方微信公众平台.在这里,我们向您推送全球ECNUer的观点和体验,讲述你我共同的华东师大故事.',
  'authentication': '华东师范大学',
  'post_perm': 10,
  'view_perm': 24137 
"""
with open('gzh_info.txt', 'a+', encoding="utf-8" ) as fp:
    fp.write(str(gzh_info))